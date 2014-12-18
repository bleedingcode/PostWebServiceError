function TestPostService(req, res) {
    console.log("Start running of TestPostService");
    var body = "";
 
    console.log("Start Printing Body");
    console.log(req.body);
    console.log("End Printing Body");
 
    res.render('index', { title: 'TestPostService' });
    console.log("End running of TestPostService");
}