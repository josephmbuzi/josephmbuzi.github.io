// Typed
var typed = new Typed('#typed', {
    strings: ["Graphic Designer",
        "Web Developer",
        "SEO Expert"
    ],
    stringselement: null,
    typedSpeed: 20,
    startDelay: 120,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    loopCount: 550,
    showCursor: true,
    cursorChar: "|",
    attr: null,
    contentTypeL: "html",
});

// mixitup
var container = $(".mixitup");
mixitup(container);

// navtoggle
$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        $('.small-device').slideToggle();
    })
})