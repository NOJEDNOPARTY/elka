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
			var bLazy = new Blazy({});
		});

		$('.popup-close').click(function(){
			$(this).closest('.popup-wrapper').removeClass('active');
			$('body').removeClass('hidden');
		})

		$('.form-row input').keyup(function(){
			if($(this).val() == '') {
				$(this).closest('.form-row').removeClass('active')
			}else {$(this).closest('.form-row').addClass('active')}
		});
		
		$('.tel-trigger').mask("+7(999) 999-99-99");
		$('.anchor').click(function(event){
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 2000);
			$('header').removeClass('open');
			$('body').removeClass('hidden');
		});


		$('.step-cnt-top').click(function(){
			$(this).closest('.step-row').toggleClass('active');
		})

		$('.call-popup').click(function(event){
			event.preventDefault();
			var popup  = '#' + $(this).attr('data-popup');
			if($(this).attr('data-popup') != 'polyticsPopup'){
				$('.popup-wrapper').removeClass('active');
				$('body').addClass('hidden');
				$(popup).addClass('active');
				$(popup).find('.work-popup-slider').owlCarousel('destroy');
				setTimeout(function(){
					$(popup).find('.work-popup-slider').owlCarousel({
						items:1,
						margin: 0,
						autoHeight:true,
						lazyLoad: true,
						nav: false,
						dots: true
					});
				}, 200)

			}else {
				$(popup).addClass('active');
			}

		});

		$('.menu-trigger').click(function(event){
			event.preventDefault();
			$('header').addClass('open');
			$('body').addClass('hidden');
		})
		$('.nav-close').click(function(event){
			event.preventDefault();
			$('header').removeClass('open');
			$('body').removeClass('hidden');
		})
		
		var bLazy = new Blazy({});
		$('.owl-carousel').on('changed.owl.carousel', function(event) {
			var bLazy = new Blazy({});
		})

		var headerH = $('header').outerHeight();

		function fixedHead(headerH) {
			var header = headerH;
			if($(window).scrollTop() > header) {
				$('header').addClass('fixed');
			}else {
				$('header').removeClass('fixed');
			}
		};
		fixedHead(headerH);


		$(window).resize(function() {
			var headerH = $('header').outerHeight();
			fixedHead(headerH);
			var bLazy = new Blazy({});
			$('.owl-carousel').trigger('refresh.owl.carousel');
		});
		$(window).scroll(function() {
			fixedHead(headerH);
		});

		jQuery(function($){
			$(document).mouseup(function (e){ 
				var popup = $(".popup");
				if (!popup.is(e.target) 
					&& popup.has(e.target).length === 0) { 
					$('.popup-wrapper').removeClass('active');
					$('body').removeClass('hidden');
				}
			});
		});

	},
	owl: function(){
		$('.gallery-carousel').owlCarousel({
			items:1,
			margin: 0,
			lazyLoad: true,
			nav: false,
			dots: true
		});
		// $('.work-popup-slider').owlCarousel({
		// 	items:1,
		// 	margin: 0,
		// 	autoHeight:true,
		// 	lazyLoad: true,
		// 	nav: false,
		// 	dots: true
		// });
		$('.letters-slider').owlCarousel({
			items:3,
			loop: true,
			autoHeight:true,
			lazyLoad: true,
			nav: true,
			dots: false,
			responsive:{
				0:{
					items:1,
					margin: 0
				},
				600:{
					items:2,
					margin: 15
				},
				1021:{
					items:3,
					center: true,
				}
			}
		});
		
		setTimeout(() => {
			$('.owl-carousel').trigger('refresh.owl.carousel');
		}, 500);

		$('.owl-carousel').trigger('refresh.owl.carousel');

	},
};

(function() {
	common.init();
}());
