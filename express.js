// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });
// app.get("/google", function(req, res){
//     res.redirect('https://www.google.com/');ss
// });
// app.get("/search/:name", function(req, res){
//     var name = req.params.name;
//     res.redirect("https://www.google.am/search?q=" + name);
// });
// app.get("/*", function(req, res){
//     var name = req.params.name;
//     res.send("<h1>Error <br>Goodby</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });
// var express = require("express");
// var app = express();

// app.use(express.static("programming3"));

// app.get("/", function(req, res){
//    res.redirect("https://github.com/zina66/programming3.git");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });var fs = require('fs');

function main() {
    var file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
}
main();



