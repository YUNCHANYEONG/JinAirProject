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


    /*좌석배치도 모달창 */
    
    $("#modal_content1").css("display", "block");
    $("#modal_content2").css("display", "none");
    $("#modal_content3").css("display", "none");

    $("#modal_menu1").css("background-color", "#661e43");
    $("#modal_menu1").css("color", "#fff");
    $("#modal_menu2").css("background-color", "#fff");
    $("#modal_menu2").css("color", "#444");
    $("#modal_menu3").css("background-color", "#fff");
    $("#modal_menu3").css("color", "#444");

    $("#modal_menu1").on("click", function() {
        $("#modal_content1").css("display", "block");
        $("#modal_content2").css("display", "none");
        $("#modal_content3").css("display", "none");
        $("#modal_menu1").css("background-color", "#661e43");
        $("#modal_menu1").css("color", "#fff");
        $(".modal_menu").not("#modal_menu1").css("background-color", "#FFF");
        $(".modal_menu").not("#modal_menu1").css("color", "#444");
    })
    $("#modal_menu2").on("click", function() {
        $("#modal_content1").css("display", "none");
        $("#modal_content2").css("display", "block");
        $("#modal_content3").css("display", "none");
        $("#modal_menu2").css("background-color", "#661e43");
        $("#modal_menu2").css("color", "#fff");
        $(".modal_menu").not("#modal_menu2").css("background-color", "#FFF");
        $(".modal_menu").not("#modal_menu2").css("color", "#444");
    })
    $("#modal_menu3").on("click", function() {
        $("#modal_content1").css("display", "none");
        $("#modal_content2").css("display", "none");
        $("#modal_content3").css("display", "block");
        $("#modal_menu3").css("background-color", "#661e43");
        $("#modal_menu3").css("color", "#fff");
        $(".modal_menu").not("#modal_menu3").css("background-color", "#FFF");
        $(".modal_menu").not("#modal_menu3").css("color", "#444");
    })

});

$(() => {
    $("#modal_seatmap_wrap").hide();
    $("#modal_seatmap_wrap").hide();
    $(".seatmap_butt").on("click", () => {
        $("#modal_seatmap_wrap").fadeIn();
        $("#modal_seatmap_wrap").css("display", "flex")
    })
    $("#modal_seatmap_wrap .close").on("click", () => {
        $("#modal_seatmap_wrap").fadeOut();
    })
    
})
