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

    let idx = $(location).attr('href').split('/')[6]; // 21
    let prev = Number(idx) + 1; // 22
    let next = Number(idx) - 1; // 20

    let notiPriv = new Vue({
        el : '#notiPriv',
        data : {
            notiPriv : {}
        }
    })

    let notiNext = new Vue({
        el : '#notiNext',
        data : {
            notiNext : {}
        }
    })
    searchPrev(prev); // 22
    searchNext(next);

    let id  = prev; // 22
    let max = Number(id) + 30; // 55

    function searchPrev(prev){ // 22
        $.get("/api/eventWin/winView/"+prev, function (response){
            notiPriv.notiPriv = response.data; // 22번 페이지 정보를 가져옴
            if(response.data == null && prev != max) { // 22번의 데이터 없고, 22 == 52가 아니라면
                prevPage(prev); // 22
            }
        })
    }

    function prevPage(num) {    // 22
        searchPrev(num + 1)  // 23
        if (num == max){         // 52
            searchPrev(max);
        }
    }

    let id2 = next;
    let min = Number(id2) - 30;

    function searchNext(next){
        $.get("/api/eventWin/winView/"+next, function (response){
            notiNext.notiNext = response.data;
            if(response.data == null && next != min) {
                nextPage(next);
            }
        })
    }

    function nextPage(num) {
        searchNext(num -1)
        if (num == min){
            searchNext(min)
        }
    }

});
