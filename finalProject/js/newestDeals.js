$(document).ready(function() {

    $.getJSON("json/newestDeals.json", function(data) {

      console.dir(data);
      var html = "";

      $.each(data, function(index, item) {
          html += '<div class="col-md-4">' +
            //City, Price, Date
            '<div class="newestDealsCity"><small>Brand: </small> ' + item.brand+ '</div>' +
            '<div class="newestDealsPrice"><small>Price: </small>' + item.price+ '</div>' +
            '<div class="newestDealsDate"><small>Sizes: </small> ' + item.sizes + '</div>' +
            //images
            '<img class="airlineImage" src="' + item.image + '"/>'+
            //comments start
          '<div class="commentsContainer">';
          $.each(item.comments, function(ind, i) {
              html += '<div class="dogUsername"><small>Username: </small>' + i.username + '</div>' +
                '<div class="dogComment"><small>Comment: </small>' + i.comment + '</div>' +
              '<div class="dogStars">';
//stars
            var numStars = Number(i.stars);

              for (var i = 1; i <= 5; i++) {
                if (i <= numStars) {
                  html += '<img src="images/fullStar.png"/>';

                } else {
                  html += '<img src="images/emptyStar.png"/>';

                }
              }
              html += '</div>'; //end stars

            }) //each comment


          html += '</div>' + //commentsContainer
            '</div>'; //col-md-4

        }) //each dog
      $("#newestDealsData").append(html);
    })

  })
