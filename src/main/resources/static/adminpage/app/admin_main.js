$(function () {
    $('.nav1').find('a').css({"color":"#BDD600"});
    $('.nav1').siblings('li').css({"display":"block"});
    $('.nav1').siblings('li').eq(0).find('a').css({"color":"rgb(124,0,72)"});
    
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
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav1').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav1').find('a').css({"color":"#BDD600"});
        $('.nav1').siblings('li').css({"display":"block"});
        $('.nav1').parent().siblings().find('li').css({"display":"none"});
    })

    // Qna
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    // ALL
    searchStart();
    function searchStart(){
        $.get("/api/qna/list/NotComplete", function(response){
            // 검색 데이터
            itemList.itemList = response.data;

        });
    }





});

// 한국 날씨
$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=9740e18a73afd421d3a171aba5b9780a&units=Metric', function(data) {

    $('.weather_weather1').append(`<img src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather2').append(`<img src="http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather3').append(`<img src="http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather4').append(`<img src="http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather5').append(`<img src="http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather6').append(`<img src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png"alt="">`);
    $('.weather_weather7').append(`<img src="http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png"alt="">`);


    $('.weather_clock1').append(data.list[3].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock2').append(data.list[4].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock3').append(data.list[5].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock4').append(data.list[6].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock5').append(data.list[7].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock6').append(data.list[8].dt_txt.substr(-8, 2) + '시');
    $('.weather_clock7').append(data.list[9].dt_txt.substr(-8, 2) + '시');

    $('.weather_wind1').append(data.list[3].wind.speed);
    $('.weather_wind2').append(data.list[4].wind.speed);
    $('.weather_wind3').append(data.list[5].wind.speed);
    $('.weather_wind4').append(data.list[6].wind.speed);
    $('.weather_wind5').append(data.list[7].wind.speed);
    $('.weather_wind6').append(data.list[8].wind.speed);
    $('.weather_wind7').append(data.list[9].wind.speed);
});

