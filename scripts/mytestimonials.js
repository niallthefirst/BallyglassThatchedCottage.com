/*global _comma_separated_list_of_variables_*/

/// <reference path="../resources/testimonials.js" />




var testimonials;


var showQuote = function () {
    var quoteIndex = getQuoteIndex();

    var value = testimonials[quoteIndex];

    var blockquoteP = $("blockquote > p");
    var footerdate = $("blockquote > footer > span");
    var footercite = $("blockquote > footer > cite");

    var comment = value[3];
    var date = value[0];
    var author = value[1];

    blockquoteP.text(comment);
    footerdate.text(date);
    footercite.text(" - " + author);
};

var getQuoteIndex = function () {
    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = testimonials.length;
    var result = randnumber % count_quotes;
    return result;
};

var displayChangingQuote = function () {
    testimonials = getTestimonials();
    showQuote();
    setInterval("showQuote()", 10000);
};


$(document).ready(function () {

    displayChangingQuote();


});
