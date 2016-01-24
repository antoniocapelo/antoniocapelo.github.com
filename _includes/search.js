$(function() {
    var SELECTORS = {
        results     : '.results',
        resultsTitle: '#results-content .title',
        values      : '.values',
        type        : '.type'
    };
    var results = document.querySelector(SELECTORS.results);

    Array.prototype.unwrap = function(j) {
        return this.reduce(function(prev,curr) {return prev.concat(curr);},[]);
    };

    var searchParams = [
        {
            type: 'category',
            values: getParam('category')
        }, {
            type: 'tag',
            values: getParam('tag')
        }
    ];

    searchParams.filter(function(sp) {
        return sp.values.length > 0;
    })
    .map(buildHeader)
    .map(function(el) {
        document.querySelector(SELECTORS.values).appendChild(el);
    });

    // buildHeader :: (DOMEl, Object) -> DOMEl
    function buildHeader(searchParam) {
        var valuesTxt = searchParam.values.join(', ');
        return document.createTextNode(valuesTxt + ' as ' + searchParam.type + (searchParam.values.length > 1 ? 's' : ''));
    }

    // getParam :: String -> [String]
    function getParam(paramName) {
        return window.location.search.substring(1)
        .split('&')
        .map(function(el) {return el.split('=')})
        .filter(function(el) {return el[0] === paramName})
        .unwrap()
        .slice(1)
        .map(function(el) { return el.split(',') })
        .unwrap();
    }


    $.getJSON('/search.json', function(data) {
        filterPostsByPropertyValue(data, searchParams)
        .map(function(post) {
            return createLiEl(post);
        }).
        map(function(li) {
            results.appendChild(li);
        });
        //if (posts.length === 0) {
        //// Display 'no results found' or similar here
        //noResultsPage();
        //} else {
        //layoutResultsPage(type, value, posts);
        //}
    });

    // createLiEl :: Object -> DOMEl
    function createLiEl(post) {
        var anchor = document.createElement('a');
        anchor.href = post.href;
        anchor.innerText = post.title;
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.innerText = li.innerText + ' - ' + post.date.formatted;
        li.appendChild(anchor);
        li.appendChild(span);
        return li;
    }

    // filterPostsByPropertyValue :: ([Object], [Object]) -> [Object]
    function filterPostsByPropertyValue(posts, searchParams) {
        return posts
        .filter(function(post) {
            return hasTagMatch(post, searchParams) || hasCategoryMatch(post, searchParams);
        });
    }

    // hasTagMatch :: (Object, [Object]) -> Bool 
    function hasTagMatch(post, searchParams) {
        return searchParams.filter(function(sp) {
            return sp.type === 'tag'
        })
        .map(function(sp) { return sp.values; })
        .unwrap()
        .filter(function(tag) {
            return post !== null && post.tags && post.tags.indexOf(tag) > -1;
        }).length > 0
    }

    // hasCategoryMatch :: (Object, [Object]) -> Bool 
    function hasCategoryMatch(post, searchParams) {
        return searchParams.filter(function(sp) {
            return sp.type === 'category'
        })
        .map(function(sp) {
            return sp.values;
        })
        .unwrap()
        .filter(function(cat) {
            return post !== null && post.category === cat;
        }).length > 0
    }

});
