document.addEventListener("DOMContentLoaded", () => {
  const iframe = document.getElementById("yt");
  iframe.src += "&autoplay=1";
  iframe.src -= "&mute=1";
  iframe.src += "&mute=0";
}, {once: true});
