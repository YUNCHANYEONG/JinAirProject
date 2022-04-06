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
    $('.edit').click(function(){
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
            e.stopPropagation();
        });
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 91) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "0");
            $("#header").css("position", "absolute");
        }
    });

    if($("#qnaAnsdate").text() != null) {
        let str = $("#qnaAnsdate").text().substring(0, 10);
        console.log(str);
        $("#qnaAnsdate").html(str);
    }
});

(function ($){
    let idx = $(location).attr('href').split('/')[6];

    console.log(idx);
    let qView = new Vue({
        el : '#qView',
        data : {
            qView : {}
        }
    })

    let aView = new Vue({
        el : '#aView',
        data : {
            aView : {}
        }
    })

    searchQ(idx);
    searchA(idx);

    function searchQ(idx){
        $.get("/api/qna/list/"+idx, function (response){
            console.dir(response);
            qView.qView = response.data;
        })
    }

    function searchA(idx){
        $.get("/api/qnaAns/list/"+idx, function (response){
            console.dir(response);
            if(response.data == null) {
                $("#aView").remove();
            }
            aView.aView = response.data;
        })
    }

    pointResult(idx);


    function pointResult(index){
        let sum = 0;
        $.get("/api/point/user/"+index, function (response){
            for(let i = 0; i < response.data.length; i++){
                let point = response.data[i].poPoint;
                sum += point;
            }
            if( sum < 0){
                $('#point').text('0');
            }else {
                $('#point').text(sum.toLocaleString('ko-KR'));
            }
        })
    }


})(jQuery)