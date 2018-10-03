var aKey = '?api-key=cf02210ce88d42008801817269874bbc';
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var search = '&q=' + 'alaska';
var beginDate = '&begin_date=' + '20000101';
var endDate = '&end_date=' + '20170101';
var page = '&page=' +'1';

$.ajax({
  url: url + aKey + search + beginDate + page, 
  method: 'GET',
}).then(function (articles) {
    console.log(articles);
    console.log(articles.response);
    populate(articles);
}); 
function populate (articles) {
    for (i = 0; i < 10; i++) {
        var newDiv = $("<div>");
        newDiv.html(articles.response.docs[i].web_url);
        console.log(newDiv[0]);
        
    }
    console.log(articles);
    console.log(articles.response.docs[0].web_url)
    console.log(articles.response.docs[0].snippet)
    console.log(articles.response.docs[0].byline.original)
};
// search 
// number of records to retrieve
// start year (optional)
// end year (optional)
// search button 
// clear button 

