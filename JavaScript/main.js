console.log('Enter my domain');

function Klik() {
  alert("Hello World");
}

$(document).ready(function(){
    $("works").click(function(){
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

// Below function Executes on click of login button.
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "abra" && password == "cadabra") {
    alert ("Welcome");
    $("#mainDiv").html("Here we go");
    }
    else{
        alert("Try again");
      }
      }

      $(document).ready(function() {
        $("#myButton").click(function() {
          $("#mainDiv").html("Here we go");
        });
      });

      function myFunction() {
        var x = document.getElementById("yourname").value;
        document.getElementById("name").innerHTML = x;
      }

      $(document).ready(function() {
        $("#ajaxbutton").click(function() {
          $("#Ajax").load("ajax.html");
        });
      });

      var num = 100;
      var radius = 2;
      var max = 300;
      createRandomNodes(100, 2, 300);

      var btnReset = document.getElementById("btnReset");
      btnReset.addEventListener("click", function() {
          createRandomNodes(num, radius, max);
      });

      