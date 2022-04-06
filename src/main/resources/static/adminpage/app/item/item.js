$(function () {
    $('.nav5').find('a').css({"color":"#BDD600"});
    $('.nav5').siblings('li').css({"display":"block"});
    $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav5').find('a').css({"color":"#BDD600"});
        $('.nav5').siblings('li').css({"display":"block"});
        $('.nav5').parent().siblings().find('li').css({"display":"none"});
        $('.nav5').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

});

// 달력 현재 날짜
$(() => {
    document.getElementById('item_start_date').valueAsDate = new Date();
    document.getElementById('item_end_date').valueAsDate = new Date();
})


$(() =>{

    let typeList = [
        '필수 선택', '가방', '전자제품', '노트북/테블릿', '담배', '도서', '모자'
        , '배게/담요', '시계', '식품', '신발', '안경/선글라스', '액세서리', '의류'
        , '이어폰/휴대폰', '주류', '지갑', '화장품', '기타'
    ]


    let itemList = $("#item_list");
    let arrAirport = $("#arrival_airport_list");
    let airplane = $("#airplane_list");

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

    $("option[value='필수 선택']").attr('selected', true);

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

            if (lastPage != 0) {
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
            $(document).on('click', '.firstPage1', function(){
                list(0);
            });
            $(document).on('click', '.lastPage1', function(){
                list(lastPage-1);
            });
        })
    }
    let airplanee = "";
    let airport = "";
    let type = "";
    let start = "";
    let end = "";

    $("#btn_search").on('click', function (){
        if($("#item_list").find('option:selected').val() == '필수 선택'){
            alert('입력을 확인해주세요');
        }else {
            airplanee = $("#airplane_list").find('option:selected').val()
            airport = $("#arrival_airport_list").find('option:selected').val()
            type = $("#item_list").find('option:selected').val()
            start = $("#item_start_date").val() + "T00:00:00"
            end = $("#item_end_date").val() + "T00:00:00";
            // search($("#airplane_list").find('option:selected').val(), $("#arrival_airport_list").find('option:selected').val(), $("#item_list").find('option:selected').val(), $("#item_start_date").val() + "T00:00:00", $("#item_end_date").val() + "T00:00:00");
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
                $("#footer").css("display", "none");
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
                    search(0, airplanee, airport, type, start, end);
                });
                $(document).on('click', '.lastPage2', function(){
                    search(lastPage, airplanee, airport, type, start, end);
                });
            }
        })

    }

    $(document).on('click', '.pages', function(){
        let pageId = this.id;
        list(pageId);
    });

    $(document).on('click', '.pagesS', function(){
        let pageId2 = this.id;
        search(pageId2, airplanee, airport, type, start, end);
    });




    /*
    function search(id){
        $.get("/api/user/search/" + id, function (response){
            console.dir(response);
            memberList.memberList = response.data;
        })
    }

    $("#searchSubmit").click(() => {
        search($("#searchUserid").val());
        if($("#searchUserid").val() == null){
            alert("검색어를 확인해주세요");
        }
    })

     */
})