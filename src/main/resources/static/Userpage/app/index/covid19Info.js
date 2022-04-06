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
        $("li[class *= 'open']").css({ "border-bottom": "none" });
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
    


    $('.covidInfo1').click(function () {
        $('#container').css({"height":"1600px"});
        $(this).addClass('check');
        $('.covidInfo2, .covidInfo3, .covidInfo4, .covidInfo5').removeClass('check');
        $('.korea').css('display', 'block');
        $('.usa').css('display', 'none');
        $('.japan').css('display', 'none');
        $('.china').css('display', 'none');
        $('.taipei').css('display', 'none');
    });
    $('.covidInfo2').on('click', function () {
        $('#container').css({"height":"1600px"});
        $(this).addClass('check');
        $('.covidInfo1, .covidInfo3, .covidInfo4, .covidInfo5').removeClass('check');
        $('.korea').css('display', 'none');
        $('.usa').css('display', 'block');
        $('.japan').css('display', 'none');
        $('.china').css('display', 'none');
        $('.taipei').css('display', 'none');
    });
    $('.covidInfo3').on('click', function () {
        $('#container').css({"height":"1600px"});
        $(this).addClass('check');
        $('.covidInfo1, .covidInfo2, .covidInfo4, .covidInfo5').removeClass('check');
        $('.korea').css('display', 'none');
        $('.usa').css('display', 'none');
        $('.japan').css('display', 'block');
        $('.china').css('display', 'none');
        $('.taipei').css('display', 'none');
    });
    $('.covidInfo4').on('click', function () {
        $('#container').css({"height":"3400px"});
        $(this).addClass('check');
        $('.covidInfo1, .covidInfo2, .covidInfo3, .covidInfo5').removeClass('check');
        $('.korea').css('display', 'none');
        $('.usa').css('display', 'none');
        $('.japan').css('display', 'none');
        $('.china').css('display', 'block');
        $('.taipei').css('display', 'none');
    });
    $('.covidInfo5').on('click', function () {
        $('#container').css({"height":"3400px"});
        $(this).addClass('check');
        $('.covidInfo1, .covidInfo3, .covidInfo4, .covidInfo2').removeClass('check');
        $('.korea').css('display', 'none');
        $('.usa').css('display', 'none');
        $('.japan').css('display', 'none');
        $('.china').css('display', 'none');
        $('.taipei').css('display', 'block');
    });
});