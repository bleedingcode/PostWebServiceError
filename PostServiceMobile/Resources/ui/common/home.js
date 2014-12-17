function LaunchHomePage(){
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	
	var button1 = Ti.UI.createButton({
		width:300,
		height:50,
		title: 'Test Post Web Service'
	});
	self.add(button1);
	
	//EVENTS
	button1.addEventListener('click', function(e){
		general.PostWebService();
	});
	
	return self;
}

module.exports = LaunchHomePage;