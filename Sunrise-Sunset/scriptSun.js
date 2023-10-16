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
            loadSunTimes();
            
        }
    }
    //TODO - construct endpoint url below
    url = 'https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&formatted=0';
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

    
    //
    //TODO - CREATE OUTPUT STRING HERE
    //
    
    sun.innerHTML = output;

};