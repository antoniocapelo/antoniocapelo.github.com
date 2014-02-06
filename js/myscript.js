$(document).ready(function() {
	var uri = location.pathname;
	if(uri.length==1){
		uri = '/home/';
	}

	$('.info>ul').children().each(function() {
		var id = '/' + ($(this).attr('id')) + '/';
		if('/' + $(this).attr('id') + '/' === uri)
		{
			$(this).addClass('activa');	
		}
		else
		{
			$(this).removeClass('activa');
		}
	});

	$('.post img').parent('a').addClass('image-anchor');

	!function(d,s,id){
		var js,fjs=d.getElementsByTagName(s)[0];
		if(!d.getElementById(id)){
			js=d.createElement(s);
			js.id=id;
			js.src="//platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}}(document,"script","twitter-wjs");
	(function() {
		var po = document.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})();

	$('.social-icon').on('mouseenter',function() {
		$(this).animate({'background-position-y':'-40px'},500);
	})

	$('.social-icon').on('mouseleave',function() {
		$(this).animate({'background-position-y':'0px'},500);
	})
})