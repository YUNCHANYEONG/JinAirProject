'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })

    $('.modal').hide();
    $("li[class *= 'open']").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeIn(200);
    })
    $(".nav_all").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })
    $(".modal").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })



    
    $(".dis_family").on('click', function () {//가족
        $("#container").css("height", "2000px");
        $(".discount_commercial, .discount_live_jeju, .discount_addr_jeju, .discount_addr_gunsan").css("display","none");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("background-color", "white");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("color", "#444");
        $(".dis_family").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".discount_family").css("display","block");
    })

    $(".dis_commercial").on('click', function () {//상용
        $("#container").css("height", "3800px");
        $(".dis_family, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_addr_jeju, .discount_addr_gunsan").css("display", "none");
        $(".discount_commercial").css("display","block");
        $(".dis_commercial").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });

    })

    $(".dis_live_jeju").on('click', function () {//제주도민
        $("#container").css("height", "2000px");
        $(".dis_family, .dis_commercial, .dis_addr_jeju, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_commercial, .discount_addr_jeju, .discount_addr_gunsan").css("display", "none");
        $(".discount_live_jeju").css("display","block");
        $(".dis_live_jeju").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });

    })

    $(".dis_addr_jeju").on('click', function () {//재외/명예도민
        $("#container").css("height", "2000px");
        $(".dis_family, .dis_live_jeju, .dis_commercial, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_commercial, .discount_addr_gunsan").css("display", "none");
        $(".discount_addr_jeju").css("display","block");
        $(".dis_addr_jeju").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
    })

    $(".dis_addr_gunsan").on('click', function () {//군산시민
        $("#container").css("height", "2300px");
        $(".discount_addr_gunsan").css("display","block");
        $(".dis_addr_gunsan").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });

        $(".dis_family, .dis_live_jeju, .dis_addr_jeju, .dis_commercial").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_addr_jeju, .discount_commercial").css("display", "none");
    })

});

$(()=> {
    $(".date").on('click', () => {
        $("#modal_isdate").fadeIn();
    })
    $(".modal_isclose_btn").on('click', () => {
        $("#modal_isdate").fadeOut();
    })

    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'discount1'){
        $("#container").css("height", "2000px");
        $(".discount_commercial, .discount_live_jeju, .discount_addr_jeju, .discount_addr_gunsan").css("display","none");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("background-color", "white");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("color", "#444");
        $(".dis_family").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
        $(".discount_family").css("display","block");
    }else if(directId == 'discount2'){
        $("#container").css("height", "3800px");
        $(".dis_family, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_addr_jeju, .discount_addr_gunsan").css("display", "none");
        $(".discount_commercial").css("display","block");
        $(".dis_commercial").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
    }else if(directId == 'discount3'){
        $("#container").css("height", "2000px");
        $(".dis_family, .dis_commercial, .dis_addr_jeju, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_commercial, .discount_addr_jeju, .discount_addr_gunsan").css("display", "none");
        $(".discount_live_jeju").css("display","block");
        $(".dis_live_jeju").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
    }else if(directId == 'discount4'){
        $("#container").css("height", "2000px");
        $(".dis_family, .dis_live_jeju, .dis_commercial, .dis_addr_gunsan").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_commercial, .discount_addr_gunsan").css("display", "none");
        $(".discount_addr_jeju").css("display","block");
        $(".dis_addr_jeju").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
    }else if(directId == 'discount5'){
        $("#container").css("height", "2300px");
        $(".discount_addr_gunsan").css("display","block");
        $(".dis_addr_gunsan").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });

        $(".dis_family, .dis_live_jeju, .dis_addr_jeju, .dis_commercial").css({
            "background-color" : "white",
            "color" : "#444"
        });
        $(".discount_family, .discount_live_jeju, .discount_addr_jeju, .discount_commercial").css("display", "none");
    }else{
        $("#container").css("height", "2000px");
        $(".discount_commercial, .discount_live_jeju, .discount_addr_jeju, .discount_addr_gunsan").css("display","none");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("background-color", "white");
        $(".dis_commercial, .dis_live_jeju, .dis_addr_jeju, .dis_addr_gunsan").css("color", "#444");
        $(".dis_family").css({
            "background-color" : "rgb(102, 30, 67)",
            "color" : "white"
        });
    }
});

