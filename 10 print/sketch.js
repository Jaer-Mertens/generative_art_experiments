function w(val) {
  if (val == null) return width;
  return width * val;
}

function h(val) {
  if (val == null) return height;
  return height * val;
}

var t;
let x = 0;
let y = 0;
let spacing = 20;
var a = 0;

function setup() {
  createCanvas(400, 400);
  //             Hue  Sat  Bri  Alpha
  //              v    v    v    v
  colorMode(HSB, 360, 100, 100, 1.0);
  angleMode(DEGREES); // Change the mode to DEGREES

  // background(0, 0, 0); // black background
  noFill(); // no fill
  // stroke(0, 0, 100); // white stroke
  strokeWeight(w(0.003)); // light stroke weight
}

function draw() {

  var Hue = random(180,270);
  stroke(180, 204, 100);
  translate(200,200);
  if(a < 180){
    rotate(a);
    stroke(180, 204, 100);
    rect(80,30,40,40);
    stroke(220, 204, 100);
    rect(50,30,30,30);
    stroke(180, 204, 100);
    rect(30,30,20,20);
    a = a + 3;
}


  // if (random(1) < 0.5) {
  //   stroke(Hue, 204, 100);
  //   arc(x, y, 20, 20, 0, PI);
  // } else {
  //   stroke(Hue, 100, 100); // white stroke
  //    arc(x, y + spacing, 20, 20, PI, 0);
  // }
  // x = x + spacing;
  // if (x > width) {
  //   x = 0;
  //   y = y + spacing;
  // }
}



function fib(n){
  if(n <= 0){
    return 0;
  }else if (n == 1) {
    return 1;
  }else {
    return fib(n-1)+fib(n-2);
  }
}


function mouseClicked() {
    const date = getDate();
    let datum = new Date();
   save(date+".png"); // give file name
   print(date);
}

function getDate(){
  let date = new Date();
  function formateDate(){
    const day = date.toDateString().slice(4);
    const time = date.toTimeString().slice(0, -40);
    return day + " " +time;
  }
  return formateDate();
}
