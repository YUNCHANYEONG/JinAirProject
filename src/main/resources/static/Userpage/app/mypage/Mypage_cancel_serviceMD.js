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


    // ------------------------------------------------------------------------
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

    function searchStart3(){
        // 사전좌석 지정
        let seat1PP = 0;
        for(let i =  0 ; i < totalNum ; i++){
            if($(`.seat1D${i}`).html() == ''){
                $(`.seat1D${i}`).html('-');
                $(`.seat1P${i}`).html(0);
                $(`.seat1C${i}`).attr('disabled', true);
            }else{
                let seat1P = Number($(`.seat1P${i}`).html());
                seat1PP += seat1P;
            }
        }
        $('.seatPrice').text((seat1PP).toLocaleString('ko-KR'))

        // 초과수하물
        for(let i =  0 ; i < totalNum ; i++){
            if($(`.reBaggageidx1${i}`).val() == ''){
                $(`.bagg1KG${i}`).text('-');
                $(`.bagg1P${i}`).text(0);
                $(`.bagg1C${i}`).attr('disabled', true);
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
                $(`.Insu1Tp${i}`).text('-');
                $(`.Insu1P${i}`).text(0);
                $(`.Insu1C${i}`).attr('disabled', true);
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
        $('.paymentPrice').text((price + seat1PP).toLocaleString('ko-KR'));
    }

    searchStart3();
    $('.lastPrice').text(0)



    // 가격
    let addPrice = 0;
    for(let i =  0 ; i < totalNum ; i++){
        $(`.seat1C${i}`).on('change', function (){        // 값이 변화했니?
            if($(`.seat1C${i}`).is(':checked')){
                addPrice += Number($(`.seat1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }else{
                addPrice -= Number($(`.seat1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }
        })
        $(`.bagg1C${i}`).on('change', function (){        // 값이 변화했니?
            if($(`.bagg1C${i}`).is(':checked')){
                addPrice += Number($(`.bagg1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }else{
                addPrice -= Number($(`.bagg1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }
        })
        $(`.Insu1C${i}`).on('change', function (){        // 값이 변화했니?
            if($(`.Insu1C${i}`).is(':checked')){
                addPrice += Number($(`.Insu1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }else{
                addPrice -= Number($(`.Insu1P${i}`).text())
                $('.lastPrice').text(addPrice.toLocaleString('ko-KR'))
            }
        })
    }





    $('.final_cancel').click(function(){
        let confirmcheck = $('.confirm_check').is(':checked');

        if(!confirmcheck){
            $('.false_modal').css('display', 'flex');
            $('.confirm_btn').click(function(){
                $('.false_modal').css('display', 'none');
            });
        }else{
            if(!$('input[class *= "seat1C"]').is(':checked') &&
                !$('input[class *= "bagg1C"]').is(':checked') &&
                !$('input[class *= "Insu1C"]').is(':checked')
            ){
                alert('최소 하나 이상 선택해주세요.')
            }else{
                for(let i =  0 ; i < totalNum ; i++){
                    if($(`.seat1C${i}`).is(':checked')){
                        let jsonData;
                        jsonData = {
                            data : {
                                reIndex: Number(reIndex1) + i,
                                reSeatDetail : "",
                                reSeatPrice : ""
                            }
                        }
                        $.ajax({
                            url: "/api/reservation/seat",
                            data: JSON.stringify(jsonData),
                            method: "PUT",
                            dataType: "text",
                            async : false,
                            contentType : "application/json",
                            success: function (response) {

                            }
                        })
                    }
                    if($(`.bagg1C${i}`).is(':checked')){
                        let jsonData;
                        jsonData = {
                            data : {
                                reIndex: Number(reIndex1) + i,
                                reBaggageidx : ""
                            }
                        }
                        $.ajax({
                            url: "/api/reservation/bagg",
                            data: JSON.stringify(jsonData),
                            method: "PUT",
                            dataType: "text",
                            async : false,
                            contentType : "application/json",
                            success: function (response) {

                            }
                        })
                    }
                    if($(`.Insu1C${i}`).is(':checked')){
                        let jsonData;
                        jsonData = {
                            data : {
                                reIndex: Number(reIndex1) + i,
                                reInsuranceidx : ""
                            }
                        }
                        $.ajax({
                            url: "/api/reservation/insu",
                            data: JSON.stringify(jsonData),
                            method: "PUT",
                            dataType: "text",
                            async : false,
                            contentType : "application/json",
                            success: function (response) {

                            }
                        })
                    }
                }


                if(reIndex1%2 == 0){
                    for(let i =  reIndex1-1 ; i < endIdx ; i++){
                        let jsonData;
                        jsonData = {
                            data : {
                                reIndex: i,
                                reTotal: Number($('#reTotal').val()) - addPrice
                            }
                        }
                        $.ajax({
                            url: "/api/reservation/retotal",
                            data: JSON.stringify(jsonData),
                            method: "PUT",
                            dataType: "text",
                            async : false,
                            contentType : "application/json",
                            success: function (response) {
                                location.href='/pages/cancel/complete'
                            }
                        })
                    }
                }{
                    for(let i =  reIndex1 ; i <= endIdx ; i++){
                        let jsonData;
                        jsonData = {
                            data : {
                                reIndex: i,
                                reTotal: Number($('#reTotal').val()) - addPrice
                            }
                        }
                        $.ajax({
                            url: "/api/reservation/retotal",
                            data: JSON.stringify(jsonData),
                            method: "PUT",
                            dataType: "text",
                            async : false,
                            contentType : "application/json",
                            success: function (response) {
                                location.href='/pages/cancel/complete'
                            }
                        })
                    }
                }
            }
        }
    })

    $('.cancel_btn').click(function(){
        location.href='/pages/index/mypageGetReservationDetail/'+reIndex1;
    })

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

    
    $('.edit').click(function(){
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
            e.stopPropagation();
        })
    });

    // 포인트
    let memIndex = $('#memid').val();

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
});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}