/* main.js */
var bottle = 0;

function bottleClick(number) {
  bottle = bottle + number;
  document.getElementById('bottle').innerHTML = bottle;
}

var money = 0;

function sellbottle() {
  if(bottle > 0)
  {
    bottle = bottle - 1;
    document.getElementById('bottle').innerHTML = bottle;
    document.getElementById('money').innerHTML
    = Math.round(money += 0.4 * 100) / 100;
  }
}

// bussiness.html functions
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
