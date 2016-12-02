
var d = new Date();
var n = d.getTime();
//initialize seconds since 1970, adding four hours.
var seconds = (n /1000) + (60 *60 *4);
console.log("time since 1970" + n);

var tick = setInterval(clock, 1000);

function clock() {
    seconds++;
console.log(seconds);
    var secondsDegrees = seconds * 6;
    var minuteDegrees = seconds * 6 / 60;
    var hourDegrees = seconds * 6 / 60 / 12;
console.log("second degrees " + secondsDegrees);
console.log("minute degrees " + minuteDegrees);
console.log("hour degrees " + hourDegrees);

    document.getElementById('second').style.transform="rotate("+secondsDegrees+"deg)";
    document.getElementById('minute').style.transform="rotate("+minuteDegrees+"deg)";
    document.getElementById('hour').style.transform="rotate("+hourDegrees+"deg)";
}
