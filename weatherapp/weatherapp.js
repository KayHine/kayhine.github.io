var latitude = 0;
var longitude = 0;
var APPID = "374a1697ad3f46a4825fd477b7729539";

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    document.getElementById("currLoc").innerHTML = "Geolocation disabled";
  }
}
//Function to execute on successful geolocation
function geoSuccess(position){
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  document.getElementById("currLoc").innerHTML = "<p>Latitude: " + latitude + "° <br>Longitude: " + longitude + "°</p>";
}

function geoError(){
  document.getElementById("currLoc").innerHTML = "Unable to retrieve your location";
}

function getWeather(){
  $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=" + APPID,
      success: function(weatherData){
        var post = weatherData.shift();
        $("#weather").text(post.coord);
      }
  });
}

$(document).ready(function() {
  getLocation();
  $("#getWeather").on("click", getWeather);
});
