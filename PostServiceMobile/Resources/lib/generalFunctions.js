function PostWebService(){
	//The below URL is live so you can actually test against it
	var url = "https://2b7c632082c224acfefc67b2ce79123a38333315.cloudapp.appcelerator.com/TestPostService";
	//var url = "http://localhost:59032/TestPostService";
    Ti.API.info(url);
    
    //Dummy Data for Post Web Service
    var data = {
    	id:'5405a771b2a136082605d2f4',
    	points:'5'
    };
    
    //30 Seconds is way more than enough for this Web Service
	var xhr = Titanium.Network.createHTTPClient({
		timeout: 30000
	});
	
	xhr.onload = function() {
		Ti.API.info('Success');
	};

	xhr.onerror = function(e) {
        Ti.API.info(JSON.stringify(e));
	};

	xhr.open("POST", url);
	xhr.send(JSON.stringify(data));
			
	return true;
}

exports.PostWebService = PostWebService;