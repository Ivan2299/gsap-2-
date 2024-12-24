jQuery(function ($) {
	('use strict');

	const laptopScreen = window.matchMedia('(min-width: 1024px)').matches;
	gsap.registerPlugin(ScrollTrigger);
	const html = $('html');
	// html.addClass('overflow-hidden');
	// const title = new SplitType('.title');
	if (laptopScreen) {
		const tl = gsap.timeline({
			defaults: {
				ease: 'power2.inOut',
			},
		});
		tl.set('.loader-logo', { autoAlpha: 0, scale: 0.5 });

		tl
			.from('.loader ul li', {
				y: '-100%',
				stagger: 0.05,
				duration: 1,
			})
			.to('.loader-logo', {
				autoAlpha: 1,
				scale: 2,
				duration: 1,
			})
			.to('.loader-logo', {
				autoAlpha: 0,
				scale: 0.7,
				duration: 1,
			})
			.to(
				'.loader ul li',
				{
					y: '100%',
					stagger: 0.05,
					duration: 1,
				},
				'-=0.2',
			)
			.to(
				'.loader',
				{
					yPercent: -100,
					duration: 1,
					onComplete() {
						$('.loader').remove();
					},
				},
				'-=0.4',
			)
			.from(
				'.banner-img',
				{
					y: '100%',
					duration: 1,
				},
				'-=1',
			)

			.from('.h-links ul li', {
				autoAlpha: 0,
				y: '-100%',
				stagger: 0.1,
				duration: 1,
			})
			.from(
				'.h-logo img',
				{
					autoAlpha: 0,
					scaleX: 0,
					transformOrigin: 'left top',
					duration: 1,
				},
				'-=1.5',
			)
			.to(
				'.char',
				{
					y: 0,
					stagger: 0.04,
					duration: 0.4,
				},
				'-=1.5',
			)
			.from(
				'.banner-info .text',
				{
					autoAlpha: 0,
					y: '-10%',
					duration: 1,
					onComplete() {
						html.removeClass('overflow-hidden');
					},
				},
				'-=1.5',
			);

		gsap.to('.title  ', {
			scrollTrigger: {
				trigger: 'main',
				start: '-80px top',
				end: '95% 100%',
				pin: true,
				scrub: 2,
			},
			y: '-150%',
		});
		gsap.to('.banner-info .text ', {
			scrollTrigger: {
				trigger: 'main',
				start: '-80px top',
				end: '95% 100%',
				pin: true,
				scrub: 2,
			},
			x: -window.innerWidth / 5,

			transformOrigin: 'right top',
		});
		gsap.from('.banner-img', {
			scrollTrigger: {
				trigger: 'main',
				start: '-80px top',
				end: '95% 100%',
				pin: true,
				scrub: 2,
			},

			css: {
				clipPath: 'circle(80% at 50% 50%)',
				scale: 1.2,
			},
		});
		gsap.to('.swiper-controls-wrap', {
			scrollTrigger: {
				trigger: 'main',
				start: '-80px top',
				end: '95% 100%',
				pin: true,
				scrub: 1,
			},
			css: {
				border: '1px solid #fff',
				borderRadius: '1rem',
			},
		});

		const lrTl = gsap.timeline({
			scrollTrigger: {
				trigger: '.lr-section',
				start: '10% top',
				markers: true,
				scrub: 2,
			},
		});
		lrTl.set('.section-title', {
			y: '-200px',
		});
		lrTl.set('.lr-btn', {
			css: {
				color: '#fff',
				borderColor: '#fff',
				backgroundColor: '#fff',
			},
		});
		lrTl.to('.lr-section', {
			scrollTrigger: {
				trigger: '.lr-section',
				start: '-70% top',

				scrub: 2,
			},
			css: {
				// backgroundColor: '#71c575',
			},
		});
		lrTl.to('.section-title', {
			y: 0,
			duration: 2,
			scrollTrigger: { trigger: '.lr-section', start: '-70% top', scrub: 2 },
		});

		lrTl.from('.lr-left', {
			scrollTrigger: {
				trigger: '.lr-section',
				start: '-70% top',
				scrub: 2,
			},
			x: '50%',
		});
		lrTl.from('.lr-right', {
			scrollTrigger: {
				trigger: '.lr-section',
				start: '-70% top',
				scrub: 2,
			},
			x: '-50%',
		});
		lrTl.from('.lr-btn', {
			scrollTrigger: {
				trigger: '.lr-section',
				start: '-70% top',
				scrub: 2,
			},
			autoAlpha: 0,
		});
	}
});
