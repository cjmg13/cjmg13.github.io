$(document).ready(function() {

  var circleOrEx = "o"; // what does this variable represent? This is setting up the 'o' variable.
  var isGameInProgress = true; // what does this variable represent?  If the game has begun.
  var winningCombos = { // what does this variable represent? This represents the grid positions; explain what the keys and values represent
    0: [ //0 is key
      [1, 2], //this multiDimensional Array is values
      [3, 6],
      [4, 8]
    ],
    1: [
      [0, 2],
      [4, 7]
    ],
    2: [
      [0, 1],
      [5, 8],
      [4, 6]
    ],
    3: [
      [0, 6],
      [4, 5]
    ],
    4: [
      [1, 8],
      [2, 6],
      [1, 7],
      [3, 5]
    ],
    5: [
      [2, 8],
      [3, 4]
    ],
    6: [
      [0, 3],
      [2, 4],
      [7, 8]
    ],
    7: [
      [1, 4],
      [6, 8]
    ],
    8: [
      [0, 4],
      [2, 5],
      [6, 7]
    ]
  };

  // Explain what this event does? This sets up the board.
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// Explain these conditions --> it clears out the board
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //Explain --> check if it's a winning combination

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // Explain what this event does --> starts a new game
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //what is this variable --> It sets up the squares
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //what is this if statement doing? --> it clears out the whole board
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //Explain this each function --> checks to see if the square is empty
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  //Explain this funciton, describe the parameters; what are the possible values of the paramaters
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //Explain this nested for loop
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { //Explain this condition
          playerWon = false;
        }
      }

      if (playerWon) { //Explain the condition and every line in the block

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //Explain this condition
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //this exits the loop
      }
    }


  }
})
