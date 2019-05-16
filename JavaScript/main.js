console.log('Enter my domain');

function Klik() {
  alert("Hello World");
}

$(document).ready(function(){
    $("p").click(function(){
      alert("It works");
    });
  });

  /* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}