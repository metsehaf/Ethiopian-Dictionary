var express = require("express");
var cors = require('cors');
var app = express();

var ethiopianTerms = [
	{
		term: "selam",
		defined: "Hi"
	},
	{
		term: "endet neh",
		defined: "How are you?"
	},
	{
		term: "Enquan des aleh",
		defined: "Congratulation!"
	},
	{
		term: "Betesebotceh endet natchew",
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