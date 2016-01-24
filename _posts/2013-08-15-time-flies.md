---
title: Time Flies
layout: post
summary: Thoughts about how quickly times passes. Oh yeah, and a quickie on making an analog clock with HTML+CSS+Javascript :)
image: "/img/time_flies.png"
category: "coding"
tags:
- coding
- html
- javascript
- css
- analog clock
- codepen
- capelo
---

Times passes quickly indeed: Just about 3 years ago I was a young Civil Engineer and I was one of the "few" that indeed had a job with proper conditions. Still, I wasn't satisfied with what I was doing and didn't feel that I belonged at all. Now I'm on my senior year of Informatics Engineering and have just started working on a great company. Got a lot of studying to do, and a lot to catch up, but I'm really happy! :)

The week before I started working, I was thinking about this and decided to make a clock based on HTML+CSS+JavaScript from scratch, just to kill some free time.

I found that it's pretty simple. Mainly you need: 

* a `<div>` with the clock face as a background
* a `<div>` for each clock hand, with the proper **div id**
* on each clock hand div, an `<img>` with each hand image
* include **moment.js** and **jquery** libraries to help you out ;)

For those who figured it out already, you can jump to the <a href="#pen">**pen**</a> on the bottom.

Basically I created an **updateTime()** function, which asks for a moment.js instance, with a format that I specified. Then I call a **rotateHands()** function, and set a timeout of 1 second for it. The **rotateHands()** function receives the number of seconds, minutes and hours as arguments. They're passed as a string, but as I start to make some quick arithmetics with them, they're converted to Numbers. So, I simply calculate the number of degrees each of the hands has to be rotated in order to represent the actual time:

	var degSec = 360/60*sec;
	var degMin = 360/60*min;
	var degHour = 360/12*hour;

Then, use the **.css()** jQuery method, to apply the transformation (Note: this only works on CSS3). 
The tricky part is figure out how we're going to define the transformations, regarding that we need to pass the syntax alternatives to each of the supporting browsers. So, we have to pass an object containing all three possibilities and don't forget to include the variables calculated before, for example:

	var sHand = $('#secondhand');
	sHand.css({
	    "-webkit-transform": "rotate(" + degSec + "deg)",
	    "-moz-transform": "rotate(" + degSec + "deg)",
	    "transform": "rotate(" + degSec + "deg)" 
	});

You can see the final result on the **pen** bellow, play with it, fork it, ,etc. This CodePen stuff is really fun :)
<a name="pen"></a>
<p data-height="473" data-theme-id="661" data-slug-hash="fpvDC" data-user="capelo" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/capelo/pen/fpvDC'>Analog Clock</a> by António Capelo (<a href='http://codepen.io/capelo'>@capelo</a>) on <a href='http://codepen.io'>CodePen</a></p>
<script async src="http://codepen.io/assets/embed/ei.js"></script>

Now that I think about it, I guess that one nice feature would be adding a shadow to the clock hands. It's just a matter of re-calculating it's properties on each call. I'll work on that :)

See ya soon!

*A. Capelo*