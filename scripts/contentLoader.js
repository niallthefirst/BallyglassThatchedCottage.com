var loadContent = function (filename) {

    $("#main").load(filename + " #main > *",
        function {
            doCarousel("main");
        }
    );

};

