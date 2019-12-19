var currentPlayer = "x"
var counter = 0 ;
var gameEnd = false
function addTurn() {
  counter = counter + 1

}
function addTurn() {
  counter = counter + 1

}function performLogic(buttonId, tileId) {
  $(buttonId).hide();
  $(tileId).text(currentPlayer);
  updatePlayer()
  addTurn()
console.log(counter)}
function updatePlayer() {
  if (currentPlayer === 'x') {
  currentPlayer = 'o';
}else {
currentPlayer ='x';
}

}    
$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});
$('body').css({'background': 'purple', 'text-align': 'center'});
$('body').css({'user-select': 'none'});