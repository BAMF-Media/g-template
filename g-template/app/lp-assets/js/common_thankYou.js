var pageLoaderAn = bodymovin.loadAnimation({
    container: document.getElementById('pageLoader'), // Required
    path: 'lp-assets/libs/animations/GearLoading.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: "Hello World", // Name for future reference. Optional.
})

$(window).on('load', function () {
    $(".loader").fadeOut("slow");
});


$('.hamburger').click(function () {
    $(".hamburger").toggleClass('is-active');
    $("#nav").slideToggle().toggleClass("nav-active");

});

$(window).resize(function () {
    if ($(this).width() > 1200) {
        $("#nav").css({'display': 'block'});
    }
    else {
        $("#nav").css({'display': ''});
    }
});


//nav scrolling start

$("#nav, .linksWrap ").on("click", "a", function (event) {

    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;


    if ($(window).width() >= 1200) {
        $('body,html').animate({scrollTop: top - 20}, 1500);
    }

    else if ($(window).width() <= 1200 && $(window).width() >= 576) {
        $('body,html').animate({scrollTop: top - 80}, 1500);

        $("#nav").slideUp();
        $(".hamburger").toggleClass('is-active');
    }

    else {
        if (id == "#mainForm") {

            $('body,html').animate({scrollTop: top + 160}, 1500);

        }
        else {
            $('body,html').animate({scrollTop: top - 78}, 1500);

        }

        $("#nav").slideUp();
        $(".hamburger").toggleClass('is-active');
    }


});

//nav scrolling enf


//
//




