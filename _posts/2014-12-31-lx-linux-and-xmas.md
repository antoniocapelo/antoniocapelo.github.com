---
title: Lx, linuX and X-mas time
layout: post
summary: How I improved my site availability. Also, sharing a cool JS functional library and some thoughts on my current linux distro. Oh, and some photos taken between a quick trip to Lisbon and Christmas. 
image: "/img/lisbon.jpg"
categories: 
- photography
- coding
tags:
- x100
- elementary os
- unix
- antoniocapelo.com
---

In this post I'll talk about How I made some small (but significant) improvements on my site availability. Also, I want to share a cool JS functional library I got to know and some thoughts on my current linux distro. As usual, some photos, these were taken between a quick trip to Lisbon and Christmas with my Fuji X-100.

##Improving my site availability - Linux Service
As I mentioned on my ['Work the Flow' post](http://blog.antoniocapelo.com/coding/webdevelopment/2014/11/01/work%20the%20flow/), I'm hosting my personal website on a Digital Ocean droplet, serving it with a nodeJS server. On that post I said that I just needed to run ``npm start`` for the server to start up. However, that seemed to be a weak solution against some hardware problems, such as the droplet re-booting due to Digital Ocean's own migration process or other issues. 

I decided to include the start of my nodeJS server on the machine boot. So (not being a Linux Pro by any means) I discovered that ubuntu comes packed with [upstart](http://upstart.ubuntu.com/), which is is responsible for starting of tasks and services during boot, stopping them during shutdown and supervising them while the system is running.

So I ended up with a small ``.conf`` file which defines a service meant to control my server:

<script src="https://gist.github.com/antoniocapelo/6a82190b9d57764b5abe.js"></script>

Not only this config starts up automatically my server in case of a droplet re-boot, but it let's me start it, stop it and check its status more easily:

	start node-antoniocapelo-site
	stop node-antoniocapelo-site

which is the same as

	initctl status node-antoniocapelo-site
	initctl reload node-antoniocapelo-site
	initctl start node-antoniocapelo-site # yes, this is the same start

##Ramda

Ramda is a functional library for javascript programmers, used on the [Hardcore Functional Programming in JavaScript](https://frontendmasters.com/courses/functional-javascript/). I played around with it and its pretty cool - I know there are already some libs meant to do functional stuff with, but this one is referenced as the best in that 'field' - and it's nice to review some of the basic functional programming concepts. For example, a simple **fork** function for making two separate operations and working over their results, with a single input and with 0 auxiliary variables is defined by:

	// being _ the Ramda library:
	var fork = _.curry(function(lastly, f, g, x){
		return lastly(f(x), g(x));
	});

	// to calculate the average, for example, we just do:

	var average = fork(_.divide, _.sum, _.size);
	avg([1,2,3,4,5]); // 3 :) 


##Linux Distro - Elementary OS

Last week I found myself withou a personal computer to play/work with (sad, I know). As it's a temporary situation I decided to use an 'old' computer we had laying around by the house. Being a mac user for about 8-9 years it's always frustrating to work with windows environments so I decided to try a new Linux distro and I chose the [Elementary OS](http://elementaryos.org/). 

I must say that I'm impressed. It's relatively quick (even on my HP Pavillion), it has a nice GUI (as a mac user I cherish that) and it's still pretty handy for coding. I'm using it everyday for music (spotify/soundcloud), development (mainly sublime and terminal), browsing and even for gaming.

Of course it has some quirks (it doesn't behave well on sleep/waking up, the sound is somewhat low and sometimes I have to be a little patient with it) but overall it's a nice distro, clean, smart and it's nice to work with.

Bellow there's a list of the main things I installed after a fresh OS install:

* git / node (and its globally needed packages) / ruby / rvm / compass
* sublime text (Spacegray theme and Adobe Source Code Pro font)
* chrome / skype / hotot
* spotify 
* [clipit](clipit.rspwn.com) - clipboard manager
* GIMP
* Gloobus Preview - for the nice preview feature Mac OSX has
* Elementary Tweaks - for customizing shortcuts and global behaviour/appearance


##Photo Stuff

Went to Lisbon
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4495.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4495.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4498.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4498.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4531.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4531.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4533.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4533.JPG?size=1024"></a>
met friends
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4553.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4553.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4557.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4557.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4565.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4565.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4574.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4574.JPG?size=1024"></a>
hills
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4577.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4577.JPG?size=1024"></a>
Heading to Sintra
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4599.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4599.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4631.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4631.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4662.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4662.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4788.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4788.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4795.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4795.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4801.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4801.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4839.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4839.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4840.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4840.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4876.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4876.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4879.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4879.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4881.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4881.JPG?size=1024"></a>
I was invited to a Heavy Metal concert and manage to get out of there alive
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4914.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4914.JPG?size=1024"></a>
code reviewing?
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4951.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF4951.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5033.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5033.JPG?size=1024"></a>
And then the Blip Christmas Party happened
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5049.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5049.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5054.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5054.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5070.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5070.JPG?size=1024"></a>
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5252.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5252.JPG?size=1024"></a>
Air Guitar'ing
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5098.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5098.JPG?size=1024"></a>
Still
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5102.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5102.JPG?size=1024"></a>
Sister's Birthday
<a target="_blank" href="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5178.JPG?size=1024"><img src="https://copy.com/thumbs_public/zN2weeaMVJZ3qMOX/DSCF5178.JPG?size=1024"></a>
Reading about cycling in Europe

See you soon,
*A. Capelo*