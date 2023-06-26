let message= "hmmmmmm";

function consoleLogStyler(color, background, fontSize, text) {
	var message = "%c" + text;
	var style = `color: ${color};`;
	style += `background: ${background};`;
	style += `font-size: ${fontSize};`;
	style += `padding: 10px; border-radius: 50px; border: 2px solid #00e`;
	
	console.log(message, style);
}

function celebrateStyle(reason) {
	var fontStyle = "color: tomato; font-size: 20px";
	switch (reason) {
		case "BIRTHDAY":
			console.log(`%cHappy Birthday`, fontStyle);
			break;
		case "CHAMPIONS":
			console.log(`%cCongrats on the title`, fontStyle);
			break;
		default:
			console.log(`%c${message}`, fontStyle);
	}
}

function styleAndCelebrate(color, background, fontSize, text, reason) {
	consoleLogStyler(color, background, fontSize, text);
	celebrateStyle(reason);
}

consoleLogStyler("#1d56c3", "#ede6db", "40px", "CONGRATULATIONS");
celebrateStyle("BIRTHDAY");
styleAndCelebrate("#ef7c8e", "#fae8e0", "40px", "CONGRATULATIONS", "CHAMPIONS");