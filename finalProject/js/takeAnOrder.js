$(document).ready(function() {

  //$("#log").append("<br>added some text");

  //  $("#").on("", function() {   });

  // mouseleave and mouse enter
  $("#myButton").on("mouseenter", function() {
      $("#log").append("<br>Button mouseenter");
      $(this).text("Make Payment");
    })
    .on("mouseleave", function() {
      $("#log").append("<br>Button mouseleave");
      $(this).text("Accept Order");
    });


  // focus
  $("#mySingleLineText").on("focus", function() {
      $("#log").append("<br>input focus");
      $(this).css("background-color", "#F7F8E0")

    })
    //blur
    .on("blur", function() {
      $("#log").append("<br>input blur");
      $(this).css("background-color", "#FFF")

    });
  //change colour
  // $("#mySelect").on("change", function() {
  //   var val = $(this).val();


  // });


  //user clicks button
  $("#myButton").on("click", function() {

    var myInput = $("#mySingleLineText").val();
    var myInput2 = $("#mySingleLineText2").val();
    var myTextarea = $("#myTextarea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val();

    var myCheckValues = [];
    //each is a jquery loop for objects/arrays
    $("[name='vehicle']:checked").each(function() {
      myCheckValues.push($(this).val());
    });

    $("#log").append("<br>User clicked the button");

    $("#log").append("<br>Name: " + myInput);
    $("#log").append("<br>E-mail: " + myInput2);
    $("#log").append("<br>Additional Requests: " + myTextarea);
    $("#log").append("<br>Size: " + mySelect);
    $("#log").append("<br>Address: " + myRadio);
    $("#log").append("<br>Extra Info: " + myCheckValues.join());

    //Order Form
    $("#recipt").append("<br>Name: " + myInput);
    $("#recipt").append("<br>E-mail: " + myInput2);
    $("#recipt").append("<br>Additional Requests: " + myTextarea);
    $("#recipt").append("<br>Size: " + mySelect);
    $("#recipt").append("<br>Address: " + myRadio);
    $("#recipt").append("<br>Extra Info: " + myCheckValues.join());

    //message box appears if you forget to fill out e-mail
    console.log("cats" + myInput2)
    if (!myInput2) {
      alert("You forgot to write an e-mail");
      $("#mySingleLineText2").css("background-color", "#EE6363");
    }

    //message box appears if you forgot to fill out name
    console.log("cats" + myInput)
    if (!myInput) {
      alert("You forgot to write a name");
      $("#mySingleLineText").css("background-color", "#EE6363");
    }

    // Message appears/pop's up when number is changed
    $("#mySelect").on("change", function() {
      $("#mySelectMessage").html("");
      if ($('#mySelect').val() === '1') {
        $("#mySelectMessage").html("Size Unavailable");
      } else {
        alert("Size is available!");

      }

    });

  })

});
