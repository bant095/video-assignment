async function downloadVideo(url, filename) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement("a");
    link.href = "https://www.videezy.com/nature/2004-yellow-flower-stock-video";
    link.download = "falling-strawberries-video-4k";

    document.body.appendChild(link);

    setTimeout(function () {
      link.click();
      document.body.removeChild(link);
      resolve(); // This Resolve the promise to indicate success
    }, 1000); // This Delay the click event to ensure the anchor element is properly appended
  });
}

var downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", async function () {
  try {
    await downloadVideo(
      "https://www.videezy.com/nature/2004-yellow-flower-stock-video",
      "video.mp4"
    );
    console.log("Video downloaded successfully");
  } catch (error) {
    console.error("Error downloading video:", error);
  }
});

/*
      function downloadVideoPromise(url) {
        return fetch(url)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.style.display = "none";
            a.href = url;
            a.download = "video.mp4";
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          });
      }

      // Usage
      downloadVideoPromise("https://www.videezy.com/free-video/mp4-videos")
        .then(() => {
          console.log("Video downloaded successfully");
        })
        .catch((error) => {
          console.error("Download failed:", error);
        });
  */
