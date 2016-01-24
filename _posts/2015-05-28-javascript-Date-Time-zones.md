---
title: Javascript Date objects and their default time zone 
layout: post
summary: Quick post about instantiating Date objects on Javascript
image: "/img/times.jpg"
category: 
- coding
tags:
- javascript
- time zone
- utc
- gmt
- antoniocapelo.com
---

I'm writing this as a tip for developers working with javascript Date objects and their somehow strange behaviour regarding time zones.

A couple of days ago I had to work with some date operations and apparently everything was going well. However this detail missed me and it's the following.

When looking at some **Date** [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), we can see that the **Date** Constructor accepts many types of arguments:

 + none (creates a date representing the current time in the system's time zone)
 + Integer representing the number of ms since Unix Epoch
 + year, month, day, hour, minutes, etc..
 + dateString representing the date itself

And the quirk resides on this ``dateString`` argument. This value should be recognized by the ``Date.parse`` method, in which if you want to indicate what time zone that date belongs to you should do it by specifying the amount of time offset relatively to the Greenwich Mean Time (GMT). I've always thought that if no time zone was provided, the browser would consider the device current time zone.

And that's true. In some extent.

Example:

    new Date('2015-05-27T00:00')
    // browser returns: Wed May 27 2015 01:00:00 GMT+0100 (WEST)

Note that I provided 00:00 as the hour:minute but the browser return 01:00. In this case the browser considered that the time provided is on the **GMT** time zone and then it converted to my time zone (which is one hour ahead of the GMT)

However, let's see what happens when providing the year, month, day, and time explicitely:

    new Date(2015, 04, 27)
    // browser returns: Wed May 27 2015 00:00:00 GMT+0100 (WEST)

Now the browser considered that the date provided is already in the device's current time zone so no conversion is made.

This can lead to some confusion, namely when a certain API is returning to  the client side some date that should be 'time zone agnostic' and the client side might converting it without knowing, given that he had received the *dateString* and not each value individually.

Unfortunately this forces the client side to do one of two things:

 + check if the *dateString* received already has a time zone specified ('2015-05-27T00:00+01:00') and if not, add the current time zone to that string;
 + extract the year / month / day / time from the *dateString* and instantiate the object with each value individually;

None of these is a clean solution as both involve some kind of string parsing. meh.

So to sum it up:

- new Date('2015-05-27T00:00’)
    - As no time zone/offset is provided, the browser considers it **GMT**. Then it converts that date in GMT to the devices’ location.


- new Date(2015, 04, 27)
    - No time zone is provided but with this signature the browser considers the device location so no conversion is made.

Hope this helps some Frontend Dev's struggling with Dates and time zones, or at least serve as a reminder for myself :)

See ya soon,
*A. Capelo*
