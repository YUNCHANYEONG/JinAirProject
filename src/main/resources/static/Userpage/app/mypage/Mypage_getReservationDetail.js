'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
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
        if($(this).scrollTop() > 90) {
            $(".mypage_menu").css("position", "fixed");
            $(".mypage_menu").css("top", "0");
            $("#header").css("position", "relative");
        } else {
            $(".mypage_menu").css("position", "relative");
            $(".mypage_menu").css("top", "90px");
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
        $.get("/api/userCoupon/list/" + memIndex, function (response) {
            let coupon;
            if (response == "") {
                coupon = 0;
            } else {
                coupon = response + "장";
            }
            document.getElementById("coupon").innerHTML = coupon;
            document.getElementById("resultCoupon").innerHTML = coupon;
        });
    }

    pointResult(memIndex)

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
    // 구간2
    function searchStart2(){
        $.get("/api/reservation/"+(Number(reIndex1)+1), function(response){
            $('.trip2BP').html(response.data.reSchBasicPrice.toLocaleString('ko-KR'))
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
            for(let i =  0 ; i < totalNum*2 ; i+=2){
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
            for(let i =  0 ; i < totalNum*2 ; i+=2){
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
            for(let i =  0 ; i < totalNum*2 ; i+=2){
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
            for(let i =  0 ; i < totalNum*2 ; i+=2){
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

            for(let i =  0 ; i < totalNum*2 ; i+=2){
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


        });
    }
    function searchStart4(){
        $.get("/api/reservation/"+reIndex1, function(response){
            $.get("/api/reservation/"+(Number(reIndex1)+1), function(response1){
                $('.planePrice').html(((Number(response.data.reSchBasicPrice)+Number(response1.data.reSchBasicPrice)) * totalNum).toLocaleString('ko-KR'));
                let finalPrice = (Number(response.data.reSchBasicPrice) + Number(response1.data.reSchBasicPrice) +10000+8000) * totalNum
                $('.finalPrice').html((finalPrice).toLocaleString('ko-KR'));
                $('.oilPrice').html((10000 * totalNum).toLocaleString('ko-KR')); // 유류할증료
                $('.taxPrice').html((8000 * totalNum).toLocaleString('ko-KR')); // 세금

                // 사전 좌석 지정
                let seat1PP = 0;
                let seat2PP = 0;
                for(let i =  0 ; i < totalNum*2 ; i+=2){
                    if($(`.seat1D${i}`).html() == ''){
                        $(`.seat1D${i}`).html('');
                        $(`.seat1P${i}`).html(0);
                    }else{
                        let seat1P = Number($(`.seat1P${i}`).html());
                        seat1PP += seat1P;
                    }
                }
                for(let i =  1 ; i < totalNum*2 ; i+=2){
                    if($(`.seat2D${i}`).html() == ''){
                        $(`.seat2D${i}`).html('');
                        $(`.seat2P${i}`).html(0);
                    }else{
                        let seat2P = Number($(`.seat2P${i}`).html());
                        seat2PP += seat2P;
                    }
                }
                $('.seatPrice').text((seat1PP + seat2PP).toLocaleString('ko-KR'));

                // 초과수하물
                for(let i =  0 ; i < totalNum*2 ; i+=2){
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
                for(let i =  1 ; i < totalNum*2 ; i+=2){
                    if($(`.reBaggageidx2${i}`).val() == ''){
                        $(`.bagg2KG${i}`).text('');
                        $(`.bagg2P${i}`).text(0);
                    }else{
                        $.get("/api/optional/baggage/"+$(`.reBaggageidx2${i}`).val(), function(response){
                            $(`.bagg2KG${i}`).text(response.data.bgStandard);
                            $(`.bagg2P${i}`).text(response.data.bgPrice);
                        });
                    }
                }

                // 보험
                for(let i =  0 ; i < totalNum*2 ; i+=2){
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
                for(let i =  1 ; i < totalNum*2 ; i+=2){
                    if($(`.reInsuranceidx2${i}`).val() == ''){
                        $(`.Insu2Tp${i}`).text('');
                        $(`.Insu2P${i}`).text(0);
                    }else{
                        $.get("/api/optional/insurance/"+$(`.reInsuranceidx2${i}`).val(), function(response){
                            $(`.Insu2Tp${i}`).text(response.data.isType);
                            $(`.Insu2P${i}`).text(response.data.isPrice);
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
                let Arrb = [];
                let BaggPP = [];
                let IsurPP = [];
                for(let i =  0 ; i < totalNum*2 ; i+=2){
                    if(!$(`.reBaggageidx1${i}`).val()){
                        BaggPP.push(0)
                    }else{
                        BaggPP.push(callData($(`.reBaggageidx1${i}`).val()));
                    }
                }
                for(let i =  1 ; i < totalNum*2 ; i+=2){
                    if(!$(`.reBaggageidx2${i}`).val()){
                        BaggPP.push(0)
                    }else{
                        BaggPP.push(callData($(`.reBaggageidx2${i}`).val()));
                    }
                }
                let BaggPPP = 0;
                for(let i = 0 ; i < BaggPP.length; i++){
                    BaggPPP += Number(BaggPP[i]);
                }
                $('.BaggPrice').text(BaggPPP.toLocaleString('ko-KR'))

                for(let i =  0 ; i < totalNum*2 ; i+=2){
                    if(!$(`.reInsuranceidx1${i}`).val()){
                        IsurPP.push(0)
                    }else{
                        IsurPP.push(callData1($(`.reInsuranceidx1${i}`).val()));
                    }
                }
                for(let i =  1 ; i < totalNum*2 ; i+=2){
                    if(!$(`.reInsuranceidx2${i}`).val()){
                        IsurPP.push(0)
                    }else{
                        IsurPP.push(callData1($(`.reInsuranceidx2${i}`).val()));
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
                $('.subFinalprice').text((price + seat1PP + seat2PP).toLocaleString('ko-KR'));
                $('.realPayPrice').text((price + seat1PP + seat2PP + finalPrice).toLocaleString('ko-KR'));






            });
        });
    }



    if($('#reTripKind').val() == '편도'){
        $('.ifOnewayD').css('display', 'none');
        searchStart();
        searchStart3();

        let today = new Date();
        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);
        let day = ('0' + today.getDate()).slice(-2);
        let hours = ('0' + today.getHours()).slice(-2);
        let minutes = ('0' + today.getMinutes()).slice(-2);
        let seconds = ('0' + today.getSeconds()).slice(-2);
        let dates = new Date(year, month, day, hours, minutes, seconds);           // 현재 시각

        let years = $('#reSchStartTime').val().substr(0, 4)
        let months = $('#reSchStartTime').val().substr(5, 2)
        let days = $('#reSchStartTime').val().substr(8, 2)
        let hourss = $('#reSchStartTime').val().substr(11, 2)
        let minutess = $('#reSchStartTime').val().substr(14, 2)
        let secondss = $('#reSchStartTime').val().substr(17, 2)
        let datess = new Date(years, months, days, hourss, minutess, secondss);     // 스케줄

        if(dates > datess){
            $('.modal_text').css('display', 'none');
        }

        /* 항공권 취소 */
        $('.reser_cancel_btn').click(function () {
            $('.reser_cancel').css('display', 'flex');
            $('.reser_cancel').fadeIn(200);
            $('.next_ticket').click(function () {
                location.href = "/pages/cancel/"+reIndex1;
            });
        });

        // 부가 서비스 취소
        $('.cancel_service').click(function () {
            location.href = "/pages/index/mypageCancelService/"+reIndex1;
        })

        // 항공권 수정 편도
        $("input:radio[name='tripType'][value='편도']").attr('checked', true);
        $("input:radio[name='tripType'][value='편도']").attr('disabled', true);
        $("input:radio[name='tripType'][value='왕복']").attr('disabled', true);
        $("input:radio[name='tripType'][value='다구간']").attr('disabled', true);
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "block");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");

        $('.searchClick').on('click', function (){
            modification();
        })

    }else{
        searchStart();
        searchStart2();
        searchStart4();

        let today = new Date();
        let year = today.getFullYear();
        let month = ('0' + (today.getMonth() + 1)).slice(-2);
        let day = ('0' + today.getDate()).slice(-2);
        let hours = ('0' + today.getHours()).slice(-2);
        let minutes = ('0' + today.getMinutes()).slice(-2);
        let seconds = ('0' + today.getSeconds()).slice(-2);
        let dates = new Date(year, month, day, hours, minutes, seconds);           // 현재 시각

        let years = $('#reSchStartTime').val().substr(0, 4)
        let months = $('#reSchStartTime').val().substr(5, 2)
        let days = $('#reSchStartTime').val().substr(8, 2)
        let hourss = $('#reSchStartTime').val().substr(11, 2)
        let minutess = $('#reSchStartTime').val().substr(14, 2)
        let secondss = $('#reSchStartTime').val().substr(17, 2)
        let datess = new Date(years, months, days, hourss, minutess, secondss);     // 스케줄

        let years2 = $('#reSchStartTime2').val().substr(0, 4)
        let months2 = $('#reSchStartTime2').val().substr(5, 2)
        let days2 = $('#reSchStartTime2').val().substr(8, 2)
        let hourss2 = $('#reSchStartTime2').val().substr(11, 2)
        let minutess2 = $('#reSchStartTime2').val().substr(14, 2)
        let secondss2 = $('#reSchStartTime2').val().substr(17, 2)
        let datess2 = new Date(years2, months2, days2, hourss2, minutess2, secondss2);     // 스케줄

        if(dates > datess && dates > datess2){
            $('.modal_text').css('display', 'none');
        }

        if(dates < datess){             // 지난 스케줄이 아닌 경우
            /* 항공권 취소 */
            $('.reser_cancel_btn').click(function () {
                $('.reser_cancel').css('display', 'flex');
                $('.reser_cancel').fadeIn(200);
                $('.next_ticket').click(function () {
                    location.href = "/pages/cancel/"+reIndex1;
                });
            });

            // 부가 서비스 취소
            $('.cancel_service').click(function () {
                location.href = "/pages/index/mypageCancelService/"+reIndex1;
            })
            // 항공권 수정 편도
            $("input:radio[name='tripType'][value='왕복']").attr('checked', true);
            $("input:radio[name='tripType'][value='편도']").attr('disabled', true);
            $('.searchClick').on('click', function (){
                modification();
            })

        }else{                          // 지난 스케줄이 하나라도 있는 경우
            /* 항공권 취소 */
            $('.reser_cancel_btn').click(function () {
                $('.reser_cancel').css('display', 'flex');
                $('.reser_cancel').fadeIn(200);
                $('.next_ticket').click(function () {
                    location.href = "/pages/cancelMd/"+reIndex1;
                });
            });

            // 부가 서비스 취소
            $('.cancel_service').click(function () {
                location.href = "/pages/index/mypageCancelServiceMD/"+reIndex1;
            })
            // 항공권 수정 편도
            $("input:radio[name='tripType'][value='편도']").attr('checked', true);
            $("input:radio[name='tripType'][value='편도']").attr('disabled', true);
            $("input:radio[name='tripType'][value='왕복']").attr('disabled', true);
            $("input:radio[name='tripType'][value='다구간']").attr('disabled', true);
            $(".round_wrap").css("display", "none");
            $(".oneway_wrap").css("display", "block");
            $(".multi_wrap").css("display", "none");
            $(".edit_jour_wrap").css("height", "450px");
            $('.searchClick').on('click', function (){
                alert('변경이 불가능한 여정이 포함되어있어\n항공권 변경이 불가능합니다.\n' +
                    '항공권 취소 후 재예약 하시기 바랍니다. ')
            })
        }
    }


    $('.infoboxli1').click(function () {
        $('.infoboxli1').css('background-color', '#661E43');
        $('.infoboxli1').css('color', 'white');
        $('.infoboxli2').css('background-color', 'white');
        $('.infoboxli2').css('color', 'black');
        $('.bbsbox2').css('display', 'none');
        $('.bbsbox1').css('display', 'block');
    });
    $('.infoboxli2').click(function () {
        $('.infoboxli2').css('background-color', '#661E43');
        $('.infoboxli2').css('color', 'white');
        $('.infoboxli1').css('background-color', 'white');
        $('.infoboxli1').css('color', 'black');
        $('.bbsbox1').css('display', 'none');
        $('.bbsbox2').css('display', 'block');
    });

    /* 항공권 변경 */
    $('.reser_change_btn').click(function () {
        $('.reser_change').css('display', 'flex');
        $('.reser_change').fadeIn(200);
        $('.change_ticket').click(function () {
            $("#modal_edit_jour_wrap").css("display", "block");
            $('.btn_cancel').click(function () {
                $('.reser_change').hide();
            })
        });
    });


    /* 부가서비스 */
    $('.sub_service_btn').click(function () {
        $('.sub_service').css('display', 'flex');
        $('.sub_service').fadeIn(200);
    })
    $('.add_service').click(function () {
        location.href = "/UserPage/payment/extras.html";
    })

    /* 공통 버튼 */
    $('.btn_cancel').click(function () {
        $('.reser_change').hide();
        $('.sub_service').hide();
        $('.reser_cancel').hide();
        $('.trip_modal').hide();
        $('.curr_info').hide();
    })
    /* 모달 체크박스 전체 체크*/
    $('.peopleAll').click(function () {
        let checked = $('.peopleAll').is(':checked');

        if (checked) {
            $('.people_name').prop('checked', true);
        }
        else {
            $('.people_name').prop('checked', false);
        }
    });
    $('.tripAll').click(function () {
        let checked = $('.tripAll').is(':checked');
        if (checked) {
            $('.trip_name').prop('checked', true);
        }
        else {
            $('.trip_name').prop('checked', false);
        }
    });

    /* 여행가입 보험 */
    $('.trip_btn').click(function () {
        $('.trip_modal').css('display', 'flex');
        $('.trip_modal').fadeIn(200);

        $('.confirm_btn').click(function () {
            $('.trip_false_modal').hide();
            let check1 = $('.check1').is(':checked');
            let check2 = $('.check2').is(':checked');

            if (!check1 || !check2) {
                $('.trip_false_modal').css('display', 'flex');
                $('.confirm_btn').click(function () {
                    $('.trip_false_modal').hide();
                });
            } else {
                location.href = "https://travel.assistcard.co.kr/main/app/app_wrt.php?siteCode=MU1UTw=="
            }
        })
    });

    /* 탑승현황보기 */
    $('.curr_btn').click(function () {
        $('.curr_info').css('display', 'flex');
        $('.curr_info').fadeIn(200);
    });

});



function hidePopupLayer() {
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

// 수정 모달 창 ***********************
$(() => {
    $(".modal_edit_close_btn").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "none");
        $("body").css("overflow", "");
    });
});

$(() => {
    $("#round").on("click", function () {
        $(".round_wrap").css("display", "block");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#oneway").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "block");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#multi").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "block");
        $(".edit_jour_wrap").css("height", "520px");
    });
});



// go-layer
$(() => {
    // 옵션1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();

        $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt").addClass("on");
        $(".go_layer").slideDown("fast");

        // 도착지1 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt2").addClass("on");
        $(".go_layer2").slideDown("fast");

        // 도착지2 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);

        // 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
});

// arrive-layer
$(() => {
    // 옵션 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt").addClass("on");
        $(".arrive_layer").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt2").addClass("on");
        $(".arrive_layer2").slideDown("fast");

        // 출발지2 레이어 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        // 다구간 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
    $(".person_pop_layer").on("click", function (e) {
        e.stopPropagation();
    });
});

// 화면 클릭
$(() => {
    $("body").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });
});


function comewhatday() {
    $(".whatday").html("오는날");
}
function gowhatday() {
    $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
    $(".modal_container").fadeIn(200);
    $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
    // 왕복, 편도 출발지 지정
    $(".go_layer")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt").val(str);
            $(".go_layer").slideUp(50);
            $(".arrive_layer").slideDown(100);
            $(".go_select_opt").removeClass("on");
            $(".arrive_select_opt").addClass("on");
            bbb = "y";
        });
    // 왕복, 편도 도착지 지정
    $(".arrive_layer")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt").val(str);
            ccc = "y";
        });
    // 왕복 달력 모달
    $(".go_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("가는날");
        d;
    });
    $(".come_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("오는날");
    });

    // 편도 달력 모달
    $(".go_date2").on("click", function () {
        $(".cal2").css({ display: "flex" });
        $(".whatday").html("가는날");
    });

    // 다구간 출발지 지정
    $(".go_layer2")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt2").val(str);
            $(".go_layer2").slideUp(50);
            $(".arrive_layer2").slideDown(100);
            $(".go_select_opt2").removeClass("on");
            $(".arrive_select_opt2").addClass("on");
            bbb = "y";
        });
    // 다구간 도착지 지정
    $(".arrive_layer2")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt2").val(str);
            ccc = "y";
        });
    // 다구간1 달력 모달
    $(".go_date3").on("click", function () {
        if (bbb == "n" && ccc == "n") {
            departure();
            $(".cal3").css({ display: "none" });
        } else if (bbb == "y" && ccc == "n") {
            arrive();
        } else {
            $(".cal3").css({ display: "flex" });
            $(".whatday").html("가는날");
        }
    });

    // 달력 X 버튼
    $(".x_box").on("click", function () {
        $(".cal").css({ display: "none" });
        $(".cal2").css({ display: "none" });
        $(".cal3").css({ display: "none" });
    });

    // 모달모음 확인 버튼
    $(".btn_cancel").on("click", function () {
        $(".modal_container").fadeOut(200);
    });
});


