const { lastfm, discord } = require("./src/config.json");
const { LastFmNode } = require("@wheredidhugo/lastfm");
const { Client } = require("discord-rpc");

const rpc = new Client({ transport: "ipc" });

const l = new LastFmNode({
  api_key: lastfm.apiKey,
  secret: lastfm.secret,
});

const trackStream = l.stream(lastfm.username);

trackStream.start();

window.addEventListener("DOMContentLoaded", () => {
  function replaceText(selector, text) {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  function replaceImg(selector, text) {
    const element = document.getElementById(selector);
    if (element) element.src = text;
  }

  function changeBackground(selector, text) {
    document.getElementsByClassName(selector)[0].style.backgroundImage = "url('" + text + "')";
  }

  trackStream.on("nowPlaying", function (track) {
    //App styling
    replaceText("tName", track.name);
    replaceText("tArtist", track.artist["#text"]);
    replaceImg("tAlbumImg", track.image[3]["#text"]);
    changeBackground("bgImg", track.image[3]["#text"]);
    replaceText("pName", `🎵 ${track.name}`);
    replaceText("pArtist", `👤 ${track.artist["#text"]}`);
    replaceText("pAlbum", `💿 ${track.album["#text"]}`);

    //RPC
    rpc.setActivity({
      details: `🎵 ${track.name}`,
      state: `👤 ${track.artist["#text"]}`,
      largeImageKey: discord.largeImage,
      largeImageText: `💿 ${track.album["#text"]}`,
      startTimestamp: Date.now(),
    });
  });

  trackStream.on("stoppedPlaying", () => {
    rpc.clearActivity();
  });

  rpc.login({ clientId: discord.id }).catch(console.error);
});
