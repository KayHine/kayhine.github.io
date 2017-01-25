function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("currLoc").innerHTML = "Geolocation disabled";
  }
}

function showPosition(pos) {
    document.getElementById("currLoc").innerHTML = pos.coords.latitude + "," + pos.coords.longitude;
}

$(document).ready(function() {
  $("#getloc").on("click", getLocation);
});
