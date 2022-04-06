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

    $('#mem_userpw').on('keydown', function (key){
        if (key.keyCode==13){
            if(!$('#mem_userid').val() || !$('#mem_userpw').val()) {
                alert('아이디와 비밀번호를 정확히 입력하세요');
            }else {
                list($('#mem_userid').val());
            }
        }
    });

    $('#duplication').on('click', function (){
        if(!$('#mem_userid').val() || !$('#mem_userpw').val()) {
            alert('아이디와 비밀번호를 정확히 입력하세요');
        }else {
            list($('#mem_userid').val());
        }
    })

    function list(index){
        $.get("/api/user/read/"+index, function(response){
            let itemList = response.data;
            if (!itemList){
                alert(' 아이디 또는 비밀번호를 잘못 입력했습니다.\n' +
                        '입력하신 내용을 다시 확인해주세요.');
            }else if(itemList.memUserid === $('#mem_userid').val() && itemList.memUserpw !== $('#mem_userpw').val()){
                alert('비밀번호를 잘못 입력했습니다');
            }else if(itemList.memUserid === $('#mem_userid').val() && itemList.memUserpw === $('#mem_userpw').val()){
                location.href="/pages/index/"+index;
            }
        });
    }






});


function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}