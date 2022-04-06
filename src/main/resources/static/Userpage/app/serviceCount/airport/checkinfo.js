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


/* 수평탭 */
    $('.checkinfo1').on('click', function () {
        $('#checkinCont01').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.checkinfo2').css({"background-color":"white", "color": "#444"});
        $('#checkinCont02').css({"display":"none"});
        $('.checkinfo3').css({"background-color":"white", "color": "#444"});
        $('#checkinCont03').css({"display":"none"});

    })
    $('.checkinfo2').on('click', function () {
        $('#checkinCont02').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.checkinfo1').css({"background-color":"white", "color": "#444"});
        $('#checkinCont01').css({"display":"none"});
        $('.checkinfo3').css({"background-color":"white", "color": "#444"});
        $('#checkinCont03').css({"display":"none"});

    })
    $('.checkinfo3').on('click', function () {
        $('#checkinCont03').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.checkinfo1').css({"background-color":"white", "color": "#444"});
        $('#checkinCont01').css({"display":"none"});
        $('.checkinfo2').css({"background-color":"white", "color": "#444"});
        $('#checkinCont02').css({"display":"none"});
    })

/* 체크인 리스트 */
    $('.choice1').on('click', function () {
        $('#member').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.choice2').css({"background-color":"white", "color": "#444"});
        $('#nonmember').css({"display":"none"});

    })
    $('.choice2').on('click', function () {
        $('#nonmember').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.choice1').css({"background-color":"white", "color": "#444"});
        $('#member').css({"display":"none"});
    })



});

 /* 체크인 후 절차 */
$(function() {
    $('.checkinEX_1').on('click', function(){
        $('#popWrap').css({"display":"block"});
        $('body').css('overflow', 'hidden');
    });
    $("#popWrap").click(function(){
        $('#popWrap').css({"display":"none"});
        $('body').css('overflow', '');
    });
    $('.checkinEX_2').on('click', function(){
        $('#popWrap2').css({"display":"block"});
        $('body').css('overflow', 'hidden');
    });
    $("#popWrap2").click(function(){
        $('#popWrap2').css({"display":"none"});
        $('body').css('overflow', '');
    });

    $("input[type=date].placeholder").on("change", (e) => {
      const target = $(e.target);
      if (target.val() == "") target.addClass("date_empty");
      else target.removeClass("date_empty");
    });
});