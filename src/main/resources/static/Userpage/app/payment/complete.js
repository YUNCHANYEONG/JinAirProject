'use strict';

$(function () {
    // 예약 인원수 확인
    let cupo = $('.sale').attr("value");
    coupon(cupo);

    let isUpdate = $(location).attr('href').split('/')[5];

    console.log(isUpdate)

    function coupon(cupo){
        let ucIndex = $('.sale').attr("id");

        let finalCoupon
            finalCoupon = {
                data: {
                    ucUserindex: ucIndex,
                    ucCode: cupo,
                    ucIsUse: "Used",
                    ucTotcoupon: 0
                }
            }
        $.ajax({
            url: "/api/userCoupon/update",
            type: "PUT",
            data : JSON.stringify(finalCoupon),
            dataType: "text",
            async: false,
            contentType : "application/json",
            success(finalCoupon) {
            },
            error(error) {
                alert(error);
            }
        })
    }

    let sumResult = 0;
    $('.cookies').each(function (i){
        let num = $('.cookies').eq(i).attr("value");
        if(num % 2 != 0) {
            sumResult++;
        }
    });
    $('#peopleSum').html(sumResult + "명");

    $(".isAdult").each(function (i){
        let age = $('.isAdult').eq(i).attr("value");
        let resultAge = 2022 - age.substr(0, 4);

        let result = "";
        if(resultAge > 13){
            result = "성인";
            $('.isAdult').eq(i).html(result);
        }else if(resultAge < 13){
            result = "소아"
            $('.isAdult').eq(i).html(result);
        }else if(resultAge < 12){
            result = "유아"
            $('.isAdult').eq(i).html(result);
        }
    })
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
    $('.infoboxli1').click(function(){
        $('.infoboxli1').css('background-color', '#661E43');
        $('.infoboxli1').css('color', 'white');
        $('.infoboxli2').css('background-color', 'white');
        $('.infoboxli2').css('color', 'black');
        $('.bbsbox2').css('display', 'none');
        $('.bbsbox1').css('display', 'block');
    });
    $('.infoboxli2').click(function(){
        $('.infoboxli2').css('background-color', '#661E43');
        $('.infoboxli2').css('color', 'white');
        $('.infoboxli1').css('background-color', 'white');
        $('.infoboxli1').css('color', 'black');
        $('.bbsbox1').css('display', 'none');
        $('.bbsbox2').css('display', 'block');
    });
    $('.btn').click(function(){
        location.href='/index.html'
    });

    let spst1 = $('#startTime1').attr("value").split("T");
    let spend1 = $('#endTime1').attr("value").split("T");
    $('#startTime1').text(" " + spst1[0] + " " + spst1[1]);
    $('#endTime1').text(" " + spend1[0] + " " + spend1[1]);
    if($('#startTime2').val() != null){
        let spst2 = $('#startTime2').attr("value").split("T");
        let spend2 = $('#endTime2').attr("value").split("T");
        $('#startTime2').text(" " + spst2[0] + " " + spst2[1]);
        $('#endTime2').text(" " + spend2[0] + " " + spend2[1]);
    }

    let date = new Date();
    let week = new Array('일', '월', '화', '수', '목', '금', '토');
    let today = date.getFullYear() + "-" + ("00" + (date.getMonth()+1)).toString().slice(-2) + "-" + ("00" + date.getDate()).toString().slice(-2) + " (" + week[date.getDay()] +")";


    $('#today, #reserDay').text(today);

    // 총 결제금액 찍어주기
    let money = $('#totalPrice').attr("value");
    $('#totalPrice').text(" " + Math.ceil(money).toLocaleString() + "원");

    // 적립 데이터 확인


    // 비동기화
    const sleep = (ms) => new Promise((resolve) => {
        console.log(`sleep for ${ms}ms`);
        return setTimeout(() => {
            return resolve(console.log("woke up!"))
        }, ms)
    })

    // 포인트 적립
    let userIndex;
    let point;
    let airName = $('#airName').text();
    let startPoint = $('#startPoint').text();
    let arrPoint = $('#arrPoint').text();
    let startTime = $('#startTime1').text().trim().replace(' ', 'T') + ':00';

    console.log(airName + startPoint + arrPoint + startTime);

    if(!isUpdate){
        $.post({
            url: '/api/schedule/forPoint',
            data: "airName=" + airName + "&startPoint=" + startPoint + "&arrPoint=" + arrPoint + "&startTime=" + startTime,
            dataType: 'text',
            success: async function (response) {
                let dataJson = JSON.parse(response);
                let percent = dataJson.data.schPoint;

                point = money * percent / 100;

                await sleep(1000);
                console.log($("#resCode").text());
                $.get("/api/reservation/resCode/" + $("#resCode").text(), function (response) {
                    userIndex = response.data[0].reUserindex;

                    addPoint(point, userIndex);
                })
            }
        })
    }else{
        console.log('항공권 업데이트 완료')
    }



    function addPoint(point, userIndex){
        let jsonData = {
            data : {
                poPoint : point,
                poMemo: "항공권 예약",
                poUserindex: userIndex
            }
        }
        $.post({
            url : '/api/point',
            data : JSON.stringify(jsonData),
            dataType : 'text',
            contentType : 'application/json'
        })
    }

});