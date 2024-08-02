
let map;
let marker;

// Function to initialize Google Map with default coordinates
function initMap() {
  const defaultCoordinates = { lat: 37.422, lng: -122.084 };
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: defaultCoordinates,
  });
  
  marker = new google.maps.Marker({
    position: defaultCoordinates,
    map: map,
  });
}

// Function to update map based on input coordinates
function updateMap() {
  const latitude = parseFloat(document.getElementById("latitudeInput").value);
  const longitude = parseFloat(document.getElementById("longitudeInput").value);
  
  if (isNaN(latitude) || isNaN(longitude)) {
    alert("Please enter valid coordinates.");
    return;
  }
  
  const newCoordinates = { lat: latitude, lng: longitude };
  
  map.setCenter(newCoordinates);
  marker.setPosition(newCoordinates);
  document.getElementById("map").style.display = "block";
}

// Function to get current location coordinates and display as text
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById("latitudeInput").value = latitude.toFixed(6);
        document.getElementById("longitudeInput").value = longitude.toFixed(6);
        
        document.getElementById("coordinates").innerText = `Latitude: ${latitude.toFixed(6)}, Longitude: ${longitude.toFixed(6)}`;
      },
      function(error) {
        console.error('Error occurred while getting geolocation:', error);
        alert('Error occurred while getting your location. Please try again later.');
      }
    );
  } else {
    alert('Geolocation is not supported by your device or browser.');
  }
}

// Event listener for Get Coordinates button (Get My Location)
document.getElementById("getCoordinatesBtn").addEventListener("click", getCurrentLocation);
// Event listener for Show Map button
document.getElementById("showMapBtn").addEventListener("click", updateMap);
