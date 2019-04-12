var r1=require('readline');
const request = require('request');
const argv = require('yargs').argv;
var prompts =r1.createInterface(process.stdin,process.stdout);


let apiKey = 'b9cbad5f23b29e6dc7e09d9c4408c53b';
let city = argv.c || 'Ranchi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    var x= weather.main.temp;
    let y= ((x-32)*5)/9
    let message = `It's ${y} Degree Celcius in ${weather.name}!`;
    console.log(message);
 	prompts.question("You want to see in Fahrenheit<<<Enter Yes>>>",function(z){
 		var msg="";  
    if (z=="yes"){
    	msg="Here it is " +(x);
    	console.log(msg);}
    else
    	{console.log("Bye");
    

    }
    process.exit();

    });
}
});