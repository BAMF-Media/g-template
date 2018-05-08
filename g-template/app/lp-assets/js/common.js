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
        $('body,html').animate({scrollTop: top}, 1500);
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
// // counter start
//
// var clock;
//
// $(document).ready(function () {
//
//     // Set dates.
//     var futureDate = new Date("March 25, 2018 09:02 PM EDT");
//     var currentDate = new Date();
//
//     // Calculate the difference in seconds between the future and current date
//     var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
//
//     // Calculate day difference and apply class to .clock for extra digit styling.
//     function dayDiff(first, second) {
//         return (second - first) / (1000 * 60 * 60 * 24);
//     }
//
//     if (dayDiff(currentDate, futureDate) < 100) {
//         $('.clock').addClass('twoDayDigits');
//     } else {
//         $('.clock').addClass('threeDayDigits');
//     }
//
//     if (diff < 0) {
//         diff = 0;
//     }
//
//     // Instantiate a coutdown FlipClock
//     clock = $('.clock').FlipClock(diff, {
//         clockFace: 'DailyCounter',
//         countdown: true
//     });
//
//     // rangeSlider();
//     calcDiscount(10000);
//
// });

// counter end


//slickSlider start


$(".communitySlider").slick({
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,

    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }

    ]
});


//slickSlider end


//progress Bar start

//


//slider staart

var $element = $('.rangeSlider');
var currentVall = $element.value;


$element

    .rangeslider({
        polyfill: false,
        onInit: function () {
            var $handle = $('.rangeslider__handle', this.$range);

        }
    })
    .on('input', function (e) {
        var $handle = $('.rangeslider__handle', e.target.nextSibling);

        calcDiscount(this.value);
    });


var discountActive = true;
$('.showDis').click(function (event) {
    discountActive = !discountActive;
    if (discountActive) {
        $('.hideText').html(' hide');
    }
    else {
        $('.hideText').html(' show');
    }
    calcDiscount(currentVall);
});

function calcDiscount(val) {

    currentVall = val;

    var ivestInp = $('#investAmount');
    ivestInp.html('$' + val)
    var course_1 = 1.41;
    var course_2 = 1.63;
    var course_3 = 1.67
    var discount = 0.33;
    var maxH = 200;
    var Y1, Y1d, Y2, Y2d, Y3, Y3d;

    var height1 = 80 + val / 50000 * maxH * course_1 * 0.4
    var height1D = 100 + height1 * discount

    var height2 = 80 + val / 50000 * maxH * course_2 * 0.4
    var height2D = 100 + height2 * discount

    var height3 = 80 + val / 50000 * maxH * course_3 * 0.4
    var height3D = 100 + height3 * discount


    Y1 = Math.round(val * course_1);
    Y1d = Math.round(Y1 * discount + Y1);
    Y2 = Math.round(val * course_2);
    Y2d = Math.round(Y2 * discount + Y2);
    Y3 = Math.round(val * course_3);
    Y3d = Math.round(Y3 * discount + Y3);

    if (discountActive) {

        $('.withoutDis').removeClass('hiddenDis');

        $('.value').removeClass('only');

        $("#val1").html("$" + Y1d);
        $("#without1").html("$" + Y1);


        $("#val2").html("$" + Y2d);
        $("#without2").html("$" + Y2);


        $("#val3").html("$" + Y3d);
        $("#without3").html("$" + Y3);


        $("#graph1").find('.level1').css({
            height: height1

        });
        $("#graph1").find('.extra').css({
            height: height1D
        });

        $("#graph2").find('.level1').css({
            height: height2

        });
        $("#graph2").find('.extra').css({
            height: height2D
        });

        $("#graph3").find('.level1').css({
            height: height3

        });
        $("#graph3").find('.extra').css({
            height: height3D
        });
    }

    else {
        $('.withoutDis').addClass('hiddenDis');
        $('.value').addClass('only');

        $("#val1").html("$" + Y1);

        $("#val2").html("$" + Y2);


        $("#val3").html("$" + Y3);


        $("#graph1").find('.level1').css({
            height: height1

        });
        $("#graph1").find('.extra').css({
            height: 30
        });

        $("#graph2").find('.level1').css({
            height: height2

        });
        $("#graph2").find('.extra').css({
            height: 30
        });

        $("#graph3").find('.level1').css({
            height: height3

        });
        $("#graph3").find('.extra').css({
            height: 30
        });

    }


}


