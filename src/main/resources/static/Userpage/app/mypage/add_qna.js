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

    $('.btn_agree').click(function(e){
        $('.covid_info').fadeOut(200);
        $('body').css('overflow', '');
        e.stopPropagation();
    });
    $('.close').click(function(e){
        $('.covid_info').fadeOut(200);
        $('body').css('overflow', '');
        e.stopPropagation();
    });

    $(window).scroll(function() {
        if($(this).scrollTop() > 90) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0px");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "90px");
            $("#header").css("position", "absolute");
        }
    });

    let filebox = document.querySelector('.file_box');
    filebox.addEventListener('dragenter', function(e){
    })
    filebox.addEventListener('dragover', function(e){
        e.preventDefault;
        let vaild = e.dataTransfer.types.indexOf('Files') >= 0;
        if(!vaild){
            this.style.backgroundColor = 'lightred';
        }else{
            this.style.backgroundColor = 'lightgray';
        }
    });
    filebox.addEventListener('dragleave', function(e){
        this.style.backgroundColor = 'white';
    })
    filebox.addEventListener('drop', function(e){
        e.preventDefault;
        this.style.backgroundColor = 'white';

        console.dir(e.dataTransfer);

        let data = e.dataTransfer.files[0];
        console.dir(data);
    })

    $('#file_add').on('change', function(){
        $('.addfilecontent').css('display', 'block');
        $('.addfilecontenttext').html($(this).val());
    })
    $('.addfilecontentbtn').on('click', function(){
        $('.addfilecontent').css('display', 'none');
        $('.addfilecontenttext').html('');
        $('#file_add').val('');
    })
});

(function ($){

    let userInfo = new Vue({
        el : '#userInfo',
        data : {
            userInfo : {}
        }
    })

    let idx = $("#memid").val();
    // 세션 받아와서 넣기.
    searchUser(idx);
    // 회원 정보
    function searchUser(idx) {
        $.get("/api/user/"+idx, function(response){
            console.dir(response);
            userInfo.userInfo = response.data;
            $("#email").val(response.data.memEmail);
        })
    }

    // 게시글 작성
    function send() {
        let qna = document.getElementById("qnaForm");

        qna.action = "/pages/qna_file/upload";
        qna.mothod = "POST";
        qna.submit();
    }

    // qna등록
    $("#addQna").on("click", function() {
        if(check()) {
            send();
        }
    })

    function check() {
        if($("#qnaType").val().length == 0) {
            alert("질문구분을 선택해주세요.");
            $("#qnaType").focus();
            return false;
        }
        if($("#title").val().length == 0) {
            alert("제목을 입력해주세요.");
            $("#title").focus();
            return false;
        }
        if($("#content").val().length == 0) {
            alert("내용을 입력해주세요.");
            $("#content").focus();
            return false;
        }
        if($("#agree").is(":checked") == false) {
            alert("개인정보 수집에 동의하셔야 진행가능합니다.");
            $("#agree").focus();
            return false;
        }
        return true;
    }



})(jQuery)


$(function() {
    $(".point_info").click(function(){
        $('.pointInfo_modal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.pointInfo_modal').fadeOut();
        $('body').css('overflow', '');
    });
});

$(function() {
    $(".mkt_info").click(function(){
        $('.mkt_modal').fadeIn();
        $('body').css('overflow', 'hidden');
    });
    $(".close").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
});

$(()=> {
    $('#no_answer').on('change', function(){
        if($('#no_answer').is(":checked")){
            $("#hiddenTrue").remove();
        }
    });
});

$(function() {
    $(".btnTypeA").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
    $(".btnTypeB").click(function(){
        $('.mkt_modal').fadeOut();
        $('body').css('overflow', '');
    });
});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
});

$(()=> {
    $('#no_answer').on('change', function(){
        if($('#no_answer').is(":checked")){
            $("#hiddenTrue").remove();
        }
    });
});