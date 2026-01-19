// 1. Load the YouTube Iframe API
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Create the YouTube player
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("youtube-bg", {
    videoId: "NuCat9DKc-I", // <-- Replace with your YouTube ID
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      playlist: "NuCat9DKc-I", // same as videoId for looping
      mute: 1,
      rel: 0,
    },
    events: {
      onReady: function (e) {
        e.target.mute();
        e.target.playVideo();
      },
    },
  });
}
