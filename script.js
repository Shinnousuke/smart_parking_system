// Vehicle selection
const vehicleButtons = document.querySelectorAll(".vehicle");
let selectedVehicle = null;

vehicleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    vehicleButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedVehicle = btn.dataset.type;

    filterLocations(selectedVehicle);
  });
});

// Restriction rules
const allowedLocations = {
  bike: ["Basement", "Amphitheatre"],
  scooty: ["Basement", "Slope", "Viklang Parking"],
  car: ["NUV School Ground"]
};


// Location buttons
// script.js

// Get all location buttons
const locationButtons = document.querySelectorAll('.location-btn');
const videoSection = document.getElementById('video-section');
const parkingVideo = document.getElementById('parkingVideo');
const videoTitle = document.getElementById('video-title');

locationButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const place = btn.getAttribute('data-place');

        if(place === "NUV School Ground") {
            // Show the video section
            videoSection.classList.remove('hidden');
            videoTitle.textContent = `Live Parking Slot Detection: ${place}`;
            
            // Set the video feed source
            parkingVideo.src = "http://127.0.0.1:5000/video_feed"; // or your server IP if hosted
        } else {
            // Hide video section if another location is selected
            videoSection.classList.add('hidden');
        }
    });
});

// Videos for each location
const videoSources = {
  "Basement": "videos/basement.mp4",
  "NUV School Ground": "videos/nuv_school.mp4",
  "Viklang Parking": "videos/viklang.mp4",
  "Amphitheatre": "videos/amphitheatre.mp4",
  "Slope": "videos/slope.mp4"
};

// Enable/disable locations based on vehicle type
function filterLocations(vehicle) {
  locationButtons.forEach(btn => {
    if (allowedLocations[vehicle].includes(btn.dataset.place)) {
      btn.disabled = false;
      btn.classList.remove("disabled");
    } else {
      btn.disabled = true;
      btn.classList.add("disabled");
    }
  });
}


// Load video on location click
locationButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const place = btn.dataset.place;

    videoTitle.textContent = `Live Parking Slot Detection - ${place}`;
    videoElement.src = `/video/${place}`; // 🔥 stream from Flask
    videoElement.type = "video/mp4"; // ensure browser treats it right
    videoSection.classList.remove("hidden");
  });
});
