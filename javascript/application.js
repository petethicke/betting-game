$(function(){
  var startingFunds = 100;
  
    $( "#userInput" ).on("click", function() {
      var bet = $("#wager").val();
      var guess = $("#guess").val();
      var randomNum = Math.floor((Math.random() * 10) + 1);
 
      if (guess == randomNum) {
        startingFunds = startingFunds + (bet * 2);
      } else if (guess == randomNum + 1 || guess == randomNum - 1) {
        startingFunds = startingFunds;
      } else {
        startingFunds = startingFunds - bet;
      };
      if (startingFunds <= 0) {
        $('#gameOver').text('Game Over!');
        $('#playAgain').html('<button id="refresh">Play Again!</button>')
      };

      $( '#refresh').on('click', function () {
        location.reload();
      });


      $("#actualNumber").text(randomNum);
      $("#actualFunds").text(startingFunds);
    });
});
