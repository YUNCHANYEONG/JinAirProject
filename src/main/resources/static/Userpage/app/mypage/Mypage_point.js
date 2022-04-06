'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom": "none"});
        $(this).css({"border-bottom": "3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom": "none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom": "none"});
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

    $('.srh_container').hide();
    $('.flex_container').hide();
    $(".point_save").on('click', function () {
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    });
    $(".point_flex").on('click', function () {
        $(".save_container, .srh_container").css("display", "none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".flex_container").css("display", "block");
    })
    $(".point_srh").on('click', function () {
        $(".save_container, .flex_container").css("display", "none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".srh_container").css("display", "block");
    });
    $('.edit').click(function () {
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_cancel').click(function () {
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
        })
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

    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];

    if (directId == 'navipoint1') {
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    } else if (directId == 'navipoint2') {
        $(".save_container, .srh_container").css("display", "none");
        $(".point_save, .point_srh").css("background-color", "white");
        $(".point_save, .point_srh").css("color", "#444");
        $(".point_flex").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".flex_container").css("display", "block");
    } else if (directId == 'navipoint3') {
        $(".save_container, .flex_container").css("display", "none");
        $(".point_save, .point_flex").css("background-color", "white");
        $(".point_save, .point_flex").css("color", "#444");
        $(".point_srh").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".srh_container").css("display", "block");
    } else {
        $(".flex_container, .srh_container").css("display", "none");
        $(".point_flex, .point_srh").css("background-color", "white");
        $(".point_flex, .point_srh").css("color", "#444");
        $(".point_save").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".save_container").css("display", "block");
    }
    // 출발지 도착지 레이어
    $(".go_layerbtn").on("click", function (e) {
        let y = $(".go_layerbtn").offset().top-30;
        let x = $(".go_layerbtn").offset().left+30;
            e.stopPropagation();
        $(".go_layerbtn").addClass('close');
        $(".go_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_layerbtn").css({"top": x, "left": y});
        $(".go_select_opt").addClass('on');
        $(".go_layer").slideDown("fast");

        // 도착지1 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);
    })

    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").addClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".arrive_select_opt").addClass('on');
        $(".arrive_layer").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);

    });

    $(".go_date_layerbtn").on("click", function (e) {
        let y = $(".go_date_layerbtn").offset().top-30;
        let x = $(".go_date_layerbtn").offset().left+30;
        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_layerbtn").css({"top": y, "left" : x});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);

    });
    $(".come_date_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".come_date_layerbtn").addClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".come_date_select_opt").addClass('on');
        $(".come_date_select").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".arrive_down_img").css({"display": "inline-block"});
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

    });
    $("body").on('click', function (e) {
        e.stopPropagation();

        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".go_date_layerbtn").addClass('close');
        $(".go_date_layerbtn").css({"color": "rgb(145, 0, 70)"});
        $(".go_date_select_opt").addClass('on');
        $(".go_date_select").slideUp(50);

        e.stopPropagation();
        $(".come_date_layerbtn").removeClass('close');
        $(".come_date_layerbtn").css({"color": "rgb(0, 0, 0)"});
        $(".come_date_select_opt").removeClass('on');
        $('.come_date_select').slideUp(50);
    })
    // 세션 인덱스
    let bbb = 'n';
    let ccc = 'n';
    let ddd = 'n';
    let fff = 'n';

    // 포인트 계산 및 발급용
    let tripType = '';
    let weekday = '';
    let go_layer = '';
    let arrive_layer = '';

    // 포인트 총액
    let sum = 0;

    $('.go_layer').find('li').find('a').on('click', function (e) {
        e.stopPropagation();
        go_layer = $(this).html();
        $('.go_select_optt').val(go_layer);
        $('.go_layer').slideUp(50);
        $('.arrive_layer').slideDown(100);
        $(".go_select_opt").removeClass('on');
        $(".arrive_select_opt").addClass('on');
        bbb = 'y';
    })
    // 왕복, 편도 도착지 지정
    $('.arrive_layer').find('li').find('a').on('click', function () {
        arrive_layer = $(this).html();
        $('.arrive_select_optt').val(arrive_layer);
        ccc = 'y';
    })
    $('.go_date_select').find('li').find('a').on('click', function () {
        let go_date_select = '';
        go_date_select = $(this).html();
        $('.go_date_select_optt').val(go_date_select);
        ddd = 'y';
        weekday = go_date_select;
    })
    $('.come_date_select').find('li').find('a').on('click', function () {
        let come_date_select = '';
        come_date_select = $(this).html();
        $('.come_date_select_optt').val(come_date_select);
        fff = 'y';
        tripType = come_date_select;
    })
    // 왕복 달력 모달
    $('.go_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        }
    })
    $('.come_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        }
    })
    function departure() {
        $('.modal_container').fadeIn(200);
        $('.moditext').html('출발지 항목을 입력하세요.');
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })
    }
    function arrive() {
        $('.modal_container').fadeIn(200);
        $('.moditext').html('도착지 항목을 입력하세요.');
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })
    }

    let memIndex = $('#memid').val();
    // 포인트 차감 로직
    let necessary = '';
    $('.coupon_add').on('click', function (e){
        if(weekday == ''){
            weekday = '평일';
        }
        if(tripType == ''){
            tripType = '편도';
        }
        if(weekday == '평일' && tripType == '편도'){
            necessary = 1000;
        }else if(weekday == '평일' && tripType == '왕복'){
            necessary = 2000;
        }else if(weekday == '주말' && tripType == '편도'){
            necessary = 1500;
        }else if(weekday == '주말' && tripType == '왕복'){
            necessary = 3000;
        }else {
            alert('입력 정보를 확인해주세요.');
            e.stopPropagation()
        }

        if (go_layer == arrive_layer) {
            $('.modal_container').fadeIn(200);
            $('.moditext').html('출발지와 도착지가 같습니다.');
            e.stopPropagation()
        }
        let day = new Date();

        // 코드발급용 nation(출발지) + random
        let random = Math.floor(Math.random()*100000);
        let layer = go_layer.split('(');
        let layer2 = layer[1].split(')');
        let nation = layer2[0];

        let ucType = "일반";
        let ucPrice = necessary;
        let ucDesc = go_layer + " ~ " + arrive_layer;
        let ucCode = nation + random;
        let ucDiscount = 3;
        let ucStartday = day.getFullYear()+"-"+"0"+(day.getMonth()+1)+"-"+day.getDate()+"T00:00:00";
        console.log(ucStartday);
        let ucEndDay = day.getFullYear()+"-"+"0"+(day.getMonth()+2)+"-"+day.getDate()+"T00:00:00";
        console.log(ucEndDay);
        let ucIsUse = "Unused";

        let coupon
        coupon = {
            data : {
                    ucType : ucType,
                    ucPrice : ucPrice,
                    ucDesc : ucDesc,
                    ucCode : ucCode,
                    ucDiscount : ucDiscount,
                    ucStartday : ucStartday,
                    ucEndday : ucEndDay,
                    ucIsUse : ucIsUse,
                    ucTotcoupon : 1,
                    ucUserindex : memIndex
            }
        }
        let point
        point = {
            data : {
                poPoint : "-"+ucPrice,
                poMemo : go_layer + " ~ " + arrive_layer +"쿠폰구매",
                poUserindex : memIndex
                }
            }

        $.post({
            url : "/api/userCoupon",
            data : JSON.stringify(coupon),
            dataType : "text",
            async: false,
            contentType : "application/json",
            success(coupon){
                if(coupon == ""){
                    alert('포인트를 확인하세요.');
                }else{
                    alert("쿠폰 등록 완료.");
                    $.post({
                        url : "/api/point",
                        data : JSON.stringify(point),
                        dataType: "text",
                        async: false,
                        contentType : "application/json",
                        success(point) {
                            if (point = ""){
                                console.log("포인트 차감 실패")
                            }else{
                                console.log("포인트 차감 완료")
                                location.reload();
                            }
                        }
                    })
                }
            },
            error(error) {
                alert("등록에 실패했습니다.")
            }
        });
        $('.btn_cancel').click(function () {
            $('.modal_container').fadeOut(200);
            $('body').css('overflow', '');
        })
    });

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

    let pointList = new Vue({
        el : "#pointList",
        data : {
            pointList : {}
        }
    })

    $('#searchPo').on('click', function (){
        pointSearch(memIndex, $('#item_start_date1').val() + 'T00:00:00', $('#item_start_date2').val() + 'T23:59:59', 0);
    })

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        pointArr(memIndex, pageId);
    });


    $("#showPage").on('click', '.pageNum2', function(){
        let pageId2 = this.id;
        console.log(pageId2);
        pointSearch(memIndex, $('#item_start_date1').val() + 'T00:00:00', $('#item_start_date2').val() + 'T23:59:59', pageId2);
    });

    pointArr(memIndex, 0);



    // 사용자 포인트 리스트
    function pointArr(index, page){
        $.get(`/api/point/user/${index}?page=` + page, function (response){
            if(response.data.length == 0){
                $('#false').css("padding", "60px")
                $('#false').css("display", "block")
                $('#true').css("display", "none")
            }else {
                $('#true').css("padding", "0")
                $('#false').css("display", "none")
                $('#true').css("display", "block")
            }

            for(let i = 0; i < response.data.length; i++){
                $.get(`/api/point/user/${index}?page=` + page, function (response2){
                    if(response2.data[i].poPoint > 0){
                        // 적립 내역
                        $(`#addPoint${i}`).text(response2.data[i].poPoint)
                        $(`#usePoint${i}`).text('-')
                    }else{
                        // 사용 내역
                        $(`#addPoint${i}`).text('-')
                        $(`#usePoint${i}`).text(response2.data[i].poPoint)
                    }
                })
            }

            // 등록 날짜
            for(let i = 0; i < response.data.length; i++){
                $.get(`/api/point/user/${index}?page=` + page, function (response3){
                    for(let j = 0; j < response3.data.length; j++){
                        let reg = response3.data[j].poRegdate;
                        $(`#regDate${j}`).text(reg.substr(0, 10));
                    }
                })
            }
            // 유저의 총 포인트
            pointList.pointList = response.data;

            let lastPage = response.pagination.totalPages;
            let str2 = "";
            str2 += "<td class='firstPage1 cursor'><<</td>";
            for ( let i = 0; i < lastPage; i++ ) {
                str2 += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
            str2 += "<td class='lastPage1 cursor'>>></td>";
            $("#showPage").html(str2);
            if ( page == 0 ) {
                $(".firstPage1").css("visibility", "hidden");
            }
            if ( page == lastPage-1 || response.totalElements != 0 ) {
                $(".lastPage1").css("visibility", "hidden");
            }
            $(".pageNum").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(document).on('click', '.firstPage1', function(){
                pointArr(memIndex, 0);
            });
            $(document).on('click', '.lastPage1', function(){
                pointArr(memIndex, lastPage-1);
            });
        })
    }

    // 포인트 기간 조회 사용자 + 인덱스
    function pointSearch(index, start, end, page){
        $.post({
            url: "/api/point/user/search",
            data : "userIndex=" + index + "&start=" + start + "&end=" + end,
            dataType: "text",
            success: function (response){
                let dataJson = JSON.parse(response);

                if(dataJson.data.length == 0){
                    $('#false').css("display", "block")
                    $('#true').css("display", "none")
                }else {
                    $('#false').css("display", "none")
                    $('#true').css("display", "block")
                }

                for(let i = 0; i < dataJson.data.length; i++){
                    $.get(`/api/point/` + dataJson.data[i].poIndex, function (response2){
                        console.log(response2)
                        if(response2.data.poPoint > 0){
                            // 적립 내역
                            $(`#addPoint${i}`).text(response2.data.poPoint)
                            $(`#usePoint${i}`).text('-')
                        }else{
                            // 사용 내역
                            $(`#addPoint${i}`).text('-')
                            $(`#usePoint${i}`).text(response2.data.poPoint)
                        }
                    })
                }

                // 등록 날짜
                for(let i = 0; i < dataJson.data.length; i++){
                    $.get(`/api/point/` + dataJson.data[i].poIndex, function (response3){
                        console.log(response3)
                        let reg = response3.data.poRegdate;
                        $(`#regDate${i}`).text(reg.substr(0, 10));
                    })
                }

                pointList.pointList = dataJson.data;

                let lastPage = response.pagination.totalPages;
                let str2 = "";
                str2 += "<td class='firstPage2 cursor'><<</td>";
                for ( let i = 0; i < lastPage; i++ ) {
                    str2 += "<td class='pageNum2' id="+i+">" + (i+1) + "</td>";
                }
                str2 += "<td class='lastPage2 cursor'>>></td>";
                $("#showPage").html(str2);
                if ( page == 0 ) {
                    $(".firstPage2").css("visibility", "hidden");
                }
                if ( page == lastPage-1 || response.totalElements != 0 ) {
                    $(".lastPage2").css("visibility", "hidden");
                }
                if ( response.pagination.totalElements == 0 ) {
                    alert("검색결과가 없습니다.");
                    list(0);
                }
                $(".pageNum2").css({
                    "background-color" : "#fff",
                    "color" : "#444",
                    "cursor" : "pointer"
                });
                $("#"+page+"").css({
                    "background-color" : "#661e43",
                    "color" : "white"
                });
                $(document).on('click', '.firstPage2', function(){
                    pointSearch(index, start, end, 0);
                });
                $(document).on('click', '.lastPage2', function(){
                    pointSearch(index, start, end, lastPage-1);
                });
            }
        })
    }

});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}