var currLoc = document.getElementById("currLoc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    currLoc.innerHTML = "Geolocation disabled";
  }
}

function showPosition(pos) {
  currLoc.innerHTML = pos.coords;
}

$(document).onload(function() {
  $("#getloc").on("click", getLocation);
});
