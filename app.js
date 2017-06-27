
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

    $(".red-click").click(function (){
        $(".red-content").css('margin-top', '0px');
        $(".back").css('margin-top', '100vh');
    });

    $(".blue-click").click(function (){
        $(".blue-content").css('margin-left', '0px');
        $(".back").css('margin-left', '-100%');
    });

    $(".yellow-click").click(function (){
        $(".yellow-content").css('margin-left', '0px');
        $(".back").css('margin-left', '100%');
    });


    $('map').imageMapResize();
    
    $(".red-circle").height($(".red-circle").width());



});

function goBackRed(){
    $(".red-content").css('margin-top', '-100vh');
    $(".back").css('margin-top', '0vh');
}

function goBackBlue(){
    $(".blue-content").css('margin-left', '100%');
    $(".back").css('margin-left', '0%');
}

function goBackYellow(){
    $(".yellow-content").css('margin-left', '-100%');
    $(".back").css('margin-left', '0%');
}