$.get("http://celogio24.github.io/finalProject/partials/nav.html", function(data){

  $(document).ready(function(){
         // $(".container"){display:none;}
          $(".container").hide();
      $(".container").prepend(data);

     // $("body").prepend(data);
      //.container.fadeIn();
          $(".container").fadeIn(1200);
      })

    })
