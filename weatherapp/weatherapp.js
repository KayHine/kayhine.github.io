function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  } else {
    document.getElementById("currLoc").innerHTML = "Geolocation disabled";
  }
}
//Function to execute on successful geolocation
function geoSuccess(position){
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  document.getElementById("currLoc").innerHTML = "<p>Latitude: " + latitude + "° <br>Longitude: " + longitude + "°</p>";
}

function geoError(){
  document.getElementById("currLoc").innerHTML = "Unable to retrieve your location";
}

/*function getWeather(){
  getLocation();
  $.ajax({

  });
}*/

$(document).ready(function() {
  $("#getloc").on("click", getLocation);
});

