var key = '&apikey=132b13a3'
$(document).ready(function () {
    console.log("working js");
    var title;
    
});
$(document).on("click", ".search", function () {
    title = $("input").val();
    // title = $("input")[0].value;
    console.log(title);
    setTimeout(search, 400);

});
function search () {
    var qURL = 'http://www.omdbapi.com/?t='+ title + key;
    $.ajax({
            url: qURL,
            method: 'GET'
    }).then(function(movie){
        console.log(movie);
        var myJSON = JSON.stringify(movie);
        console.log(myJSON);
        $(".content").text(myJSON);

    });
        
};