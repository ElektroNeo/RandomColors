function randomColor(){

	var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	var hex = "#",
		  rgb,
		  r = 0, g = 0, b = 0;

	for(var i = 0; i < 6; i++){
		//Random number 0-15
		var rand = Math.floor(Math.random() * 16);

		hex += a[rand];

		//For HEX to RGB
		if(i == 0)
			r = rand*16;
		if (i == 1)
			r += rand;
		if (i == 2)
			g = rand*16;
		if (i == 3)
			g += rand;
		if (i == 4)
			b = rand*16;
		if (i == 5)
			b += rand;
	}

	//RGB color
	rgb = "rgb (" + r + ", " + g + ", " + b + ")";

	document.getElementById('color-info').innerHTML = "HEX: " + hex + "</br>" + "RGB: " + rgb;
	document.getElementById('color-info').style.backgroundColor = hex;
	var textColor;

	if ((r < 128 && g < 128) || (r < 128 && b < 128) ||
			(g < 128 && b < 128) || (r < 128 && g < 128 && b < 128)) {
		textColor = "rgb(255,255,255)";
	} else {
		textColor = "rgb(0,0,0)";
	}
	document.getElementById('color-info').style.color = textColor;
	document.getElementById('color-info').style.boxShadow = "0px 5px 5px 0px " + "rgba(" + r + "," + g + "," + b + "," + "0.7";

	var storeColorDiv = document.getElementById('storeColor');

	var colorLenght = storeColorDiv.getElementsByTagName("DIV").length;
	if (colorLenght > 0 && document.getElementById('removeClr') == null) {
		addRemoveButton();
	}
}

function removeColor() {
	var storeColorDiv = document.getElementById('storeColor');
	var colorLenght = storeColorDiv.getElementsByTagName("DIV").length;
	var stored = document.getElementById('storeColor');

	stored.removeChild(stored.childNodes[0]);

	if (colorLenght == 1 && document.getElementById('removeClr') != null) {
			deleteRemoveButton();
			return;
	}
}

function addRemoveButton() {
	document.getElementById('buttons').innerHTML += "<button onclick='removeColor()' type='button' id='removeClr' class='btn-dark'>-</button>";
}

function deleteRemoveButton() {
	var button = document.getElementById('removeClr');
	button.parentNode.removeChild(button);
}

function addColor() {
	var storeColor = document.getElementById('storeColor');
	var clon = document.getElementById('color-info').cloneNode(true);

	storeColor.insertBefore(clon, storeColor.childNodes[0]);

	randomColor();
}
