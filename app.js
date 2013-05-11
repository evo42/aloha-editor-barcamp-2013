(function ($, Parallaxing, Transformer, Aloha) {
	'use strict';

	var operation = null;

	function mousedown(event) {
		operation = Transformer.start(
			'rotate',
			$(event.target).closest('.lettering>b'),
			event
		);
	}

	function mouseup(event) {
		if (operation) {
			Transformer.end(operation);
			operation = null;
		}
	}

	function mousemove(event) {
		if (operation) {
			Transformer.update(operation, event);
		}
	}

	$(document)
		.on('mouseup', mouseup)
		.on('mousemove', mousemove)
		.on('mousedown', '.lettering>b', mousedown)
		.on('scroll', Parallaxing.scroll);

	$(window).on('resize', Parallaxing.delayed_resize);

	Parallaxing.resize();

	Aloha.jQuery('*[contentEditable=true]').aloha();
}(
	window.jQuery,
	window.Parallaxing,
	window.Transformer,
	window.Aloha
));
