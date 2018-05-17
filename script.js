var apiKey = "d2caa1eb23f03525c536b560e0452345";

var pic_1, d_1, temp_1, humid_1, wind_1, dir_1, zip_1=53202; //Milwaukee
var pic_2, d_2, temp_2, humid_2, wind_2, dir_2, zip_2=55402; //Minneapolis
var pic_3, d_3, temp_3, humid_3, wind_3, dir_3, zip_3=60654; //Chicago
var pic_4, d_4, temp_4, humid_4, wind_4, dir_4, zip_4=75219; //Dallas

function weatherByZip(zip){//This make API call, send request(Helper Function)
	var url = "http://api.openweathermap.org/data/2.5/weather?" +
	"zip=" + zip +
	"&APPID=" + apiKey+
	"&units=imperial";//imperial=Farhenheit and mph
	
    var xmlhttp = new XMLHttpRequest();
	
    xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var data = JSON.parse(xmlhttp.responseText);
			var weather = {};
			weather.code = data.weather[0].icon;
			weather.description = data.weather[0].description;
			weather.temp = Math.round(data.main.temp);
			weather.humidity = data.main.humidity;
			weather.wind = data.wind.speed;
			weather.direction = degreesToDirection(data.wind.deg);
			weather.city= data.name;
			
			console.log(weather);
			
			update(weather);
		}
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();   
}
function update(weather){
	if(weather.city == "Milwaukee"){
		pic_1.src = "https://openweathermap.org/img/w/"+ weather.code + ".png";
		d_1.innerHTML = "\""+weather.description+"\"";
		temp_1.innerHTML = weather.temp;
		humid_1.innerHTML = weather.humidity;
		wind_1.innerHTML = weather.wind;
		dir_1.innerHTML = weather.direction;
	}
	else if(weather.city == "Minneapolis"){
		pic_2.src = "http://openweathermap.org/img/w/"+ weather.code + ".png";
		d_2.innerHTML = "\""+weather.description+"\"";
		temp_2.innerHTML = weather.temp;
		humid_2.innerHTML = weather.humidity;
		wind_2.innerHTML = weather.wind;
		dir_2.innerHTML = weather.direction;
	}
	else if(weather.city == "Chicago"){
		pic_3.src = "http://openweathermap.org/img/w/"+ weather.code + ".png";
		d_3.innerHTML = "\""+weather.description+"\"";
		temp_3.innerHTML = weather.temp;
		humid_3.innerHTML = weather.humidity;
		wind_3.innerHTML = weather.wind;
		dir_3.innerHTML = weather.direction;
	}
	else{
		pic_4.src = "http://openweathermap.org/img/w/"+ weather.code + ".png";
		d_4.innerHTML = "\""+weather.description+"\"";
		temp_4.innerHTML = weather.temp;
		humid_4.innerHTML = weather.humidity;
		wind_4.innerHTML = weather.wind;
		dir_4.innerHTML = weather.direction;
	}
}//updates weather info(Helper Function)

function degreesToDirection(degrees){
    var range = 360/16; //360 deg=16 possible directions
    var low = 360 - range/2;        
    var high = (low + range) % 360; //making sure deg isnt above 360
    var angles = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    
	for( i in angles ) {
		if(degrees >= low && degrees < high){ //round up with deg

			return angles[i];
		}
		
		
		low = (low + range) % 360;
		high = (high + range) % 360;//making sure deg is between 0-360
    }
    return "N"; 
}//converted degrees into compass direction(Helper Function)


window.onload = function(){
	pic_1 = document.getElementById("pic_1");
	d_1 = document.getElementById("d1");
	temp_1 = document.getElementById("temp_1");
	humid_1 = document.getElementById("humid_1");
	wind_1 = document.getElementById("wind_1");
	dir_1 = document.getElementById("dir_1");
	
	pic_2 = document.getElementById("pic_2");
	d_2 = document.getElementById("d2");
	temp_2 = document.getElementById("temp_2");
	humid_2 = document.getElementById("humid_2");
	wind_2 = document.getElementById("wind_2");
	dir_2 = document.getElementById("dir_2");
	
	pic_3 = document.getElementById("pic_3");
	d_3 = document.getElementById("d3");
	temp_3 = document.getElementById("temp_3");
	humid_3 = document.getElementById("humid_3");
	wind_3 = document.getElementById("wind_3");
	dir_3 = document.getElementById("dir_3");
	
	pic_4 = document.getElementById("pic_4");
	d_4 = document.getElementById("d4");
	temp_4 = document.getElementById("temp_4");
	humid_4 = document.getElementById("humid_4");
	wind_4 = document.getElementById("wind_4");
	dir_4 = document.getElementById("dir_4");
	
	weatherByZip(zip_1);
	weatherByZip(zip_2);
	weatherByZip(zip_3);
	weatherByZip(zip_4);
	
}