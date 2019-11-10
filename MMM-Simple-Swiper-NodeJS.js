Module.register("MMM-Simple-Swiper-NodeJS", {

	// Default module config.
	defaults: {
		echoLeftPin: 24, // GPIO #
		triggerLeftPin: 23, // GPIO #
		echoRightPin: 26, // GPIO #
		triggerRightPin: 25, // GPIO #
		threshold: 175, // centimeters
		distanceDiff: 1.25, // difference between both sensors
		debug: false, // if true, the raw data is printed to stdout
		delay: 750, // time between passing data to node_helper in milliseconds
	},


	// Define start sequence.
	start: function () {
		this.sendSocketNotification("SWIPER_START_SWIPING", this.config);
	},
});
