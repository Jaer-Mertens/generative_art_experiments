
var points = [];
var mult = 0.005;

function setup() {
  createCanvas(400, 400);
  //             Hue  Sat  Bri  Alpha
  //              v    v    v    v
  // colorMode(HSB, 360, 100, 100, 1.0);
  // angleMode(DEGREES) // Change the mode to DEGREES
  background(20);

  var density = 10;
  var space = width / density;

  for(var x = 0; x < width;  x += space){
    for(var y = 0; y < height; y += space){
      var p = createVector(x, y);
      points.push(p);
    }
  }


}

function draw() {
  noStroke();
  // fill(255);

  for (var i = 0; i < points.length; i++){

    var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720);

     points[i].add(createVector(cos(angle), sin(angle)));
     fill(60+i*1.2)
     ellipse(points[i].x, points[i].y, 1)
  }


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
