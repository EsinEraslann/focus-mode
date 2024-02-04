
let number = 0;
// Sayıya tıklandığında sayıyı artır
document
  .getElementById("button")
  .addEventListener("click", function () {
    number++;
    // Sayıyı göster
    document.getElementById("number").innerHTML = number;

    if (number === 5) {
      alert("YOU MAY NEED A CUP OF COFFEE!!");
  }
  });



let audio = document.getElementById("myAudio");
let playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.className = "fa-solid fa-music"; // pause ikonu
  } else {
    audio.pause();
    playPauseBtn.className = "fa-solid fa-dove"; // play ikonu
  }
});



let sound = document.getElementById("rainAudio");
let playPause = document.getElementById("playPause");

playPause.addEventListener("click", function () {
  if (sound.paused) {
    sound.play();
    playPause.className = "fa-solid fa-music"; // pause ikonu
  } else {
    sound.pause();
    playPause.className = "fa-solid fa-cloud-showers-heavy"; // play ikonu
  }
});

let piano = document.getElementById("pianoAudio");
let pianoPlay = document.getElementById("pianoPlay");

pianoPlay.addEventListener("click", function () {
  if (piano.paused) {
    piano.play();
    pianoPlay.className = "fa-solid fa-music"; // pause ikonu
  } else {
    piano.pause();
    pianoPlay.className = "fa-solid fa-moon"; // play ikonu
  }
});



    const volume1 = document.getElementById('rainAudio');
    const volume2 = document.getElementById('myAudio');
    const volume3 = document.getElementById('pianoAudio');
    const volumeRange = document.getElementById('volume-input');

    volumeRange.addEventListener('input', function () {
        volume1.volume = volumeRange.value / 100;
        volume2.volume = volumeRange.value / 100;
        volume3.volume = volumeRange.value / 100;
        volumeValue.innerText = 'Volume:' + volumeRange.value;
    });
