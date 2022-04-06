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
        $('.pwcheck_modal .passwordValue').val("");
        $('body').css('overflow', 'hidden');

        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);  
            $('body').css('overflow', '');        
            e.stopPropagation();  
        });
    });
    $(window).scroll(function() {
        if($(this).scrollTop() > 90) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "0");
            $("#header").css("position", "absolute");
        }
    });
    
    /* 운임정보 */
    $(".datail_add").hide();
    $(".arr_top").css("display", "none");
    $(".arr_bott").css("display", "block");
    $(".datail_add").css("width", "100%");


    $(".arr_bott1").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top1").css("display", "inline-block");
        // $(".datail_add1").slideDown(200);
        $(".datail_add1").toggle();
    })
    $(".arr_top1").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott1").css("display", "inline-block");
        $(".datail_add1").slideUp(200);
    })

    $(".arr_bott2").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top2").css("display", "block");
        $(".datail_add2").slideDown();
    })
    $(".arr_top2").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott2").css("display", "block");
        $(".datail_add2").slideUp();
    })

    $(".arr_bott3").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top3").css("display", "block");
        $(".datail_add3").slideDown();
    })
    $(".arr_top3").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott3").css("display", "block");
        $(".datail_add3").slideUp();
    })

    /*여정 및 운임정보 끝*/

    /*부가서비스 */
    $(".arr_bott4").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top4").css("display", "block");
        $(".datail_add4").slideDown();
    })
    $(".arr_top4").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott4").css("display", "block");
        $(".datail_add4").slideUp();
    })

    $(".arr_bott5").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top5").css("display", "block");
        $(".datail_add5").slideDown();
    })
    $(".arr_top5").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott5").css("display", "block");
        $(".datail_add5").slideUp();
    })


    $(".arr_bott6").on("click", function() {
        $(this).css("display", "none");
        $(".arr_top6").css("display", "block");
        $(".datail_add6").slideDown();
    })
    $(".arr_top6").on("click", function() {
        $(this).css("display", "none");
        $(".arr_bott6").css("display", "block");
        $(".datail_add6").slideUp();
    })
    /*부가서비스 끝 */

    // 쿠폰 수
    let memIndex = $('#memid').val();

    couponResult(memIndex);

    function couponResult(memIndex) {
        console.log(memIndex);
        $.get("/api/userCoupon/list/" + memIndex, function (response) {
            console.dir(response);
            let coupon;
            if (response == "") {
                coupon = 0;
            } else {
                coupon = response + "장";
            }
            document.getElementById("coupon").innerHTML = coupon;
        });
    }

    pointResult(memIndex);

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
    $('#passwordValue').on('keydown', function (key){
        if (key.keyCode==13){
            if(!$('#passwordValue').val()) {
                alert('비밀번호를 입력하세요');
            }else {
                list($('#passwordValue').val());
            }
        }
    });
    $('#btn_agree').on('click', function (){
        if(!$('#passwordValue').val()) {
            alert('비밀번호를 입력하세요');
        }else {
            list($('#passwordValue').val());
        }
    })
    function list(index){
        $.get("/api/user/"+memIndex, function(response){
            let itemList = response.data;
            if (itemList.memUserpw != index){
                alert('비밀번호를 잘못 입력했습니다.\n' +
                    '입력하신 내용을 다시 확인해주세요.');
            }else if(itemList.memUserpw == index){
                location.href='/pages/index/mypageEdit'
            }
        });
    }

    // 기본 세팅
    $("#itemList1").css("display","none");
    $(".old_booking_list").css("display","none");
    $(".now_booking").on('click', function () {
        $(".old_booking").css("background-color", "white");
        $(".old_booking").css("color", "#444");
        $(".now_booking").css({"background-color" : "rgb(102, 30, 67)", "color" : "white"});
        $("#itemList1").css("display","none");
        $(".old_booking_list").css("display","none");
        searchStart();
    })
    $(".old_booking").on('click', function () {
        $(".now_booking").css("background-color", "white");
        $(".now_booking").css("color", "#444");
        $(".old_booking").css({"background-color" : "rgb(102, 30, 67)", "color" : "white"});
        $("#itemList").css("display","none");
        $(".cur_booking_list").css("display","none");
        searchStartt();
    })


    // list
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
            btnDetail(reIndex){
                location.href="/pages/index/mypageGetReservationDetail/"+reIndex;
            }
        }
    });
    searchStart();
    function searchStart(){
        $.get("/api/reservation/reservation/"+memIndex, function(response){
            if(response.data == 0){
                $("#itemList").css("display","none");
                $(".cur_booking_list").css("display","block");
            }else{
                itemList.itemList = response.data;
                $("#itemList").css("display","block");
                $(".cur_booking_list").css("display","none");
            }
        });
    }



    // list1
    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {}
        },
        methods:{
            btnDetail(reIndex){
                location.href="/pages/index/mypageGetReservationDetail/"+reIndex;
            }
        }
    });
    function searchStartt(){
        $.get("/api/reservation/oldReservation/"+memIndex, function(response){
            if(response.data == 0){
                $("#itemList1").css("display","none");
                $(".old_booking_list").css("display","block");
            }else{
                itemList1.itemList1 = response.data;
                $("#itemList1").css("display","block");
                $(".old_booking_list").css("display","none");
            }
        });
    }






});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}
