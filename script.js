$(document).ready(function() {
    $(".menu").click(function() {
        $(".head-menu").toggleClass("active");
        $("body").toggleClass("stop-body");
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });
    $(' .form-step1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear'

    });
    $("button.slick-next.slick-arrow").click(function() {
        $(this).hide();

    });

    /************************** */
    $(".btn-next").click(function() {
        function check_required_inputs() {

            if ($(".step-one .field-wrap select#cou, .step-one .field-wrap input#city,.step-one .field-wrap input#inst").val() == false) {
                $("#submit").trigger("click");

            } else {
                $(".step-one").removeClass("active").nextUntil("form-step").addClass("active");
            }

        }
        check_required_inputs();

    });


    $(".faq-box").click(function() {
        $(".faq-box").not(this).removeClass("active", 1000);
        $(this).toggleClass("active", 1000);
    });

});