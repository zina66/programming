var socket;
var colorarr = [];
function setup() {
    createCanvas(600, 600);
    background("#acacac");
    var r = random(255);
    var g = random(255);
    var b = random(255);
    colorarr.push(r,g,b);
}
function mouseDragged() {
    socket.emit('kordinater', [mouseX, mouseY, colorarr]);
}
function main() {
    socket = io.connect('http://localhost:3000');

    socket.on('gceq', gcel);
    function gcel(a) {
        console.log(a);
        fill(a[2][0],a[2][1],a[2][2]);
        ellipse(a[0], a[1], 10, 10);


    }
}

window.onload = main;