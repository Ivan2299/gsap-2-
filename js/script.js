//*====================================
//*  FUNCTIONS ON DOCUMENT READY      =
//*====================================
//*  FUNCTIONS CALC & RESIZE, SCROLL  =
//*====================================
//*  ANIMATION                        =
//*====================================
//*  HEADER                           =
//*====================================
//*  POPUPS                           =
//*====================================
//*  KEY FOCUS                        =
//*====================================
//*  TABS, ACCORDION                  =
//*====================================
//*  OTHER JS                         =
//*====================================
//*  DYNAMIC LOAD JS                  =
//*====================================
const _functions = {};
let winW, winH, winScr, isTouchScreen, isAndroid, isChrome, isIPhone, isMac;

jQuery(function ($) {
	'use strict';

	//scroll page to top
	//window.scroll({top: 0, left: 0, behavior: 'smooth'});

	//*================================
	//*  FUNCTIONS ON DOCUMENT READY  =
	//*================================
	(isTouchScreen =
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i)),
		(isAndroid = navigator.userAgent.match(/Android/i)),
		(isChrome =
			navigator.userAgent.indexOf('Chrome') >= 0 && navigator.userAgent.indexOf('Edge') < 0),
		(isIPhone = navigator.userAgent.match(/iPhone/i)),
		(isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0);

	if (isTouchScreen) $('html').addClass('touch-screen');
	if (isAndroid) $('html').addClass('android');
	if (isChrome) $('html').addClass('chrome');
	if (isIPhone) $('html').addClass('ios');
	if (isMac) $('html').addClass('mac');

	//*====================================
	//*  FUNCTIONS CALC & SCROLL, RESIZE  =
	//*====================================
	// Function Calculations on page
	_functions.pageCalculations = function () {
		winW = $(window).outerWidth();
		winH = $(window).outerHeight();
	};
	_functions.pageCalculations();

	/* Function on page scroll */
	$(window).on('scroll', function () {
		_functions.scrollCall();
	});

	var prev_scroll = 0;
	_functions.scrollCall = function () {
		winScr = $(window).scrollTop();

		if (winScr > prev_scroll) {
			$('header').addClass('scrolled');
		} else if (winScr <= 10) {
			$('header').removeClass('scrolled');
			prev_scroll = 0;
		}

		//show/hide header on scroll & filter panel on cataloge page
		if (winScr > prev_scroll) {
			//   $('header').addClass('hide');
			$('.js-filter-category').addClass('top');
		} else {
			//   $('header').removeClass('hide');
			$('.js-filter-category').removeClass('top');
		}

		prev_scroll = winScr;

		if (winScr <= 60) {
			//   $('header').removeClass('hide');
			$('.js-filter-category').removeClass('top');
		}
	};
	_functions.scrollCall();

	/* Function on page resize */
	_functions.resizeCall = function () {
		setTimeout(function () {
			_functions.pageCalculations();
		}, 100);
	};

	if (!isTouchScreen) {
		$(window).on('resize', function () {
			_functions.resizeCall();
		});
	} else {
		window.addEventListener(
			'orientationchange',
			function (e) {
				// Portrait
				if (window.orientation == 0) {
					$('html').removeClass('landscape');
				}
				// Landscape
				else {
					$('html').addClass('landscape');
				}

				_functions.resizeCall();
			},
			false,
		);
	}

	//*===========
	//*  HEADER  =
	//*===========
	if (winW > 1199) {
		// hover on header dropdown
		$(document).on('mouseenter', '.h-drop b', function () {
			$(this).closest('.h-drop').addClass('is-active');
		});

		// leave header dropdown
		$(document).on('mouseleave', '.h-drop', function () {
			$(this).removeClass('is-active');
		});
	} else {
		/* Open menu */
		$(document).on('click', '.js-open-menu', function () {
			$('html').toggleClass('overflow-menu');
			$('header').removeClass('hide');
			$('header').toggleClass('open-menu');
		});

		/* Close menu */
		$(document).on('click', '.h-menu-overlay', function () {
			$('html').removeClass('overflow-menu');
			$('header').removeClass('open-menu');
		});
	}

	//*===========
	//*  POPUPS  =
	//*===========
	_functions.scrollWidth = function () {
		let scrWidth = $(window).outerWidth() - $('body').innerWidth();

		$('body, .h-wrap').css({
			paddingRight: `${scrWidth}px`,
		});
	};

	// Popups Functions
	let popupTop = 0;
	_functions.removeScroll = function () {
		_functions.scrollWidth();
		popupTop = winScr;
		$('html')
			.css({
				top: '-' + winScr,
				width: '100%',
			})
			.addClass('overflow-hidden');
	};

	_functions.addScroll = function () {
		_functions.scrollWidth();
		$('html').removeClass('overflow-hidden');
		window.scroll(0, popupTop);
	};
});
