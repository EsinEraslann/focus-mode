let number = 0;

// Sayıya tıklandığında sayıyı artır
document
  .getElementById("button")
  .addEventListener("click", function () {
    number++;
    // Sayıyı göster
    document.getElementById("number").innerHTML = number;
  });



let audio = document.getElementById("myAudio");
let playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.className = "fa-solid fa-dove"; // pause ikonu
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
    playPause.className = "fa-solid fa-cloud-showers-heavy"; // pause ikonu
  } else {
    sound.pause();
    playPause.className = "fa-solid fa-cloud-showers-heavy"; // play ikonu
  }
});





/* 
    var audio = document.getElementById('rainSong');
    var volumeRange = document.getElementById('volumeRange');
    var volumeValue = document.getElementById('volumeValue');

    volumeRange.addEventListener('input', function () {
        audio.volume = volumeRange.value / 100;
        volumeValue.innerText = 'Volume: ' + volumeRange.value;
    });



    var audio = document.getElementById('birdSong');
    var birdRange = document.getElementById('birdRange');
    var birdValue = document.getElementById('birdValue');

    birdRange.addEventListener('input', function () {
        audio.volume = birdRange.value / 100;
        birdValue.innerText = 'Volume: ' + birdRange.value;
    });  */