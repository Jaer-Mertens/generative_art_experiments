
var squares = [];
var width = 50;
var height = 50;

function setup() {
  createCanvas(canvasWidth=400, canvasHeigth=400);
  background(20);
  for (var i = 0; i < 400; i++) {
       squares[i].x = i;
       squares[i].y = i;
       squares[i].width = i;
       squares[i].height = i;
}
}

function draw() {
  stroke(100);
  rect(canvasWidth/2-(width/2),200, width, height);
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
