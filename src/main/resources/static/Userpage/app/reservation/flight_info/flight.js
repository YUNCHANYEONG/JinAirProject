'use strict';

let ccc = 'n';
let bbb = 'n';


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

    $('.dis_schedule').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })
    $('.dis_departure').on('click', function () {
        $('#container').css({"height":"1100px"});
        $('.departure').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
    })
    $('.dis_route').on('click', function () {
        $('#container').css({"height":"1500px"});
        $('.route').css({"display":"block"});
        $(this).css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.departure').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    })

    // 왕복 편도 번환
    $('#oneway').on('change', function(){
        $('.sc_search_bw').css({"display":"none"});
        $('.sc_search_oneway').css({"display":"block"});
        $('.result_kind').css({"display":"none"});
    })
    $('#between').on('change', function(){
        $('.sc_search_oneway').css({"display":"none"});
        $('.sc_search_bw').css({"display":"block"});
        $('.result_kind').css({"display":"block"});
    })

    // 출발지, 도착지
    $('.go_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideDown(100);
        $('.go_layer1').slideUp(50);
        $(this).addClass("on");
        $('.arrive_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.go_select_opt').removeClass("on");
    })
    $('.arrive_select_opt').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer1').slideDown(100);
        $('.go_layer').slideUp(50);
        $(this).addClass("on");
        $('.go_select_opt').removeClass("on");
    })
    $('.go_layer').on('click', function (e) {
        e.stopPropagation();
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideUp(50);
        $('.arrive_select_opt').removeClass("on");
    })

    // 조회 결과 도출
    $('.search_btn').on('click', function () {
        $('.result_wrapper').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })
    $('.de_result_btn').on('click', function () {
        $('.de_result_wrap').css({"display":"block"});
        $('#container').css({"height":"2300px"});
    })




    // 왕복 달력 모달
    $('.go_date_select_opt').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal').css({"display":"flex"});
            $('.whatday').html('가는날');
        }
    })
    $('.come_date_select_opt').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal').css({"display":"flex"});
            $('.whatday').html('오는날');
        }
    })

    // 편도 달력 모달
    $('.go_date_select_opt2').on('click', function () {
        if(bbb == 'n' && ccc == 'n'){
            departure();
            $('.cal2').css({"display":"none"});
        }else if(bbb == 'y' && ccc == 'n'){
            arrive();
        }else{
            $('.cal2').css({"display":"flex"});
            $('.whatday').html('가는날');
        }
    })

    // 달력 X 버튼
    $('.x_box').on('click', function () {
        $('.cal').css({"display":"none"});
        $('.cal2').css({"display":"none"});
    })

    // 모달모음 확인 버튼
    $('.btn_cancel').on('click', function () {
        $('.modal_container').fadeOut(200);
    })


    // 출발지 지정
    $('.go_layer').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.go_select_optt').val(str);
        $('.go_layer').slideUp(50);
        $('.go_layer1').slideDown(100);
        $('.go_select_opt').removeClass("on");
        $('.arrive_select_opt').addClass("on");
        bbb = 'y';
    })
    // 도착지 지정
    $('.go_layer1').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.arrive_select_optt').val(str);
        ccc='y';
    })

    // 탭 메뉴 
    let directId = $(location).attr('search').split('=')[1];
    
    if(directId == 'flightCont1'){
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $('.dis_schedule').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }else if(directId == 'flightCont2'){
        $('#container').css({"height":"1100px"});
        $('.departure').css({"display":"block"});
        $('.dis_departure').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
    }else if(directId == 'flightCont3'){
        $('#container').css({"height":"1500px"});
        $('.route').css({"display":"block"});
        $('.dis_route').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_schedule').css({"background-color":"white", "color": "#444"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.schedule').css({"display":"none"});
        $('.departure').css({"display":"none"});
        $('.result_wrapper').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }else{
        $('#container').css({"height":"1100px"});
        $('.schedule').css({"display":"block"});
        $('.dis_schedule').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_departure').css({"background-color":"white", "color": "#444"});
        $('.dis_route').css({"background-color":"white", "color": "#444"});
        $('.departure').css({"display":"none"});
        $('.route').css({"display":"none"});
        $('.de_result_wrap').css({"display":"none"});
    }
});


function comewhatday(){
    $('.whatday').html('오는날');
}
function gowhatday(){
    $('.whatday').html('가는날');
}

function gowhatdaydd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.go_date_select_optt').val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.come_date_select_optt').val(`${str1}-${str2}-${str3}`);
}
function gowhatdayddd(str){
    let str1 = str.substr(0,4);
    let str2 = str.substr(4,2);
    let str3 = str.substr(6,2);
    $('.go_date_select_optt2').val(`${str1}-${str2}-${str3}`);
}


function minday(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발일보다 이전 날짜를 선택할 수 없습니다.');
}
function departure(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발지 항목을 입력하세요.');
}
function arrive(){
    $('.modal_container').fadeIn(200);
    $('.moditext').html('도착지 항목을 입력하세요.');
}


function twochoice(){
$('.cal').css({"display":"none"});
$('.cal2').css({"display":"none"});
}

