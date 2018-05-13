// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();
function main() {
    var file = "hello.txt";
    fs.appendFileSync(file, "Hello world\n");
}
main();