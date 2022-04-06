$(function () {
    $('.nav3').find('a').css({"color":"#BDD600"});
    $('.nav3').siblings('li').css({"display":"block"});
    $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav3').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav3').find('a').css({"color":"#BDD600"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parent().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav3').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav3').find('a').css({"color":"#BDD600"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parent().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
});


$(()=> {

    // 24시간 표시
    $(document).ready(function (){
        $('input.timepicker').timepicker({
            timeFormat: "HH:mm",
            interval: 30,
            startTime : '00:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true
        })
    })

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

            console.log(arr);

            for (let i = 0; i < arr.length; i++){
                let a = arr[i];
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#aptype').append(option);
            }

        })
    }

    $(document).on('click', '#findApName', function (){
        airplaneName($('#aptype').find('option:selected').val());
    })

    // 항공기 타입에 따른 이름 검색
    function airplaneName(type) {
        $('#apname').find('option').remove();
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
                $('#apname').append(option);
            }
        })
    }

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
                $('#departure_point').append(option);
            }
            // 도착지 셀렉트
            for(let i = 0; i < response.data.length; i++){
                let a = response.data[i].aptAirport;
                let option = document.createElement('option');
                option.innerText = a;
                option.value = a;
                $('#arrive_point').append(option);
            }
        })
    }

    $("#apname").change(function (){
        let seat = $(this).val();
        $("#resultseat").val(seat);
    })



    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });
    arrive_point();
    function arrive_point(){
        $.post({
            url: "/api/airport/list",
            data: "findPoint=" + $('#arrive_point').val(),
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList.itemList = dataJson.data;
            }
        })
    }
    $('#arrive_point').on('change', function (){
        arrive_point();
    })

    let itemList1 = new Vue({
        el : '#itemList1',
        data : {
            itemList1 : {}
        },
        methods:{
        }
    });
    $('#departure_point').on('change', function (){
        $.post({
            url: "/api/airport/list",
            data: "findPoint=" + $('#departure_point').val(),
            dataType: "text",
            success: function (response) {
                let dataJson = JSON.parse(response)
                itemList1.itemList1 = dataJson.data;
            }
        })
    })

    $('#modal_iscancel').hide();
    $(".cancbutt").on('click', () => {
        $("#modal_iscancel").fadeIn();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_iscancel").fadeOut();
    })

    let resList = new Vue({
        el : '#resList',
        data : {
            resList : {}
        },
        methods:{
        }
    });

    let aptype
    let apname
    let startTime
    let startPoint
    let arrivePoint

    $('#searchBtn').on('click', function (){
        aptype = $('#aptype').find('option:selected').val();
        apname = $('#apname').find('option:selected').val();
        startTime = $('#start_date').val() + 'T' + $('#starttime').val() + ':00';
        startPoint = $('#departure_point').find('option:selected').val();
        arrivePoint = $('#arrive_point').find('option:selected').val();
        if(!aptype || !apname || !startTime || !startPoint || !arrivePoint){
            alert('입력을 확인해주세요!')
        }else{
            $('.rs_list').css({'display' : 'block'});
            $.post({
                url: "/api/reservation/searchForUser",
                data: "airType=" + aptype + "&airName=" + apname + "&startTime=" + startTime + "&startPoint=" + startPoint + "&arrivePoint=" + arrivePoint,
                dataType: "text",
                success: function (response) {
                    list(response, 0)
                }
            })
        }
    })

    function list(response, page){
        let jsonData = JSON.parse(response)
        console.dir(jsonData)
        console.log(jsonData.data[0].reStatus)
        if(jsonData.data[0].reStatus == 'PaymentFinished'){
            $('#airplaneType').text(jsonData.data[0].reAirplainType)
            $('#airplaneName').text(jsonData.data[0].reSchName)
            let startdate = jsonData.data[0].reSchStartTime.substr(0, 10)
            $('#landingDate').text(startdate)
            let starttime = jsonData.data[0].reSchStartTime.substr(11, 5)
            $('#landingTime').text(starttime)
            $('#landingPoint').text(jsonData.data[0].reSchDepPoint)
            $('#arrPoint').text(jsonData.data[0].reSchArrPoint)
            let endtime = jsonData.data[0].reSchEndTime.substr(0, 10)
            $('#arrTime').text(endtime)

            resList.resList = jsonData.data
        }

        let lastPage = jsonData.pagination.totalPages;
        let str = "";
        if (lastPage != 0) {
            str += "<td class='firstPage1'><<</td>";
        }
        for (let i = 0; i < lastPage; i++) {
            if(i > 9){
                break;
            }
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
            list(response, 0);
        });
        $("#showPage").on('click', '.lastPage1', function(){
            list(response, lastPage-1);
        });
    }

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });
})