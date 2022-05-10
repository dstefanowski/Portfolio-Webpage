$(`.pic-carousel`).slick({
	arrows: false,
	autoplay: true,
	mobilefirst: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
			},
		},

		{
			breakpoint: 4000,
			settings: {
				slidesToShow: 1,
			},
		},
	],
})

// $(".pic-carousel").slick({
// 	lazyLoad: "ondemand",
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// })
