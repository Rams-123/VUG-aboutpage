//  Video popup  code
var player;

function openPopup(videoId) {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "https://www.youtube.com/embed/" + videoId;
  modal.style.display = "block";
}

function closePopup() {
  var modal = document.getElementById("popup");
  var videoFrame = document.getElementById("videoFrame");
  videoFrame.src = "";
  modal.style.display = "none";
}
