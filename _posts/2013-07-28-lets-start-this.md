---
title: Lets start this
layout: post
summary: I just can't re-start a blog and not post immediatly. So here we go...
image: "/img/photos/eu+jeitosa.jpg"
category: "jekyll"
---

I just can't re-start a blog and not post immediatly. So here we go...
(Currently listening to <a href="http://open.spotify.com/track/4Ypxolb6A0oCPe9NqhFYdV">Mos Def - The Panties</a> so pardon me if I get too mellow :P )

It was yesterday that I decided to stop blogging on the WP platform. My previous blog, which has a couple of years, survived one hosting transfer, two or three customized themes and gave me all the joys a blog should give. But I was feeling that the need of something new, where I could experiment more, without having to learn all the inner mechanics of Wordpress (I really don't have the time right now, too much stuff on my 'to learn' queue). I also have read about <a href="http://jekyllrb.com/" title="Jekyll site">Jekyll</a> and it made me curious by its simplicity + flexibility. Well, and the idea to post from the terminal is very cool. I admit.

Besides that, I decided that this summer I should hang out on GitHub, follow nice repos and learn more, that's about time! I had a GiT workshop on college and read a lot about it, but when one doesn't practice, all that knowledge gets rusty and I don't like it.

So, yesterday when I was setting foot outside the door to workout and it began to rain, I decided the time had come. It took me part of the morning and afternoon to read some documentation, blog posts about the system, some stack overflow Q&A and CSS tweaking.

For those who don't know, <a href="http://jekyllrb.com/">Jekyll</a> is a static site generator, oriented to blog-like websites. It's written on Ruby by Tom Preston Werner (GitHub co-founder). Basically, it takes Markdown, Liquid Markup and a template structure, it processes all of the data and outputs a static site, ready for deployment. All this (plus no database queries) result in a quicker site and we all like speed, right?

Some stuff I read along the way:

* <a href="http://hugogiraudel.com/2013/02/21/jekyll/#why">Why Jekyll</a> by Hugo Giraudel
* <a href="https://help.github.com/articles/using-jekyll-with-pages">Using Jekyll with GitHub Pages</a>	
* <a href="http://jekyllbootstrap.com/">The Quickest Way to Blog on GitHub Pages</a>
* <a href="http://erjjones.github.io/blog/How-I-built-my-blog-in-one-day/">How I built my blog in one day</a> by Eric Jones

Plus a cute website that lists the main git commands in a simple way: <a href="http://rogerdudler.github.io/git-guide/">git - the simple guide</a> by Roger Dudler.


I think it's appropriate to write a short guide on how to start with Jekyll, it may be usefull for some people (even myself, in case I need to reset something). I'll try to sum up the main steps of it, which you can find scattered on these previous links:

##1. GitHub Stuff
Setup a GitHub account if you don't have one: it's simple and free! If you want GitHub Pages to host your site, you'll have to create a repository named **yourusername.github.com** and that's it. 

Keep in mind that it's not mandatory to host the blog on github pages: you can build your site with jekyll and then FTP it to your own server. But remember that GitHub Pages is built on Jekyll, so you can push *raw* jekyll files to your repo and GitHub will do the compilation for you, which is pretty cool.

##2. Install Ruby
If you're on a mac, your computer probably came with ruby installed (ruby 1.8.7) and jekyll should run with it. Nevertheless, you will still have to install XCode Comand Line Tools for it to work.

In case you want a newer ruby version, so you can use ruby on rails for example, this <a href="http://createdbypete.com/articles/ruby-on-rails-development-with-mac-os-x-mountain-lion/">link</a> provides a nice guide on how to get the latest Ruby version running. It envolves installing the XCode Comand Line Tools, HomeBrew and <a href="https://github.com/sstephenson/rbenv">rbenv</a>. I made it a little different, decided to use the <a href="https://rvm.io/">Ruby Version Manager</a> in order to install a new version and choose which version to used by default. 

The rest of the OS's, visit <a href="http://www.ruby-lang.org/en/"> this link</a> where you'll find proper instructions.

##3. Install Jekyll
All you got to do is bring up a command line and
`gem install jekyll` will fire the install process.

##4. Use Jekyll
Create a folder for you site on a path of your choosing and just type `jekyll` when you've cd'ed to it. You'll see a bunch of options and you'll think for 4 seconds untill you decide you want a "new" site. Then, write `jekyll new .` and all the required files/directories will be created.

Here's a quick description of the main files/folders created:

### _config.yml
This file holds your site configuration variables. You should end upd with something like this:

	name: "site name"`
	description: "site desc"
	markdown: redcarpet
	pygments: true
	paginate: 10 (you choose)
	url: https://github.com/username/username.github.com/blob/master

### _includes
This directory holds all the html *snippets* you will need include in your layouts in the future. Basically, It'll store files with the html code your site reuses on every load, like menubar.html, header.html, footer.html, etc.
Example:

{% raw %}

	<!DOCTYPE html>
	<html lang="en">
	  <head>
	    <meta charset="utf-8">
	    <title>{{ site.name }}</title>
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    {% if page.description %}
	    <meta name="description" content="{{ page.description }}">
	    {% else %}
	        <meta name="description" content="{{ site.description }}">
	    {% endif %}
	    {% if page.categories %}
	    <meta name="keywords" content="{{ page.categories | join: ','}}" />
	    {% else %}
	    <meta name="keywords" content="{{ site.keywords | join: ','}}" />
	    {% endif %}
	    <link href="/css/mycss.css" rel="stylesheet">
	    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	    <!--[if lt IE 9]>
	      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	    <![endif]-->
	  </head>
	  <body>
    <div class="container">

{% endraw %}

As you can see, you can use Liquid Markup to display html conditionally: I'm checking if the current page has a description property (which would be defined on the YAML Front Matter). If it has, display is as a meta description for the page. If not, display the site description (defined on the _config.yml file) instead. I'm also using the same logic to the page keywords, to make sure some keywords are displayed on the meta information.


### _layouts
Each page on your site needs to have specified which layout it should use (more on that later). A layout is a .html file with the structure of your page. Keep in mind that layouts on jekyll use Liquid Markup, so a layout example can be something like:

{% raw %}
	{% include header.html %}

	<div class="row-fluid">
	  <div class="span3">
	    {% include sidebar.html %}
	  </div>
	  <div class="myclearfix"></div>
	  <div class="span9 nospace">
	    {{ content }}
	  </div>
	</div>
	{% include footer.html %}
{% endraw %}

### _posts
This folder will hold all your blog posts. Each post is represented by a markdown file, has to be named **YYYY-MM-DD-your-post-title** and have a <a href="http://jekyllrb.com/docs/frontmatter/">YAML Front Matter</a> which should specify, at least, the post layout.

Every info you specify on the Front Matter can then be accessed as a **page.property**. 

Example:

	---
	title: Post Title
	layout: layout_post
	image: "/img/twerkin.jpg"
	category: "foo"
	---

	Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Remember that you can use **Markdown** or **HTML** (or a mixture) when writing your blog post.

### Static Pages

Creating static pages is pretty straight-forward. For example, If you want a new static page called "Foo", create a folder called "foo" on you site root, and a index.html file inside it. Then, insert your content (don't forget to specify title and layout) and jekyll takes care of the rest.

### Preview your site

Jekyll even creates a local server so you can work locally on your site and test new stuff. Just use the server command with the watch tag so it reflects the changes automatically: `jekyll server --watch`. Now your site is available at **localhost:4000**, as long as you keep that process running. 

When you're ready to deploy the changes, just push your local repo to GitHub and your new stuff will be online.

Note: If you're not using GitHub to host your site, it's useful to know that the **site** folder is what you need to upload to your FTP account, after jekyll finishes compiling the files.

##5. Make things pretty

Now is the time for some CSS and if you're not new to this you are probably downloading the latest release of <a href="http://twitter.github.io/bootstrap/" title="Twitter BootStrap">Twitter BootStrap</a>, including it on your header.html file and making your tweaks. 

If you are new to this, you should totally get to know this awesome framework and then you'll talk about it to everyone in your family.
<img src="http://cdn.kveller.com/blog/wp-content/uploads/2012/01/shutterstock_83131060-300x258.jpg">
Above is a cute photo. I intend to gain your sympathy with it.

See ya soon!

*A. Capelo*