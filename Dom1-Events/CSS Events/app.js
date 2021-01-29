
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}
// Add an event listener to the start button, so that the cat starts moving across the screen when its clicked.
function onStartClick() {
startCatWalk();
}
var startButton= document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);
function onStopClick(){
    window.clearInterval(catTimer);
}
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick); 
function onSpeedClick(){
    movePixels += 5;
    var speed = movePixels * (1000/50);
    document.getElementById('info').innerHTML = 'The cat is running:' + speed;
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);
