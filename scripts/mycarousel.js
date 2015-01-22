/* File Created: December 19, 2014 */

$(document).ready(function () {

    doCarousel("main");


});
 
function doCarousel(viewName) {

    var result = new Array();

    var dir = "images";
    var fileExtension = ".jpg";

    $.ajax({
        url: dir,
        dataType: "html",//returns html by default. hence we have to parse it in the success callback.
        success: function (data) {
            $(data).find("a:contains(" + fileExtension + "),a:contains(" + fileExtension.toUpperCase() + ")").each(function () {

                //sometimes need to insert the original directory name or the file will not be found!
                var spliturl = this.href.split('/');
                //var host = window.location.host;
                //var websitename = spliturl[spliturl.length - 2];
                var filename = spliturl[spliturl.length - 1];
                //var fullPath = "http://" + host + "/" + websitename + "/" + dir + "/" + filename;
                var fullPath = dir + "/" + filename;
                if(fullPath !== undefined)
                    result.push(fullPath);
            });

            drawCarousel(viewName, result);

        },
        error: function (xhr, status, errorThrown) {
            console.log("Error: " + errorThrown);
            console.log("Status: " + status);
            console.dir(xhr);
        }

    });
}

function drawCarousel(viewName, arrayOfURIs)
{
    var indicator = $("ol.carousel-indicators");
    var inner = $("div.carousel-inner");

    //add a li for each image.
    indicator.append("<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");

    var altText = "Ballyglass Irish Thatched Cottage Photo";
    //add each image to the inner
    inner.append("<div class='item active'><img src='" + arrayOfURIs[0] + "' class='img-responsive' alt='" + altText + "' ></div>");
    

    for(var index = 1;index < arrayOfURIs.length;index++)
    {
        indicator.append("<li data-target='#myCarousel' data-slide-to='" + index + "'></li>");


        inner.append("<div class='item'><img src='" + arrayOfURIs[index] + "' class='img-responsive' alt='" + altText + "' ></div>");
    
    }

}