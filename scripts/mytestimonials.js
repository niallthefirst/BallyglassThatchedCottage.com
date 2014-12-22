
/// <reference path="../resources/testimonials.js" />

$(document).ready(function () {

    displayChangingQuote();


});

var quoteIntervalId = 0;
var testimonials;

function displayChangingQuote() {
    testimonials = getTestimonials();
    showQuote();
    quoteIntervalId = setInterval("showQuote()", 10000);
}

function showQuote() {
    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = testimonials.length;
    var quoteindex = randnumber % count_quotes;

    var value = testimonials[quoteindex];

    var blockquoteP = $("blockquote > p");
    var footerdate = $("blockquote > footer > span");
    var footercite = $("blockquote > footer > cite");

    var comment = value[3];
    var date = value[0];
    var author = value[1];

    blockquoteP.text(comment);
    footerdate.text(date);
    footercite.text(" - " + author);
}

