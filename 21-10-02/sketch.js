
let squares = [];
var widthS = 50;
var heightS = 50;

function setup() {
  createCanvas(canvasWidth=400, canvasHeigth=400);
  background(20);
  angleMode(DEGREES);

  // print(singleSquare);
  print(squares);
}

function draw() {
  stroke(255);
  noFill();

  for(var i = 0; i < 400; i++){
    var w = 4;
    var h = 4;
    // var h = noise(i*100)*100;
  var x = i*4;
  var y = canvasHeigth/2-(h/2);
  var singleSquare = {
    x: x,
    y: y,
    w: w,
    h: h
  };
  squares.push(singleSquare);
  rect(squares[i].x,squares[i].y,squares[i].w,squares[i].h);
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
