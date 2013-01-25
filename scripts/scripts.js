
var quoteIntervalId = 0;
var arrQuotes = [];
var arrCites = [];

function showQuote() {

    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = arrQuotes.length;
    var quoteindex = randnumber % count_quotes;
//    var blockquotes = $("blockquote").get();
//    var cites = $("cite").get();

//    $.each(blockquotes, function (index, value) {
//        value.childNodes[2].data = arrQuotes[quoteindex];
//        cites[index].childNodes[0].data = " - " + arrCites[quoteindex];

//        if (quoteindex < count_quotes - 1)
//            quoteindex = quoteindex + 1;
//        else
//            quoteindex = 0;

    //    });
    var blockquotesText = $(".blockquoteText").get();
        var cites = $("cite").get();

        $.each(blockquotesText, function (index, value) {
            $(value).text(arrQuotes[quoteindex]);
            $(cites[index]).text(" - " + arrCites[quoteindex]);

            if (quoteindex < count_quotes - 1)
                quoteindex = quoteindex + 1;
            else
                quoteindex = 0;

        });

}

function displayQuote() {

    loadTestimonials();
   
    quoteIntervalId = setInterval("showQuote()", 1000);
}

function loadTestimonials() {

    $.ajax({
        dataType: "json",
        url: 'resources/testimonials.js', //relative to the html file and not the script
        type: 'GET',
        success: function (data) {
            $.each(data, function (key, val) {
                arrQuotes.push(val[3]);
                arrCites.push(val[1] + ", " + val[2] + " (" + val[0] + ")");
            });
        },
        error: function (data) {
            alert('woops!');
        }
    });
}
