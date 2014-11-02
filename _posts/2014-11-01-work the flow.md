---
title: Work the Flow
layout: post
summary: I'm using Express, AngularJS, Grunt and tiny node scripts to develop and maintain my website. Check out how.
image: "/img/site.png"
categories: 
- coding
- webdevelopment
tags:
- antoniocapelo.com
- grunt
- node
- express
- angularjs
---

Even though it's a simple setup, I decided to write down the current workflow of my personal website development. I think it very straight forward, and it's the quickest way I found to quickly get it up and running, so it might help some dev's in the same situation.

##So, What I wanted

For my new website, I wanted to: 

* use **AngularJS** as the front-end framework
* have **nodeJS** powered back-end
* be able to quickly update its codebase

I also decided to use [Digital Ocean](https://www.digitalocean.com/) for the hosting and I'm very pleased with it. Digital Ocean let's you create and manage *droplets* with different configurations and it has many options for that. For example, it recently was updated to support an Ubuntu image prepared for a [MEAN stack](http://mean.io/#!/) usage.

Although this MEAN stack exists I didn't want to use as it would be a bit of an overkill. My website won't have the need of a mongoDB instance, at the very most I'll set up a public api so I can fetch some up-to-date info about myself.

The main idea would be:

<img src="/img/schema.png">

##AngularJS bootstrap

As usual, the quickest way to set up the AngularJS environment is by using a **yeoman generator**.

[Yeoman](http://yeoman.io/) really helps on bootstraping and I do recommend it as it accelerates the begining of the development phase. Launching our local server and see the live changes as we edit JS, HTML, CSS, resources, etc is at the distance of a ``grunt serve`. 

However, when it comes to have our site running in production, using a grunt server is not a good practice, so I made two things:

* created two subfolders on the main folder: **client** (where the front-end dev is made) and **server** (where I'm serving the built files and api in the future)
	

		site
		  |
		  +--client
		  +--server


* changed the default *Gruntfile.js* file that's created by the generator so it builds the production-ready files into the /server folder

		//inside Gruntfile.js
		var appConfig = {
		   app: require('./bower.json').appPath || 'app',
		   dist: '../server/dist'
		};
		// This way, when running the grunt build task, which includes the copy:dist task, the production files are all copied to the server/dist folder

##Express		

For the nodeJS server, I used the [express](http://expressjs.com/) framework and its generator. To install them, run the following lines:

		npm install express -g
		npm install express-generator -g

After this, I navigated to the main folder and ran the ``express server && cd server && npm install`` command.
This creates the server-side app file and folder skeleton and installs all the dependencies. 

Finally I edited the default *app.js* file by basically removing the view engine setup (we won't use JadeLang), the routing setup (the routing will be made by Angular), the development error handler and by adding the 'static files serving' options. I put these changes on a [gist](https://gist.github.com/antoniocapelo/516c2ca7b9b053fa9e3a#file-edit_express_app-js) you can check it if you find it useful.

###Serving the app with Dev / Prod environment.

I wanted to be able to run the nodeJS server with dev/prod environment, so I put two simple scripts on the /server's **package.json**:

		"scripts": {
			"start": "NODE_ENV=production PORT=80 nodemon ./bin/www",
		    "test": "NODE_ENV=development nodemon ./bin/www"
		},
		...

This lets me type ``npm test`` or ``npm start`` to quickly run my server in development or production mode.

##Keeping the code in sync

One thing I'm enjoying with this setup is not having to mess with FTP apps. 

I'm simply hosting my site code in a github repository and everytime a new 'version' is release, I just have to build it, ssh into my *droplet* and pull the latest changes. Since I'm running the server with **nodemon**, the file changes are detected and the site reflects the changes instantly.

My site is an ongoing project, as I'm working on it when I have free time. You can check it [here](http://antoniocapelo.com/) and leave some feedback.


See you soon,

*A. Capelo*