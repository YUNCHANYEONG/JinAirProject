'use strict';

$(function () {
    // 퀵 메뉴
    let currentPosition = parseInt($('.quickmanu').css('top'));
    $(window).scroll(function () {
        let position = $(window).scrollTop() * 0.023; // 현재 스크롤바의 위치값 반환
        $('.quickmanu').stop().animate({ 'top': + position + currentPosition + 'px' }, 1000);
    });

    $('.quicktop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });

});