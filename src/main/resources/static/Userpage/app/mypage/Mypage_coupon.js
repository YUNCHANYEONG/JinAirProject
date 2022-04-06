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

    $('.bonus_ticket_main').hide();
    $(".coupons").on('click', function () {
        $('.coupon_main').show();
        $(".bonus_ticket_main").css("display", "none");
        $(".bonus_ticket").css("background-color", "white");
        $(".bonus_ticket").css("color", "#444");
        $(".coupons").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".coupons_main").css("display", "block");
    });
    $(".bonus_ticket").on('click', function () {
        $('.coupon_main').hide();
        $(".coupons").css("background-color", "white");
        $(".coupons").css("color", "#444");
        $(".bonus_ticket").css({
            "background-color": "rgb(102, 30, 67)",
            "color": "white"
        });
        $(".bonus_ticket_main").css("display", "flex");
    })
    $('.edit').click(function () {
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_cancel').click(function (e) {
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
            e.stopPropagation();
        });
    });
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

    couponResult(memIndex);

    function couponResult(memIndex) {
        console.log(memIndex);
            $.get("/api/userCoupon/list/" + memIndex, function (response) {
                console.dir(response);
            let coupon;
            if (response == "") {
                coupon = 0;
            } else {
                coupon = '<span>'+ response + '</span>' + "장";
            }

            document.getElementById("coupon").innerHTML = coupon;
            document.getElementById("resultCoupon1").innerHTML = coupon;
            document.getElementById("resultCoupon2").innerHTML = coupon;
        });
    }

    let pagination = {
        totalPages: 0,
        totalElements: 0,
        currentPage: 0,
        currentElements: 0
    };

    let showPage = new Vue({
        el: '#showPage',
        data: {
            totalPages: {},
            currentPage: {}
        }
    });

    let itemList = new Vue({
        el: '#itemList',
        data: {
            itemList: {}
        }
    })

    $('#searchbtn').on('click', function (e) {
        let startDate = $('#startDate').val() + "T00:00:00";
        let endDate = $('#endDate').val() + "T00:00:00";
        let enumid = $('#enumid option:selected').val();

        if ($('#startDate').val() == "" || $('#endDate').val() == ""){
            alert("기간을 입력하세요.")
            e.stopPropagation();
        }else{
            couponList(memIndex, enumid, startDate, endDate, 0);
        }
    });

    $('.couponN').hide();
    $('.couponY').hide();
    function couponList(memIndex, enumid, startDate, endDate, page) {
        $.get("/api/userCoupon/couponList/" + memIndex + "/" + enumid + "/" + startDate + "/" + endDate + "?page=" + page, function (response) {
            console.dir(response);

            pagination = response.pagination;

            showPage.totalPages = pagination.totalPages;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;

            let numIndex = response.data.length;
            for(let i = 0; i < response.data.length; i++){
                $('.numIndex').eq(i).html(numIndex);
                console.log(numIndex)
                numIndex--;
            }

            if (pagination.totalPages != 0) {
                itemList.itemList = response.data;
                $('.couponY').show();
                $('.couponN').hide();
                let lastPage = showPage.totalPages;
                let str2 = "";
                str2 += "<td class='firstPage2 cursor'><<</td>";
                for (let i = 0; i < lastPage; i++) {
                    str2 += "<td class='pageNum2' id=" + i + ">" + (i + 1) + "</td>";
                }
                str2 += "<td class='lastPage2 cursor'>>></td>";
                $("#showPage").html(str2);
                if (page == 0) {
                    $(".firstPage2").css("visibility", "hidden");
                }
                if (page == lastPage - 1 || showPage.totalElements != 0) {
                    $(".lastPage2").css("visibility", "hidden");
                }
                $(".pageNum2").css({
                    "background-color": "#fff",
                    "color": "#444",
                    "cursor": "pointer"
                });
                $("#" + page + "").css({
                    "background-color": "#661e43",
                    "color": "white"
                });

                $(".pageNum2").on('click', function (){
                    page = $(this).attr("id");
                    couponList(memIndex, enumid, startDate, endDate, page);
                })
                $(document).on('click', '.firstPage2', function () {
                    couponList(memIndex, enumid, startDate, endDate, 0);
                });
                $(document).on('click', '.lastPage2', function () {
                    couponList(memIndex, enumid, startDate, endDate, lastPage - 1);
                });
            } else {
                $('.couponN').show();
                $('.couponY').hide();
            }
        })
    }

    // 이벤트 쿠폰 발급
    $('.coupon_submit').on('click', function (e){
        let couponCode;
        if($('#codeNum1').val().toUpperCase() == ""){
            couponCode = $('#codeNum2').val().toUpperCase();
        }else if($('#codeNum2').val().toUpperCase() == ""){
            couponCode = $('#codeNum1').val().toUpperCase();
        }
        let codeStr = couponCode.replace(/[0-9]/g, "");
        let codeNum = couponCode.replace(/[^0-9]/g, "");
        $.get("/api/coupon/searchStr/" + codeStr, function(response){
            let code = response.data[0];
            if(typeof code == "undefined"){
                alert("올바른 쿠폰 정보가 아닙니다.")
                e.stopPropagation();
            }
            let max = code.crLastCode.replace(/[^0-9]/g, "");
            if(codeNum > max){
                // 쿠폰 최대값 체크
                console.log(max);
                alert("올바른 쿠폰 정보가 아닙니다.")
                e.stopPropagation();
            }else{
                let day = new Date().toISOString();
                let toDay = day.split('.');
                let discount = code.crDiscount;
                let startDay = toDay[0];
                let endDay = code.crEndDay;
                let title = code.crDesc;
                couponAdd(couponCode, discount, startDay, endDay, title);
            }
            // response의 종료일자, 마지막 코드넘버를 가져와 넘어가지 않았으면 couponadd 메서드 실행
        })

    })
    function couponAdd(couponCode, discount, startDay, endDay, title){
        let couponAdd;
        couponAdd = {
            data : {
                ucType : "프로모션",
                ucPrice : 0,
                ucDesc : title,
                ucCode : couponCode,
                ucUserindex : memIndex,
                ucDiscount : discount,
                ucStartday: startDay,
                ucEndday: endDay,
                ucIsUse: "Unused",
                ucTotcoupon: 1
            }
        }
        $.post({
            url : "/api/userCoupon/promotion",
            data : JSON.stringify(couponAdd),
            dataType : "text",
            async: false,
            contentType : "application/json",
            success(coupon){
                if(coupon == ""){
                    alert("쿠폰 번호가 중복되었습니다.");
                }else{
                    alert("등록이 완료되었습니다.");
                }
            },
            error(error){
                alert("쿠폰 등록에 실패했습니다.");
            }
        })

    }
});
function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}