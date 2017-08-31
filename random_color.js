function randomColor(){

	var hexNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
	var hex = "#";

	for(var i = 0; i < 6; i++){
		//Random number 0-15
		var rand = Math.floor(Math.random() * 16);
		hex = hex + hexNum[rand];
	}

	return hex;
}

function HEXtoRGB (hex) {
    hex = hex.trim();
    hex = hex[0] === '#' ? hex.substr(1) : hex;
    var bigint = parseInt(hex, 16), h = [];
    if (hex.length === 3) {
        h.push((bigint >> 4) & 255);
        h.push((bigint >> 2) & 255);
    } else {
        h.push((bigint >> 16) & 255);
        h.push((bigint >> 8) & 255);
    }
    h.push(bigint & 255);

    return 'rgb('+h.join()+')';
}

function addColors() {
	var hex, rgb;
  var html = "";
	var number = document.getElementById('num').value;
	for (var i = 0; i < number; i++) {
		hex = randomColor();
		rgb = HEXtoRGB(hex);

		html = html + "<div class='main'><div style='background-color: " + hex + "';" + " class='color'> " + "</div>" + "<div class='color-info'> " + "<center>" + hex + "</br>" + rgb + "</center>" + "</div></div>";
	}
			document.getElementById('colors').innerHTML = html;
}
