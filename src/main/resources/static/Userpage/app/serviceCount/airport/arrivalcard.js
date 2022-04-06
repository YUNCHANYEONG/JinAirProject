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


/* 수평탭 */
    $('.arv1').on('click', function () {
        $('#arvCont1').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })

    $('.arv2').on('click', function () {
        $('#arvCont2').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })
    $('.arv3').on('click', function () {
        $('#arvCont3').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })
    $('.arv4').on('click', function () {
        $('#arvCont4').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })
    $('.arv5').on('click', function () {
        $('#arvCont5').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })
    $('.arv6').on('click', function () {
        $('#arvCont6').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
    })
    $('.arv7').on('click', function () {
        $('#arvCont7').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.arv8').css({"background-color":"white", "color": "#444"});
        $('#arvCont8').css({"display":"none"});
        $('.landingCard_guide').css({"display":"block"});
    })
    $('.arv8').on('click', function () {
        $('#arvCont8').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.arv2').css({"background-color":"white", "color": "#444"});
        $('#arvCont2').css({"display":"none"});
        $('.arv3').css({"background-color":"white", "color": "#444"});
        $('#arvCont3').css({"display":"none"});
        $('.arv4').css({"background-color":"white", "color": "#444"});
        $('#arvCont4').css({"display":"none"});
        $('.arv5').css({"background-color":"white", "color": "#444"});
        $('#arvCont5').css({"display":"none"});
        $('.arv6').css({"background-color":"white", "color": "#444"});
        $('#arvCont6').css({"display":"none"});
        $('.arv7').css({"background-color":"white", "color": "#444"});
        $('#arvCont7').css({"display":"none"});
        $('.arv1').css({"background-color":"white", "color": "#444"});
        $('#arvCont1').css({"display":"none"});
        $('.landingCard_guide').css({"display":"none"});
    })
    
    




    
});
 /* 체크인 후 절차 */
$(function() {
    $('.sizeL').on('click', function(e){
        e.stopPropagation()
        $('.popup').css({"display":"block"});
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.popup').css({"display":"none"});
        $('body').css('overflow', '');
    });
    $('#btn3').on('click', function(){
        $('.modal').css({"display":"block"});
    });
    $('.btnTypeB').on('click', function(){
        e.stopPropagation()
        $('.modal').css({"display":"none"});
    });
});