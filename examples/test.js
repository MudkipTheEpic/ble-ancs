var BleAncs = require('../index');

var ancs = new BleAncs();


ancs.on('notification', function(notification) {
	notification.readTitle( function(title) {
		notification.readAttributes( function(message) {
			notification.readPositiveLabel( function(label) {
				notification.readNegativeLabel( function(label) {
					console.log("Notification: " + notification);
				});
			});
		});
	});
});
