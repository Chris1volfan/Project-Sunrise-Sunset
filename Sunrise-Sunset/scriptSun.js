//-----------------------------------
//Chris Brown
//WEBT 2300
//Section 01
//Projece-Sunrise-Sunset
//Fall 2023
//-----------------------------------
/*
Sumary: The program uses functions to allow users to select from four locations
to call the API: https://api.sunrise-sunset.org to display the following 
for selected location: Sunrise Sunset times, Day Length, and
Civil/Nautical/Astronomical Twilight Begin and End times.
*/
const sun = document.getElementById('sun');

function getTimes(lat, long) {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            sunTimes = JSON.parse(xhr.responseText);
            // call the function loadSunTimes //
            loadSunTimes(sunTimes);
            
        }
    }
    //TODO - construct endpoint url below
    url = "https://api.sunrise-sunset.org/json?lat=lat=" + lat + "&lng=" + long + "&formatted=0";
    xhr.open('GET', url);
    xhr.send();
}

document.querySelector('#suntimes').addEventListener("change", function() {
    
    selectCity = this.value;

    switch (selectCity) {
        case "kingsport":
            getTimes(36.538960, -82.540848);
            break;
        case "newyork":
            getTimes(40.712776, -74.005974);
            break;
        case "chicago":
            getTimes(41.878113, -87.629799);
            break;
        case "losangeles":
            getTimes(34.052235, -118.243683);
            break;
      }
});

function loadSunTimes(sunTimes) {

    
    let output = '<h4 style="color: blue;">All times are local to your current location:</h4>';
    output += '<hr>';

    let sunriseTime = new Date (sunTimes.results.sunrise);
    output += `<p style =" color: red "; ">Sunrise: ${sunriseTime.toLocaleString()}`;
    output += "<br>";

    let sunsetTime = new Date (sunTimes.results.sunset);
    output += 'Sunset:' + sunsetTime.toLocaleString() + "</p>";
    
    output += "<hr>";

    let dayLength = new Date(sunTimes.results.day_length * 1000).toISOString().substring(11, 16)
    output += '<p style =" color: green;"; ">Day Length: ' + dayLength + ' hr:ss  </p>';

    sun.innerHTML = output;

}