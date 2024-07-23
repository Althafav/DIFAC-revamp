$(document).ready(function () {
    // UpcomingEventCarousel();
    // SponsorCarousel();
    // TestimonialCarousel();

    // window.onscroll = function () { scrollFunction() };
})

function scrollFunction() {
    if (document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
        $(".menu-wrapper").css("position", "fixed");
        $(".menu-wrapper").css("top", "0px");
        $(".menu-wrapper").css("margin-top", "0px");
        $(".menu-wrapper").css("background", "white");
        $(".menu-wrapper").css("padding-top", "10px");
        $(".menu-wrapper").css("padding-bottom", "10px");
        $(".menu-wrapper").css("box-shadow", "1px 0 10px rgb(0 0 0 / 30%)");
        //$(".bars").addClass("d-none");
        //$(".brown-bars").removeClass("d-none");
        $(".menu-event-detail").removeClass("d-none");

        //$(".white-logo").addClass("d-none");
        //$(".brown-logo").removeClass("d-none");
        $(".menu-dropdown").addClass("d-none");
    } else {
        $(".menu-wrapper").css("position", "absolute");
        $(".menu-wrapper").css("margin-top", "unset");
        $(".menu-wrapper").css("background", "#ffffefc4");
        $(".menu-wrapper").css("box-shadow", "unset");
        //$(".bars").removeClass("d-none");
        //$(".brown-bars").addClass("d-none");

        //$(".white-logo").removeClass("d-none");
        //$(".brown-logo").addClass("d-none");
        $(".menu-dropdown").removeClass("d-none");
        $(".menu-event-detail").addClass("d-none");
    }
}

function TestimonialCarousel() {
    $("#testimonial_carousel").owlCarousel({
        navigation: true,
        items: 1,
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });

    $('#testimonial_carousel').on('click', function () {
        $(this).trigger('stop.owl.autoplay');
    });
}


function UpcomingEventCarousel() {
    $("#upcoming-event-carousel").owlCarousel({
        navigation: true,
        items: 1,
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
}

function awardAimSlider() {
    $("#award-aim-slider").owlCarousel({
        navigation: true,
        items: 1,
        slideSpeed: 1000,
        loop: true,
        autoplay: true,
        nav: true,
        dots: false,
        navText: [
            "<img src='/assets/imgs/left-arrow.png' />",
            "<img src='/assets/imgs/right-arrow.png' />",
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    });
}

function hideLangFunction() {
    try {
        if (removeLang == true) {
            $(".lng-btn").css("display", "none");
        }
    }
    catch {

    }
   
}

function activeMenuFunction() {
    try {
        $("#" + activeMenu).addClass("active-menu");
    }
    catch {
    }
}

function downloadDocument(filename, textInput) {
    var element = document.createElement("a");
    element.setAttribute("href", textInput);
    element.setAttribute("target", "_blank");
    element.setAttribute("download", filename);
    document.body.appendChild(element);
    element.click();
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function uploadFile(fileId,returnFileId) {
    if (fileId) {
    var file = document.getElementById(fileId);
    var img = file.files;

    var filename = "";
    var filenames = [];
    for (var i = 0; i < img.length; i++) {
        var guid = CreateGuid();
        var fileExtension = img[i].name.split('.').pop();

        var guidName = guid + "." + fileExtension;
        filenames.push(guidName);

        filename += media_URL + "/Documents/" + guidName;
        if (i < img.length-1) {
            filename += " || ";
        }
    }

    for (var i = 0; i < img.length; i++) {
        var formData = new FormData();
        formData.append('file', img[i]);
        formData.append('filename', filenames[i]);

        var ajax_url = '/Awards/SaveFile';
        $.ajax({
            type: 'POST',
            url: ajax_url,
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {

            }
        });
    }

        $("#" + returnFileId).val(filename);
    }
}


function CreateGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}