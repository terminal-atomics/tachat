const net = require('net');

var w, h;

function setup() {
}

function draw() {
  createCanvas(1280, 720);
  getSize();
  createCanvas(w - 20, h - 20);
  background(127);
  noStroke();
  for (var i = 0; i < height; i += 20) {
    fill(129, 206, 15);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
  }
}

function sendToServer() {
  var send = document.getElementById("msg").value;
  document.getElementById("msg").value = null;
  console.log(send);
}

document.addEventListener("keydown", function (e) {
  if (e.which === 116) {
    location.reload();
  }
});

function getSize(){
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  h = window.innerHeight || document.documentElement.clientHeight ||document.body.clientHeight;
}