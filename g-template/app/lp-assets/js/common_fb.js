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







// top form validation start
var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,10}$/i;
var headerValidForm = false;
$('#headerEmail').keyup(function () {
    if ($(this).val() != '') {
        if (patternEmail.test($(this).val())) {
            $(this).css({'border': '2px solid rgb(80, 189, 64)'});
            headerValidForm = true;
            $(".notValidEmailHeader").slideUp("fast");
        } else {
            $(this).css({'border': '2px solid rgb(247, 29, 29)'});
            headerValidForm = false;
            $(".notValidEmailHeader").slideDown("fast");
        }
    } else {
        $(this).css({'border': '2px solid rgb(247, 29, 29)'});
        headerValidForm = false;
        $(".notValidEmailHeader").slideDown("fast");
    }
});

$("#headerEmail").blur(function () {
    if ($(this).val() != '' && patternEmail.test($(this).val())) {
        headerValidForm = true;
    }
    else {
        headerValidForm = false;
        $("#headerEmail").css({'border': '2px solid rgb(247, 29, 29)'});
        $(".notValidEmailHeader").slideDown("fast");
    }
});
$("#headerSubmitBtn").click(function (event) {
    if (headerValidForm) {
        $("#headerEmail").css({'border': '2px solid rgb(80, 189, 64)'});
        $(".notValidEmailHeader").slideUp("fast");
        $("#headerHiddenSubmitBtn").submit();
        return true;
    }
    else {
        $("#headerEmail").css({'border': '2px solid rgb(247, 29, 29)'});
        $(".notValidEmailHeader").slideDown("fast");
        return false;
    }
});

// top form validation end

//------------------------------------------






