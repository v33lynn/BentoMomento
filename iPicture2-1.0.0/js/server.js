var express = require('express'); 
var app = express(); 

var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded());

app.set("view engine", "ejs"); 
app.set("views", (__dirname + "/views") ); 


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QuotingDojoDatabaseSchema');

var CaptionSchema = new mongoose.Schema ({
	name: {type: String, required: true},	
	quote: {type: String, required: true},
	create_at: {type: Date, default: Date.now},
	updated_at: {type: Date, default: Date.now}
}) 

mongoose.model('Caption', CaptionSchema);
var Quote = mongoose.model('Caption');


app.get('/', function(request, response){
	response.render('index'); 
}); 


app.post('/createCaption', function(request, response){
 create new quote record
	var eachCaption = new Caption();
	eachCaption.name = request.body.name;
	eachCaption.quote = request.body.caption;
	eachCaption.save(function(err){
		response.redirect('/');		
	})

}); 



app.listen(1337, function()  {
	console.log('Running With SciSsOrS');
})