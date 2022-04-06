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




    $('.help_child').on('click', function () {
        $('#help1').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.help_pet').css({"background-color":"white", "color": "#444"});
        $('#help2').css({"display":"none"});
        $('.help_pw').css({"background-color":"white", "color": "#444"});
        $('#help3').css({"display":"none"});
        $('.help_dsbd').css({"background-color":"white", "color": "#444"});
        $('#help4').css({"display":"none"});
        $('.help_vt').css({"background-color":"white", "color": "#444"});
        $('#help5').css({"display":"none"});
    })
    $('.help_pet').on('click', function () {
        $('#help2').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.help_child').css({"background-color":"white", "color": "#444"});
        $('#help1').css({"display":"none"});
        $('.help_pw').css({"background-color":"white", "color": "#444"});
        $('#help3').css({"display":"none"});
        $('.help_dsbd').css({"background-color":"white", "color": "#444"});
        $('#help4').css({"display":"none"});
        $('.help_vt').css({"background-color":"white", "color": "#444"});
        $('#help5').css({"display":"none"});
    })
    $('.help_pw').on('click', function () {
        $('#help3').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.help_child').css({"background-color":"white", "color": "#444"});
        $('#help1').css({"display":"none"});
        $('.help_pet').css({"background-color":"white", "color": "#444"});
        $('#help2').css({"display":"none"});
        $('.help_dsbd').css({"background-color":"white", "color": "#444"});
        $('#help4').css({"display":"none"});
        $('.help_vt').css({"background-color":"white", "color": "#444"});
        $('#help5').css({"display":"none"});
    })
    $('.help_dsbd').on('click', function () {
        $('#help4').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.help_child').css({"background-color":"white", "color": "#444"});
        $('#help1').css({"display":"none"});
        $('.help_pet').css({"background-color":"white", "color": "#444"});
        $('#help2').css({"display":"none"});
        $('.help_pw').css({"background-color":"white", "color": "#444"});
        $('#help3').css({"display":"none"});
        $('.help_vt').css({"background-color":"white", "color": "#444"});
        $('#help5').css({"display":"none"});
    })
    $('.help_vt').on('click', function () {
        $('#help5').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.help_child').css({"background-color":"white", "color": "#444"});
        $('#help1').css({"display":"none"});
        $('.help_pet').css({"background-color":"white", "color": "#444"});
        $('#help2').css({"display":"none"});
        $('.help_pw').css({"background-color":"white", "color": "#444"});
        $('#help3').css({"display":"none"});
        $('.help_dsbd').css({"background-color":"white", "color": "#444"});
        $('#help4').css({"display":"none"});
    })


});