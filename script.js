// Login Functionality
const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
      alert('Please fill in both fields.');
      return;
    }

    console.log('Logged in:', { username, password });
    window.location.href = 'music-player.html';
  });
}
// Sign-Up Functionality
const signupForm = document.getElementById('signup-form');

if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();

    if (!username || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    console.log('Signed up:', { username, email, password });

    // Redirect to login page after signing up
    alert('Sign up successful! Redirecting to login page...');
    window.location.href = 'index.html';
  });
}


// Music Player Functionality
const musicContainer = document.getElementById('music-container');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const songs = ["hey", "summer", "ukulele"];
let songIndex = 1;

function loadSong(song) {
  title.innerText = song;
  audio.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/music/${song}.mp3?raw=true`;
  cover.src = `https://github.com/bradtraversy/vanillawebprojects/blob/master/music-player/images/${song}.jpg?raw=true`;
}

function playSong() {
  musicContainer.classList.add('play');
  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  audio.pause();
}

playButton.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');
  isPlaying ? pauseSong() : playSong();
});

prevButton.addEventListener('click', () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

nextButton.addEventListener('click', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = `${progressPercent}%`;
});

progressContainer.addEventListener('click', (e) => {
  const newTime = (e.offsetX / progressContainer.clientWidth) * audio.duration;
  audio.currentTime = newTime;
});

audio.addEventListener('ended', () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
});

loadSong(songs[songIndex]);
