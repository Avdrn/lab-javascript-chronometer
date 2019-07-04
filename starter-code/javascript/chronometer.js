class Chronometer {
    currentTime = 0; // seconds since start
    intervalId = 0;
    minutes = 0;
    seconds = 0;
    digitsec1 = "0";
    digitsec2 = "0";
    digitmin1 = "0";
    digitmin2 = "0";
  

    startClick = function() {
    this.intervalId = setInterval(()=>{
      ++this.currentTime;
      this.getSecondsMinutes();
      this.twoDigitsNumber();
      this.printSecMin();
      console.log(this.currentTime);

    }, 1000);
   }

   getSecondsMinutes() {
    this.seconds = this.currentTime;
    if (this.currentTime === 59){
      this.currentTime = 0;
      this.minutes++
        }  
      console.log(`seconds: ${this.seconds}`);
      console.log(`minutes: ${this.minutes}`);
  }

  twoDigitsNumber() {
    var secString =  this.seconds.toString();
    var minString = this.minutes.toString();

    this.digitsec1 = secString[0];
    this.digitsec2 = secString[1];
    this.digitmin1 = minString[0];
    this.digitmin2 = minString[1];
    
    console.log(
      `digit sec 1 : ${this.digitsec1} 
      digit sec 2:${this.digitsec2}
      digit min 1: ${this.digitmin1} 
      digit min 2:${this.digitmin2}`)
  }
  
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {

  }
  printSecMin() {

    // seconds

    if (this.digitsec2 === undefined) {
      document.getElementById("secUni").innerHTML = this.digitsec1;
      document.getElementById("secDec").innerHTML = 0;
    } else {
      document.getElementById("secUni").innerHTML = this.digitsec2;
      document.getElementById("secDec").innerHTML = this.digitsec1;
    };

  //   minutes

  if (this.digitmin2 === undefined) {
    document.getElementById("minUni").innerHTML = this.digitmin1;
    document.getElementById("minDec").innerHTML = 0;
  } else {
    document.getElementById("minUni").innerHTML = this.digitmin2;
    document.getElementById("minDec").innerHTML = this.digitmin1;
  };
 
  }
  

}
