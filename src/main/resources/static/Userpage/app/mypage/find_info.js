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

    $('.email_modal').hide();
    $("input:radio[name='find']").click(function(){
        let check = $("input:radio[name='find']:checked").val();

        if(check == '아이디 찾기'){
            $('.modal_main_id').css('display', 'block');
            $('.modal_main_pw').css('display', 'none');
        }else if(check == '비밀번호 찾기'){
            $('.modal_main_id').css('display', 'none');
            $('.modal_main_pw').css('display', 'block');
        }
    });
    
    $('.confirm_email').click(function(){
        $('.email_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(){
            $('.email_modal').fadeOut(200);
            $('body').css('overflow', '');
        })
    });

    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'findid'){
        $("input:radio[name='find']:radio[value='아이디 찾기']").prop('checked', true);
        $('.modal_main_id').css('display', 'block');
        $('.modal_main_pw').css('display', 'none');
    }else if(directId == 'findpw'){
        $("input:radio[name='find']:radio[value='비밀번호 찾기']").prop('checked', true);
        $('.modal_main_id').css('display', 'none');
        $('.modal_main_pw').css('display', 'block');
    }else{
        $('.modal_main_id').css('display', 'block');
        $('.modal_main_pw').css('display', 'none');
    }


    const expHpText = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    const expEmailText = RegExp(/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/);

    // 아이디 찾기
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    $('#btn_ser1').on('click', function (){
        if(expEmailText.test($('#emAdr').val())){
            searchs($('#emAdr').val(), $('#bthDt').val(), $('#mbrLnm').val(), $('#mbrFnm').val());
        }
        if(expHpText.test($('#emAdr').val())){
            searchd($('#emAdr').val(), $('#bthDt').val(), $('#mbrLnm').val(), $('#mbrFnm').val());
        }
    })
    // 이메일로 찾기
    function searchs(a, b, c, d){
        $.get("/api/user/searchs/"+a+"/"+b+"/"+c+"/"+d, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
            if(itemList.itemList != null){
                location.href="/pages/mypage/find_id/"+itemList.itemList.memIndex;
            }else{
                location.href="/pages/mypage/noResult";
            }
        });
    }
    // 휴대폰 번호로 찾기
    function searchd(a, b, c, d){
        $.get("/api/user/searchd/"+a+"/"+b+"/"+c+"/"+d, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
            if(itemList.itemList != null){
                location.href="/pages/mypage/find_id/"+itemList.itemList.memIndex;
            }else{
                location.href="/pages/mypage/noResult";
            }
        });
    }


    // 비밀번호 찾기
    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    $('#btn_ser2').on('click', function (){
        if(expEmailText.test($('#emAdr1').val())){
            reads($('#emAdr1').val(), $('#bthDt1').val(), $('#mbrLnm1').val(), $('#mbrFnm1').val(), $('#memUserId').val());
        }
        if(expHpText.test($('#emAdr1').val())){
            readd($('#emAdr1').val(), $('#bthDt1').val(), $('#mbrLnm1').val(), $('#mbrFnm1').val(), $('#memUserId').val());
        }
    })
    // 이메일로 찾기
    function reads(a, b, c, d, e){
        $.get("/api/user/reads/"+a+"/"+b+"/"+c+"/"+d+"/"+e, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
            if(itemList.itemList != null){
                location.href="/pages/mypage/find_pw/"+itemList.itemList.memIndex;
            }else{
                location.href="/pages/mypage/noResult";
            }
        });
    }
    // 휴대폰 번호로 찾기
    function readd(a, b, c, d, e){
        $.get("/api/user/readd/"+a+"/"+b+"/"+c+"/"+d+"/"+e, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
            if(itemList.itemList != null){
                location.href="/pages/mypage/find_pw/"+itemList.itemList.memIndex;
            }else{
                location.href="/pages/mypage/noResult";
            }
        });
    }



});