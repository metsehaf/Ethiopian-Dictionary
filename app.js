var express = require("express");
var cors = require('cors');
var bodyParser = require("body-parser");
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));
app.use(cors());

app.get("/dictionary-api", function(req, res){
	res.json(ethiopianTerms);
});

app.post("/dictionary-api", function(req, res) {
    ethiopianTerms.push(req.body);
    res.json(ethiopianTerms);
});

app.delete("/dictionary-api/:term", function(req, res){
    ethiopianTerms = ethiopianTerms.filter(function(definition){
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(ethiopianTerms);
});


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;