//Student Name: Mishra, Prajal ; Project Name: Project 1 (October 19, 2016)
 // Put your Last.fm API key here
/*var api_key = "";

function sendRequest () {
    var xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
    var artist = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
    xhr.send(null);
}*/


var api_key = "d1e71b9ca6a781ea06e772307f9dccb1";



function sendRequest () {
    var xhr = new XMLHttpRequest();
   // var method = "artist.getinfo";
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var json = JSON.parse(this.responseText);
            
            //console.log(json.weather[0].main);
            var mySunrise = new Date(json.sys.sunrise * 1000);
            var mySunset = new Date(json.sys.sunset * 1000);
            document.getElementById("name").innerHTML = json.name;
            document.getElementById("geo").innerHTML = "Latitute: "+json.coord.lat+" Longitude: "+json.coord.lon;
            document.getElementById("sunrise").innerHTML = mySunrise.getHours()+" : "+mySunrise.getMinutes()+" : "+mySunrise.getSeconds();
            
            document.getElementById("sunset").innerHTML = mySunset.getHours()+" : "+mySunset.getMinutes()+" : "+mySunset.getSeconds();
            
            document.getElementById("pressure").innerHTML = json.main.pressure;
            
            document.getElementById("humidity").innerHTML = json.main.humidity;
            
            document.getElementById("temp").innerHTML = ((json.main.temp - 273.15) * 9/5 + 32).toFixed(2) +" F ("+(json.main.temp - 273.15).toFixed(2)+" C)";
            document.getElementById("minTemp").innerHTML = ((json.main.temp_min - 273.15) * 9/5 + 32).toFixed(2) +" F ("+(json.main.temp_min - 273.15).toFixed(2)+" C)";
            document.getElementById("maxTemp").innerHTML = ((json.main.temp_max - 273.15) * 9/5 + 32).toFixed(2) +" F ("+(json.main.temp_max - 273.15).toFixed(2)+" C)";
            
           
            document.getElementById("clouds").innerHTML = json.clouds.all;
//console.log (json.weather.main);
            
            if (json.weather[0].main == "Clear")
                document.getElementById("advice").innerHTML = "Its a clear day. Have fun!";
            else
            {
                if(json.weather[0].main == "Rain")
                    document.getElementById("advice").innerHTML = "Its a Rainy Day. Don't forget to take an Umbrella if you plan to go out.";
                else if (json.weather[0].main == "Snow")
                    document.getElementById("advice").innerHTML = "Its a Snowy Day. Don't forget to wear a Coat.";
                else
                document.getElementById("advice").innerHTML = "Its not a good weather. Stay safe";
            }

            console.log(json.main.humidity);
            console.log(json.clouds.all);

          if ((json.weather[0].main == "Snow") || (json.weather[0].main == "Rain") || (json.main.humidity > 75) || (json.clouds.all > 75))
                document.getElementById("visibility").innerHTML = "Low";
            else if (json.weather[0].main == "Extreme")
                document.getElementById("visibility").innerHTML = "Very Low";
            else
                document.getElementById("visibility").innerHTML = "High";

            document.getElementById("display").style.visibility = "visible";
            //var templist = [cityName, g_lon, g_lat,sunset,sunrise, pressure, humidity,temp, min_temp,max_temp,clouds];
            //var str = JSON.stringify(json,undefined,2);
            //document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
        }
    };
    xhr.send(null);
}
