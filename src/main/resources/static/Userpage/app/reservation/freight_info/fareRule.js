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
    
    $(document).ready(function(){
        // 퀵 faq 선택시 색 변환
        $('.quick_menu > ul > li').click(function(e){
            $(this).addClass('check');
            $('.quick_menu > ul > li').not(this).removeClass('check');
            $('.quick_menu > ul > li').not(this).find('a').css('color', '');
        });
    });
    $('.faq1').click(function(){
        $('#fareRules1').css('display', 'block');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'none');
    });
    $('.faq2').click(function(){
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'block');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'none');
    });
    $('.faq3').click(function(){
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'block');
        $('#fareRules4').css('display', 'none');
    });
    $('.faq4').click(function(){
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'block');
    });

    
    
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'fareRule1'){
        $('.faq1').addClass('check');
        $('.faq2').removeClass('check');
        $('.faq3').removeClass('check');
        $('.faq4').removeClass('check');
        $('#fareRules1').css('display', 'block');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'none');
    }else if(directId == 'fareRule2'){
        $('.faq3').addClass('check');
        $('.faq1').removeClass('check');
        $('.faq4').removeClass('check');
        $('.faq2').removeClass('check');
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'block');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'none');
    }else if(directId == 'fareRule3'){
        $('.faq4').addClass('check');
        $('.faq2').removeClass('check');
        $('.faq1').removeClass('check');
        $('.faq3').removeClass('check');
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'block');
        $('#fareRules4').css('display', 'none');
    }else if(directId == 'fareRule4'){
        $('.faq2').addClass('check');
        $('.faq4').removeClass('check');
        $('.faq3').removeClass('check');
        $('.faq1').removeClass('check');
        $('#fareRules1').css('display', 'none');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'block');
    }else{
        $('.faq1').addClass('check');
        $('.faq2').removeClass('check');
        $('.faq3').removeClass('check');
        $('.faq4').removeClass('check');
        $('#fareRules1').css('display', 'block');
        $('#fareRules2').css('display', 'none');
        $('#fareRules3').css('display', 'none');
        $('#fareRules4').css('display', 'none');
    }

    $('#cont02').hide();
    $('.line2').click(function(){
        $('#cont02').show();
        $('#cont01').hide();
        $('.line2').css('border-bottom', '1px solid #661E43');
        $('.line1').css('border-bottom', '1px solid #F7F7F7');
    })
    $('.line1').click(function(){
        $('#cont01').show();
        $('#cont02').hide();
        $('.line1').css('border-bottom', '1px solid #661E43');
        $('.line2').css('border-bottom', '1px solid #F7F7F7');
    })

    /* 이전 규정 확인하기 */
    $('.fontTypeC').click(function(){
        $('#popWrap').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $('.close').click(function(){
        $('#popWrap').fadeOut();
        $('body').css('overflow', '');
    });

});

function showFaq(obj){
    $('.tr_answer').css("display", "");
    let target = $(obj).attr("href");
    $(target).add($(target).find("td")).toggle();
}
