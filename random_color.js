function randomColor(){

	var a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	var color = "#",
		  rgb = "rgb (",
		  r = 0, g = 0, b = 0;

	for(var i = 0; i < 6; i++){
		//Random number 0-15
		var rand = Math.floor(Math.random() * 16);

		color = color + a[rand];

		//For HEX to RGB
		if(i == 0)
			r = rand*16;
		if (i == 1)
			r = r + rand;
		if (i == 2)
			g = rand*16;
		if (i == 3)
			g = g + rand;
		if (i == 4)
			b = rand*16;
		if (i == 5)
			b = b + rand;
	}

	//RGB color
	rgb = rgb + r + ", " + g + ", " + b + ")";

	document.getElementById('color').style.backgroundColor = color;
	document.getElementById('color').style.boxShadow = "0px 0px 30px 5px " + color;


	document.getElementById('color-info').innerHTML = "<div style='background-color: " + color + "' class='alert alert-primary' role='alert'><center>HEX: " + color + "</br>" + "RGB: " + rgb + "</center></div>";

}
