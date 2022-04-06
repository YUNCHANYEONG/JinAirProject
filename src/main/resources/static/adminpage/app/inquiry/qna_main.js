$(function () {
    $('.nav7').find('a').css({"color":"#BDD600"});
    $('.nav7').siblings('li').css({"display":"block"});
    $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })



    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    // ALL
    searchStart(0);
    function searchStart(page){
        $.get("/api/qna/list?page="+page, function(response){
            // 검색 데이터
            itemList.itemList = response.data;

            console.dir(response);

            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
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
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage1', function(){
                searchStart(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                searchStart(lastPage-1);
            });
        });
    }


    // 카테로리
    function asd(a, page){
        $.get("/api/qna/listdetail/"+a+ "?page=" + page, function(response){
            // 검색 데이터
            itemList.itemList = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum2' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str);
            if(page == 0) {
                $(".firstPage2").css("visibility", "hidden");
            }
            if(page == lastPage-1) {
                $(".lastPage2").css("visibility", "hidden");
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
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage2', function(){
                asd(a, 0);
            });
            $("#showPage").on('click', '.lastPage2', function(){
                asd(a, lastPage-1);
            });
        });
    }

    $('select').on('change', function (){
        if($(this).val()=="기내홈쇼핑"){
            asd("HomeShopping", 0);
        }else if($(this).val()=="칭송"){
            asd("Praise", 0);
        }else if($(this).val()=="불만"){
            asd("Complaint", 0);
        }else if($(this).val()=="문의요청"){
            asd("Inquiry", 0);
        }else if($(this).val()=="제언"){
            asd("Proposal", 0);
        }else{
            searchStart(0);
        }
    });




    // 검색어로 찾기
    function searchQna(searchQna, page){
        $.get("/api/qna/listsearch/"+searchQna + "?page=" + page, function(response){
            // 검색 데이터
            itemList.itemList = response.data;

            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum3' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str);
            if(page == 0) {
                $(".firstPage3").css("visibility", "hidden");
            }
            if(page == lastPage-1) {
                $(".lastPage3").css("visibility", "hidden");
            }
            $(".pageNum3").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            if (lastPage != 0) {
                str += "<td class='firstPage3'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage3'>>></td>";
            }
            $("#showPage").on('click', '.firstPage3', function(){
                asd(searchQna, 0);
            });
            $("#showPage").on('click', '.lastPage3', function(){
                asd(searchQna, lastPage-1);
            });
        });
    }
    $('.btn_searchQna').on('click', function (){
        if ( $('.searchQna').val().length == 0){
            alert('검색어를 확인해주세요.');
        }else {
            searchQna($('.searchQna').val(), 0);
        }
    });

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        searchStart(pageId);
    });

    $("#showPage").on('click', '.pageNum2', function(){
        let pageId = this.id;
        $('select').on('change', function (){
            if($(this).val()=="기내홈쇼핑"){
                asd("HomeShopping", pageId);
            }else if($(this).val()=="칭송"){
                asd("Praise", pageId);
            }else if($(this).val()=="불만"){
                asd("Complaint", pageId);
            }else if($(this).val()=="문의요청"){
                asd("Inquiry", pageId);
            }else if($(this).val()=="제언"){
                asd("Proposal", pageId);
            }else{
                searchStart(pageId);
            }
        });
    });

    $("#showPage").on('click', '.pageNum3', function(){
        let pageId = this.id;
        searchQna($('.searchQna').val(), pageId);
    });
});