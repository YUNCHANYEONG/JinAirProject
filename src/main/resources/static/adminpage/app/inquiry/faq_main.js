$(function () {
    $('.nav7').find('a').css({"color": "#BDD600"});
    $('.nav7').siblings('li').css({"display": "block"});
    $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});

    $('.nav1').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav2').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav3').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav4').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav5').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav6').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav7').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('.nav8').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav9').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav10').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('.nav11').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color": "#adb5bd"});
        $(this).find('a').css({"color": "#BDD600"});
        $(this).siblings('li').css({"display": "block"});
        $(this).parent().siblings().find('li').css({"display": "none"});
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color": "#adb5bd"});
        $('.nav7').find('a').css({"color": "#BDD600"});
        $('.nav7').siblings('li').css({"display": "block"});
        $('.nav7').parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color": "#adb5bd"});
        $('.nav7').find('a').css({"color": "#BDD600"});
        $('.nav7').siblings('li').css({"display": "block"});
        $('.nav7').parent().siblings().find('li').css({"display": "none"});
        $('.nav7').siblings('li').eq(1).find('a').css({"color": "#BDD600"});
    });
    $('#board').css({"display" : "block"});
    $('#faq1').on('click', function (){
        $('#checkBox1').css({"background-color" : "#fff"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq2').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#fff"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq3').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#fff"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq4').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#fff"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq5').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#fff"});
        $('#checkBox6').css({"background-color" : "#BDD600"});
    });
    $('#faq6').on('click', function (){
        $('#checkBox1').css({"background-color" : "#BDD600"});
        $('#checkBox2').css({"background-color" : "#BDD600"});
        $('#checkBox3').css({"background-color" : "#BDD600"});
        $('#checkBox4').css({"background-color" : "#BDD600"});
        $('#checkBox5').css({"background-color" : "#BDD600"});
        $('#checkBox6').css({"background-color" : "#fff"});
    });



});

(function ($) {
    let indexBtn = [];


    // let tableBoard1 = new Vue({
    //     el : '#tableBoard1',
    //     data : {
    //         tableBoard1 : {}
    //     }
    //
    // });
    let faqList = new Vue({
        el : '#faqList',
        data : {
            faqList : {}
        }
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
    })



    list(0);

    function list(page){
        $.get("/api/faq/list?page="+page, function(response){

            // 전체 페이지
            faqList.faqList = response.data;

            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (){

                })
            }
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

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });


    // 검색어 데이터
    function searchFaq(searchFaq){
        $.get("/api/faq/listsearch/"+searchFaq, function(response){
            faqList.faqList = response.data;
        });
    }

    $('#searchFaq').on('click', function (){
        searchFaq($('#searchText').val());
        if ( $('#searchText').val().length == 0){
            alert('검색어를 확인해주세요.');
        }
    });

    function Type(type, page){
        $.get("/api/faq/typeSearch/"+type+"?page="+page, function(response){

            faqList.faqList = response.data;
            for(let i = 0; i < response.data.length; i++){
                $.get('/api/faq/view/'+ response.data[i].faqIndex, function (){

                })
            }

            let lastPage = response.pagination.totalPages;
            let str2 = "";
            str2 += "<td class='firstPage2'><<</td>";
            for ( let i = 0; i < lastPage; i++ ) {
                str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
            }
            str2 += "<td class='lastPage2'>>></td>";
            $("#showPage").html(str2);
            if ( page == 0 ) {
                $(".firstPage2").css("visibility", "hidden");
            }
            if ( page == lastPage-1 || response.totalElements != 0 ) {
                $(".lastPage2").css("visibility", "hidden");
            }
            $(".pagesS").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            $(document).on('click', '.firstPage2', function(){
                Type(type, 0);
            });
            $(document).on('click', '.lastPage2', function(){
                Type(type, lastPage-1);
            });

        });
    }
    $('#faq1').on('click', function () {
        list(0);
    });

    $('#faq2').on('click', function () {
        Type($('#faq2').attr("value"), 0);
    });
    $('#faq3').on('click', function () {
        Type($('#faq3').attr("value"), 0);
    });
    $('#faq4').on('click', function () {
        Type($('#faq4').attr("value"), 0);
    });
    $('#faq5').on('click', function () {
        Type($('#faq5').attr("value"), 0);
    });
    $('#faq6').on('click', function () {
        Type($('#faq6').attr("value"), 0);
    });



})(jQuery);


