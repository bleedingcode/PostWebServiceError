function TestPostService(req, res) {
	console.log("Start running of TestPostService");
	var body = "";
	
	req.on('data', function(data) {
        console.log('Data Request');
        body += data;
    });

	req.on('end', function() {
		console.log("Start Printing Body");
		console.log(body);
		console.log("End Printing Body");
		
		res.render('index', { title: 'TestPostService' });
		console.log("End running of TestPostService");
    });
}