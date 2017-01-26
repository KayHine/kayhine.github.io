var currentQuote = "";
var currentAuthor = "";

function getQuote(){
   $.ajax({
         url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
         success: function(data){
           var post = data.shift();
           $("#author").text(post.title);
           $("#text").html(post.content);
           currentQuote = $("#text").text();
           currentAuthor = $("#author").text();
           $("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '"' + currentAuthor));
         },
         cache: false
       });

  }
$(document).ready(function(){
  // new quote button
  getQuote();
  $("#new-quote").on("click", getQuote);
  $("#tweet-quote").on("click", function(){
    openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '"' + currentAuthor));
  });
});
