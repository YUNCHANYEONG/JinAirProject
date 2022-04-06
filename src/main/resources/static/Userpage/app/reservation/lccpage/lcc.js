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

});

$(() => {
    //최저가
    $(".lcc_search_btn").on('click', function () {
        $(".custom_search, .now_lcc").css("display", "none");
        $(".custom_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".lcc_search").css("display", "block");
        $('.search_list').css('display','none');
    })


    //맞춤
    $(".custom_search_btn").on('click', function () {
        $(".lcc_search, .now_lcc").css("display", "none");
        $(".lcc_search_btn, .now_lcc_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, now_lcc").css("display", "none");
        $(".custom_search").css("display", "block");
        $(".custom_search_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $('.search_list').css('display','none');
    })

    //지금 이순간
    $(".now_lcc_btn").on('click', function () {
        $(".custom_search, .lcc_search").css("display", "none");
        $(".lcc_search_btn, .custom_search_btn").css({
            "background-color": "white",
            "color": "#444"
        });
        $(".lcc_search, .custom_search").css("display", "none");
        $(".now_lcc").css("display", "block");
        $(".now_lcc_btn").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });

    })
})


$(() => {

    // 출발지 스케줄 검색에 따른 도착지 막기(실패)
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    $('#go_layer1').children().find('a').on('click', function (){
        searchStart($(this).html());
    })
    function searchStart(schDeparturePoint){
        $.post({
            url: "/api/schedule/Departure",
            data: "schDeparturePoint=" + schDeparturePoint,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList.itemList = dataJson.data;
            }
        })
    }



    // 최저가 항공권 검색
    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {},
            itemList2 : {},
            seatsNum : [],
            seatsPrice : [],
            seatsPrice1 : [],
            seatsPrice2 : [],
            koreaprice : []
        },
        methods:{
            form(){
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
                if($('.seatsPrice').html() != '예약마감'){
                    let f = document.createElement('form');
                    let obj1;
                    obj1 = document.createElement('input');
                    obj1.setAttribute('type', 'hidden');
                    obj1.setAttribute('name', 'schDeparturePoint');
                    obj1.setAttribute('value', itemList1.itemList1[0].schDeparturePoint);
                    f.appendChild(obj1);

                    let obj2;
                    obj2 = document.createElement('input');
                    obj2.setAttribute('type', 'hidden');
                    obj2.setAttribute('name', 'schArrivalPoint');
                    obj2.setAttribute('value', itemList1.itemList1[0].schArrivalPoint);
                    f.appendChild(obj2);

                    let obj3;
                    obj3 = document.createElement('input');
                    obj3.setAttribute('type', 'hidden');
                    obj3.setAttribute('name', 'goDateSelectOptt');
                    obj3.setAttribute('value', itemList1.itemList1[0].schDepartureDate.substring(0,10));
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

                    f.setAttribute('method', 'post');
                    f.setAttribute('action', '/pages/getAvailabilityList/oneway');
                    document.body.appendChild(f);
                    f.submit();
                }
            }
        }
    });

    $('#searchBtn1').on('click', function (){
        itemList1.seatsPrice = [];
        itemList1.seatsPrice1 = [];
        itemList1.seatsPrice2 = [];
        itemList1.seatsNum = [];
        itemList1.koreaprice = [];
        if($('#go_select_optt').val()=="출발지" || $('.arrive_select_optt').val() == "가는날"){
            $('#itemList2').css('display','none');
            alert('출발지/도착지를 확인해주세요')
        }else{
            search($('.go_select_optt').val(), $('.arrive_select_optt').val());
        }
    })
    function search(schDeparturePoint, schArrivalPoint){
        $.post({
            url: "/api/schedule/DepAri",
            data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                if(dataJson.data == 0){
                    $('#itemList1').css('display','none');
                    $('#search_null1').css('display','block');
                }else{
                    itemList1.itemList1 = dataJson.data;
                    $('#itemList1').css('display','block');
                    $('#search_null1').css('display','none');
                    searchese(itemList1.itemList1[0].schDeparturePoint, itemList1.itemList1[0].schArrivalPoint, itemList1.itemList1[0].schStartTime);
                }
            }
        })
    }

    function searchese(a, b, c){
        $.post({
            url: "/api/reservation/go",
            data: "schDeparturePoint=" + a + "&schArrivalPoint=" + b + "&goDateSelectOptt=" + c,
            dataType: "text",
            success: function (response) {
                let dataJson1 = JSON.parse(response)
                if(dataJson1.data == 0){
                    if(itemList1.itemList1[0].schAirplaneType == 'B777-200ER'){
                        itemList1.koreaprice.push('KRW');
                        itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                        itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList1.seatsNum.push(`잔여 ${Number(393)} 석!`);
                    }else if(itemList1.itemList1[0].schAirplaneType == 'B737-800'){
                        itemList1.koreaprice.push('KRW');
                        itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                        itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList1.seatsNum.push(`잔여 ${Number(189)} 석!`);
                    }else if(itemList1.itemList1[0].schAirplaneType == 'B737-900'){
                        itemList1.koreaprice.push('KRW');
                        itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                        itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList1.seatsNum.push(`잔여 ${Number(188)} 석!`);
                    }
                }else{
                    itemList1.itemList2 = dataJson1.data;
                    if(itemList1.itemList1[0].schAirplaneType == 'B777-200ER'){
                        if((Number(393) - Number(itemList1.itemList2.length)) <= 0){
                            itemList1.koreaprice.push('');
                            itemList1.seatsPrice.push('예약마감');
                            itemList1.seatsPrice1.push('예약마감');
                            itemList1.seatsPrice2.push('예약마감');
                            itemList1.seatsNum.push('')
                        }else{
                            itemList1.koreaprice.push('KRW');
                            itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                            itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList1.seatsNum.push(`잔여 ${(Number(393) - Number(itemList1.itemList2.length))} 석!`)
                        }
                    }else if(itemList1.itemList1[0].schAirplaneType == 'B737-800'){
                        if((Number(189) - Number(itemList1.itemList2.length)) <= 0){
                            itemList1.koreaprice.push('');
                            itemList1.seatsPrice.push('예약마감');
                            itemList1.seatsPrice1.push('예약마감');
                            itemList1.seatsPrice2.push('예약마감');
                            itemList1.seatsNum.push('')
                        }else{
                            itemList1.koreaprice.push('KRW');
                            itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                            itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList1.seatsNum.push(`잔여 ${(Number(189) - Number(itemList1.itemList2.length))} 석!`)
                        }
                    }else if(itemList1.itemList1[0].schAirplaneType == 'B737-900'){
                        if((Number(188) - Number(itemList1.itemList2.length)) <= 0){
                            itemList1.koreaprice.push('');
                            itemList1.seatsPrice.push('예약마감');
                            itemList1.seatsPrice1.push('예약마감');
                            itemList1.seatsPrice2.push('예약마감');
                            itemList1.seatsNum.push('')
                        }else{
                            itemList1.koreaprice.push('KRW');
                            itemList1.seatsPrice.push(Number(itemList1.itemList1[0].schBasicPrice).toLocaleString('ko-KR'));
                            itemList1.seatsPrice1.push((Number(itemList1.itemList1[0].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList1.seatsPrice2.push((Number(itemList1.itemList1[0].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList1.seatsNum.push(`잔여 ${(Number(188) - Number(itemList1.itemList2.length))} 석!`)
                        }
                    }
                }
            }
        })
    }




    // 맞춤 항공권 검색
    let itemList2 = new Vue({
        el : '#itemList2',
        data : {
            itemList2 : {},
            itemList3 : {},
            seatsNum : [],
            seatsPrice : [],
            seatsPrice1 : [],
            seatsPrice2 : [],
            koreaprice : []
        },
        methods:{
            form() {
                let modiAdult = 1;
                let modiChild = 0;
                let modiBaby = 0;
                if ($('.seatsPrice').html() != '예약마감') {
                    let f = document.createElement('form');
                    let obj1;
                    obj1 = document.createElement('input');
                    obj1.setAttribute('type', 'hidden');
                    obj1.setAttribute('name', 'schDeparturePoint');
                    obj1.setAttribute('value', itemList2.itemList2[0].schDeparturePoint);
                    f.appendChild(obj1);

                    let obj2;
                    obj2 = document.createElement('input');
                    obj2.setAttribute('type', 'hidden');
                    obj2.setAttribute('name', 'schArrivalPoint');
                    obj2.setAttribute('value', itemList2.itemList2[0].schArrivalPoint);
                    f.appendChild(obj2);

                    let obj3;
                    obj3 = document.createElement('input');
                    obj3.setAttribute('type', 'hidden');
                    obj3.setAttribute('name', 'goDateSelectOptt');
                    obj3.setAttribute('value', itemList2.itemList2[0].schDepartureDate.substring(0, 10));
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

                    f.setAttribute('method', 'post');
                    f.setAttribute('action', '/pages/getAvailabilityList/oneway');
                    document.body.appendChild(f);
                    f.submit();
                }
            }
        }
    });

    $('#searchBtn2').on('click', function (){
        itemList2.seatsPrice = [];
        itemList2.seatsPrice1 = [];
        itemList2.seatsPrice2 = [];
        itemList2.seatsNum = [];
        itemList2.koreaprice = [];
        if($('#go_select').val()=="출발지" || $('.go_date_select_optt').val() == "가는날"|| $('.come_date_select_optt').val() == "오는날"){
            $('#itemList2').css('display','none');
            alert('출발지 혹은 가는날/오는날을 확인해주세요')
        }else if($('#go_select').val() !="출발지" && $('.go_date_select_optt').val() != "가는날"
            &&  $('.come_date_select_optt').val() != "오는날" && $('#budge_cnt').val() == "100,000"){
            searchss($('#go_select').val(), 100000, $('.go_date_select_optt').val(), $('.come_date_select_optt').val());
        }else{
            searchss($('#go_select').val(), $('#budge_cnt').val(), $('.go_date_select_optt').val(), $('.come_date_select_optt').val());
        }
    })
    function searchss(schDeparturePoint, wishPrice, goDay, comeDay){
        $.post({
            url: "/api/schedule/collaboration",
            data: "schDeparturePoint=" + schDeparturePoint + "&wishPrice=" + wishPrice + "&goDay=" + goDay + "&comeDay=" + comeDay,
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                if(dataJson.data == 0){
                    $('#itemList2').css('display','none');
                    $('#search_null2').css('display','block');
                }else{
                    itemList2.itemList2 = dataJson.data;
                    $('#search_null2').css('display','none');
                    $('#itemList2').css('display','block');
                    for(let i = 0 ; i < itemList2.itemList2.length ; i++){
                        searchesee(itemList2.itemList2[i].schDeparturePoint, itemList2.itemList2[i].schArrivalPoint, itemList2.itemList2[i].schStartTime , i);
                    }
                }
            }
        })
    }
    function searchesee(a, b, c, i){
        $.post({
            url: "/api/reservation/go",
            data: "schDeparturePoint=" + a + "&schArrivalPoint=" + b + "&goDateSelectOptt=" + c,
            dataType: "text",
            success: function (response) {
                let dataJson1 = JSON.parse(response)
                if(dataJson1.data == 0){
                    if(itemList2.itemList2[i].schAirplaneType == 'B777-200ER'){
                        itemList2.koreaprice.push('KRW');
                        itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                        itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList2.seatsNum.push(`잔여 ${Number(393)} 석!`);
                    }else if(itemList2.itemList2[i].schAirplaneType == 'B737-800'){
                        itemList2.koreaprice.push('KRW');
                        itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                        itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList2.seatsNum.push(`잔여 ${Number(189)} 석!`);
                    }else if(itemList2.itemList2[i].schAirplaneType == 'B737-900'){
                        itemList2.koreaprice.push('KRW');
                        itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                        itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                        itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                        itemList2.seatsNum.push(`잔여 ${Number(188)} 석!`);
                    }
                }else{
                    itemList2.itemList3 = dataJson1.data;
                    if(itemList2.itemList3[0].reAirplainType == 'B777-200ER'){
                        if((Number(393) - Number(itemList2.itemList3.length)) <= 0){
                            itemList2.koreaprice.push('');
                            itemList2.seatsPrice.push('예약마감');
                            itemList2.seatsPrice1.push('예약마감');
                            itemList2.seatsPrice2.push('예약마감');
                            itemList2.seatsNum.push('')
                        }else{
                            itemList2.koreaprice.push('KRW');
                            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList2.seatsNum.push(`잔여 ${(Number(393) - Number(itemList2.itemList3.length))} 석!`)
                        }
                    }else if(itemList2.itemList3[0].reAirplainType == 'B737-800'){
                        if((Number(189) - Number(itemList2.itemList3.length)) <= 0){
                            itemList2.koreaprice.push('');
                            itemList2.seatsPrice.push('예약마감');
                            itemList2.seatsPrice1.push('예약마감');
                            itemList2.seatsPrice2.push('예약마감');
                            itemList2.seatsNum.push('')
                        }else{
                            itemList2.koreaprice.push('KRW');
                            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList2.seatsNum.push(`잔여 ${(Number(189) - Number(itemList2.itemList3.length))} 석!`)
                        }
                    }else if(itemList2.itemList3[0].reAirplainType == 'B737-900') {
                        if ((Number(188) - Number(itemList2.itemList3.length)) <= 0) {
                            itemList2.koreaprice.push('');
                            itemList2.seatsPrice.push('예약마감');
                            itemList2.seatsPrice1.push('예약마감');
                            itemList2.seatsPrice2.push('예약마감');
                            itemList2.seatsNum.push('')
                        } else {
                            itemList2.koreaprice.push('KRW');
                            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
                            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
                            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
                            itemList2.seatsNum.push(`잔여 ${(Number(188) - Number(itemList2.itemList3.length))} 석!`)
                        }
                    }
                }
            }
        })
    }


    // 지금 이순간 최저가 항공권 국내
    let itemList3 = new Vue({
        el : '#itemList3',
        data : {
            itemList3 : {}
        },
        methods:{
            reservateBtn1(index){
                let modiAdult = 1;
                let modiChild = 0;
                let modiBaby = 0;
                let f = document.createElement('form');
                let obj1;
                obj1 = document.createElement('input');
                obj1.setAttribute('type', 'hidden');
                obj1.setAttribute('name', 'schDeparturePoint');
                obj1.setAttribute('value', itemList3.itemList3[index].schDeparturePoint);
                f.appendChild(obj1);

                let obj2;
                obj2 = document.createElement('input');
                obj2.setAttribute('type', 'hidden');
                obj2.setAttribute('name', 'schArrivalPoint');
                obj2.setAttribute('value', itemList3.itemList3[index].schArrivalPoint);
                f.appendChild(obj2);

                let obj3;
                obj3 = document.createElement('input');
                obj3.setAttribute('type', 'hidden');
                obj3.setAttribute('name', 'goDateSelectOptt');
                obj3.setAttribute('value', itemList3.itemList3[index].schDepartureDate.substring(0, 10));
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

                f.setAttribute('method', 'post');
                f.setAttribute('action', '/pages/getAvailabilityList/oneway');
                document.body.appendChild(f);
                f.submit();
            }
        }
    });
    LccDomeSearch();
    function LccDomeSearch(){
        $.get({
            url: "/api/schedule/Lcc/국내",
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList3.itemList3 = dataJson.data;
            }
        })
    }






    // 지금 이순간 최저가 항공권 국내
    let itemList4 = new Vue({
        el : '#itemList4',
        data : {
            itemList4 : {}
        },
        methods:{
            reservateBtn2(index){
                let modiAdult = 1;
                let modiChild = 0;
                let modiBaby = 0;
                let f = document.createElement('form');
                let obj1;
                obj1 = document.createElement('input');
                obj1.setAttribute('type', 'hidden');
                obj1.setAttribute('name', 'schDeparturePoint');
                obj1.setAttribute('value', itemList4.itemList4[index].schDeparturePoint);
                f.appendChild(obj1);

                let obj2;
                obj2 = document.createElement('input');
                obj2.setAttribute('type', 'hidden');
                obj2.setAttribute('name', 'schArrivalPoint');
                obj2.setAttribute('value', itemList4.itemList4[index].schArrivalPoint);
                f.appendChild(obj2);

                let obj3;
                obj3 = document.createElement('input');
                obj3.setAttribute('type', 'hidden');
                obj3.setAttribute('name', 'goDateSelectOptt');
                obj3.setAttribute('value', itemList4.itemList4[index].schDepartureDate.substring(0, 10));
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

                f.setAttribute('method', 'post');
                f.setAttribute('action', '/pages/getAvailabilityList/oneway');
                document.body.appendChild(f);
                f.submit();
            }
        }
    });
    LccForiSearch();
    function LccForiSearch(){
        $.get({
            url: "/api/schedule/Lcc/국외",
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList4.itemList4 = dataJson.data;
            }
        })
    }
})

