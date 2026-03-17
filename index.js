document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("yt");
  iframe.src += "&autoplay=1";
}, {once: true});
