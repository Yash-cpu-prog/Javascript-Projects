const songs = [
  {
    title: "Kesariya mp3",
    
    src: "songs/song1.mp3",
    cover: "https://lh3.googleusercontent.com/CH0SThQN0HOk2eV81GGA-Tiftn58G48iy8lEyKNXJjbDSI9ApKKnmt4ncwr5gO_mZoQvFF3HPfHtky1Y"
  },
  {
    title: "Dooron Dooron.mp3",
   
    src: "songs/song2.mp3",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/25/d1/ba/25d1ba06-be03-e3d4-483a-46e1c8152e42/cover.jpg/800x800cc.jpg"
  },
  {
    title: "Aashiqui 2 mp3",
   
    src: "songs/song3.mp3",
    cover: "https://tse3.mm.bing.net/th/id/OIP.7HWEfm8ONOYWZlrtvK6Y2gHaGi?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentSong = 0;
let isPlaying = false;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  cover.src = song.cover;
  audio.src = song.src;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

prevBtn.addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(songs[currentSong]);
  playSong();
});

loadSong(songs[currentSong]);
