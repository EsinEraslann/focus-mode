  let number = 0;

  // Sayıya tıklandığında sayıyı artır
  document
    .getElementById("button")
    .addEventListener("click", function () {
      number++;
      // Sayıyı göster
      document.getElementById("number").innerHTML = number;
    });



    var audio = document.getElementById('rainSong');
    var volumeRange = document.getElementById('volumeRange');
    var volumeValue = document.getElementById('volumeValue');

    volumeRange.addEventListener('input', function () {
        audio.volume = volumeRange.value / 100;
        volumeValue.innerText = 'Volume: ' + volumeRange.value;
    });



    var audio = document.getElementById('birdSong');
    var volumeRange = document.getElementById('volumeRange');
    var volumeValue = document.getElementById('volumeValue');

    volumeRange.addEventListener('input', function () {
        audio.volume = volumeRange.value / 100;
        volumeValue.innerText = 'Volume: ' + volumeRange.value;
    });