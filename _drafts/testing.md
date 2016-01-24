---
title: test em aspast
layout: post
summary: This post sums up the talk I did at Mindera, in one of our TechTalks. It comes as an introduction both to the concept of unit testing and to writing testable code.
image: "/img/a-taste-of-unit-testing/testing-cover.jpg"
category: 
- coding
tags:
- x100
- Berlin
- Mindera
- Paris
- dotscale
- capelo.me
---
yoyo
a
asda
das
das
{% highlight ruby %}
def show
  @widget = Widget(params[:id])
    respond_to do |format|
        format.html # show.html.erb
            format.json { render json: @widget }
        end
		end
{% endhighlight %}

```javascript
        // on package.json
        ...
        "scripts": {
             "test": "./node_modules/.bin/karma start karma.conf.js"
        },

        // on terminal
        npm test
```

{% highlight javascript linenos %}
    describe('AvailableComponent', function () {
        var availableList;

        beforeEach(function () {
            loadFixtures('availableListFixture.html');
        });

        it('should initiate correctly', function () {
            // set up spies
            var $context = $('#jasmine-fixtures');
            spyOn($context, 'find').and.callThrough();
            spyOn(AvailableListComponent, 'create').and.callThrough();

            availableList = AvailableListComponent.create($context);
            expect($context.find).toHaveBeenCalledWith('.available');
        });

        it('should call the handleAvailableListClick callback', function () {
            // set up spies
            var handleAvailableListClickSpy = jasmine.createSpy('callback');
            var $context = $('#jasmine-fixtures');
            var $available = $('.available');

            availableList =  AvailableListComponent.create($context, handleAvailableListClickSpy);
            $available.find('li').trigger('click');
            expect(handleAvailableListClickSpy).toHaveBeenCalled();
        });
    });
{% endhighlight %}


