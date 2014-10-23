function example(){
'use strict';
	var self = Ti.UI.createWindow({
		fullscreen: true,
		navBarHidden: true,
		exitOnClose: true
	});
	//self.add(otherthings);
	return self;
}

module.exports = example;