$(document).ready(function () {

    //$("#log").append("<br>added some text");

    //  $("#").on("", function() {   });

<!-- when mouse enters, will change  -->
    $("#myButton").on("mouseenter", function () {
            $(this).text("ORDER NOW!!!");
        })
        .on("mouseleave", function () {
            $(this).text("Click Me!");
        });
    
<!-- makes text red when clicking on text -->

    $("#mySingleLineText").on("focus", function () {
            $(this).css("background-color", "##DF0101")

        })
        .on("blur", function () {
            $(this).css("background-color", "#FFF")

        });

    $("#mySelect").on("change", function () {
        var val = $(this).val();
        $("#mySelectMessage").html(val + " is a nice selection!");

    });


    //user clicks button
    $("#myButton").on("click", function () {
      

        var myInput = $("#mySingleLineText").val();
        var myTextarea = $("#myTextarea").val();
        var mySelect = $("#mySelect").val();
        var myRadio = $("[name='gender']:checked").val();

        var myCheckValues = [];
        //each is a jquery loop for objects/arrays
        $("[name='vehicle']:checked").each(function () {
            myCheckValues.push($(this).val());
        });

        $("#log").append("<br>User clicked the button");

        $("#log").append("<br>Value of input is: " + myInput);
        $("#log").append("<br>Value of textarea is: " + myTextarea);
        $("#log").append("<br>Value of select is: " + mySelect);
        $("#log").append("<br>Value of radio button is: " + myRadio);
        $("#log").append("<br>Value of check is: " + myCheckValues.join());
        
    })

});