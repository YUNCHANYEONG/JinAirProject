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
    $("body").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
    })


    $('.dis_card').on('click', function () {
        $('#container').css({"height":"2700px"});
        $('.card').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_exchange').css({"background-color":"white", "color": "#444"});
        $('.dis_no').css({"background-color":"white", "color": "#444"});
        $('.exchange').css({"display":"none"});
        $('.no_interest').css({"display":"none"});
    })
    $('.dis_exchange').on('click', function () {
        $('#container').css({"height":"2100px"});
        $('.exchange').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_card').css({"background-color":"white", "color": "#444"});
        $('.dis_no').css({"background-color":"white", "color": "#444"});
        $('.card').css({"display":"none"});
        $('.no_interest').css({"display":"none"});
    })
    $('.dis_no').on('click', function () {
        $('#container').css({"height":"1700px"});
        $('.no_interest').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_card').css({"background-color":"white", "color": "#444"});
        $('.dis_exchange').css({"background-color":"white", "color": "#444"});
        $('.card').css({"display":"none"});
        $('.exchange').css({"display":"none"});
    })

    let currentPosition = parseInt($('.quickmanu').css('top'));
    $(window).scroll(function () {
        let position = $(window).scrollTop() * 0.023; // 현재 스크롤바의 위치값 반환
        $('.quickmanu').stop().animate({ 'top': + position + currentPosition + 'px' }, 1000);
    });

    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'associatedCard1'){
        $('#container').css({"height":"2700px"});
        $('.card').css({"display":"block"});
        $('.dis_card').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_exchange').css({"background-color":"white", "color": "#444"});
        $('.dis_no').css({"background-color":"white", "color": "#444"});
        $('.exchange').css({"display":"none"});
        $('.no_interest').css({"display":"none"});
    }else if(directId == 'associatedCard2'){
        $('#container').css({"height":"2100px"});
        $('.exchange').css({"display":"block"});
        $('.dis_exchange').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_card').css({"background-color":"white", "color": "#444"});
        $('.dis_no').css({"background-color":"white", "color": "#444"});
        $('.card').css({"display":"none"});
        $('.no_interest').css({"display":"none"});
    }else if(directId == 'associatedCard3'){
        $('#container').css({"height":"1700px"});
        $('.no_interest').css({"display":"block"});
        $('.dis_no').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_card').css({"background-color":"white", "color": "#444"});
        $('.dis_exchange').css({"background-color":"white", "color": "#444"});
        $('.card').css({"display":"none"});
        $('.exchange').css({"display":"none"});
    }else{
        $('#container').css({"height":"2700px"});
        $('.card').css({"display":"block"});
        $('.dis_card').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_exchange').css({"background-color":"white", "color": "#444"});
        $('.dis_no').css({"background-color":"white", "color": "#444"});
        $('.exchange').css({"display":"none"});
        $('.no_interest').css({"display":"none"});
    }
});