function modification() {
    let inonesoo = $('.person_num').html().split(' ');
    let modiAdult = 0;
    let modiChild = 0;
    let modiBaby = 0;
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

    let reIndex1 = Number($('#reIndex1').val())

    if($('input[type="radio"][name="tripType"]:checked').val() == "왕복"){

        if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
            $('.go_date_select_optt').val()=="가는날" || $('.come_date_select_optt').val()=="오는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'comeDateSelectOptt');
            obj4.setAttribute('value', $('.come_date_select_optt').val());
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'AdultNumber');
            obj5.setAttribute('value', modiAdult);
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'ChildNumber');
            obj6.setAttribute('value', modiChild);
            f.appendChild(obj6);

            let obj7;
            obj7 = document.createElement('input');
            obj7.setAttribute('type', 'hidden');
            obj7.setAttribute('name', 'InfantNumber');
            obj7.setAttribute('value', modiBaby);
            f.appendChild(obj7);

            let obj8;
            obj8 = document.createElement('input');
            obj8.setAttribute('type', 'hidden');
            obj8.setAttribute('name', 'reIndex1');
            obj8.setAttribute('value', reIndex1); // 시작인덱스 ~ 시작인덱스 + 인원수*2-1
            f.appendChild(obj8);

            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityListMD/twoway');
            document.body.appendChild(f);
            f.submit();
        }
    }else if($('input[type="radio"][name="tripType"]:checked').val() == "편도") {
        if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
            $('.go_date_select_optt').val()=="가는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'AdultNumber');
            obj4.setAttribute('value', modiAdult);
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'ChildNumber');
            obj5.setAttribute('value', modiChild);
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'InfantNumber');
            obj6.setAttribute('value', modiBaby);
            f.appendChild(obj6);

            let obj7;
            obj7 = document.createElement('input');
            obj7.setAttribute('type', 'hidden');
            obj7.setAttribute('name', 'reIndex1');
            obj7.setAttribute('value', reIndex1); // 시작인덱스 ~ 시작인덱스 + 인원수*2-1
            f.appendChild(obj7);


            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityListMD/oneway');
            document.body.appendChild(f);
            f.submit();
        }
    }else if($('input[type="radio"][name="tripType"]:checked').val() == "다구간") {
        if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
            $('.go_date_select_optt').val()=="가는날" || $('.go_select_optt2').val()=="출발지" ||
            $('.arrive_select_optt2').val()=="도착지" || $('.go_date_select_optt2').val()=="가는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'schDeparturePoint1');
            obj4.setAttribute('value', $('.go_select_optt2').val());
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'schArrivalPoint1');
            obj5.setAttribute('value', $('.arrive_select_optt2').val());
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'goDateSelectOptt1');
            obj6.setAttribute('value', $('.go_date_select_optt2').val());
            f.appendChild(obj6);

            let obj7;
            obj7 = document.createElement('input');
            obj7.setAttribute('type', 'hidden');
            obj7.setAttribute('name', 'AdultNumber');
            obj7.setAttribute('value', modiAdult);
            f.appendChild(obj7);

            let obj8;
            obj8 = document.createElement('input');
            obj8.setAttribute('type', 'hidden');
            obj8.setAttribute('name', 'ChildNumber');
            obj8.setAttribute('value', modiChild);
            f.appendChild(obj8);

            let obj9;
            obj9 = document.createElement('input');
            obj9.setAttribute('type', 'hidden');
            obj9.setAttribute('name', 'InfantNumber');
            obj9.setAttribute('value', modiBaby);
            f.appendChild(obj9);

            let obj10;
            obj10 = document.createElement('input');
            obj10.setAttribute('type', 'hidden');
            obj10.setAttribute('name', 'reIndex1');
            obj10.setAttribute('value', reIndex1); // 시작인덱스 ~ 시작인덱스 + 인원수*2-1
            f.appendChild(obj10);

            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityListMD/multiway');
            document.body.appendChild(f);
            f.submit();
        }
    }
}
