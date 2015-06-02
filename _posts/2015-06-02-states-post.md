---
title: States. Angular and United
layout: post
summary: Dealing with states in AngularJS and some snapshots of the trip to the US
image: "/img/travelin-man.jpg"
categories: 
- coding
tags:
- javascript
- angularjs
- angularstates
- localstorage
- antoniocapelo.com
---

In this post I'll talk a bit about managing state in AngularJS applications and post some photos I took on a trip to Atlanta + some other shots.

(Not a coder? [Skip to the photos](#photos) then)

## Code Stuff

When working on projects where AngularJS is the primary framework in use, it's very important to follow some [good practices](https://github.com/toddmotto/angularjs-styleguide#controllers).

There are a lot of nice and resources online and I particularly like [Todd Motto](https://twitter.com/toddmotto)'s post on [Rethinking AngularJS Controllers](http://toddmotto.com/rethinking-angular-js-controllers/) where he talks about abstracting the model from the controllers and passing more responsibility and state into services.

### Trim the Controller and Work the Service

I totally agree with what's stated on that post so I keep my controllers with minimum business logic, only acting as a ViewModel - glueing data to the template - and some event delegation.

I also try to follow the [Separation of Concerns principle](http://en.wikipedia.org/wiki/Separation_of_concerns), so I keep the services small and self-contained. This way, it's the controller's responsibility to fetch the data from each service the controller depends.

### Persisting

There are some projects - made with AngularJS or not - that we get to a point where we need to persist some state across utilizations so that the experience is easier / quicker, or simply because the requirements specify so, and in certain cases we make use of some storage solutions for that.

Be it **session storage**, **local storage**, **cookies**, etc, we end up <span class="underline">saving and restoring states</span> at different points of the application.

In this cases, if we're following the strategy described above, we end up with a lot of Services accessing the storage. In some extent, this turns into a sloppy implementation as:

-  **a)** those services access the same storage solution in different parts of the code (and in different times) of the application;
- **b)** as simple as the storage solution can be, there are always specificities that need to be dealt with (parsing/invalidating/namespacing/etc)

### Angular States

For this reasons, at [Mindera](http://mindera.com/) we started working with the [angularStates service](https://github.com/Mindera/angularStates). It's a service meant to be used as a top layer on the AngularJS app, for saving, restoring, invalidating services/factories states. 

**Note:** Currently it's only implemented on top of the [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

It relies on 3 **main methods**: 

- ``register`` your service/factory in the **StatesService**, passing a key (usually the service name) and the properties you want to keep track of. You're able to specify default values (in case the value retrieved is invalid) and an expiration time for each value. 
- ``saveState()`` to save it to storage.
- ``recoverState()``to try to retrieve it from storage.

Please check the repo and try it if you find it useful! :)

Now, on to the photos!

<div id="photos"></div>
## Photo Stuff

<a href="https://farm8.staticflickr.com/7753/18303170732_f62b90120a_b.jpg"><img src="https://farm8.staticflickr.com/7753/18303170732_f62b90120a_b.jpg" /></a>

<a href="https://farm1.staticflickr.com/487/18280561736_e9f6b44f98_b.jpg"><img src="https://farm1.staticflickr.com/487/18280561736_e9f6b44f98_b.jpg" /></a>

<a href="https://farm1.staticflickr.com/370/18308582991_541551b1c6_b.jpg"><img src="https://farm1.staticflickr.com/370/18308582991_541551b1c6_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8782/18119387898_d30b990556_b.jpg"><img src="https://farm9.staticflickr.com/8782/18119387898_d30b990556_b.jpg" /></a>

<a href="https://farm1.staticflickr.com/406/17684693854_5ef3f5b735_b.jpg"><img src="https://farm1.staticflickr.com/406/17684693854_5ef3f5b735_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8793/18121151319_35a18c8854_b.jpg"><img src="https://farm9.staticflickr.com/8793/18121151319_35a18c8854_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7754/17684805124_93ac200410_b.jpg"><img src="https://farm8.staticflickr.com/7754/17684805124_93ac200410_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8876/18121304759_e458a3db5f_b.jpg"><img src="https://farm9.staticflickr.com/8876/18121304759_e458a3db5f_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8780/18119745048_aed7b89d5b_b.jpg"><img src="https://farm9.staticflickr.com/8780/18119745048_aed7b89d5b_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7785/18121420069_11155ef417_b.jpg"><img src="https://farm8.staticflickr.com/7785/18121420069_11155ef417_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8773/18119997480_912430b960_b.jpg"><img src="https://farm9.staticflickr.com/8773/18119997480_912430b960_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8859/18307676815_a131d150e1_b.jpg"><img src="https://farm9.staticflickr.com/8859/18307676815_a131d150e1_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7729/18309128421_70d35f16d1_b.jpg"><img src="https://farm8.staticflickr.com/7729/18309128421_70d35f16d1_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8809/17687122963_c90c574d60_b.jpg"><img src="https://farm9.staticflickr.com/8809/17687122963_c90c574d60_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8855/18119960218_18c9bc8b81_b.jpg"><img src="https://farm9.staticflickr.com/8855/18119960218_18c9bc8b81_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7771/18120183130_f61312e97f_b.jpg"><img src="https://farm8.staticflickr.com/7771/18120183130_f61312e97f_b.jpg" /></a>

Coffee&Socks

<a href="https://farm1.staticflickr.com/340/18120176690_252280687d_b.jpg"><img src="https://farm1.staticflickr.com/340/18120176690_252280687d_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7736/18309332701_fb27603096_b.jpg"><img src="https://farm8.staticflickr.com/7736/18309332701_fb27603096_b.jpg" /></a>

<a href="https://farm1.staticflickr.com/368/18121696539_1aa28822be_b.jpg"><img src="https://farm1.staticflickr.com/368/18121696539_1aa28822be_b.jpg" /></a>

<a href="https://farm8.staticflickr.com/7799/18121829399_c04af4af93_b.jpg"><img src="https://farm8.staticflickr.com/7799/18121829399_c04af4af93_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8834/17685396034_d64f79bffa_b.jpg"><img src="https://farm9.staticflickr.com/8834/17685396034_d64f79bffa_b.jpg" /></a>

Backyard

<a href="https://farm9.staticflickr.com/8799/18120244610_c4d87e047d_b.jpg"><img src="https://farm9.staticflickr.com/8799/18120244610_c4d87e047d_b.jpg" /></a>

Back Home

<a href="https://farm8.staticflickr.com/7764/17687312063_eb71f354cc_b.jpg"><img src="https://farm8.staticflickr.com/7764/17687312063_eb71f354cc_b.jpg" /></a>

V. Lima

<a href="https://farm8.staticflickr.com/7777/18308132185_3fc4ffe882_b.jpg"><img src="https://farm8.staticflickr.com/7777/18308132185_3fc4ffe882_b.jpg" /></a>

<a href="https://farm9.staticflickr.com/8783/17685370814_fa0a2dc6f1_b.jpg"><img src="https://farm9.staticflickr.com/8783/17685370814_fa0a2dc6f1_b.jpg" /></a>

<a href="https://farm1.staticflickr.com/299/17685330364_539e047543_b.jpg"><img src="https://farm1.staticflickr.com/299/17685330364_539e047543_b.jpg" /></a>


See ya soon,

*A. Capelo*
