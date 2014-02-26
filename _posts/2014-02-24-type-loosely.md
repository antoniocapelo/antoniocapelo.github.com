---
title: Type loosely
layout: post
summary: New stuff, film roll developed + AngularJS directive 
image: "/img/typewrite.png"
categories: 
- coding
- analog
tags:
- coding
- angularjs
- 35mm
- analog
---

This is a double post: AngularJS + Analog stuff, here we go!

##AngularJS 'Typewrite' Directive

When I first made my [personal website](http://www.antoniocapelo.com) (soon to be updated), I made a quick function on JS to replicate the effect of typing on a text editor, i.e. letters appearing on screen one at a time, with a cursor blinking in front of the last letter written. I was never satisfied with it and now that I'm planning to refactor the whole site, I decided to implement it as an AngularJS directive. As it is quite simple, I thought it would be nice to explain the main steps.

I chose to create an *attribute type* directive (restrict: 'A') since it lets use use the directive together with any HTML element we want. 
This directive was named **typewrite**, and these are the main steps.

###Most important: Pass the desired text

As expected, passing the desired text was done by setting up a directive attribute `text`, that the directive would use for the processing.
Something like:

	<p typewriter text="some text here."></p>

###Adding each character one at a time

According to the Angular documentation, the DOM manipulation should be done on the *link* function of the directive. So, on a first approach, the link function would look like:

	function linkFunction (scope, iElement, iAttrs) {
		if (iAttrs.text) {
			iElement.html(iAttrs.text);
		}
	}

The effect of adding one character at a time was done by defining a function that receives the element, current character index and the full text to add as arguments. That function would then add the next character, join the cursor symbol, increment the index and call itself after the timeout defined, some sort of:

	function updateIt(element, i, text){
		if (i <= text.length) {
			element.html(text.substring(0, i) + cursor);
			i++;
			timer = $timeout(function() {
				updateIt(iElement, i, text);
			}, typeDelay);
			return;
		}
	}

Note that I'm using the Angular' `$timeout` function, as I should, but couldn't find a way to pass parameters to the **updateIt** function without using an anonymous function (on the classic `window.setTimeout` we can pass the function's arguments as extra parameters to the setTimeout).

###Blinking the cursor on typing end

This one was pretty easy and depends on the 'else' of the previous function, i.e. when the typing of the word is over. The blinking effect could be done by Javascript, but that would create an 'never-ending' loop adding and removing the cursor. So, the best way is to accomplish that by CSS: adding a class to the cursor and make the blinking effect with an **animation**:

	/* Blinking animation */
	@keyframes blink-it {
	 	0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	/* Blinking class */

	.blink {
		animation: blink-it steps(1) 1s infinite;
	}

The rest of the code, which you can find on my [GitHub repo](https://github.com/antoniocapelo/AngularJS-Typewrite) adds the extra configuration capacities of the directive (setting typing speeds, blinking delays, utility functions, etc).

I made the following [Codepen demo](http://codepen.io/capelo/pen/Bmbgn) to demonstrate it, and also embedded it below (be sure to reload it if you want to see it all). 


<p data-height="652" data-theme-id="661" data-slug-hash="Bmbgn" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/capelo/pen/Bmbgn'>AngularJS 'Typewriter' Directive</a> by António Capelo (<a href='http://codepen.io/capelo'>@capelo</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

##Analog stuff
I developed an expired color roll (Agfa Vista 100) to test a nice [Yashica T2](http://camerapedia.wikia.com/wiki/Yashica_T2) compact camera from [O Sítio do Cano Amarelo](http://www.sitiodocanoamarelo.com/), and these were the results:


<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img275.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img275.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img281.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img281.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img282.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img282.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img283.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img283.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img294.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img294.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img295.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img295.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img296.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img296.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img303.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img303.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img305.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img305.jpg" /></a>

<a target="_blank" href="http://antoniocapelo.com/img/blogphotos/2014_02_24/img307.jpg"><img src="http://antoniocapelo.com/img/blogphotos/2014_02_24/img307.jpg" /></a>


See you soon,

*A. Capelo*