//range slider end


// energy chart start


Highcharts.chart('energyChart', {

    chart: {
        type: 'spline'

    },
    title: {
        text: 'Mining Energy Consumption to Country Energy Comparison',
        style: {
            color: '#333',
            font: 'bold 22px "futuraBold", Verdana, sans-serif',
            textTransform: "uppercase",
            letterSpacing: "1px",
            padding: '20px'

        }
    },

    yAxis: {

        title: {
            text: 'Estimated TWN per year',
            style: {
                color: '#2bad4a',
                font: 'bold 14px "muliBold", Verdana, sans-serif',
                textTransform: "uppercase",
                letterSpacing: "1px"
            }
        },
    },


    xAxis: {

        categories: ['MAR 2017', 'MAY 2017', 'JULY 2017', 'SEP 2017', 'NOV 2017', 'JAN 2018']
    },
    plotOptions: {
        series: {
            lineWidth: 5,
            marker: {
                fillColor: '#2bad4a',
                lineWidth: 2,
                radius: 7,
                lineColor: null, // inherit from series
            }
        }
    },

    series: [{
        name: 'Month',

        data: [11, 20, 25, 35, 40, 60],
        color: {

            linearGradient: [0, 0, 0, 500],
            stops: [
                [0, 'rgb(80, 189, 94)']
            ]
        }
    }],


    tooltip: {
        formatter: function () {
            return 'TWN: ' + this.y + "$" + '<br>' + 'MONTH: ' + this.x
        },
        style: {
            color: '#2bad4a',
            font: 'bold 14px "muliBold", Verdana, sans-serif',
            textTransform: "uppercase",
            letterSpacing: "1px"
        }
    },


});

// energy chart end
// [0, 'rgb(80, 189, 94)'],


// charts green start
// Highcharts.chart('container', {
//     chart: {
//         type: 'spline'
//     },
//     title: {
//         text: 'ICO timeline Week',
//         style: {
//             color: '#2bad4a',
//             font: 'bold 16px "muliBold", Verdana, sans-serif',
//             textTransform: "uppercase",
//             letterSpacing: "1px"
//
//         }
//     },
//     subtitle: {
//         text: ''
//     },
//     xAxis: {
//         categories: ['1', '2', '3', '4', '5', '6', '7'],
//
//     },
//
//     yAxis: {
//
//         title: {
//             text: 'Price($USD)',
//             style: {
//                 color: '#2bad4a',
//                 font: 'bold 14px "muliBold", Verdana, sans-serif',
//                 textTransform: "uppercase",
//                 letterSpacing: "1px"
//             }
//         },
//     },
//
//     colors: ['#2bad4a'],
//
//     plotOptions: {
//         series: {
//             // allowPointSelect: false,
//
//             marker: {
//                 fillColor: '#2bad4a',
//                 lineWidth: 2,
//                 radius: 7,
//                 lineColor: null, // inherit from series
//             }
//         }
//     },
//     tooltip: {
//         formatter: function () {
//             return 'PRICE ' + this.y + "$" + '<br>' + 'Week: ' + this.x
//         },
//         style: {
//             color: '#2bad4a',
//             font: 'bold 14px "muliBold", Verdana, sans-serif',
//             textTransform: "uppercase",
//             letterSpacing: "1px"
//         }
//     },
//
//
//     legend: {
//         itemStyle: {
//             font: 'bold 14px "muliBold", Verdana, sans-serif',
//             color: '#2bad4a'
//         },
//     },
//
//     series: [{
//         name: 'WEEKS',
//         data: [0, 0.78, 0.8, 0.6, 0.7, 0.8, 1],
//         marker: {
//             // symbol: 'url(lp-assets/img/paymentMethod/dollarGreen.svg)',
//             width: 20,
//             height: 20,
//         },
//     }]
// });
// charts end


