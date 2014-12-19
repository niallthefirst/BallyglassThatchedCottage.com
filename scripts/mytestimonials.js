
/// <reference path="../resources/testimonials.js" />

$(document).ready(function () {

    //drawTestimonials("main", testimonials);
    displayChangingQuote();


});

var quoteIntervalId = 0;
function displayChangingQuote() {
    quoteIntervalId = setInterval("showQuote()", 5000);
}
function showQuote() {

    var testimonials = getTestimonials();

    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = testimonials.length;
    var quoteindex = randnumber % count_quotes;
    
    var blockquoteP = $("blockquote.p");
    var footercite = $("blockquote.footer.cite");
    var footerdate = $("blockquote.footer.date");


    $.each(testimonials, function (index, value) {
        var comment = value[3];
        var date = value[0];
        var author = value[1];
        blockquoteP.text(comment);
        footercite.text(author);
        footerdate.text(date);
    });

}

//<aside role="complementary">
//                <article>
//                    <blockquote>
//                        <p>the comment............................................................................</p>
//                        <footer><date>23/10/2014<date> <cite >the author of the comment</cite></footer>
//                    </blockquote>
//                </article>
//            </aside>
function drawTestimonials(viewName, testimonials) {
    var blockquote = $("blockquote");

    var comment = testimonials[0][3];
    var date = testimonials[0][0];
    var author = testimonials[0][1];

    blockquote.append("<p>" + comment + "</p>");
    blockquote.append("<footer><date>"+ date +"<date> <cite >"+ author +"</cite></footer>");
    
    //$.each(testimonials, function (index, value) {
    //    console.log(value);
    //});

}