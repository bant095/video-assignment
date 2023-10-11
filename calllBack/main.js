function downloadVideo(callback) {
  let myVideoLink =
    "https://www.videezy.com/nature/2004-yellow-flower-stock-video";

  let customLink = document.createElement("a");
  customLink.href = myVideoLink;
  customLink.download = "downloaded-video.mp4";
  document.body.appendChild(customLink);
  customLink.click();
  document.body.removeChild(customLink);

  if (typeof callback === "function") {
    callback();
  }
}

// callback function is defined
function callbackVideo() {
  alert("Successfully Download!");
}
