$(function () {
    $('.nav10').find('a').css({"color":"#BDD600"});
    $('.nav10').siblings('li').css({"display":"block"});
    $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav3').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav4').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav5').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav6').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav7').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav8').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav9').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav10').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    });
    $('.nav11').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav10').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav10').find('a').css({"color":"#BDD600"});
        $('.nav10').siblings('li').css({"display":"block"});
        $('.nav10').parent().siblings().find('li').css({"display":"none"});
        $('.nav10').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })


    let pagination = {
        totalPages : 0,
        totalElements : 0,
        currentPage : 0,
        currentElements : 0
    };

    let showPage = new Vue({
        el : '#showPage',
        data : {
            totalPages : {},
            currentPage : {}
        }
    });

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        }
    })

    cplist(0);

    function cplist(index) {
        $.get("/api/coupon/list?page=" + index, function (response) {
            console.dir(response);

            pagination = response.pagination;

            showPage.totalPages = pagination.totalPages;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;

            // 검색 데이터
            itemList.itemList = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
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
            $("#"+index+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage1', function(){
                cplist(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                cplist(lastPage-1);
            });
        })
    }


    // 검색 데이터
    function searchTxt(str, index) {
        $.get("/api/coupon/searchTxt/" + str + "?page=" + index, function (response) {
            console.dir(response)
            itemList.itemList = response.data;

            let lastPage = response.pagination.totalPages;
            let str2 = "";
            str2 += "<td class='firstPage2'><<</td>";
            for ( let i = 0; i < lastPage; i++ ) {
                str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
            }
            str2 += "<td class='lastPage2'>>></td>";
            $("#showPage").html(str2);
            if ( index == 0 ) {
                $(".firstPage2").css("visibility", "hidden");
            }
            if ( index == lastPage-1 || response.totalElements != 0 ) {
                $(".lastPage2").css("visibility", "hidden");
            }
            if ( response.pagination.totalElements == 0 ) {
                alert("검색결과가 없습니다.");
                cplist(0);
            }
            $(".pagesS").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+index+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(document).on('click', '.firstPage2', function(){
                searchTxt(str, 0);
            });
            $(document).on('click', '.lastPage2', function(){
                searchTxt(str, lastPage-1);
            });
        })
    };

    $('#searchText').on('click', function () {
        let str = $('#text').val();
        searchTxt(str, 0);

        if (str.length == 0) {
            alert("검색어를 입력하세요.");
        }
    })

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        cplist(pageId);
    });

    $("#showPage").on('click', '.pageNum3', function(){
        let str = $('#text').val();
        let pageId2 = this.id;
        searchTxt(str, pageId2);
    });
});