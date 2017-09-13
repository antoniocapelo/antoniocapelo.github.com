---
title: Lx, linuX and X-mas time
layout: post
summary: How I improved my site availability. Also, I'll share a cool JS functional library and some thoughts on my current linux distro. And some photos taken between a quick trip to Lisbon and Christmas. 
image: "/img/lisbon.jpg"
category: 
- photography
- coding
tags:
- x100
- elementary os
- unix
- antoniocapelo.com
---

In this post I'll talk about How I made a small (but significant) improvement on my [site availability](#service). Also, I'll share a [cool JS functional library](#ramda) I got to know and some thoughts on my [current linux distro](#linux). As usual, [some photos](#photos), these were taken between a quick trip to Lisbon and Christmas with my Fuji X-100.


<div id="service"></div>
## Improving my site availability - Linux Service

As I mentioned on my ['Work the Flow' post](http://blog.antoniocapelo.com/coding/webdevelopment/2014/11/01/work%20the%20flow/), I'm hosting my personal website on a Digital Ocean droplet, serving it with a nodeJS server. On that post I said that I just needed to run ``npm start`` for the server to start up. However, that seemed to be a weak solution against some hardware problems, such as the droplet re-booting due to Digital Ocean's own migration process or other issues. 

Clearly the best solution is to include the start of my nodeJS server on the machine boot. So (not being a Linux Pro by any means) I discovered that ubuntu comes packed with [upstart](http://upstart.ubuntu.com/), which is is responsible for starting tasks and services during boot, stopping them during shutdown and supervising them while the system is running.

So I ended up with a small ``.conf`` file which defines a service meant to control my server:

<script src="https://gist.github.com/antoniocapelo/6a82190b9d57764b5abe.js"></script>

Not only this config starts up automatically my server in case of a droplet re-boot, but it let's me start it, stop it and check its status more easily:

	status node-antoniocapelo-site
	start node-antoniocapelo-site
	stop node-antoniocapelo-site

which is the same as

	initctl status node-antoniocapelo-site
	initctl start node-antoniocapelo-site
	initctl stop node-antoniocapelo-site

<div id="ramda"></div>
## Ramda

Ramda is a functional library for javascript programmers, used on the [Frontend Master's 'Hardcore Functional Programming in JavaScript' course](https://frontendmasters.com/courses/functional-javascript/). I played around with it and its pretty cool - I know there are already some libs meant to do functional stuff with, but this one is referenced as the best in that 'field' - and it's nice to review some of the basic functional programming concepts. For example, a simple **fork** function for making two separate operations and working over their results, with a single input and with 0 auxiliary variables is defined by:

```
// being _ the Ramda library:
var fork = _.curry(function(lastly, f, g, x){
	return lastly(f(x), g(x));
});

// to calculate the average, for example, we just do:
var average = fork(_.divide, _.sum, _.size);
avg([1,2,3,4,5]); // 3 :) 
```

<div id="linux"></div>

## Linux Distro - Elementary OS

Last week I found myself without a personal computer to play/work with (sad, I know). As it's a temporary situation I decided to use an 'old' computer we had laying around by the house. Being a mac user for about 8-9 years it's always frustrating to work with windows environments so I decided to try a new Linux distro and I chose the [Elementary OS](http://elementaryos.org/). 

I must say that I'm impressed. It's relatively quick (even on my HP Pavillion), it has a nice GUI (as a mac user I cherish that) and it's still pretty handy for coding. I'm using it everyday for music (spotify/soundcloud), development (mainly sublime and terminal), browsing and even for gaming.

Of course it has some quirks (it doesn't behave well on sleep/waking up, the sound is somewhat low and sometimes I have to be a little patient with it) but overall it's a nice distro, clean, smart and it's nice to work with.

Bellow there's a list of the main things I needed after a fresh OS install:

* git / node (and its globally needed packages) / ruby / rvm / compass
* sublime text (Spacegray theme and Adobe Source Code Pro font)
* chrome / skype / [birdie](www.birdieapp.eu)
* spotify 
* [clipit](clipit.rspwn.com) - clipboard manager
* GIMP
* Gloobus Preview - for the nice preview feature Mac OSX has
* Elementary Tweaks - for customizing shortcuts and global behaviour/appearance

<div id="photos"></div>

## Photo Stuff

<a href="https://www.flickr.com/photos/acapelo/35280837520/in/photostream" target="_blank" title="DSCF4577_2"><img src="https://farm5.staticflickr.com/4131/35280837520_5586c573b7_b.jpg" alt="DSCF4577_2"></a>

<a href="https://www.flickr.com/photos/acapelo/35668089195/in/photostream" target="_blank" title="DSCF4744"><img src="https://farm5.staticflickr.com/4074/35668089195_ca20c53a5b_b.jpg" alt="DSCF4744"></a>

<a href="https://www.flickr.com/photos/acapelo/35537582751/in/photostream" target="_blank" title="DSCF4729"><img src="https://farm5.staticflickr.com/4089/35537582751_36d1ea6fd8_b.jpg" alt="DSCF4729"></a>

<a href="https://www.flickr.com/photos/acapelo/34858935663/in/photostream" target="_blank" title="DSCF4660"><img src="https://farm5.staticflickr.com/4083/34858935663_bbc0578da8_b.jpg" alt="DSCF4660"></a>

<a href="https://www.flickr.com/photos/acapelo/34826826124/in/photostream" target="_blank" title="DSCF4631"><img src="https://farm5.staticflickr.com/4281/34826826124_000e3b95d5_b.jpg" alt="DSCF4631"></a>

<a href="https://www.flickr.com/photos/acapelo/35280774500/in/photostream" target="_blank" title="DSCF4604"><img src="https://farm5.staticflickr.com/4211/35280774500_5a83bfd316_b.jpg" alt="DSCF4604"></a>

<a href="https://www.flickr.com/photos/acapelo/35537530691/in/photostream" target="_blank" title="DSCF4599"><img src="https://farm5.staticflickr.com/4277/35537530691_0f6ff78cef_b.jpg" alt="DSCF4599"></a>

<a href="https://www.flickr.com/photos/acapelo/35667981595/in/photostream" target="_blank" title="DSCF4571"><img src="https://farm5.staticflickr.com/4024/35667981595_f30ef62eb4_b.jpg" alt="DSCF4571"></a>

<a href="https://www.flickr.com/photos/acapelo/34826752064/in/photostream" target="_blank" title="DSCF4559"><img src="https://farm5.staticflickr.com/4055/34826752064_40982f28d3_b.jpg" alt="DSCF4559"></a>

<a href="https://www.flickr.com/photos/acapelo/35280686090/in/photostream" target="_blank" title="DSCF4498"><img src="https://farm5.staticflickr.com/4108/35280686090_964ee47107_b.jpg" alt="DSCF4498"></a>

<a href="https://www.flickr.com/photos/acapelo/34858858553/in/photostream" target="_blank" title="1"><img src="https://farm5.staticflickr.com/4208/34858858553_d6ece0bdfc_b.jpg" alt="1"></a>
*Was invited to a Heavy Metal concert and manage to get out of there alive*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4914.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4914.JPG?size=1024"></a>
*Code reviewing?*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4951.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4951.JPG?size=1024"></a>

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5033.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5033.JPG?size=1024"></a>
*and then the Blip Christmas Party happened*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5049.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5049.JPG?size=1024"></a>

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5054.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5054.JPG?size=1024"></a>

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5070.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5070.JPG?size=1024"></a>
*Air Guitar'ing*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5252.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5252.JPG?size=1024"></a>
*Still*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5098.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5098.JPG?size=1024"></a>

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5102.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5102.JPG?size=1024"></a>
*Sister's Birthday*

<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5178.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5178.JPG?size=1024"></a>
*Reading about cycling in Europe*

See you soon,
*A. Capelo*