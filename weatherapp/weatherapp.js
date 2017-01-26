function getLocation() {
  var loc = document.getElementById("currLoc");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    loc.innerHTML = "Geolocation disabled";
  }
}
//Function to execute on successful geolocation
function geoSuccess(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  loc.innerHTML = "<p>Latitude: " + latitude + "° <br>Longitude: " + longitude + "°</p>";
}

function geoError(){
  loc.innerHTML = "Unable to retrieve your location";
}

/*function getWeather(){
  getLocation();
  $.ajax({

  });
}*/

$(document).ready(function() {
  $("#getloc").on("click", getLocation);
});
