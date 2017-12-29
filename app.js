var express = require("express");
var cors = require('cors');
var app = express();

var ethiopianTerms = [
	{
		term: "ሰላም",
		defined: "Hi"
	},
	{
		term: "እንዴት：ነህ",
		defined: "How are you?"
	},
	{
		term: "እንኳን：ደስ：አለህ",
		defined: "Congratulation!"
	},
	{
		term: "ቤተሰቦችህ：እንዴት：ናቸው？",
		defined: "How are your parents?"
	}
];

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
app.use(cors());

app.get("/dictionary-api", function(req, res){
	res.json(ethiopianTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;