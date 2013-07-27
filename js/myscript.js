$(document).ready(function() {
	var uri = location.pathname;
	if(uri.length==1){
		uri = '/home/';
	}

	$('ul.nav').children().each(function() {
		var id = '/' + ($(this).attr('id')) + '/';
		if('/' + $(this).attr('id') + '/' === uri)
		{
			$(this).addClass('active');	
		}
		else
		{
			$(this).removeClass('active');
		}
	});

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
})