$(() => {

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        }
    })

    let itemList2 = new Vue({
        el : '#itemList2',
        data : {
            itemList : {}
        }
    })

    // 왕복검색
    $('#betweenSearch').on('click', function (){
        if($('#goPointB').val() == '출발지' || $('#comePointB').val() == '도착지' || $('#goDateB').val() == "가는날" || $('#comeDateB').val() == '오는날'){
            alert('입력을 확인해주세요')
            location.reload();
        }
        else{
            searchBetween($('#goPointB').val(), $('#comePointB').val(), $('#goDateB').val() + 'T08:00:00');
        }
    })

    // 편도검색
    $('#onewaySearch').on('click', function (){
        if($('#goPointOW').val() == '출발지' || $('#comePointOW').val() == '도착지' || $('#goDateOW').val() == "가는날"){
            alert('입력을 확인해주세요')
            location.reload();
        }
        else{
            searchBetween($('#goPointOW').val(), $('#comePointOW').val(), $('#goDateOW').val() + 'T08:00:00');
        }
    })

    // 출도착 검색
    $('#de_result_btn').on('click', function (){
        if($('#goPoint').val() == '출발지' || $('#comePoint').val() == '도착지' || $('#goDate').val() == "가는날"){
            alert('입력을 확인해주세요')
            location.reload();
        }
        else{
            searchBetween($('#goPoint').val(), $('#comePoint').val(), $('#goDate').val() + 'T08:00:00');
        }
    })


    // 왕복 가기
    $('#dis_go').on('click', function (){
        $('#dis_go').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_back').css({"background-color":"white", "color": "#444"});
        searchBetween($('#goPointB').val(), $('#comePointB').val(), $('#goDateB').val() + 'T08:00:00');
    })


    // 조건 검색 (왕복) // 출발지 - 도착지 - 가는날
    function searchBetween(goPoint, comePoint, goDate){
        $.post({
            url: "/api/schedule/between",
            data: "goPoint=" + goPoint + "&comePoint=" + comePoint + "&goDate=" + goDate,
            dataType: "text",
            success : function (response){
                let dataJson = JSON.parse(response)

                for(let i = 0; i < dataJson.data.length; i++) {
                    $.get('/api/schedule/' + dataJson.data[i].schIndex, function (response2){
                        $('.goPoint').text(response2.data.schDeparturePoint);
                        $('.comePoint').text(response2.data.schArrivalPoint);
                        let goYear = response2.data.schDepartureDate.substr(0, 4);
                        let goMonth = response2.data.schDepartureDate.substr(5, 2);
                        let goDay = response2.data.schDepartureDate.substr(8, 2);
                        $('.goDate').text(goYear + '년 ' + goMonth + '월 ' + goDay + '일 ');
                        let time = response2.data.schFlyingTime.substr(11, 5);
                        $('.playingTime').text(time);
                        let startTime = response2.data.schStartTime.substr(11, 5);
                        let arriveTime = response2.data.schArrivalDate.substr(11, 5);
                        $(`.startTime${i}`).text(startTime);
                        $(`.arriveTime${i}`).text(arriveTime);
                    })
                }

                itemList.itemList = dataJson.data;
                itemList2.itemList = dataJson.data;

            }
        })
    }

    // 왕복 돌아오기
    $('#dis_back').on('click', function (){
        $('#dis_back').css({"color": "#fff", "background-color": "rgb(102, 30, 67)"});
        $('.dis_go').css({"background-color":"white", "color": "#444"});
        searchBetweenReverse($('#comePointB').val(), $('#goPointB').val(), $('#comeDateB').val() + 'T08:00:00');
    })

    // 조건 검색 (왕복) // 도착지 - 출발지 - 오는날
    function searchBetweenReverse(goPoint, comePoint, comeDate){
        console.log(goPoint, comePoint, comeDate)
        $.post({
            url: "/api/schedule/between",
            data: "goPoint=" + goPoint + "&comePoint=" + comePoint + "&goDate=" + comeDate,
            dataType: "text",
            success : function (response2){
                let dataJson = JSON.parse(response2)

                for(let i = 0; i < dataJson.data.length; i++) {
                    console.log(dataJson.data[i].schIndex)
                    $.get('/api/schedule/' + dataJson.data[i].schIndex, function (response3){
                        $('.goPoint').text(response3.data.schArrivalPoint);
                        $('.comePoint').text(response3.data.schDeparturePoint);
                        let goYear = response3.data.schDepartureDate.substr(0, 4);
                        let goMonth = response3.data.schDepartureDate.substr(5, 2);
                        let goDay = response3.data.schDepartureDate.substr(8, 2);
                        $('.goDate').text(goYear + '년 ' + goMonth + '월 ' + goDay + '일 ');
                        let time = response3.data.schFlyingTime.substr(11, 5);
                        $('.playingTime').text(time);
                        let startTime = response3.data.schStartTime.substr(11, 5);
                        let arriveTime = response3.data.schArrivalDate.substr(11, 5);
                        $(`#startTime${i}`).text(startTime);
                        $(`#arriveTime${i}`).text(arriveTime);
                    })
                }

                itemList.itemList = dataJson.data;
                itemList2.itemList = dataJson.data;
            }
        })
    }

})