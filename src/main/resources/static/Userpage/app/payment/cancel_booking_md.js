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


    //--------------------------------------------------------------------------------------
    // 정보
    let reIndex1 = $('#reIndex1').val(); // 여정1 예약 번호
    let reTripKind = $('#reTripKind').val() // 여정1 운항타입
    let rePeopleType = $('#rePeopleType').val() // 여정1 탑승구성

    let inonesoo = rePeopleType.split(' ');
    let modiAdult = 0;
    let modiChild = 0;
    let modiBaby = 0;
    let totalNum = 0;
    if(inonesoo.length == 2){
        if(inonesoo[0] == '소아'){
            modiChild = Number(inonesoo[1])
        }else if(inonesoo[0] == '성인'){
            modiAdult = Number(inonesoo[1])
        }
    }else if(inonesoo.length == 4){
        if(inonesoo[2] == '유아'){
            modiAdult = Number(inonesoo[1]);
            modiBaby = Number(inonesoo[3]);
        }else if(inonesoo[2] == '소아'){
            modiAdult = Number(inonesoo[1]);
            modiChild = Number(inonesoo[3])
        }
    }else if(inonesoo.length == 6){
        modiAdult = Number(inonesoo[1]);
        modiChild = Number(inonesoo[3])
        modiBaby = Number(inonesoo[5]);
    }
    totalNum = modiAdult + modiChild + modiBaby;
    let endIdx = Number(totalNum*2) + Number(reIndex1) -1

    for(let i = 0 ; i < totalNum*2 ; i++){
        let num = $(`.reBirth${i}`).text().substr(0,4);
        if(2022 - Number(num) > 13){
            $(`.rePeopleType${i}`).html('성인')
        }else if(2022 - Number(num) > 2){
            $(`.rePeopleType${i}`).html('소아')
        }else{
            $(`.rePeopleType${i}`).html('유아')
        }
    }

    // 구간1
    function searchStart(){
        $.get("/api/reservation/"+reIndex1, function(response){
            $('.trip1BP').html(response.data.reSchBasicPrice.toLocaleString('ko-KR'))
        });
    }
    function searchStart3(){
        $.get("/api/reservation/"+reIndex1, function(response){
            $('.planePrice').html((Number(response.data.reSchBasicPrice) * totalNum).toLocaleString('ko-KR'));          // 항공운임
            let finalPrice = (Number(response.data.reSchBasicPrice)+5000+4000) * totalNum;
            $('.finalPrice').html((finalPrice).toLocaleString('ko-KR'));  // 총운임
            $('.oilPrice').html((5000 * totalNum).toLocaleString('ko-KR')); // 유류할증료
            $('.taxPrice').html((4000 * totalNum).toLocaleString('ko-KR')); // 세금

            // 사전좌석 지정
            let seat1PP = 0;
            for(let i =  0 ; i < totalNum ; i++){
                if($(`.seat1D${i}`).html() == ''){
                    $(`.seat1D${i}`).html('');
                    $(`.seat1P${i}`).html(0);
                }else{
                    let seat1P = Number($(`.seat1P${i}`).html());
                    seat1PP += seat1P;
                }
            }
            $('.seatPrice').text((seat1PP).toLocaleString('ko-KR'))

            // 초과 수하물
            for(let i =  0 ; i < totalNum ; i++){
                if($(`.reBaggageidx1${i}`).val() == ''){
                    $(`.bagg1KG${i}`).text('');
                    $(`.bagg1P${i}`).text(0);
                }else{
                    $.get("/api/optional/baggage/"+$(`.reBaggageidx1${i}`).val(), function(response){
                        $(`.bagg1KG${i}`).text(response.data.bgStandard);
                        $(`.bagg1P${i}`).text(response.data.bgPrice);
                    });
                }
            }

            // 보험
            for(let i =  0 ; i < totalNum ; i++){
                if($(`.reInsuranceidx1${i}`).val() == ''){
                    $(`.Insu1Tp${i}`).text('');
                    $(`.Insu1P${i}`).text(0);
                }else{
                    $.get("/api/optional/insurance/"+$(`.reInsuranceidx1${i}`).val(), function(response){
                        $(`.Insu1Tp${i}`).text(response.data.isType);
                        $(`.Insu1P${i}`).text(response.data.isPrice);
                    });
                }
            }

            // 전체 가격 찍어주기
            function callData(i){
                let m = 0;
                $.ajax({
                    url: "/api/optional/baggage/search/"+i,
                    data : {id : i},
                    async :false,
                    type: "get",
                    dataType: "text",
                    success : function(response){
                        m = response;
                        console.log(m)
                    }
                })
                return m;
            }
            function callData1(i){
                let m = 0;
                $.ajax({
                    url: "/api/optional/insurance/search/"+i,
                    data : {id : i},
                    async :false,
                    type: "get",
                    dataType: "text",
                    success : function(response){
                        m = response;
                        console.log(m)
                    }
                })
                return m;
            }

            let BaggPP = [];
            let IsurPP = [];
            for(let i =  0 ; i < totalNum ; i++){
                if(!$(`.reBaggageidx1${i}`).val()){
                    BaggPP.push(0)
                }else{
                    BaggPP.push(callData($(`.reBaggageidx1${i}`).val()));
                }
            }
            let BaggPPP = 0;
            for(let i = 0 ; i < BaggPP.length; i++){
                BaggPPP += Number(BaggPP[i]);
            }
            $('.BaggPrice').text(BaggPPP.toLocaleString('ko-KR'))

            for(let i =  0 ; i < totalNum ; i++){
                if(!$(`.reInsuranceidx1${i}`).val()){
                    IsurPP.push(0)
                }else{
                    IsurPP.push(callData1($(`.reInsuranceidx1${i}`).val()));
                }
            }
            let IsurPPP = 0;
            for(let i = 0 ; i < IsurPP.length; i++){
                IsurPPP += Number(IsurPP[i]);
            }
            $('.InsuPrice').text(IsurPPP.toLocaleString('ko-KR'))

            let price = 0;
            for(let i = 0 ; i < BaggPP.length; i++){
                price += Number(BaggPP[i]);
            }
            for(let i = 0 ; i < IsurPP.length; i++){
                price += Number(IsurPP[i]);
            }
            $('.subFinalprice').text((price + seat1PP).toLocaleString('ko-KR'));
            $('.realPayPrice').text((price + seat1PP + finalPrice).toLocaleString('ko-KR'));
            $('.realExchangePrice').text((price + seat1PP + finalPrice - 2000).toLocaleString('ko-KR'));

        });
    }

    searchStart();
    searchStart3();


    $('.confirm_btn').click(function(){
        let confirmcheck = $('#check').is(':checked');
        if(confirmcheck){
            for(let i = Number(reIndex1) ; i <= endIdx ; i+=2){

                let jsonData;
                jsonData = {
                    data : {
                        reIndex: i,
                    }
                }
                $.ajax({
                    url: "/api/reservation",
                    data: JSON.stringify(jsonData),
                    method: "PUT",
                    dataType: "text",
                    contentType : "application/json",
                    success: function (response) {

                    }
                })
                let jsonData1;
                jsonData1 = {
                    data : {
                        reIndex: i-1,
                        reTripKind : "편도"
                    }
                }
                $.ajax({
                    url: "/api/reservation/updating3",
                    data: JSON.stringify(jsonData1),
                    method: "PUT",
                    dataType: "text",
                    contentType : "application/json",
                    success: function (response) {
                        location.href="/pages/cancel/complete"
                    }
                })
            }
        }else{
            $('.false_modal').fadeIn(200);
            $('.false_modal').css('display', 'flex');
        }
    });
    $('.confirm_btnn').click(function(){
        $('.false_modal').fadeOut(200);
        $('.false_modal').css('display', '');
    })
    $('.cancel_btn').click(function(){
        location.href="/pages/index/mypageMain";
    })
});

$(() => {

    let a = $(".detail1").offset().top + 70;
    let x = $(".detail1").offset().left + 30;
    let b = $(".detail2").offset().top + 70;
    let y = $(".detail2").offset().left + 30;

    $(".modal_flight_info1").css("top", a);
    $(".modal_flight_info2").css("top", b);
    $(".modal_flight_info1").css("left", x);
    $(".modal_flight_info2").css("left", y);

    $(".modal_flight_info1").hide();
    $(".modal_flight_info2").hide();

    $("p.detail1").on("click", () => {
        $(".modal_flight_info1").fadeIn();
        $(".modal_flight_info2").hide();
    })
    $(".modal_flight_info1 .close1").on("click", () => {
        $(".modal_flight_info1").fadeOut();
    })

    $("p.detail2").on("click", () => {
        $(".modal_flight_info2").fadeIn();
        $(".modal_flight_info1").hide();
    })
    $(".modal_flight_info2 .close2").on("click", () => {
        $(".modal_flight_info2").fadeOut();
    })
});