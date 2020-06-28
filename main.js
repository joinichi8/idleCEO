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
