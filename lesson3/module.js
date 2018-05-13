var fs = require('fs');

function main() {
   fs.writeFileSync("hello.txt", "Hello world\n");
   console.log("fs.writeFile");
}
main();
