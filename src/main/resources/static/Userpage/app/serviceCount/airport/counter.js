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

    $('.icoFold').click(function(){
        $('.icoFold').css("color", "#661e43")
        $('.list').css("display", "block");
        $('.icoFold1').css("color", "#444")
        $('.list1').css("display", "none");
        $('.icoFold2').css("color", "#444")
        $('.list2').css("display", "none");
        $('.icoFold3').css("color", "#444")
        $('.list3').css("display", "none");
        $('.icoFold4').css("color", "#444")
        $('.list4').css("display", "none");
    })
    $('.icoFold1').click(function(){
        $('.icoFold').css("color", "#444")
        $('.list').css("display", "none");
        $('.icoFold1').css("color", "#661e43")
        $('.list1').css("display", "block");
        $('.icoFold2').css("color", "#444")
        $('.list2').css("display", "none");
        $('.icoFold3').css("color", "#444")
        $('.list3').css("display", "none");
        $('.icoFold4').css("color", "#444")
        $('.list4').css("display", "none");
    })
    $('.icoFold2').click(function(){
        $('.icoFold').css("color", "#444")
        $('.list').css("display", "none");
        $('.icoFold1').css("color", "#444")
        $('.list1').css("display", "none");
        $('.icoFold2').css("color", "#661e43")
        $('.list2').css("display", "block");
        $('.icoFold3').css("color", "#444")
        $('.list3').css("display", "none");
        $('.icoFold4').css("color", "#444")
        $('.list4').css("display", "none");
    })
    $('.icoFold3').click(function(){
        $('.icoFold').css("color", "#444")
        $('.list').css("display", "none");
        $('.icoFold1').css("color", "#444")
        $('.list1').css("display", "none");
        $('.icoFold2').css("color", "#444")
        $('.list2').css("display", "none");
        $('.icoFold3').css("color", "#661e43")
        $('.list3').css("display", "block");
        $('.icoFold4').css("color", "#444")
        $('.list4').css("display", "none");
    })

});


/* 컨테이너 js */

$(() => {
    $("#domestic_tab").on('click', function (e) {
        $('#domestic').css({ "display": "block" });
        $('#international').css({ "display": "none" });
        $('#city').css({ "display": "none" });
    });
    $(() => {
        $("#international_tab").on('click', function (e) {
            $('#international').css({ "display": "block" });
            $('#international_tab').css({"background-color":"#661e43"});
            $('#international_tab').css({"color" : "#f7f7f6"});
            $('#domestic').css({ "display": "none" });
            $('#city').css({ "display": "none" });
        })
    })
    $(() => {
        $("#city_tab").on('click', function (e) {
            $('#city').css({ "display": "block" });
            $('#city_tab').css({"background-color":"#661e43"});
            $('#city_tab').css({"color" : "#f7f7f6"});
            $('#international').css({ "display": "none" });
            $('#domestic').css({ "display": "none" });
        })
    })
})
$(() => {
    $("#domestic_tab").on('click', function (e) {
        $('#domestic_tab').css({"background-color":"#661e43"});
        $('#domestic_tab').css({"color" : "#f7f7f6"});
        $('#city_tab').css({"background-color":"white"});
        $('#city_tab').css({"color" : "#444"});
        $('#international_tab').css({"background-color":"white"});
        $('#international_tab').css({"color" : "#444"});
    })
    $("#international_tab").on('click', function (e) {
        $('#international_tab').css({"background-color":"#661e43"});
        $('#international_tab').css({"color" : "#f7f7f6"});
        $('#city_tab').css({"background-color":"white"});
        $('#city_tab').css({"color" : "#444"});
        $('#domestic_tab').css({"background-color":"white"});
        $('#domestic_tab').css({"color" : "#444"});
    })
    $("#city_tab").on('click', function (e) {
        $('#city_tab').css({"background-color":"#661e43"});
        $('#city_tab').css({"color" : "#f7f7f6"});
        $('#international_tab').css({"background-color":"white"});
        $('#international_tab').css({"color" : "#444"});
        $('#domestic_tab').css({"background-color":"white"});
        $('#domestic_tab').css({"color" : "#444"});
    })
})


/* 메뉴 탭 js */
$(function() {
    $("#pointInfo_btn").click(function(){
        $('.pointInfo_modal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.pointInfo_modal').fadeOut();
        $('body').css('overflow', '');
    });
});
