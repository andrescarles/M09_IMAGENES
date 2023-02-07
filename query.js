$(document).ready(function() {
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();
        var heightImage = $('.animacionFoto').height()
        $('.animacionFoto').css({
            'opacity': 0 + (heightImage - scroll) / heightImage
        });
    });

    $(".textAnimation").hover(
        function() {
            $(this).css({
                transform: "rotate(180deg)",
                transition: "transform 2s"
            });
        },
    );
    $(window).scroll(function() {

        var scroll = $(window).scrollTop() / 100;

        if (scroll < 10) {
            $('.animacionTexto').css({
                'font-size': scroll * 2
            });
        }
    });
    /*
    $(window).scroll(function() {

        var scroll = $(window).scrollTop();

        console.log(scroll)
        $('.animacionDOS').css({
            'transform': `rotate(${360%scroll})`
        });

    });*/



});