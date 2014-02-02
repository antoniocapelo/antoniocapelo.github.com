---
title: A Different Angle
layout: post
summary: Debut post on the AngularJS framework -  Creation of my modal service
image: "/img/angularjs-icon.png"
categories: "coding"
tags:
- angularjs
- coding
- service
- modal
- codepen
- capelo
---

Let's keep this blog runnin'!

Lately I've been feedling with the AngularJS framework, which doesn't need any introductions (if you need some though, this [blog post](http://blog.chartbeat.com/2014/01/15/how-angular-lets-us-iterate/) is a good one).

On a project I'm working on I needed to create some **custom services** - to access RESTful API's, for example - and **directives** - to enhance some html functionality. 

Besides those cases, I had to give the user some feedback after completing certain action. Of course, if this were a singular case, I could just assign some html elements to be shown depending on a success/failure variable, taking advantage of Angular's html-on-steroids, like:

	<div class="success-warning" ng-show="someControlVariable">
		The operation was successful!
	</div>
	<div class="error-warning" ng-show="!someControlVariable">
		There was an error with the operation..
	</div>

But, since this error/success warning is pretty common in web-apps, I decided to implement some way to improve this kind of messaging.
One *quick* way to do this would be to create a directive on which one would define basically a shorter and customized version of the html I wrote above, something like:

	<modaldirective show="someControlVariable" status="statusValue" customOption="customOptionvalue">

That way one could pass around controller functions and a different message depending on a statusValue, for example.

However, I felt that the Angular workflow (at least, mine) leaves a lot of markup that may not be used, and I didn't want to insert more just for this case.

So I decided to create a factory which could be used to produce dialog boxes.
The factory function would receive a **configuration object** as an argument, with some customizing options, do some setup and return an object which is basically an **API** for the developer to show/hide the modal. 

There's some discussion about [Services vs Factories](http://stackoverflow.com/questions/15666048/angular-js-service-vs-provider-vs-factory) on AngularJS and I guess that in part it's because sometimes it's hard to distinguish which one to use. On this particular case I chose a factory since it lets us have more than one instance of the function, with different configurations. 

The factory function assumes that the config object must provide an **HTML template** or an **URL** to fetch that template, and throws an error otherwise.

After that, it relies the following steps:

### Variable Definition

		// Set some auxiliary variables to aid on the html construction:
	    var template, html, scope,
	        containerClass = config.containerClass || 'ng-modal-container',
	        baseClass = config.baseClass|| 'ng-modal',
	        overlayDivClass = config.overlayDivClass || 'ng-modal-overlay',
	        useOverlay = typeof config.useOverlay === 'boolean' ? config.useOverlay : true,
	        container = angular.element(config.selector || document.body),
	        overlayDiv = '<div class="'+ overlayDivClass + '"></div>';

### Template Fetching
			
			// depending on the configuration object's properties
			if (config.templateUrl) {
		        $http.get(config.templateUrl).then(function(response) {
		            template = response.data;
		            // the html var has to be set on the 2 options of the conditional since one of them has an async method
		            html = '<div class="' + containerClass + '"><div class="' + baseClass + '"><a href="" class="' + baseClass + '-close" ng-click="turnMeOff()">&times;</a>' + template + '</div></div>';
		        });
		    } else {
		        template= config.template
		        html = '<div class="' + containerClass + '"><div class="' + baseClass + '"><a href="" class="' + baseClass +'-close" ng-click="turnMeOff()">&times;</a>' + template + '</div></div>';
		    }

### Activation/Deactivation functions:

		function turnMeOn (localVars) {
		...
		}
		function turnMeOff() {
		..
		}

As the ``turnMeOn`` function receives an optional object with some local variables, they need to be added to the newly created scope.

It's worth mentioning the use of the ``$compile()`` function which compiles an HTML String/DOM element into a template and produces a template function, which is then used to link the template and the scope together.

Besides that, on the ``turnMeOff`` function, it's important to invoke the ``$destroy()`` method on the modal's scope, to avoid the persistence of scopes from removed modals, since AngularJS doesn't remove the scope on ``element.remove()`` call.

You can check the complete code on my <a href="https://github.com/antoniocapelo/AngularJS-ModalFactory" target="_blank"> github repository</a>.

Finally, here's a pen demonstrating this factory. As you can see, the selected option is passed to the modal as an argument to the ``turnMeOn`` function, making that data available on the new scope.

<p data-height="597" data-theme-id="661" data-slug-hash="wKeEA" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/capelo/pen/wKeEA'>AngularJS Modal Factory </a> by António Capelo (<a href='http://codepen.io/capelo'>@capelo</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

##Final thoughts 

As I decided to implement this as a factory, I'm yet to figure a way to share the main controller's function with the scope of the modal, so that I can extend its potential. A possible walkaround would be to add a cancel/confirm feature, and use the **Angular's broadcast system** for the controller to figure out which option was selected and make its logic from there. Do you have another solution? Share it :) or fork my repo if you like.

See you soon,

*A. Capelo*