// 외국 날씨
function aaa(code){
    $.getJSON(`http://api.openweathermap.org/data/2.5/forecast?id=${code}&appid=9740e18a73afd421d3a171aba5b9780a&units=Metric`, function(data) {

        $('.other_weather1').append(`<img src="http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather2').append(`<img src="http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather3').append(`<img src="http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather4').append(`<img src="http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather5').append(`<img src="http://openweathermap.org/img/wn/${data.list[7].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather6').append(`<img src="http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png"alt="">`);
        $('.other_weather7').append(`<img src="http://openweathermap.org/img/wn/${data.list[9].weather[0].icon}@2x.png"alt="">`);


        $('.other_clock1').append(data.list[3].dt_txt.substr(-8, 2) + '시');
        $('.other_clock2').append(data.list[4].dt_txt.substr(-8, 2) + '시');
        $('.other_clock3').append(data.list[5].dt_txt.substr(-8, 2) + '시');
        $('.other_clock4').append(data.list[6].dt_txt.substr(-8, 2) + '시');
        $('.other_clock5').append(data.list[7].dt_txt.substr(-8, 2) + '시');
        $('.other_clock6').append(data.list[8].dt_txt.substr(-8, 2) + '시');
        $('.other_clock7').append(data.list[9].dt_txt.substr(-8, 2) + '시');

        $('.other_wind1').append(data.list[3].wind.speed);
        $('.other_wind2').append(data.list[4].wind.speed);
        $('.other_wind3').append(data.list[5].wind.speed);
        $('.other_wind4').append(data.list[6].wind.speed);
        $('.other_wind5').append(data.list[7].wind.speed);
        $('.other_wind6').append(data.list[8].wind.speed);
        $('.other_wind7').append(data.list[9].wind.speed);
    });
}
function bbb(){
        $('.other_weather1').html('');
        $('.other_weather2').html('');
        $('.other_weather3').html('');
        $('.other_weather4').html('');
        $('.other_weather5').html('');
        $('.other_weather6').html('');
        $('.other_weather7').html('');


        $('.other_clock1').html('');
        $('.other_clock2').html('');
        $('.other_clock3').html('');
        $('.other_clock4').html('');
        $('.other_clock5').html('');
        $('.other_clock6').html('');
        $('.other_clock7').html('');

        $('.other_wind1').html('');
        $('.other_wind2').html('');
        $('.other_wind3').html('');
        $('.other_wind4').html('');
        $('.other_wind5').html('');
        $('.other_wind6').html('');
        $('.other_wind7').html('');
}


$(function () {

    function printtime(){ // 부다페스트
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-8;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime1(){ // 런던
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-9;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime2(){ // 뉴욕
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-14;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime3(){ // 베이징
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-1;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime4(){ // 하노이
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-2;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime5(){ // 두바이
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-5;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime6(){ // 도하
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-6;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }
    function printtime7(){ // 카이로
        let date = new Date();
        let yyyy = date.getFullYear();
        let mo = date.getMonth()+1;
        if(mo < 10) mo = `0${mo}`;
        let dd = date.getDate();
        let hh = date.getHours()-7;
        if(hh < 0){
            dd = dd-1;
            hh = hh+ 24;
            if(dd < 10) dd = `0${dd}`;
        }
        if(hh < 10) hh = `0${hh}`;
        let mm = date.getMinutes();
        if(mm < 10) mm = `0${mm}`;
        let ss = date.getSeconds();
        if(ss < 10) ss = `0${ss}`;
        document.getElementById("other_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
    }

    let st;
    let st1;
    let st2;
    let st3;
    let st4;
    let st5;
    let st6;
    let st7;

    st2 = window.setInterval(printtime2);
    aaa(5662162);
        
        $('#other_select').on('change', function(){
            window.clearInterval(st);   
            window.clearInterval(st1); 
            window.clearInterval(st2); 
            window.clearInterval(st3); 
            window.clearInterval(st4); 
            window.clearInterval(st5); 
            window.clearInterval(st6); 
            window.clearInterval(st7);
            bbb();

                if($('#other_select').val()=='부다페스트'){
                    st = window.setInterval(printtime);
                    aaa(3054643);
                }else if($('#other_select').val()=='런던'){
                    st1 = window.setInterval(printtime1);
                    aaa(2643743);
                }else if($('#other_select').val()=='뉴욕'){
                    st2 = window.setInterval(printtime2);
                    aaa(5662162);
                }else if($('#other_select').val()=='베이징'){
                    st3 = window.setInterval(printtime3);
                    aaa(1816670);
                }else if($('#other_select').val()=='하노이'){
                    st4 = window.setInterval(printtime4);
                    aaa(1581130);
                }else if($('#other_select').val()=='두바이'){
                    st5 = window.setInterval(printtime5);
                    aaa(292223);
                }else if($('#other_select').val()=='도하'){
                    st6 = window.setInterval(printtime6);
                    aaa(290030);
                }else if($('#other_select').val()=='카이로'){
                    st7 = window.setInterval(printtime7);
                    aaa(360630);
                }
        })
});

function printtime(){
let date = new Date();
let yyyy = date.getFullYear();
let mo = date.getMonth()+1;
if(mo < 10) mo = `0${mo}`;
let dd = date.getDate();
if(dd < 10) dd = `0${dd}`;
let hh = date.getHours();
if(hh < 10) hh = `0${hh}`;
let mm = date.getMinutes();
if(mm < 10) mm = `0${mm}`;
let ss = date.getSeconds();
if(ss < 10) ss = `0${ss}`;
document.getElementById("korea_time").innerHTML = yyyy + "년 " + mo + "월 " + dd + "일<br><br>" + (hh) + " : " + mm + " : " + ss;
}

const st = window.setInterval(printtime);  // 입장시 시간 출력

$(function (){

    let showList = new Vue({
        el : '#showList',
        data : {
            showList : {}
        }
    })

    let scList = new Vue({
        el : '#scList',
        data : {
            scList : {}
        }
    })

    sclist(0);

    function sclist(index){
        $.get("/api/schedule/list?page="+index+"&size=5", function(response){
            console.dir(response);

            pagination = response.pagination;

            showList.totalPages = pagination.totalPages;
            showList.currentPage = pagination.currentPage;

            // 전체 페이지
            showList.showPage = pagination.data;

            // 검색 데이터
            scList.scList = response.data;
        })
    }

})