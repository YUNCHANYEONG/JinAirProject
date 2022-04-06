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
    $('#agreeAll').click(function(){
        let checked = $('#agreeAll').is(':checked');
        if(checked){
            $('input:checkbox').prop('checked', true);
        }else{            
            $('input:checkbox').prop('checked', false);
        }
    })
    $('.false_modal').hide();

    $('.confirm_modal1').hide();
    $('.term01').click(function(){
        $('.confirm_modal1').css('display', 'flex');
        $('.confirm_modal1').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.xbox').click(function(){
            $('.confirm_modal1').fadeOut(200);
            $('body').css('overflow', '');
        })
    });
    $('.confirm_modal2').hide();
    $('.term02').click(function(){
        $('.confirm_modal2').css('display', 'flex');
        $('.confirm_modal2').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.xbox').click(function(){
            $('.confirm_modal2').fadeOut(200);
            $('body').css('overflow', '');
        })
    });
    $('.confirm_modal3').hide();
    $('.term03').click(function(){
        $('.confirm_modal3').css('display', 'flex');
        $('.confirm_modal3').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.xbox').click(function(){
            $('.confirm_modal3').fadeOut(200);
            $('body').css('overflow', '');
        })
    });
});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('.confirm_modal2', parent.document).fadeOut(200);
    $('.confirm_modal3', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

function confirmbtn1(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
    $('#term01', parent.document).prop('checked', true);
}

function confirmbtn2(){
    $('.confirm_modal2', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
    $('#term02', parent.document).prop('checked', true);
}

function confirmbtn3(){
    $('.confirm_modal3', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
    $('#term03', parent.document).prop('checked', true);
}

function phonecheck(){
    let term1 = $('#term01').is(':checked');
    let term2 = $('#term02').is(':checked');
    let term3 = $('#term03').is(':checked');
    
        if(term1 && term2 && term3){
            ischeck.value = 'y' ;
                //api로 넘기기
            location.href="/pages/index/joinForm";
        }else{
            $('.false_modal').css('display', 'flex');
            $('.false_modal').fadeIn(200);
            $('.btn_cancel').click(function(){
                $('.false_modal').fadeOut(200);
                $('body').css('overflow', '');
            })
        }
}
function ipincheck(){
    let term1 = $('#term01').is(':checked');
    let term2 = $('#term02').is(':checked');
    let term3 = $('#term03').is(':checked');

        if(term1 && term2 && term3){
            ischeck.value = 'y' ;
                //api로 넘기기
            location.href="/pages/index/joinForm";
        }else{
            ischeck.value = 'n' ;
            $('.false_modal').fadeIn(200);
            $('.false_modal').css('display', 'flex');
            $('body').css('overflow', 'hidden');
            $('.btn_cancel').click(function(){
                $('.false_modal').fadeOut(200);
            })
        }
}