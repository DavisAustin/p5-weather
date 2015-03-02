$('article').readmore({
	moreLink: '<a href="#"><em>Get The Goods!</em></a>',
	lessLink: '<a href="#"><em>Close It Up!</em></a>',
	speed: 1000,
	afterToggle: function() {
		alert("It's Closed, Open It!");
	}
});