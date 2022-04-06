$(function () {

    $('.nav2').find('a').css({"color":"#BDD600"});
    $('.nav2').siblings('li').css({"display":"block"});
    $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

    $('.nav1').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
    });
    $('.nav2').on('mouseover', function(e){
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({"color":"#adb5bd)"});
        $(this).find('a').css({"color":"#BDD600"});
        $(this).siblings('li').css({"display":"block"});
        $(this).parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $(this).parents().siblings().find('a').css({"color":"#adb5bd"});
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
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#BDD600"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#adb5bd"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.modal_container').hide();

    $('.btn_search').on('click', function(){
        $('.modal_container').fadeIn(200);
    })
    $('.modal_cancel').on('click', function(){
        $('.modal_container').fadeOut(200);
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

    let page;

    sclist(0);

    function sclist(page){
        $.get("/api/schedule/list?page="+page, function(response){
            console.dir(response);

            pagination = response.pagination;

            showPage.totalPages = pagination.totalPages;
            showPage.currentPage = pagination.currentPage;

            // 전체 페이지
            showPage.showPage = pagination.data;

            // 데이터
            itemList.itemList = response.data;

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
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage1', function(){
                sclist(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                sclist(lastPage-1);
            });
        })
    }

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        sclist(pageId);
    });

    areaList();

    // 출발지 도착지 데이터 목록
    function areaList(){
        $.get("/api/airport/list", function (response){
            // 출발지 셀렉트
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#schDeparturePoint').append(option);
            }
            // 도착지 셀렉트
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#schArrivalPoint').append(option);
            }
        })
    }

    airplaneType();

    // 항공기 타입 데이터 목록
    function airplaneType(){
        $.get("/api/airplane/list", function (response){
            console.dir(response)
            let arr = response.data.map(function (val, index){
                return val['apType']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            for (let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#schAirplaneType').append(option);
            }

        })
    }

    $(document).on('click', '#findName', function (){
        console.log('작동?');
        airplaneName($('#schAirplaneType').find('option:selected').val());
    })

    // 항공기 타입에 따른 이름 검색
    function airplaneName(type) {
        $('#schAirplaneName').find('option').remove();
        $.get("/api/airplane/list/" + type, function (response){

            let arr = response.data.map(function (val, index){
                return val['apName']
            }).filter(function (val, index, arr2){
                return arr2.indexOf(val) === index;
            })

            console.log(arr);
            for(let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#schAirplaneName').append(option);
            }
        })
    }

    // 조건으로 찾기
    function findByDate(schAirplaneType, schAirplaneName, schDepartureDate, schDeparturePoint, schArrivalPoint){
        $.post({
            url: "/api/schedule/list/find",
            data: "schAirplaneType=" + schAirplaneType + "&schAirplaneName=" + schAirplaneName + "&schDepartureDate=" + schDepartureDate + "&schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint,
            dateType: 'text',
            success : function(response){
                console.dir(response);
                itemList.itemList = response.data;
            }
            // 검색 데이터
        });
    }

    $('.modal_search').on('click', function (){
        let schAirplaneType = $('#schAirplaneType').find('option:selected').val();
        let schAirplaneName = $('#schAirplaneName').find('option:selected').val();
        let schDepartureDate = $('#schDepartureDate').val() + "T08:00:00";
        let schDeparturePoint = $('#schDeparturePoint').val();
        let schArrivalPoint = $('#schArrivalPoint').val();
        console.log(schAirplaneName)
        console.log(schDepartureDate)
        console.log(schDeparturePoint)
        console.log(schArrivalPoint)
        findByDate(schAirplaneType, schAirplaneName, schDepartureDate, schDeparturePoint, schArrivalPoint);

        $('.modal_container').fadeOut(200);
        $('.footer').css('display', 'none')
    });
});