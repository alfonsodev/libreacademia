$(document).ready(function() {
    $("#searchterm").keyup(function(e) {
    var query = $("#searchterm").val(),
        wikiurl = "/search",
        wikiparams = {q: query};
    if(query.length > 4) {
    $.getJSON(wikiurl, wikiparams,
      function(data) {
        console.log(data);
        $("#results").empty();
        $("#results").append("<p>Results for <b>" + query + "</b></p>");
        $.each(data, function(i,item) {
          //TODO: use jquery templating for this?
          var link = "<a href='"+ item.url+"'>"+item.title+"</a>";
          var thumb = '<span id="thumb"><img src="'+item.thumbnail+'"></span>';
          $("#results").append("<p>"+thumb+link+"</p>");
      });
    });
    }
  });
});