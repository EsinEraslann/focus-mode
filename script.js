/* function myFunction() {
    document.getElementById(numberUp) . stepUp();
}
 */




/* function myFunction() {
    document.getElementById("myNumber").stepUp();
  } */

/* 
  function myFunction(){
    const numberElement = document.getElementById("number");
    const change = parseInt(numberElement.innerText) + 1;
    numberElement.innerText = change;
  }
 */


  let number = 0;

  // Sayıya tıklandığında sayıyı artır
  document
    .getElementById("button")
    .addEventListener("click", function () {
      number++;
      // Sayıyı göster
      document.getElementById("number").innerHTML = number;
    });