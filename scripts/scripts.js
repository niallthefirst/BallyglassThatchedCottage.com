
var quoteIntervalId = 0;
var arrQuotes = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis nisl, dictum id aliquam et, pretium vitae erat. Nulla risus tellus, consequat id accumsan a, dictum iaculis neque. Nullam non turpis ac ipsum mattis blandit. In non ipsum sed mi placerat imperdiet vitae in eros. Aliquam posuere varius scelerisque.',
    'If all you own is a hammer every problem starts looking like a nail.',
    'Cras hendrerit aliquam magna a aliquet. Suspendisse non tristique diam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eu magna quis eros accumsan laoreet nec vestibulum nisi.',
    'Mauris erat ipsum, gravida et vestibulum eget, convallis et diam.',
    'Maecenas sed massa a est sollicitudin accumsan tempus quis sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed porttitor lectus sed nisi auctor iaculis a eget justo. Morbi non quam tellus. Quisque mattis, elit at molestie ultricies, purus velit viverra diam, quis hendrerit dolor leo ut diam. Cras dignissim pretium erat at tempus. Donec tortor eros, malesuada ac mollis non, pretium non mi. In non elementum augue. Phasellus vel neque eget lacus euismod pulvinar non id odio.'];

var arrCites = [
    'reviewer1, Galway, Ireland.',
    'reviewer2, Galway, Ireland.',
    'reviewer3, Dublin, Ireland.',
    'reviewer4, Kinvara, Ireland.'];


function showQuote() {
    var randnumber = Math.random() * 1000;
    randnumber = parseInt(randnumber);
    var count_quotes = arrQuotes.length;
    var quoteindex = randnumber % count_quotes;
    var blockquotes = $("blockquote").get();
    var cites = $("cite").get();

    $.each(blockquotes, function (index, value) {
        value.childNodes[2].data = arrQuotes[quoteindex];
        cites[index].childNodes[0].data = " - " + arrCites[quoteindex];

        if (quoteindex < count_quotes - 1)
            quoteindex = quoteindex + 1;
        else
            quoteindex = 0;

    });

}

function displayQuote() {
    quoteIntervalId = setInterval("showQuote()", 1000);
}
