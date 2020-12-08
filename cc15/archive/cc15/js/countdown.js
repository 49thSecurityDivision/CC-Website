function updateCountdown() {
    var ticks = (new Date("april 26, 2019 8:00 EST")).getTime() - (new Date().getTime());
    if ( ticks < 1 ) { return; }

    var output = "April 26, 2019 - " +
	Math.floor(ticks / 86400000).toString() + ":" +
	Math.floor((ticks % 86400000) / 3600000).toString() + ":" +
	Math.floor((ticks % 3600000) / 60000).toString() + ":";

    var buffer = Math.floor((ticks % 60000) / 1000).toString();
    output += ((buffer.length < 2) ? ("0"+buffer) : (buffer));
    //Javascript doesn't have a ljust builtin I don't know about does it?
    
    
    if ( !output.includes("NaN") ) {  //   ;)
	document.getElementById("countdown").innerHTML = output;
    }
}

function altCountdown() {
    document.getElementById("countdown").innerHTML = "Day:Hr:Min:Sec";
}

setInterval( updateCountdown, 300 );
