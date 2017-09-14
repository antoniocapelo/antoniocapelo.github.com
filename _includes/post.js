(function(document) {
    function ready(fn) {
        document.addEventListener('DOMContentLoaded', fn);
    }

    function imgLoaded(ev) {
        var img = ev.target
        if (img) {
            if (img.height > img.width) {
                img.style.width = 'auto';
                img.style.maxHeight = '25rem';
            }
        }
    }

    ready(function() {
        var imageElements = document.querySelectorAll('.post-page a img')
        imageElements.forEach(function(img) {
            img.addEventListener("load", imgLoaded);

            if (img.height && img.width) {
                imgLoaded({ target: img });
            }
        });
    });


})(document);

