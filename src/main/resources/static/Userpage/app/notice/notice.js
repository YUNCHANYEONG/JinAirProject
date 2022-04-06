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
});

(function ($) {
    let notiList = new Vue({
        el : '#notiList',
        data : {
            notiList : {}
        }
    })

    let searchStr =  "";

    list(0);

    function list(page){
        $.get("/api/notify/list?page="+page, function(response){
            console.dir(response);
            notiList.notiList = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";

            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").html(str);
            if(page == 0) {
                $(".firstPage1").css("visibility", "hidden");
            }
            if(page == lastPage-1) {
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
            $("#showPage").on('click', '.firstPage1', function(){
                list(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                list(lastPage-1);
            });
        })
    };

    // 검색 데이터
    function searchNoti(key, page){
        $.get("/api/notify/searchlist/" + key + "?page=" + page, function(response){
            console.dir(response)
            notiList.notiList = response.data;
            let lastPage = response.pagination.totalPages;
            let str2 = "";
            if (lastPage != 0) {
                str2 += "<td class='firstPage2 cursor'><<</td>";
            }
            for ( let i = 0; i < lastPage; i++ ) {
                str2 += "<td class='pageNum2' id="+i+">" + (i+1) + "</td>";
            }
            if (lastPage != 0) {
                str2 += "<td class='lastPage2 cursor'>>></td>";
            }
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
                searchNoti(searchStr, 0);
            });
            $(document).on('click', '.lastPage2', function(){
                searchNoti(searchStr, lastPage-1);
            });
        });
    }


    $('#searchNoti').on('click',function (){
        searchStr = $('#searchBox').val();
        console.log(searchStr);
        searchNoti(searchStr, 0);
        if ( searchStr.length == 0){
            alert('검색어를 확인해주세요.');
            searchNoti(searchStr, 0);
        }
    })

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });


    $("#showPage").on('click', '.pageNum2', function(){
        let pageId2 = this.id;
        console.log(pageId2);
        searchNoti(searchStr, pageId2);
    });


})(jQuery);
