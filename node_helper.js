var NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
	start: function () {
		console.log(this.name + " helper started...");
	},

	/**
	 * Receives the socket notitication from the module js.
	 * @param notification The notification name
	 * @param payload The array containing all information to process the request
	 */
	socketNotificationReceived: function (notification, payload) {
		console.log("socketNotificationReceived: " + notification + " - " + payload);
		var self = this;
		if (notification === "SWIPER_START_SWIPING") {
			console.log("SWIPER_START_SWIPING");
		}
	}
});