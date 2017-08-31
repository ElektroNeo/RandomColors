function randomColor(){

	var hexNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
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
  var html = "", left, top, j = 0;
	for (var i = 0; i < 70; i++) {
		hex = randomColor();
		rgb = HEXtoRGB(hex);
		left = j*130;
		top = Math.floor((i/10))*180;
		j++;
		if(j == 10)
			j = 0;
		html = html + "<div class='main'; style='width: 100px; height: 100px; left: "+ left +"px; top: " + top + "px;'><div style='background-color: " + hex + "';" + " class='color'> " + "</div>" + "<div class='color-info'> " + "<center>" + hex + "</br>" + rgb + "</center>" + "</div></div>";
	}
			document.getElementById('colors').innerHTML = html;
}
