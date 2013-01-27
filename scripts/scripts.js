
var quoteIntervalId = 0;
var arrQuotes = [];
var arrCites = [];

function showQuote() {

    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = arrQuotes.length;
    var quoteindex = randnumber % count_quotes;
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

function displayWebAlbum() {
    var settings = {
        username: 'ballyglasscottage',
        albumMaxResults: 6,
        maxResults: 6,
        mode: 'album',
        album: "BallyglassCalendar2013",
        authKey: "Gv1sRgCMOwmcjJlcWW7AE",
        thumbCss: { margin: '5px' },
        showAlbumDescription: false,
        albumsPerPage: 1,
        popupPlugin: "SlimBox",
        slimbox_config: {
            initialWidth: '500px',
            initialHeight: '50px'
        }
    };
    $("#container").pwi(settings);

}