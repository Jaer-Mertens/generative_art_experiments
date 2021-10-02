function w(val) {
  if (val == null) return width;
  return width * val;
}

function h(val) {
  if (val == null) return height;
  return height * val;
}

var t;

var options = {
  "animate": false,
  "patternWidth": 600,
  "patternHeight": 600,
  "grainOpacity": 0.15,
  "grainDensity": 1,
  "grainWidth": 0.7,
  "grainHeight": 0.7,
}


function setup() {
  createCanvas(400, 400);
  //             Hue  Sat  Bri  Alpha
  //              v    v    v    v
  // colorMode(HSB, 360, 100, 100, 1.0);

  // background(0, 0, 0); // black background
  noFill(); // no fill
  stroke(0, 0, 100); // white stroke
  strokeWeight(w(0.003)); // light stroke weight
}


function draw() {

  background(0);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);
  // // for(x=10; x<50; x+1){
  //  box(50);

   for (var i = 0;  i <= 12; i++) {
   var s = "fib(" + i + ") = " + fib(i);
     // fill(255);
     // text(s, 100, 50 + i * 20);
     stroke(fib(i),fib(i),fib(i)*1.5);
     strokeWeight(w(i*0.007));
     circle(200,200,2*fib(i));
 }
grained("#hero", options);


//CIRCLES///////
  // const numSteps = 17;
  // const radiansPerStep = (Math.PI * 2) / numSteps;
  // for (let radius = 0.1; radius < 0.4; radius += 0.02) {
  //   beginShape();
  //   for (let theta = 0; theta < Math.PI * 2; theta += radiansPerStep) {
  //     const x = 0.5 + radius * Math.cos(theta);
  //     const y = 0.5 + radius * Math.sin(theta);
  //
  //     vertex(w(x), h(y));
  //   }
  //   endShape(CLOSE); // CLOSE because the last point is not the first point
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
