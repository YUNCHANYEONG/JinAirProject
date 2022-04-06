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


    $('.dis_ing').on('click', function () {
        $('#container').css({"height":"2150px"});
        $('.ing').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_end').css({"background-color":"white", "color": "#444"});
        $('.dis_win').css({"background-color":"white", "color": "#444"});
        $('.end').css({"display":"none"});
        $('.win').css({"display":"none"});
    })
    $('.dis_end').on('click', function () {
        $('#container').css({"height":"2250px"});
        $('.end').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_ing').css({"background-color":"white", "color": "#444"});
        $('.dis_win').css({"background-color":"white", "color": "#444"});
        $('.ing').css({"display":"none"});
        $('.win').css({"display":"none"});
    })
    $('.dis_win').on('click', function () {
        $('#container').css({"height":"1800px"});
        $('.win').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_ing').css({"background-color":"white", "color": "#444"});
        $('.dis_end').css({"background-color":"white", "color": "#444"});
        $('.ing').css({"display":"none"});
        $('.end').css({"display":"none"});
    })

});
$(() => {
    let thisSlide, autoPlayBtn, autoPlayState;
    let swiper = new Swiper(".mySwiper", {
        cssMode: true,
        observer: true,
        observeParents: true,
        loop: true,
        autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
            delay : 3000,   // 시간 설정
            disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        on: {
            init: function () {
                thisSlide = this;
                autoPlayBtn = document.querySelector('.wrap-autoplay-control button');
                autoPlayBtn.addEventListener('click', (e) => {
                    autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                    if (autoPlayState === 'false') {
                        autoPlayBtn.setAttribute('aria-pressed', 'true');
                        thisSlide.autoplay.stop();
                    } else if (autoPlayState === 'true') {
                        autoPlayBtn.setAttribute('aria-pressed', 'false');
                        thisSlide.autoplay.start();
                    };
                });
            },
        },    
    });
});

// 진행중인 이벤트
$(() => {

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    list(0);


    function list(index){
        $.get("/api/event/lists/StartEvent?page="+index, function(response){
            itemList.itemList = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            str += "<td class='firstPage1'><<</td>";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
            str += "<td class='lastPage1'>>></td>";
            $("#showPage").html(str);
            if(index == 0) {
                $(".firstPage1").css("visibility", "hidden");
            }
            if(index == lastPage-1) {
                $(".lastPage1").css("visibility", "hidden");
            }
            $(".pageNum").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $(".pageNum").parent('#showPage').children("#"+index+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(".firstPage1").css({
                "cursor" : "pointer"
            });
            $(".lastPage1").css({
                "cursor" : "pointer"
            });
            $('#showPage').on('click', '.firstPage1', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list(0);
            });
            $('#showPage').on('click', '.lastPage1', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list(lastPage-1);
            });
        });
    }

    $('#showPage').on('click', '.pageNum', function(){
        let pageId = this.id;
        window.scrollTo({
            top: $('.event_kind').offset().top
        });
        list(pageId);
    });


});

// 종료된 이벤트
$(() => {

    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {}
        },
        methods:{
        }
    });

    list1(0);


    function list1(index){
        $.get("/api/event/lists/EventEnd?page="+index, function(response){
            itemList1.itemList1 = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            str += "<td class='firstPage2'><<</td>";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum1' id="+i+">" + (i+1) + "</td>";
            }
            str += "<td class='lastPage2'>>></td>";
            $("#showPage1").html(str);
            if(index == 0) {
                $(".firstPage2").css("visibility", "hidden");
            }
            if(index == lastPage-1) {
                $(".lastPage2").css("visibility", "hidden");
            }
            $(".pageNum1").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $(".pageNum1").parent('#showPage1').children("#"+index+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(".firstPage2").css({
                "cursor" : "pointer"
            });
            $(".lastPage2").css({
                "cursor" : "pointer"
            });
            $('#showPage1').on('click', '.firstPage2', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list1(0);
            });
            $('#showPage1').on('click', '.lastPage2', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list1(lastPage-1);
            });
        });
    }

    $('#showPage1').on('click', '.pageNum1', function(){
        let pageId = this.id;
        window.scrollTo({
            top: $('.event_kind').offset().top
        });
        list1(pageId);
    });

});

// 당첨자 명단
$(() => {

    let itemList2 = new Vue({
        el : '#itemList2',
        data : {
            itemList2 : {}
        },
        methods:{
        }
    });

    list2(0);


    function list2(index){
        $.get("/api/eventWin/list?page="+index, function(response){
            itemList2.itemList2 = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            str += "<td class='firstPage3'><<</td>";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum2' id="+i+">" + (i+1) + "</td>";
            }
            str += "<td class='lastPage3'>>></td>";
            $("#showPage2").html(str);
            if(index == 0) {
                $(".firstPage3").css("visibility", "hidden");
            }
            if(index == lastPage-1) {
                $(".lastPage3").css("visibility", "hidden");
            }
            $(".pageNum2").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $(".pageNum2").parent('#showPage2').children("#"+index+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(".firstPage3").css({
                "cursor" : "pointer"
            });
            $(".lastPage3").css({
                "cursor" : "pointer"
            });
            $('#showPage2').on('click', '.firstPage3', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list2(0);
            });
            $('#showPage2').on('click', '.lastPage3', function(){
                window.scrollTo({
                    top: $('.event_kind').offset().top
                });
                list2(lastPage-1);
            });
        });
    }

    $('#showPage2').on('click', '.pageNum2', function(){
        let pageId = this.id;
        window.scrollTo({
            top: $('.event_kind').offset().top
        });
        list2(pageId);
    });

});