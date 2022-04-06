$(function () {
    $('.modal_container').hide();

    $('.sc_add').on('click', function(){
        $('.modal_container').fadeIn(200);
    })
    $('.btn_cancel').on('click', function(){
        $('.modal_container').fadeOut(200);
    })

    $('.nav2').find('a').css({"color":"#BDD600"});
    $('.nav2').siblings('li').css({"display":"block"});
    $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});

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
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav2').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav2').find('a').css({"color":"#adb5bd"});
        $('.nav2').siblings('li').css({"display":"block"});
        $('.nav2').parent().siblings().find('li').css({"display":"none"});
        $('.nav2').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

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
                console.log(itemList.itemList[0].aptTypedetail);
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
                console.log(itemList1.itemList1[0].aptTypedetail);
            }
        })
    })

    let airportType;
    let arrivaldate;
    let nationType;
    let aptype;
    let apname;
    let startdate;
    let departurepoint;
    let starttime;
    let arrivalpoint;
    let resultseat;
    let flyingtime;
    let price;
    let point;


    function register(){

        if(itemList.itemList[0].aptTypedetail == '국내') {
            if(itemList1.itemList1[0].aptTypedetail == '국내'){
                airportType = '국내';
            }else if(itemList1.itemList1[0].aptTypedetail == '일본/중국 본토'){
                airportType = '일본/중국 본토';
            }else if(itemList1.itemList1[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
                airportType = '홍콩/마카오/대만/러시아';
            }else if(itemList1.itemList1[0].aptTypedetail == '동남아/대양주'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '호주/미주'){
                airportType = '호주/미주';
            }
        }else if(itemList.itemList[0].aptTypedetail == '일본/중국 본토'){
            if(itemList1.itemList1[0].aptTypedetail == '국내'){
                airportType = '일본/중국 본토';
            }else if(itemList1.itemList1[0].aptTypedetail == '일본/중국 본토'){
                airportType = '일본/중국 본토';
            }else if(itemList1.itemList1[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
                airportType = '홍콩/마카오/대만/러시아';
            }else if(itemList1.itemList1[0].aptTypedetail == '동남아/대양주'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '호주/미주'){
                airportType = '호주/미주';
            }
        }else if(itemList.itemList[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
            if(itemList1.itemList1[0].aptTypedetail == '국내'){
                airportType = '홍콩/마카오/대만/러시아';
            }else if(itemList1.itemList1[0].aptTypedetail == '일본/중국 본토'){
                airportType = '홍콩/마카오/대만/러시아';
            }else if(itemList1.itemList1[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
                airportType = '홍콩/마카오/대만/러시아';
            }else if(itemList1.itemList1[0].aptTypedetail == '동남아/대양주'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '호주/미주'){
                airportType = '호주/미주';
            }
        }else if(itemList.itemList[0].aptTypedetail == '동남아/대양주'){
            if(itemList1.itemList1[0].aptTypedetail == '국내'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '일본/중국 본토'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '동남아/대양주'){
                airportType = '동남아/대양주';
            }else if(itemList1.itemList1[0].aptTypedetail == '호주/미주'){
                airportType = '호주/미주';
            }
        }else if(itemList.itemList[0].aptTypedetail == '호주/미주'){
            if(itemList1.itemList1[0].aptTypedetail == '국내'){
                airportType = '호주/미주';
            }else if(itemList1.itemList1[0].aptTypedetail == '일본/중국 본토'){
                airportType = '호주/미주';
            }else if(itemList1.itemList1[0].aptTypedetail == '홍콩/마카오/대만/러시아'){
                airportType = '호주/미주';
            }else if(itemList1.itemList1[0].aptTypedetail == '동남아/대양주'){
                airportType = '호주/미주';
            }else if(itemList1.itemList1[0].aptTypedetail == '호주/미주'){
                airportType = '호주/미주';
            }
        }

        let date = new Date($('#startdate').val().substring(0,4), $('#startdate').val().substring(5,7)-1, $('#startdate').val().substring(8,10));
        date.setDate(date.getDate()+1);
        let str = date.getMonth()+1;
        if(str<10){
            str = "0" + str;
        }
        let strrr = date.getFullYear()+"-"+str+"-"+date.getDate();


        if($('#arrivaldate').val().substring(0,2) > $('#starttime').val().substring(0,2)){
            arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
        }else if($('#arrivaldate').val().substring(0,2) == $('#starttime').val().substring(0,2)){
            if($('#arrivaldate').val().substring(3,5) > $('#starttime').val().substring(3,5)){
                arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
            }else if($('#arrivaldate').val().substring(3,5) == $('#starttime').val().substring(3,5)){
                arrivaldate = document.getElementById("startdate").value+ "T" + document.getElementById("arrivaldate").value ;
            }else{
                arrivaldate = strrr + "T" + document.getElementById("arrivaldate").value ;
            }
        }else{
            arrivaldate = strrr + "T" + document.getElementById("arrivaldate").value ;
        }

        nationType = $('#nationType').find('option:selected').val();
        aptype = $('#aptype').find('option:selected').val();
        apname = $('#apname').find('option:selected').val();
        startdate = document.getElementById("startdate").value + "T08:00:00";
        departurepoint = $('#departure_point').find('option:selected').val();
        starttime = document.getElementById("startdate").value+ "T" + document.getElementById("starttime").value;
        arrivalpoint = $('#arrive_point').find('option:selected').val();
        resultseat = document.getElementById("resultseat").value;
        flyingtime = "2000-01-01T" + document.getElementById("flyingtime").value;
        price = document.getElementById("price").value;
        point = document.getElementById("point").value;

        let schedule = {
            data: {
                schNationType : nationType,
                schAirplaneType: aptype,
                schAirplaneName: apname,
                schDepartureDate: startdate,
                schDeparturePoint: departurepoint,
                schStartTime: starttime,
                schArrivalPoint: arrivalpoint,
                schArrivalDate: arrivaldate,
                schAirplaneSeat: resultseat,
                schFlyingTime: flyingtime,
                schBasicPrice: price,
                schPoint: point,
                schAirportType: airportType
            }
        }

        $.ajax({
            url : '/api/schedule',
            type : 'POST',
            dataType : 'json',
            data : JSON.stringify(schedule),
            dataType:"text",
            contentType : "application/json"
        });
    }

    $('#regist').click( () =>{
        if( !$('#nationType').find('option:selected').val()
            || !$('#aptype').find('option:selected').val()
            || !$('#apname').find('option:selected').val()
            || !document.getElementById("startdate").value
            || !$('#departure_point').find('option:selected').val()
            || !document.getElementById("starttime").value
            || !$('#arrive_point').find('option:selected').val()
            || !document.getElementById("resultseat").value
            || !document.getElementById("flyingtime").value
            || !document.getElementById("price").value
            || !document.getElementById("point").value
        ){
            alert('입력을 확인해주세요')
        }
        else{
            register();
            location.href='/pages/admin/scheduleList';
        }
    })


});