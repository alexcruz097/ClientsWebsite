const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
const bodyParser = require("body-parser")
let year = new Date().getFullYear();
let reviews = require('./reviews.json');
let reviewCounter = 1;
let toggle;

// set the view of the engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// dependencies
// function to add or subtract from counter
let nextImg = () => {
	if (reviewCounter <= reviews.length) {
		reviewCounter++;
		console.log("lcick")
	} else if (reviewCounter === reviews.length) {
		reviewCounter = 0;
			console.log("lcick")
	}
};
let prevImg = () => {
console.log("click")
};
// s

//  use public files to use css

app.use(express.static(__dirname + '/public'));
// funtion when the button is click

app.get('/', (req, res) => {
	res.render('home', {
		year: year,
		reviews: reviews,
		reviewCounter: reviewCounter,
		prevImg: prevImg,
		nextImg: nextImg
	});
});

app.listen(PORT, () => {
	console.log('THe port is running in port: ' + PORT);
});
