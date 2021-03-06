$(document).ready(function() {

    $.getJSON("jsonDatabase/cat.json", function(data) {

      console.dir(data);
      var html = "";

      $.each(data, function(index, item) {
          html += '<div class="col-md-4">' +
            '<div class="catName">' + item.name + '</div>' +
            '<div class="catType">' + item.type + '</div>' +
            '<div class="catGender">' + item.gender + '</div>' +
            '<img src="' + item.image + '"/>';
          
          html += '</div>';
        }) //each cat

      $("#catData").append(html);
    })
  })
  /*
  //one per cat
  <div class="col-md-4 cat">
    <div class="catName"></div>
    <div class="catType"></div>
    <div class="catGender"></div>
    <img src=""/>
    <div class="commentsContainer">
      //one per comment
      <div class="renterName"></div>
      <div class="renterComment"></div>
      <div class="renterStars">
      //5 stars, some full, some empty
      </div> //end starts
    </div>//end commentsContainer
  </div>//end cat
  */
