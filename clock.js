
var seconds = 0;

var tick = setInterval(clock, 1000);

function clock() {
    seconds++;
    console.log(seconds);
    var secondsDegrees = seconds * 6;
    var minuteDegrees = seconds * 2;
    var hourDegrees = seconds / 10;
    console.log("second degrees " + secondsDegrees);
    console.log("minute degrees " + minuteDegrees);
    console.log("hour degrees " + hourDegrees);

    document.getElementById('second').style.transform="rotate("+secondsDegrees+"deg)";
    document.getElementById('minute').style.transform="rotate("+minuteDegrees+"deg)";
    document.getElementById('hour').style.transform="rotate("+hourDegrees+"deg)";


    //transform = "rotate(" + secondsDegrees + "deg);";




    //document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


//spin the dials
