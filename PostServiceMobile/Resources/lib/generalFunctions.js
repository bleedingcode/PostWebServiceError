function PostWebService(){
	//The below URL is live so you can actually test against it
	var url = "https://a22ca66dae5c60d7615e4b9d55843fb9bc32475a.cloudapp.appcelerator.com/TestPostService";
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