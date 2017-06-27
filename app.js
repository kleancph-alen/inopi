
$(document).ready(function () {
    $(".red-area").mouseenter(function () {
        $(".red").css('opacity', '1');
    });
    $(".red-area").mouseleave(function () {
        $(".red").css('opacity', '0');
    });

    $(".blue-area").mouseenter(function () {
        $(".blue").css('opacity', '1');
    });
    $(".blue-area").mouseleave(function () {
        $(".blue").css('opacity', '0');
    });

    $(".yellow-area").mouseenter(function () {
        $(".yellow").css('opacity', '1');
    });
    $(".yellow-area").mouseleave(function () {
        $(".yellow").css('opacity', '0');
    });

    $('map').imageMapResize();
 
});