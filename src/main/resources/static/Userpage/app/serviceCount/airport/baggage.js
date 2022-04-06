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
    $(".modal").on('click', function (e) {
        e.stopPropagation();
        $('.modal').fadeOut(200);
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    


    $('.bag_save').on('click', function () {
        $('#baggage1').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_limit').on('click', function () {
        $('#baggage2').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_compensation').on('click', function () {
        $('#baggage3').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_find').css({"background-color":"white", "color": "#444"});
        $('#baggage4').css({"display":"none"});
    })
    $('.bag_find').on('click', function () {
        $('#baggage4').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
    })
    

    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'findbaggage'){
        $('#baggage4').css({"display":"block"});
        $('.bag_find').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.bag_save').css({"background-color":"white", "color": "#444"});
        $('#baggage1').css({"display":"none"});
        $('.bag_limit').css({"background-color":"white", "color": "#444"});
        $('#baggage2').css({"display":"none"});
        $('.bag_compensation').css({"background-color":"white", "color": "#444"});
        $('#baggage3').css({"display":"none"});
    }

});

$(() => {
    document.getElementById('fromDt').valueAsDate = new Date();
    document.getElementById('toDt').valueAsDate = new Date();
})

$(() => {

    let typeList = [
        '필수 선택', '가방', '전자제품', '노트북/테블릿', '담배', '도서', '모자'
        , '배게/담요', '시계', '식품', '신발', '안경/선글라스', '액세서리', '의류'
        , '이어폰/휴대폰', '주류', '지갑', '화장품', '기타'
    ]


    let itemList = $("#itemType");
    let arrAirport = $("#arvApo");
    let airplane = $("#fltNo");

    for (let i = 0; i < typeList.length; i++){
        let option = document.createElement('option');
        option.innerText = typeList[i];
        option.value = typeList[i];
        itemList.append(option);
    }

    airplaneType();
    areaList();

    // 항공기 타입 데이터 목록
    function airplaneType(){
        $.get("/api/airplane/list", function (response){
            console.dir(response)
            let arr = response.data.map(function (val, index){
                return val['apType']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            console.log(arr);

            for (let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                airplane.append(option);
            }

        })
    }

    // 출발지 도착지 데이터 목록
    function areaList(){
        $.get("/api/airport/list", function (response){
            // 도착지 셀렉트
            for (let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                arrAirport.append(option);
            }
        })
    }

    let indexBtn = [];

    let page;

    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    // 페이지 정보
    let showPage = new Vue({
        el : '#showPage',
        data : {
            totalElements : {},
            currentPage : {}
        }
    })

    let lostList = new Vue({
        el : '#lostList',
        data : {
            lostList : {}
        }
    })


    list(0);

    function list(page){
        console.log("page : " + page);
        $.get("/api/lost?page="+page, function (response){
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            lostList.lostList = response.data;

            let lastPage = response.pagination.totalPages;

            let str = "";

            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pages' id="+i+">" + (i+1) + "</td>";
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
            $(".pages").css({
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
    }

    let airplanee = "";
    let airport = "";
    let type = "";
    let start = "";
    let end = "";
    $("#btnSearch").on('click', function (){
        if($("#itemType").find('option:selected').val() == '필수 선택'){
            alert('입력을 확인해주세요');
        }else {
            airplanee = $("#fltNo").find('option:selected').val();
            airport = $("#arvApo").find('option:selected').val();
            type = $("#itemType").find('option:selected').val();
            start = $("#fromDt").val() + "T00:00:00";
            end = $("#toDt").val() + "T00:00:00";
            search(0, airplanee, airport, type, start, end);
        }
    })

    function search(page, airplanee, airport, type, start, end){
        $.post({
            url: "/api/lost/search?page="+page,
            data : "losAirplane=" + airplanee + "&losAirport=" + airport + "&losType=" + type + "&start=" + start + "&end=" + end,
            dataType : 'text',
            success : function(response){
                console.dir(response)
                let dataJson = JSON.parse(response)
                console.dir(dataJson)
                lostList.lostList = dataJson.data;

                let lastPage = dataJson.pagination.totalPages;

                let str2 = "";
                if (lastPage != 0) {
                    str2 += "<td class='firstPage2'><<</td>";
                }
                for (let i = 0; i < lastPage; i++) {
                    str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
                }
                if (lastPage != 0) {
                    str2 += "<td class='lastPage2'>>></td>";
                }
                $("#showPage").html(str2);
                if(page == 0) {
                    $(".firstPage2").css("visibility", "hidden");
                }
                if(page == lastPage-1) {
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
                    search(0, airplane, airport, type, start, end);
                });
                $(document).on('click', '.lastPage2', function(){
                    search(lastPage, airplane, airport, type, start, end);
                });
            }
        })
    }


    $("#showPage").on('click', '.pages', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });

    $("#showPage").on('click', '.pagesS', function(){
        let pageId2 = this.id;
        console.log(pageId2);
        search(pageId2, airplane, airport, type, start, end);
    });


})

function ReqAlert(){
    alert('수령 신청이 완료 되었습니다!')
    location.reload();
}