//communityBG start

// ParticlesJS Config.
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


//communityBG end

//communitys Slider Start

$('.communityList').click(function (event) {

    var target = event.target;

    while (target != this) {
        if (target.classList.contains('person')) {
            $('.activePerson').removeClass('activePerson');
            target.classList.add('activePerson');
            return
        }

        else if (target.classList.contains('aboutPerson')) {
            return
        }

        target = target.parentNode;
    }
});

//communityBG Slider end


// scroll to the content start
$(".solutionsFluid ").on("click", "a", function (event) {
    //cancel stanadrt click on link
    //
    // if($(window).width() > 768 ){
    //     var addHeightMobile =  50;
    // }
    // else {
    //     var addHeightMobile = $('.bannerTextMobile').outerHeight();
    // }
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;


    if ($(window).width() < 1200) {
        $('body,html').animate({scrollTop: top - 100}, 1500);
    }
    else if ($(window).width() >= 1200) {
        $('body,html').animate({scrollTop: top - 20}, 1500);
    }

});
// scroll to the content end


// animtated icons start
var animation = [];
var animationCont = [];

animationCont[0] = document.getElementById('decPower');
animationCont[1] = document.getElementById('clEnergy');
animationCont[2] = document.getElementById('fuelSw');
animationCont[3] = document.getElementById('carbonC');

animationCont[4] = document.getElementById('greenEco');
animationCont[5] = document.getElementById('trustedCrypto');
animationCont[6] = document.getElementById('ultraLow');
animationCont[7] = document.getElementById('lifeTime');


animation[0] = bodymovin.loadAnimation({
    container: animationCont[0], // Required
    path: 'lp-assets/libs/animations/DecentralizedPower.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    rendererSettings: {
        progressiveLoad: false
    }
});


animation[1] = bodymovin.loadAnimation({
    container: animationCont[1], // Required
    path: 'lp-assets/libs/animations/CleanEnergy.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    rendererSettings: {
        progressiveLoad: false
    }
});

animation[2] = bodymovin.loadAnimation({
    container: animationCont[2], // Required
    path: 'lp-assets/libs/animations/FuelSwitching.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    rendererSettings: {
        progressiveLoad: false
    }
});

animation[3] = bodymovin.loadAnimation({
    container: animationCont[3], // Required
    path: 'lp-assets/libs/animations/CarbonCapture.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    // rendererSettings: {
    //     progressiveLoad:false
    // }
});

animation[4] = bodymovin.loadAnimation({
    container: animationCont[4], // Required
    path: 'lp-assets/libs/animations/GreenEcosystem.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    // rendererSettings: {
    //     progressiveLoad:false
    // }
});

animation[5] = bodymovin.loadAnimation({
    container: animationCont[5], // Required
    path: 'lp-assets/libs/animations/TrustedCrypto.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    // rendererSettings: {
    //     progressiveLoad:false
    // }
});

animation[6] = bodymovin.loadAnimation({
    container: animationCont[6], // Required
    path: 'lp-assets/libs/animations/UltraLow.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    // rendererSettings: {
    //     progressiveLoad:false
    // }
});

animation[7] = bodymovin.loadAnimation({
    container: animationCont[7], // Required
    path: 'lp-assets/libs/animations/LifetimeToken.json', // Required
    renderer: 'svg', // Required
    loop: false, // Optional
    autoplay: false, // Optional
    name: "Hello World", // Name for future reference. Optional.
    // rendererSettings: {
    //     progressiveLoad:false
    // }
});

