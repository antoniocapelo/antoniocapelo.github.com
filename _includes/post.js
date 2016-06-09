(function(document) {
    function ready(fn) {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function imgLoaded(ev) {
        var img = ev.target
        if (img) {

            if (img.height > img.width) {
                if (img.classList) {
                    img.classList.add('vertical');
                }
                else {
                    img.className += ' ' + 'vertical';
                }
            }
        }
    }

    ready(function() {
        var ok = document.querySelectorAll('.post-page img')
        ok.forEach(function(img) {
            img.addEventListener("load", imgLoaded);


            if (img.height && img.width) {
                imgLoaded(img);
            }
        });
    });


})(document);

