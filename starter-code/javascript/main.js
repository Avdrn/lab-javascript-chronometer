var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
  if (chrono.currentTime <= 9){
document.getElementById("secUni").innerHTML = chrono.currentTime
  }

}

// function printMinutes() {

// }

// function printSeconds() {

// }

// function printMilliseconds() {

// }

// function printSplit() {

// }

// function clearSplits() {

// }

// function setStopBtn() {

// }

// function setSplitBtn() {

// }

// function setStartBtn() {

// }

// function setResetBtn() {

// }

// Start/Stop Button

var chrono = new Chronometer;

btnLeft.addEventListener('click', startStop)

function startStop(){
  if(btnLeft.getAttribute("class") == "btn start"){
    chrono.startClick();
    btnLeft.innerHTML = "STOP";
    btnLeft.setAttribute("class", "btn stop")
    btnRight.innerHTML = "SPLIT"
    btnRight.setAttribute("class", "btn split")
  } else {
  chrono.stopClick();
  btnLeft.innerHTML = "START";
  btnLeft.setAttribute("class", "btn start")
  btnRight.innerHTML = "RESET"
  btnRight.setAttribute("class", "btn reset")
  }
}

btnRight.addEventListener("click", splitReset)

function splitReset(){
  if (btnRight.getAttribute("class") == "btn split") {
    var splitContainerUl = document.getElementById("splits");
    var newLi = document.createElement("li");
    splitContainerUl.appendChild(newLi);

    if (chrono.digitmin2=== undefined){
      chrono.digitmin2 = 0
    }

    if (chrono.digitsec2 === undefined){
      chrono.digitsec2 =0
    }

    newLi.innerHTML =`${minDec.innerHTML} ${minUni.innerHTML} : ${secDec.innerHTML} ${secUni.innerHTML} `
    debugger
  }

     else {
  chrono.currentTime = 0
  secUni.innerHTML = 0
  secDec.innerHTML = 0
  minUni.innerHTML = 0
  minDec.innerHTML = 0
}
}


// window.clearInterval().

// Reset/Split Button
// btnRight.addEventListener('click', function () {

// });
