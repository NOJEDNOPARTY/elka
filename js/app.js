var common = {
	init: function() {
		common.main();
		common.owl();
	},
	main: function(){

		$('.popup-trigger').click(function(event){
			event.preventDefault();
			var popup = "#" + $(this).attr('data-popup')
			$('.popup-wrapper').removeClass('active');
			$(popup).addClass('active');
		});

		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
		})
		// $('.menu-trigger').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').addClass('open');
		// })
		// $('.nav-close').click(function(event){
		// 	event.preventDefault();
		// 	$('nav').removeClass('open');
		// })
		
		// var bLazy = new Blazy({});


	},
	owl: function(){
		$('.gallery').owlCarousel({
			items:1,
			margin: 0,
			autoHeight:true,
			lazyLoad: true,
			autoplay:true,
    		autoplayTimeout: 5000,
			autoplayHoverPause:true,
			nav: false,
			dots: true
		});
	},
};

(function() {
	common.init();
}());
