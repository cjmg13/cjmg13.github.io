$(document).ready(function() {

    $(".nav").find("li").on("click", function() {

        $(".nav").find("li").removeClass("active");

        $(this).addClass("active");

        //added active class to
        var page = $(this).attr("id");
        getPartial(page);

      }) //click

    function getPartial(partial) {

      if (partial == "homePage") {
        $.get(partials/"home.html"), function(data){
          
        }

      } else if (partial == "newestDealsPage") {
        alert("2");

      } else if (partial == "bookFlightPage") {
        alert("3");

      }

    }

    //begin the program, get the homepage
    getPartial("homepage");


  }) //ready