var wowFeatures = new WOW(
    {
        boxClass: 'featuresFluid',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            console.log(box.tagName);
            console.log("1111");
            animation[0].play();
            animation[1].play();
            animation[2].play();
            animation[3].play();
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wowFeatures.init();

var wowSolution = new WOW(
    {
        boxClass: 'animtatedSolutionFluid',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
            console.log(box.tagName);
            console.log("2222");
            animation[4].play();
            animation[5].play();
            animation[6].play();
            animation[7].play();
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wowSolution.init();

animationCont[0].parentNode.addEventListener('mouseover', function () {
    animation[0].play();
    console.log("play")
});
animationCont[0].parentNode.addEventListener('mouseleave', function () {
    animation[0].stop();
    console.log("stop")
});

animationCont[1].parentNode.addEventListener('mouseover', function () {
    animation[1].play();
});
animationCont[1].parentNode.addEventListener('mouseleave', function () {
    animation[1].stop();
});


animationCont[2].parentNode.addEventListener('mouseover', function () {
    animation[2].play();
});
animationCont[2].parentNode.addEventListener('mouseleave', function () {
    animation[2].stop();
});


animationCont[3].parentNode.addEventListener('mouseover', function () {
    animation[3].play();
});
animationCont[3].parentNode.addEventListener('mouseleave', function () {
    animation[3].stop();
});

animationCont[4].parentNode.addEventListener('mouseover', function () {
    animation[4].play();
});
animationCont[4].parentNode.addEventListener('mouseleave', function () {
    animation[4].stop();
});
animationCont[5].parentNode.addEventListener('mouseover', function () {
    animation[5].play();
});
animationCont[5].parentNode.addEventListener('mouseleave', function () {
    animation[5].stop();
});

animationCont[6].parentNode.addEventListener('mouseover', function () {
    animation[6].play();
});
animationCont[6].parentNode.addEventListener('mouseleave', function () {
    animation[6].stop();
});

animationCont[7].parentNode.addEventListener('mouseover', function () {
    animation[7].play();
});
animationCont[7].parentNode.addEventListener('mouseout', function () {
    animation[7].stop();
});


// animtated icons end


// Pop Up start
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeModal")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Pop Up end



function openPopUp() {
    modal.style.display = "flex";
}

// createCookie for pop up start
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}


var visited = readCookie('visited');
if (!visited || visited !== "true") {
    createCookie('visited', "true", 30);
    setTimeout(openPopUp, 5000);
}


// createCookie for pop up end

$('.featuresFluid  .learnMore, .ourSolutionsFluid .learnMore').each(function () {
    $(this).on('click', function () {
        openPopUp();
    })

});



KlaviyoSubscribe.attachToForms('.klaviyoForm', {
    hide_form_on_success: true,
    error_message: false,
    success_url: "http://geartoken.io/thankyou"
});


var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,10}$/i;

function submitBtnChecker(form,inputEmail,submitBtn) {
    if (pattern.test($(inputEmail).val())) {
        console.log("trueee");
        $(submitBtn).submit();
    }
    else {
        console.log("error");
        form.addClass("notValid");

    }
}

function validInputs(form,inputEmail,submitBtn) {
    if (pattern.test($(inputEmail).val())) {
        console.log("trueee");
        form.removeClass("notValid")
        form.addClass("valid");

    }
    else {
        console.log("error");
        form.removeClass("valid")
        form.addClass("notValid");
    }
}

function validateForm(form) {

    var inputEmail = form.find('input[type=email]');
    var submitBtn = form.find('button[type=submit]');


    $(submitBtn).click(function () {
        event.preventDefault();
        submitBtnChecker(form,inputEmail,submitBtn);
    });

    inputEmail.keyup(function () {
        validInputs(form,inputEmail,submitBtn);
    });

    inputEmail.blur(function () {
        validInputs(form,inputEmail,submitBtn);
    });

}

validateForm($('#headerForm') );
validateForm($('#modalForm') );
validateForm($('#updatesForm') );
validateForm($('#footerForm') );







