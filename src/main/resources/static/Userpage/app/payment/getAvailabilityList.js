"use strict";
let str = $(location).attr('href').split('/');
$(() => {
  let personNum = 0
  for( let i = 0 ; i < 60; i++){
    if(document.getElementById(`${i}`)){
      personNum = personNum + 1;
    }
  }


  // 구간 1 선택시(홀수 인덱스)
  let jsonData;
  function price(str, schAirplaneType, schAirplaneName, schStartTime, schEndTime, schDeparturePoint, schArrivalPoint){
    let strrr = str.split(',');
    let strrrr;
    if(strrr.length == 3){
      strrrr = `${strrr[0]}${strrr[1]}${strrr[2]}`;
    }else{
      strrrr = `${strrr[0]}${strrr[1]}`;
    }
    for( let i = 0 ; i < 60; i++){
      if(document.getElementById(`${i}`)){
        if(i%2 == 0){
          jsonData = {
            data : {
              reIndex : $(`#${i}`).val(),
              reStatus: "Progress",
              reSchBasicPrice: strrrr,
              reSchDepPoint : schDeparturePoint,
              reSchArrPoint : schArrivalPoint,
              reSchStartTime : schStartTime,
              reSchEndTime : schEndTime,
              reAirplainType : schAirplaneType,
              reSchName : schAirplaneName,
              reTotal : Number(strrrr)+9000,
              reTripKind : $('.text_way').html(),
              rePeopleType : $('.person_cnt').html()
            }
          }
          $.ajax({
            url : "/api/reservation",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
          });
        }
      }
    }
    $('.itemList5_price').val(Number(strrrr) * (personNum/2));
    $('.price_tit1').val(Number(5000) * (personNum/2));
    $('.price_tax1').val(Number(4000) * (personNum/2));
    $('.tot_price1').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.tot_price2').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.tot_price3').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.total_price').html((
        Number($('.itemList5_price').val())+Number($('.itemList6_price').val())+
        Number($('.price_tit1').val())+Number($('.price_tit2').val())+
        Number($('.price_tax1').val())+Number($('.price_tax2').val())
    ).toLocaleString('ko-KR'));
    $('.tot_price11').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.tot_price22').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.tot_price33').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.finaltotalpricee').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.strrr1').html((Number(strrrr) * (personNum/2)).toLocaleString('ko-KR'));
    $('.way1_tit').html((Number(5000) * (personNum/2)).toLocaleString('ko-KR'));
    $('.final_tit').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.taxpriceprint').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.finaltotalprice').html((
        Number($('.itemList5_price').val())+Number($('.itemList6_price').val())+
        Number($('.price_tit1').val())+Number($('.price_tit2').val())+
        Number($('.price_tax1').val())+Number($('.price_tax2').val())
    ).toLocaleString('ko-KR'));
  }
  // 구간 2 선택시(짝수 인덱스)
  let jsonData1;
  function pricee(str, schAirplaneType, schAirplaneName, schStartTime, schEndTime, schDeparturePoint, schArrivalPoint){
    let strrr = str.split(',');
    let strrrr;
    if(strrr.length == 3){
      strrrr = `${strrr[0]}${strrr[1]}${strrr[2]}`;
    }else{
      strrrr = `${strrr[0]}${strrr[1]}`;
    }
    for( let i = 0 ; i < 60; i++){
      if(document.getElementById(`${i}`)){
        if(i%2 != 0){
          jsonData1 = {
            data : {
              reIndex : $(`#${i}`).val(),
              reStatus: "Progress",
              reSchBasicPrice: strrrr,
              reSchDepPoint : schDeparturePoint,
              reSchArrPoint : schArrivalPoint,
              reSchStartTime : schStartTime,
              reSchEndTime : schEndTime,
              reAirplainType : schAirplaneType,
              reSchName : schAirplaneName,
              reTotal : Number(strrrr)+9000,
              reTripKind : $('.text_way').html(),
              rePeopleType : $('.person_cnt').html()
            }
          }
          $.ajax({
            url : "/api/reservation",
            type : "PUT",
            data : JSON.stringify(jsonData1),
            dataType : "text",
            contentType : "application/json"
          });
        }
      }
    }
    $('.itemList6_price').val(Number(strrrr) * (personNum/2));
    $('.price_tit2').val(Number(5000) * (personNum/2));
    $('.price_tax2').val(Number(4000) * (personNum/2));
    $('.tot_price1').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.tot_price2').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.tot_price3').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.total_price').html((
        Number($('.itemList5_price').val())+Number($('.itemList6_price').val())+
        Number($('.price_tit1').val())+Number($('.price_tit2').val())+
        Number($('.price_tax1').val())+Number($('.price_tax2').val())
    ).toLocaleString('ko-KR'));
    $('.tot_price11').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.tot_price22').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.tot_price33').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.finaltotalpricee').html((Number($('.itemList5_price').val())+Number($('.itemList6_price').val())).toLocaleString('ko-KR'));
    $('.strrr2').html((Number(strrrr) * (personNum/2)).toLocaleString('ko-KR'));
    $('.way2_tit').html((Number(5000) * (personNum/2)).toLocaleString('ko-KR'));
    $('.final_tit').html((Number($('.price_tit1').val())+Number($('.price_tit2').val())).toLocaleString('ko-KR'));
    $('.taxpriceprint').html((Number($('.price_tax1').val())+Number($('.price_tax2').val())).toLocaleString('ko-KR'));
    $('.finaltotalprice').html((
        Number($('.itemList5_price').val())+Number($('.itemList6_price').val())+
        Number($('.price_tit1').val())+Number($('.price_tit2').val())+
        Number($('.price_tax1').val())+Number($('.price_tax2').val())
    ).toLocaleString('ko-KR'));
  }


  // 구간1
  let itemList1 = new Vue({
    el : '#itemList1',
    data : {
      itemList1 : {},
      itemList2 : {},
      preNum : 1000,
      seatsNum : [],
      seatsPrice : [],
      seatsPrice1 : [],
      seatsPrice2 : [],
      koreaprice : []
    },
    methods:{
      crr_open : function (){
        $(".crr_modal").fadeIn(200);
        $("body").css("overflow", "hidden");
      },
      price_wrap1 : function (index){
        if($(`.date_price1${index}`).html() == '예약마감'){

        }else {
          if (this.preNum == index) {
            $(`.price_wrap1${index}`).css({"color": "white"})
            $(`.price_wrap1${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap2${this.preNum}`).css({"color": "black"})
            $(`.price_wrap2${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${this.preNum}`).css({"color": "black"})
            $(`.price_wrap3${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap1${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap1${index}`).css({"color": "white"})
            $(`.price_wrap1${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap2${index}`).css({"color": "black"})
            $(`.price_wrap2${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${index}`).css({"color": "black"})
            $(`.price_wrap3${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap1${this.preNum}`).css({"color": "black"})
            $(`.price_wrap1${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap2${this.preNum}`).css({"color": "black"})
            $(`.price_wrap2${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${this.preNum}`).css({"color": "black"})
            $(`.price_wrap3${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index;
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap1${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          }
        }
      },
      price_wrap2 : function (index){
        if($(`.date_price2${index}`).html() == '예약마감'){

        }else {
          if (this.preNum == index) {
            $(`.price_wrap2${index}`).css({"color": "white"})
            $(`.price_wrap2${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap1${this.preNum}`).css({"color": "black"})
            $(`.price_wrap1${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${this.preNum}`).css({"color": "black"})
            $(`.price_wrap3${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap2${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap2${index}`).css({"color": "white"})
            $(`.price_wrap2${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap1${index}`).css({"color": "black"})
            $(`.price_wrap1${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${index}`).css({"color": "black"})
            $(`.price_wrap3${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap1${this.preNum}`).css({"color": "black"})
            $(`.price_wrap1${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap2${this.preNum}`).css({"color": "black"})
            $(`.price_wrap2${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${this.preNum}`).css({"color": "black"})
            $(`.price_wrap3${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap2${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          }
        }
       },
      price_wrap3 : function (index) {
        if($(`.date_price3${index}`).html() == '예약마감'){

        }else {
          if (this.preNum == index) {
            $(`.price_wrap3${index}`).css({"color": "white"})
            $(`.price_wrap3${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap1${this.preNum}`).css({"color": "black"})
            $(`.price_wrap1${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap2${this.preNum}`).css({"color": "black"})
            $(`.price_wrap2${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap3${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap3${index}`).css({"color": "white"})
            $(`.price_wrap3${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap1${index}`).css({"color": "black"})
            $(`.price_wrap1${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap2${index}`).css({"color": "black"})
            $(`.price_wrap2${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap1${this.preNum}`).css({"color": "black"})
            $(`.price_wrap1${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap2${this.preNum}`).css({"color": "black"})
            $(`.price_wrap2${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap3${this.preNum}`).css({"color": "black"})
            $(`.price_wrap3${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index
            $('#flight1').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area1').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are1').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date1').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date1').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            price($(`.price_wrap3${index}`).children('.date_price').html(),
                itemList1.itemList1[index].schAirplaneType,
                itemList1.itemList1[index].schAirplaneName,
                itemList1.itemList1[index].schStartTime,
                itemList1.itemList1[index].schArrivalDate,
                itemList1.itemList1[index].schDeparturePoint,
                itemList1.itemList1[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.air_list2_wrap').offset().top - 90,
              behavior: 'smooth'
            });
          }
        }
      }
    }
  });

  // 구간2
  let itemList2 = new Vue({
    el : '#itemList2',
    data : {
      itemList2 : {},
      preNum : 1000,
      seatsNum : [],
      seatsPrice : [],
      seatsPrice1 : [],
      seatsPrice2 : [],
      koreaprice : []
    },
    methods:{
      crr_open : function (){
        $(".crr_modal").fadeIn(200);
        $("body").css("overflow", "hidden");
      },
      price_wrap4 : function (index){
        if($(`.date_price4${index}`).html() == '예약마감'){

        }else {
          if (this.preNum == index) {
            $(`.price_wrap4${index}`).css({"color": "white"})
            $(`.price_wrap4${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap5${this.preNum}`).css({"color": "black"})
            $(`.price_wrap5${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${this.preNum}`).css({"color": "black"})
            $(`.price_wrap6${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap4${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap4${index}`).css({"color": "white"})
            $(`.price_wrap4${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap5${index}`).css({"color": "black"})
            $(`.price_wrap5${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${index}`).css({"color": "black"})
            $(`.price_wrap6${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap4${this.preNum}`).css({"color": "black"})
            $(`.price_wrap4${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap5${this.preNum}`).css({"color": "black"})
            $(`.price_wrap5${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${this.preNum}`).css({"color": "black"})
            $(`.price_wrap6${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap4${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          }
        }
      },
      price_wrap5 : function (index){
        if($(`.date_price5${index}`).html() == '예약마감'){

        }else {
          if (this.preNum == index) {
            $(`.price_wrap5${index}`).css({"color": "white"})
            $(`.price_wrap5${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap4${this.preNum}`).css({"color": "black"})
            $(`.price_wrap4${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${this.preNum}`).css({"color": "black"})
            $(`.price_wrap6${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap5${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap5${index}`).css({"color": "white"})
            $(`.price_wrap5${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap4${index}`).css({"color": "black"})
            $(`.price_wrap4${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${index}`).css({"color": "black"})
            $(`.price_wrap6${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap4${this.preNum}`).css({"color": "black"})
            $(`.price_wrap4${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap5${this.preNum}`).css({"color": "black"})
            $(`.price_wrap5${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${this.preNum}`).css({"color": "black"})
            $(`.price_wrap6${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap5${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          }
        }
      },
      price_wrap6 : function (index) {
        if ($(`.date_price3${index}`).html() == '예약마감') {

        } else {
          if (this.preNum == index) {
            $(`.price_wrap6${index}`).css({"color": "white"})
            $(`.price_wrap6${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap4${this.preNum}`).css({"color": "black"})
            $(`.price_wrap4${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap5${this.preNum}`).css({"color": "black"})
            $(`.price_wrap5${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = 1000
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap6${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          } else {
            $(`.price_wrap6${index}`).css({"color": "white"})
            $(`.price_wrap6${index}`).css({"backgroundColor": "#661e43"})
            $(`.price_wrap4${index}`).css({"color": "black"})
            $(`.price_wrap4${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap5${index}`).css({"color": "black"})
            $(`.price_wrap5${index}`).css({"backgroundColor": "white"})
            $(`.price_wrap4${this.preNum}`).css({"color": "black"})
            $(`.price_wrap4${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap5${this.preNum}`).css({"color": "black"})
            $(`.price_wrap5${this.preNum}`).css({"backgroundColor": "white"})
            $(`.price_wrap6${this.preNum}`).css({"color": "black"})
            $(`.price_wrap6${this.preNum}`).css({"backgroundColor": "white"})
            this.preNum = index
            $('#flight2').html(itemList1.itemList1[index].schAirplaneName);
            $('#dep_area2').html("[출발]" + itemList1.itemList1[index].schDeparturePoint);
            $('#arr_are2').html("[도착]" + itemList1.itemList1[index].schArrivalPoint);
            $('#dep_date2').html(itemList1.itemList1[index].schStartTime.substr(0, 10) + " [" + itemList1.itemList1[index].schStartTime.substr(11, 5) + "]");
            $('#arr_date2').html(itemList1.itemList1[index].schArrivalDate.substr(0, 10) + " [" + itemList1.itemList1[index].schArrivalDate.substr(11, 5) + "]");

            pricee($(`.price_wrap6${index}`).children('.date_price').html(),
                itemList2.itemList2[index].schAirplaneType,
                itemList2.itemList2[index].schAirplaneName,
                itemList2.itemList2[index].schStartTime,
                itemList2.itemList2[index].schArrivalDate,
                itemList2.itemList2[index].schDeparturePoint,
                itemList2.itemList2[index].schArrivalPoint,
            );
            window.scrollTo({
              top: $('.fare_wrap').offset().top - 120,
              behavior: 'smooth'
            });
          }
        }
      }
    }
  });


  // 구간1
  function goSearch(schDeparturePoint, schArrivalPoint, goDateSelectOptt){
    $.post({
      url: "/api/schedule/go",
      data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint + "&goDateSelectOptt=" + goDateSelectOptt,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        itemList1.itemList1 = dataJson.data;
        itemList1.seatsPrice = [];
        itemList1.seatsPrice1 = [];
        itemList1.seatsPrice2 = [];
        itemList1.seatsNum = [];
        itemList1.koreaprice = [];
        for(let i = 0 ; i < itemList1.itemList1.length ; i++){
          $(`.price_wrap1${i}`).css({"color": "black"})
          $(`.price_wrap1${i}`).css({"backgroundColor": "white"})
          $(`.price_wrap2${i}`).css({"color": "black"})
          $(`.price_wrap2${i}`).css({"backgroundColor": "white"})
          $(`.price_wrap3${i}`).css({"color": "black"})
          $(`.price_wrap3${i}`).css({"backgroundColor": "white"})
          seatNum1(itemList1.itemList1[i].schDeparturePoint, itemList1.itemList1[i].schArrivalPoint, itemList1.itemList1[i].schStartTime , i);
        }
      }
    })
  }
  function seatNum1(a, b, c, i){
    $.post({
      url: "/api/reservation/go",
      data: "schDeparturePoint=" + a + "&schArrivalPoint=" + b + "&goDateSelectOptt=" + c,
      dataType: "text",
      success: function (response) {
        let dataJson1 = JSON.parse(response)
        if(dataJson1.data == 0){
          if(itemList1.itemList1[i].schAirplaneType == 'B777-200ER'){
            itemList1.koreaprice.push('KRW');
            itemList1.seatsPrice.push(Number(itemList1.itemList1[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList1.seatsNum.push(`잔여 ${Number(393)} 석!`);
          }else if(itemList1.itemList1[i].schAirplaneType == 'B737-800'){
            itemList1.koreaprice.push('KRW');
            itemList1.seatsPrice.push(Number(itemList1.itemList1[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList1.seatsNum.push(`잔여 ${Number(189)} 석!`);
          }else if(itemList1.itemList1[i].schAirplaneType == 'B737-900'){
            itemList1.koreaprice.push('KRW');
            itemList1.seatsPrice.push(Number(itemList1.itemList1[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList1.seatsNum.push(`잔여 ${Number(188)} 석!`);
          }
        }else{
          itemList1.itemList2 = dataJson1.data;
          if(itemList1.itemList2[0].reAirplainType == 'B777-200ER'){
            if((Number(393) - Number(itemList1.itemList2.length)) <= 0){
              itemList1.koreaprice.push('');
              itemList1.seatsPrice.push('예약마감');
              itemList1.seatsPrice1.push('예약마감');
              itemList1.seatsPrice2.push('예약마감');
              itemList1.seatsNum.push('')
              $(`.price_wrap1${i}`).css({"color": "#444"})
              $(`.price_wrap1${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap2${i}`).css({"color": "#444"})
              $(`.price_wrap2${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap3${i}`).css({"color": "#444"})
              $(`.price_wrap3${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            }else{
              itemList1.koreaprice.push('KRW');
              itemList1.seatsPrice.push((Number(itemList1.itemList1[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList1.seatsNum.push(`잔여 ${(Number(393) - Number(itemList1.itemList2.length))} 석!`)
            }
          }else if(itemList1.itemList2[0].reAirplainType == 'B737-800'){
            if((Number(189) - Number(itemList1.itemList2.length)) <= 0){
              itemList1.koreaprice.push('');
              itemList1.seatsPrice.push('예약마감');
              itemList1.seatsPrice1.push('예약마감');
              itemList1.seatsPrice2.push('예약마감');
              itemList1.seatsNum.push('')
              $(`.price_wrap1${i}`).css({"color": "#444"})
              $(`.price_wrap1${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap2${i}`).css({"color": "#444"})
              $(`.price_wrap2${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap3${i}`).css({"color": "#444"})
              $(`.price_wrap3${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            }else{
              itemList1.koreaprice.push('KRW');
              itemList1.seatsPrice.push((Number(itemList1.itemList1[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList1.seatsNum.push(`잔여 ${(Number(189) - Number(itemList1.itemList2.length))} 석!`)
            }
          }else if(itemList1.itemList2[0].reAirplainType == 'B737-900') {
            if ((Number(188) - Number(itemList1.itemList2.length)) <= 0) {
              itemList1.koreaprice.push('');
              itemList1.seatsPrice.push('예약마감');
              itemList1.seatsPrice1.push('예약마감');
              itemList1.seatsPrice2.push('예약마감');
              itemList1.seatsNum.push('')
              $(`.price_wrap1${i}`).css({"color": "#444"})
              $(`.price_wrap1${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap2${i}`).css({"color": "#444"})
              $(`.price_wrap2${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap3${i}`).css({"color": "#444"})
              $(`.price_wrap3${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            } else {
              itemList1.koreaprice.push('KRW');
              itemList1.seatsPrice.push((Number(itemList1.itemList1[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList1.seatsPrice1.push((Number(itemList1.itemList1[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList1.seatsPrice2.push((Number(itemList1.itemList1[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList1.seatsNum.push(`잔여 ${(Number(188) - Number(itemList1.itemList2.length))} 석!`)
            }
          }
        }
      }
    })
  }

  // 구간2
  function comeSearch(schDeparturePoint, schArrivalPoint, comeDateSelectOptt){
    $.post({
      url: "/api/schedule/come",
      data: "schDeparturePoint=" + schDeparturePoint + "&schArrivalPoint=" + schArrivalPoint + "&comeDateSelectOptt=" + comeDateSelectOptt,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        itemList2.itemList2 = dataJson.data;
        itemList2.seatsPrice = [];
        itemList2.seatsPrice1 = [];
        itemList2.seatsPrice2 = [];
        itemList2.seatsNum = [];
        itemList2.koreaprice = [];
        for(let i = 0 ; i < itemList2.itemList2.length ; i++){
          $(`.price_wrap4${i}`).css({"color": "black"})
          $(`.price_wrap4${i}`).css({"backgroundColor": "white"})
          $(`.price_wrap5${i}`).css({"color": "black"})
          $(`.price_wrap5${i}`).css({"backgroundColor": "white"})
          $(`.price_wrap6${i}`).css({"color": "black"})
          $(`.price_wrap6${i}`).css({"backgroundColor": "white"})
          seatNum2(itemList2.itemList2[i].schDeparturePoint, itemList2.itemList2[i].schArrivalPoint, itemList2.itemList2[i].schStartTime , i);
        }
      }
    })
  }
  function seatNum2(a, b, c, i){
    $.post({
      url: "/api/reservation/go",
      data: "schDeparturePoint=" + a + "&schArrivalPoint=" + b + "&goDateSelectOptt=" + c,
      dataType: "text",
      success: function (response) {
        let dataJson1 = JSON.parse(response)
        if(dataJson1.data == 0){
          if(itemList2.itemList2[i].schAirplaneType == 'B777-200ER'){
            itemList2.koreaprice.push('KRW');
            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList2.seatsNum.push(`잔여 ${Number(393)} 석!`);
          }else if(itemList2.itemList2[i].schAirplaneType == 'B737-800'){
            itemList2.koreaprice.push('KRW');
            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList2.seatsNum.push(`잔여 ${Number(189)} 석!`);
          }else if(itemList2.itemList2[i].schAirplaneType == 'B737-900'){
            itemList2.koreaprice.push('KRW');
            itemList2.seatsPrice.push(Number(itemList2.itemList2[i].schBasicPrice).toLocaleString('ko-KR'));
            itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
            itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
            itemList2.seatsNum.push(`잔여 ${Number(188)} 석!`);
          }
        }else{
          itemList2.itemList3 = dataJson1.data;
          if(itemList2.itemList3[0].reAirplainType == 'B777-200ER'){
            if((Number(393) - Number(itemList2.itemList3.length)) <= 0){
              itemList2.koreaprice.push('');
              itemList2.seatsPrice.push('예약마감');
              itemList2.seatsPrice1.push('예약마감');
              itemList2.seatsPrice2.push('예약마감');
              itemList2.seatsNum.push('')
              $(`.price_wrap4${i}`).css({"color": "#444"})
              $(`.price_wrap4${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap5${i}`).css({"color": "#444"})
              $(`.price_wrap5${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap6${i}`).css({"color": "#444"})
              $(`.price_wrap6${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            }else{
              itemList2.koreaprice.push('KRW');
              itemList2.seatsPrice.push((Number(itemList2.itemList2[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList2.seatsNum.push(`잔여 ${(Number(393) - Number(itemList2.itemList3.length))} 석!`)
            }
          }else if(itemList2.itemList3[0].reAirplainType == 'B737-800'){
            if((Number(189) - Number(itemList2.itemList3.length)) <= 0){
              itemList2.koreaprice.push('');
              itemList2.seatsPrice.push('예약마감');
              itemList2.seatsPrice1.push('예약마감');
              itemList2.seatsPrice2.push('예약마감');
              itemList2.seatsNum.push('')
              $(`.price_wrap4${i}`).css({"color": "#444"})
              $(`.price_wrap4${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap5${i}`).css({"color": "#444"})
              $(`.price_wrap5${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap6${i}`).css({"color": "#444"})
              $(`.price_wrap6${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            }else{
              itemList2.koreaprice.push('KRW');
              itemList2.seatsPrice.push((Number(itemList2.itemList2[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList2.seatsNum.push(`잔여 ${(Number(189) - Number(itemList2.itemList3.length))} 석!`)
            }
          }else if(itemList2.itemList3[0].reAirplainType == 'B737-900') {
            if ((Number(188) - Number(itemList2.itemList3.length)) <= 0) {
              itemList2.koreaprice.push('');
              itemList2.seatsPrice.push('예약마감');
              itemList2.seatsPrice1.push('예약마감');
              itemList2.seatsPrice2.push('예약마감');
              itemList2.seatsNum.push('')
              $(`.price_wrap4${i}`).css({"color": "#444"})
              $(`.price_wrap4${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap5${i}`).css({"color": "#444"})
              $(`.price_wrap5${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
              $(`.price_wrap6${i}`).css({"color": "#444"})
              $(`.price_wrap6${i}`).css({"backgroundColor": "rgba(168, 165, 165, 0.2)"})
            } else {
              itemList2.koreaprice.push('KRW');
              itemList2.seatsPrice.push((Number(itemList2.itemList2[i].schBasicPrice)).toLocaleString('ko-KR'));
              itemList2.seatsPrice1.push((Number(itemList2.itemList2[i].schBasicPrice)*1.6).toLocaleString('ko-KR'));
              itemList2.seatsPrice2.push((Number(itemList2.itemList2[i].schBasicPrice)*2.6).toLocaleString('ko-KR'));
              itemList2.seatsNum.push(`잔여 ${(Number(188) - Number(itemList2.itemList3.length))} 석!`)
            }
          }
        }
      }
    })
  }


  // 기본 세팅
  if(str[5] == 'twoway'){
      $('.date3').html($('#goDateSelectOptt').val());
      $('.dating3').html($('#comeDateSelectOptt').val());
      $('.dep_area').html($('#schDeparturePoint').val());
      $('.arr_area').html($('#schArrivalPoint').val());
      $('.dep_area1').html($('#schArrivalPoint').val());
      $('.arr_area1').html($('#schDeparturePoint').val());
      $('.text_way').html('왕복');
      $('#go_area2').html($('#schArrivalPoint').val());
      $('#arr_area2').html($('#schDeparturePoint').val());

      // 처음 받아온 기본 데이터 넣기
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(),$('#comeDateSelectOptt').val());

      // 날짜 눌렀을때 데이터
      $(".date0").on("click", function () {
        str = $(".date0").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });

      $(".date1").on("click", function () {
        str = $(".date1").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date2").on("click", function () {
        str = $(".date2").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date3").on("click", function () {
        str = $(".date3").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date4").on("click", function () {
        str = $(".date4").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date5").on("click", function () {
        str = $(".date5").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });
      $(".date6").on("click", function () {
        str = $(".date6").html().split('-');
        if(str[1].length == 1){
          str[1] = "0" + str[1].substr(0,1)
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }else{
          if(str[2].length == 4){
            str[2] = "0" + str[2].substr(0,1)
          }else if(str[2].length == 5){
            str[2] = str[2].substr(0,2)
          }
        }
        let strrr = `${str[0]}-${str[1]}-${str[2]}`
        goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
      });

    // 날짜 눌렀을때 데이터
    $(".dating0").on("click", function () {
      str = $(".dating0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });

    $(".dating1").on("click", function () {
      str = $(".dating1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating2").on("click", function () {
      str = $(".dating2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating3").on("click", function () {
      str = $(".dating3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating4").on("click", function () {
      str = $(".dating4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating5").on("click", function () {
      str = $(".dating5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });
    $(".dating6").on("click", function () {
      str = $(".dating6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schArrivalPoint').val(),$('#schDeparturePoint').val(), strrr);
    });

  }
  if(str[5] == 'oneway'){
    $('.date3').html($('#goDateSelectOptt').val());
    $('.dating3').html($('#comeDateSelectOptt').val());
    $('.dep_area').html($('#schDeparturePoint').val());
    $('.arr_area').html($('#schArrivalPoint').val());
    $('.air_list_wrap2').css('display', 'none');
    $('.text_way').html('편도');
    $('.trip_info2').css('display', 'none');
    $(".arrow_img").css('display', 'none');
    $('.jour2').css('visibility', 'hidden');
    $('.onewaywww').css('display', 'none');
    // 처음 받아온 기본 데이터 넣기
    goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
    // 날짜 눌렀을때 데이터
    $(".date0").on("click", function () {
      str = $(".date0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    $(".date1").on("click", function () {
      str = $(".date1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date2").on("click", function () {
      str = $(".date2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date3").on("click", function () {
      str = $(".date3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date4").on("click", function () {
      str = $(".date4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date5").on("click", function () {
      str = $(".date5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date6").on("click", function () {
      str = $(".date6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

  }
  if(str[5] == 'multiway'){
    console.log($('#goDateSelectOptt1').val());
    $('.date3').html($('#goDateSelectOptt').val());
    $('.dating3').html($('#goDateSelectOptt1').val());
    $('.dep_area').html($('#schDeparturePoint').val());
    $('.arr_area').html($('#schArrivalPoint').val());
    $('.dep_area1').html($('#schDeparturePoint1').val());
    $('.arr_area1').html($('#schArrivalPoint1').val());
    $('.text_way').html('다구간');
    $('#go_area2').html($('#schDeparturePoint1').val());
    $('#arr_area2').html($('#schArrivalPoint1').val());

    // 처음 받아온 기본 데이터 넣기
    goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(),$('#goDateSelectOptt').val());
    comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(),$('#goDateSelectOptt1').val());

    // 날짜 눌렀을때 데이터
    $(".date0").on("click", function () {
      str = $(".date0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    $(".date1").on("click", function () {
      str = $(".date1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date2").on("click", function () {
      str = $(".date2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date3").on("click", function () {
      str = $(".date3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date4").on("click", function () {
      str = $(".date4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date5").on("click", function () {
      str = $(".date5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });
    $(".date6").on("click", function () {
      str = $(".date6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      goSearch($('#schDeparturePoint').val(),$('#schArrivalPoint').val(), strrr);
    });

    // 날짜 눌렀을때 데이터
    $(".dating0").on("click", function () {
      str = $(".dating0").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });

    $(".dating1").on("click", function () {
      str = $(".dating1").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating2").on("click", function () {
      str = $(".dating2").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating3").on("click", function () {
      str = $(".dating3").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating4").on("click", function () {
      str = $(".dating4").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating5").on("click", function () {
      str = $(".dating5").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
    $(".dating6").on("click", function () {
      str = $(".dating6").html().split('-');
      if(str[1].length == 1){
        str[1] = "0" + str[1].substr(0,1)
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }else{
        if(str[2].length == 4){
          str[2] = "0" + str[2].substr(0,1)
        }else if(str[2].length == 5){
          str[2] = str[2].substr(0,2)
        }
      }
      let strrr = `${str[0]}-${str[1]}-${str[2]}`
      comeSearch($('#schDeparturePoint1').val(),$('#schArrivalPoint1').val(), strrr);
    });
  }

})

// 다음 버튼
$('#next_butt').on('click', function (){
  let urlrr = $(location).attr('href').split('/');
  if(urlrr[5] == 'twoway'){
    if($('.strrr1').html() == 0 || $('.strrr2').html() == 0){
      alert('구간 선택을 완료해주세요');
    }else if($('.strrr1').html() != 0 && $('.strrr2').html() != 0){
      location.href="/pages/registerPassenger"
    }
  }
  if(urlrr[5] == 'oneway'){
    if($('.strrr1').html() == 0){
      console.log('구간 선택을 완료해주세요');
    }else if($('.strrr1').html() != 0){
      location.href="/pages/registerPassenger"
    }
  }
  if(urlrr[5] == 'multiway'){
    if($('.strrr1').html() == 0 || $('.strrr2').html() == 0){
      console.log('구간 선택을 완료해주세요');
    }else if($('.strrr1').html() != 0 && $('.strrr2').html() != 0){
      location.href="/pages/registerPassenger"
    }
  }
})
// 최종결제다음 버튼
$('.fix_next_butt').on('click', function (){
  let urlrr = $(location).attr('href').split('/');
  if(urlrr[5] == 'twoway'){
    if($('.strrr1').html() == 0 || $('.strrr2').html() == 0){
      console.log('구간 선택을 완료해주세요');
    }else{
      location.href="/pages/registerPassenger"
    }
  }
  if(urlrr[5] == 'oneway'){
    if($('.strrr1').html() == 0){
      console.log('구간 선택을 완료해주세요');
    }else{
      location.href="/pages/registerPassenger"
    }
  }
  if(urlrr[5] == 'multiway'){
    if($('.strrr1').html() == 0 || $('.strrr2').html() == 0){
      console.log('구간 선택을 완료해주세요');
    }else{
      location.href="/pages/registerPassenger"
    }
  }
})



$(function () {
  $(".open1").on("click", function (e) {
    e.stopPropagation();
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".reservation").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open2").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".service").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open3").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $(".benefit").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open4").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".optional").slideUp(50);
    $(".point").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".open5").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".reservation").slideUp(50);
    $(".service").slideUp(50);
    $(".benefit").slideUp(50);
    $(".point").slideUp(50);
    $(".optional").slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
  });

  $(".modal").hide();
  $("li[class *= 'open']").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeIn(200);
  });
  $(".nav_all").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".modal").fadeOut(200);
  });

  $(".arrow_img").on("click", function () {
    $(".arrow_img").css("display", "none");
    $(".trip_info2").slideDown(200);
    $(".arrow_up_img").css("display", "block");
  });
  $(".arrow_up_img").on("click", function () {
    $(".arrow_img").css("display", "block");
    $(".arrow_up_img").css("display", "none");
    $(".trip_info2").slideUp(200);
  });

  $("select .KRW").on("select", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });
  $("select .USD").on("click", function () {
    $("butt_ok").css("background-color", "#BDD600");
  });

  $(".list1_wrap").on("click", function () {
    $(".list2_wrap").focus();
  });

  /* 상단 fixed */
  $(window).scroll(function () {
    let y = $(".contentswrap").offset().top; //고정할 메뉴
    if (window.pageYOffset <= $(".contentswrap").offset().top) {
      $(".fix_trip_info").css("position", "fixed");
      $(".fix_trip_info").css("top", y);
    } else {
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "absolute");
    }
  });
  /* 상단 fixed 끝 */

  /* 하단 fixed */

  $(".info_table_wrap").css("overflow", "hidden");
  $(".info_table_wrap").css("overflow-x", "none");

  $(".img").on('click', () => {
    $(".img").css("display", "none");
    $(".img2").css("display", "block");
    $("#modal_totP_wrap").fadeIn();
    $(".fix_modal").fadeIn();
  })
  $(".close").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })
  $(".img2").on('click', () => {
    $(".img2").css("display", "none");
    $(".img").css("display", "block");
    $("#modal_totP_wrap").fadeOut();
    $(".fix_modal").fadeOut();
  })

  /*자세히 보기 */
  $(".det1").on('click', () => {
    $(".detD1").css("display", "inline-block");
  })

  $(".det2").on('click', () => {
    $(".detD2").css("display", "inline-block");
  })

  $(".plus_1").on('click', () => {
    $(".info_table_wrap").css("overflow", "scroll");
    $(".info_table_wrap").css("overflow-x", "hidden");
    $(".info_table_wrap").animate({ scrollTop: 300 }, 600);
    $(".plus_1").css("display", "none");
    $(".minus_1").css("display", "inline-block");
  })
  $(".minus_1").on('click', () => {
    $(".info_table_wrap").css("overflow", "hidden");
    $(".info_table_wrap").css("overflow-x", "none");
    $(".plus_1").css("display", "inline-block");
    $(".minus_1").css("display", "none");
  })


  $(window).scroll(function () {
    let y = $(".fix_bott_wrap").offset().top - 650;
    let h = $(document).scrollTop();
    if (window.pageYOffset <= y) {
      $(".fix_bott").css("position", "fixed");
      $(".fix_bott").css("bottom", "0px");
      $("#modal_totP_wrap").css("position", "fixed");
      $("#modal_totP_wrap").css("top", "-100px");
      $(".fix_trip_info").css("position", "fixed");
    } else {
      $(".fix_bott").css("position", "absolute");
      $("#modal_totP_wrap").css("position", "absolute");
      $("#modal_totP_wrap").css("top", y - 280);
      $(".fix_trip_info").css("position", "absolute");
    }
  });








  /*날짜 설정 */
  let today = new Date();

  $("#a").click(function () {
    $("#div").unbind("click");
  });
  let res = $(".date3").text(); // 나중에 jsp할 때 선택된 날짜 받아와서 넣어주기
  console.log(res);
  let sub_res = res.substring(0, 10);
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1; // 3 -> 4월
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let dat0 = new Date(yyyy, mm+1, dd - 3);
  let dat1 = new Date(yyyy, mm+1, dd - 2);
  let dat2 = new Date(yyyy, mm+1, dd - 1);
  let dat3 = new Date(yyyy, mm+1, dd);
  let dat4 = new Date(yyyy, mm+1, dd + 1);
  let dat5 = new Date(yyyy, mm+1, dd + 2);
  let dat6 = new Date(yyyy, mm+1, dd + 3);


  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
    })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
    })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
    })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
    })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
    })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
    })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
    })`;

  $(".date0").html(sel_date0);
  $(".date1").html(sel_date1);
  $(".date2").html(sel_date2);
  $(".date3").html(sel_date3);
  $(".date4").html(sel_date4);
  $(".date5").html(sel_date5);
  $(".date6").html(sel_date6);


  let str0 = sel_date0.split('-')
  if(str0[1].length == 1){
    str0[1] = `0${str0[1]}`
  }
  if(str0[2].length == 4){
    str0[2] = `0${str0[2]}`
  }
  let strr0 = `${str0[0]}-${str0[1]}-${str0[2].substring(0,2)}`

  let str1 = sel_date1.split('-')
  if(str1[1].length == 1){
    str1[1] = `0${str1[1]}`
  }
  if(str1[2].length == 4){
    str1[2] = `0${str1[2]}`
  }
  let strr1 = `${str1[0]}-${str1[1]}-${str1[2].substring(0,2)}`

  let str2 = sel_date2.split('-')
  if(str2[1].length == 1){
    str2[1] = `0${str2[1]}`
  }
  if(str2[2].length == 4){
    str2[2] = `0${str2[2]}`
  }
  let strr2 = `${str2[0]}-${str2[1]}-${str2[2].substring(0,2)}`

  let str3 = sel_date3.split('-')
  if(str3[1].length == 1){
    str3[1] = `0${str3[1]}`
  }
  if(str3[2].length == 4){
    str3[2] = `0${str3[2]}`
  }
  let strr3 = `${str3[0]}-${str3[1]}-${str3[2].substring(0,2)}`

  let str4 = sel_date4.split('-')
  if(str4[1].length == 1){
    str4[1] = `0${str4[1]}`
  }
  if(str4[2].length == 4){
    str4[2] = `0${str4[2]}`
  }
  let strr4 = `${str4[0]}-${str4[1]}-${str4[2].substring(0,2)}`

  let str5 = sel_date5.split('-')
  if(str5[1].length == 1){
    str5[1] = `0${str5[1]}`
  }
  if(str5[2].length == 4){
    str5[2] = `0${str5[2]}`
  }
  let strr5 = `${str5[0]}-${str5[1]}-${str5[2].substring(0,2)}`

  let str6 = sel_date6.split('-')
  if(str6[1].length == 1){
    str6[1] = `0${str6[1]}`
  }
  if(str6[2].length == 4){
    str6[2] = `0${str6[2]}`
  }
  let strr6 = `${str6[0]}-${str6[1]}-${str6[2].substring(0,2)}`

  searchStart0(strr0);
  searchStart1(strr1);
  searchStart2(strr2);
  searchStart3(strr3);
  searchStart4(strr4);
  searchStart5(strr5);
  searchStart6(strr6);

  function searchStart0(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date0").html('-');
          $("#date0").siblings('.curr').css('display', 'none');
        }else{
          $("#date0").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart1(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date1").html('-');
          $("#date1").siblings('.curr').css('display', 'none');
        }else{
          $("#date1").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart2(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date2").html('-');
          $("#date2").siblings('.curr').css('display', 'none');
        }else{
          $("#date2").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart3(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date3").html('-');
          $("#date3").siblings('.curr').css('display', 'none');
        }else{
          $("#date3").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart4(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date4").html('-');
          $("#date4").siblings('.curr').css('display', 'none');
        }else{
          $("#date4").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart5(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date5").html('-');
          $("#date5").siblings('.curr').css('display', 'none');
        }else{
          $("#date5").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart6(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date6").html('-');
          $("#date6").siblings('.curr').css('display', 'none');
        }else{
          $("#date6").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }



  $(".date0").on("click", function () {
    res = $(".date0").html();
    set_day(res);
  });
  $(".date1").on("click", function () {
    res = $(".date1").html();
    set_day(res);
  });
  $(".date2").on("click", function () {
    res = $(".date2").html();
    set_day(res);
  });
  $(".date3").on("click", function () {
    res = $(".date3").html();
    set_day(res);
  });
  $(".date4").on("click", function () {
    res = $(".date4").html();
    set_day(res);
  });
  $(".date5").on("click", function () {
    res = $(".date5").html();
    set_day(res);
  });
  $(".date6").on("click", function () {
    res = $(".date6").html();
    set_day(res);
  });

  /*날짜 설정 --------------*/
  let todays = new Date();

  $("#a").click(function () {
    $("#div").unbind("click");
  });
  let ress = $(".dating3").text(); // 나중에 jsp할 때 선택된 날짜 받아와서 넣어주기
  console.log(ress);
  let sub_ress = ress.substring(0, 10);
  let select_days = sub_ress.split("-");

  let yyyy1 = Number(select_days[0]);
  let mm1 = Number(select_days[1])-1;
  let dd1 = Number(select_days[2]);
  let week1 = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr1 = new Array(1, 2, 3, 4, 5, 6, 7);

  let dating0 = new Date(yyyy1, mm1, dd1 - 3);
  let dating1 = new Date(yyyy1, mm1, dd1 - 2);
  let dating2 = new Date(yyyy1, mm1, dd1 - 1);
  let dating3 = new Date(yyyy1, mm1, dd1);
  let dating4 = new Date(yyyy1, mm1, dd1 + 1);
  let dating5 = new Date(yyyy1, mm1, dd1 + 2);
  let dating6 = new Date(yyyy1, mm1, dd1 + 3);

  let sel_dating0 = `${dating0.getFullYear()}-${dating0.getMonth()+1}-${dating0.getDate()}(${week1[dating0.getDay()]
  })`;
  let sel_dating1 = `${dating1.getFullYear()}-${dating1.getMonth()+1}-${dating1.getDate()}(${week1[dating1.getDay()]
  })`;
  let sel_dating2 = `${dating2.getFullYear()}-${dating2.getMonth()+1}-${dating2.getDate()}(${week1[dating2.getDay()]
  })`;
  let sel_dating3 = `${dating3.getFullYear()}-${dating3.getMonth()+1}-${dating3.getDate()}(${week1[dating3.getDay()]
  })`;
  let sel_dating4 = `${dating4.getFullYear()}-${dating4.getMonth()+1}-${dating4.getDate()}(${week1[dating4.getDay()]
  })`;
  let sel_dating5 = `${dating5.getFullYear()}-${dating5.getMonth()+1}-${dating5.getDate()}(${week1[dating5.getDay()]
  })`;
  let sel_dating6 = `${dating6.getFullYear()}-${dating6.getMonth()+1}-${dating6.getDate()}(${week1[dating6.getDay()]
  })`;

  $(".dating0").html(sel_dating0);
  $(".dating1").html(sel_dating1);
  $(".dating2").html(sel_dating2);
  $(".dating3").html(sel_dating3);
  $(".dating4").html(sel_dating4);
  $(".dating5").html(sel_dating5);
  $(".dating6").html(sel_dating6);

  if(str[5] != 'oneway'){
    let string0 = sel_dating0.split('-')
    if(string0[1].length == 1){
      string0[1] = `0${string0[1]}`
    }
    if(string0[2].length == 4){
      string0[2] = `0${string0[2]}`
    }
    let strring0 = `${string0[0]}-${string0[1]}-${string0[2].substring(0,2)}`

    let string1 = sel_dating1.split('-')
    if(string1[1].length == 1){
      string1[1] = `0${string1[1]}`
    }
    if(string1[2].length == 4){
      string1[2] = `0${string1[2]}`
    }
    let strring1 = `${string1[0]}-${string1[1]}-${string1[2].substring(0,2)}`

    let string2 = sel_dating2.split('-')
    if(string2[1].length == 1){
      string2[1] = `0${string2[1]}`
    }
    if(string2[2].length == 4){
      string2[2] = `0${string2[2]}`
    }
    let strring2 = `${string2[0]}-${string2[1]}-${string2[2].substring(0,2)}`

    let string3 = sel_dating3.split('-')
    if(string3[1].length == 1){
      string3[1] = `0${string3[1]}`
    }
    if(string3[2].length == 4){
      string3[2] = `0${string3[2]}`
    }
    let strring3 = `${string3[0]}-${string3[1]}-${string3[2].substring(0,2)}`

    let string4 = sel_dating4.split('-')
    if(string4[1].length == 1){
      string4[1] = `0${string4[1]}`
    }
    if(string4[2].length == 4){
      string4[2] = `0${string4[2]}`
    }
    let strring4 = `${string4[0]}-${string4[1]}-${string4[2].substring(0,2)}`

    let string5 = sel_dating5.split('-')
    if(string5[1].length == 1){
      string5[1] = `0${string5[1]}`
    }
    if(string5[2].length == 4){
      string5[2] = `0${string5[2]}`
    }
    let strring5 = `${string5[0]}-${string5[1]}-${string5[2].substring(0,2)}`

    let string6 = sel_dating6.split('-')
    if(string6[1].length == 1){
      string6[1] = `0${string6[1]}`
    }
    if(string6[2].length == 4){
      string6[2] = `0${string6[2]}`
    }
    let strring6 = `${string6[0]}-${string6[1]}-${string6[2].substring(0,2)}`

    searchStaring0(strring0);
    searchStarting1(strring1);
    searchStarting2(strring2);
    searchStarting3(strring3);
    searchStarting4(strring4);
    searchStarting5(strring5);
    searchStarting6(strring6);

    function searchStaring0(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating0").html('-');
            $("#dating0").siblings('.curr').css('display', 'none');
          }else{
            $("#dating0").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting1(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating1").html('-');
            $("#dating1").siblings('.curr').css('display', 'none');
          }else{
            $("#dating1").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting2(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating2").html('-');
            $("#dating2").siblings('.curr').css('display', 'none');
          }else{
            $("#dating2").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting3(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating3").html('-');
            $("#dating3").siblings('.curr').css('display', 'none');
          }else{
            $("#dating3").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting4(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating4").html('-');
            $("#dating4").siblings('.curr').css('display', 'none');
          }else{
            $("#dating4").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting5(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating5").html('-');
            $("#dating5").siblings('.curr').css('display', 'none');
          }else{
            $("#dating5").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
    function searchStarting6(strr){
      $.post({
        url: "/api/schedule/price",
        data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
        dataType: "text",
        success: function (response) {
          let dataJson = JSON.parse(response)
          if(dataJson.data == 0){
            $("#dating6").html('-');
            $("#dating6").siblings('.curr').css('display', 'none');
          }else{
            $("#dating6").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
          }
        }
      })
    }
  }


  $(".dating0").on("click", function () {
    ress = $(".dating0").html();
    setting_day(ress);
  });
  $(".dating1").on("click", function () {
    ress = $(".dating1").html();
    setting_day(ress);
  });
  $(".dating2").on("click", function () {
    ress = $(".dating2").html();
    setting_day(ress);
  });
  $(".dating3").on("click", function () {
    ress = $(".dating3").html();
    setting_day(ress);
  });
  $(".dating4").on("click", function () {
    ress = $(".dating4").html();
    setting_day(ress);
  });
  $(".dating5").on("click", function () {
    ress = $(".dating5").html();
    setting_day(ress);
  });
  $(".dating6").on("click", function () {
    ress = $(".dating6").html();
    setting_day(ress);
  });
});

function set_day(res) {
  let ress = res;
  console.log(ress);
  let sub_res;
  console.log(ress.length);
  if (ress.length == 13) {
    sub_res = res.substring(0, 10);
  } else if (ress.length == 12) {
    sub_res = res.substring(0, 9);
  } else {
    sub_res = res.substring(0, 8);
  }
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1;
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
  })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
  })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
  })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
  })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
  })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
  })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
  })`;

  $(".date0").html(sel_date0);
  $(".date1").html(sel_date1);
  $(".date2").html(sel_date2);
  $(".date3").html(sel_date3);
  $(".date4").html(sel_date4);
  $(".date5").html(sel_date5);
  $(".date6").html(sel_date6);

  let str0 = sel_date0.split('-')
  if(str0[1].length == 1){
    str0[1] = `0${str0[1]}`
  }
  if(str0[2].length == 4){
    str0[2] = `0${str0[2]}`
  }
  let strr0 = `${str0[0]}-${str0[1]}-${str0[2].substring(0,2)}`

  let str1 = sel_date1.split('-')
  if(str1[1].length == 1){
    str1[1] = `0${str1[1]}`
  }
  if(str1[2].length == 4){
    str1[2] = `0${str1[2]}`
  }
  let strr1 = `${str1[0]}-${str1[1]}-${str1[2].substring(0,2)}`

  let str2 = sel_date2.split('-')
  if(str2[1].length == 1){
    str2[1] = `0${str2[1]}`
  }
  if(str2[2].length == 4){
    str2[2] = `0${str2[2]}`
  }
  let strr2 = `${str2[0]}-${str2[1]}-${str2[2].substring(0,2)}`

  let str3 = sel_date3.split('-')
  if(str3[1].length == 1){
    str3[1] = `0${str3[1]}`
  }
  if(str3[2].length == 4){
    str3[2] = `0${str3[2]}`
  }
  let strr3 = `${str3[0]}-${str3[1]}-${str3[2].substring(0,2)}`

  let str4 = sel_date4.split('-')
  if(str4[1].length == 1){
    str4[1] = `0${str4[1]}`
  }
  if(str4[2].length == 4){
    str4[2] = `0${str4[2]}`
  }
  let strr4 = `${str4[0]}-${str4[1]}-${str4[2].substring(0,2)}`

  let str5 = sel_date5.split('-')
  if(str5[1].length == 1){
    str5[1] = `0${str5[1]}`
  }
  if(str5[2].length == 4){
    str5[2] = `0${str5[2]}`
  }
  let strr5 = `${str5[0]}-${str5[1]}-${str5[2].substring(0,2)}`

  let str6 = sel_date6.split('-')
  if(str6[1].length == 1){
    str6[1] = `0${str6[1]}`
  }
  if(str6[2].length == 4){
    str6[2] = `0${str6[2]}`
  }
  let strr6 = `${str6[0]}-${str6[1]}-${str6[2].substring(0,2)}`

  searchStart0(strr0);
  searchStart1(strr1);
  searchStart2(strr2);
  searchStart3(strr3);
  searchStart4(strr4);
  searchStart5(strr5);
  searchStart6(strr6);

  function searchStart0(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date0").html('-');
          $("#date0").siblings('.curr').css('display', 'none');
        }else{
          $("#date0").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart1(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date1").html('-');
          $("#date1").siblings('.curr').css('display', 'none');
        }else{
          $("#date1").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart2(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date2").html('-');
          $("#date2").siblings('.curr').css('display', 'none');
        }else{
          $("#date2").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart3(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date3").html('-');
          $("#date3").siblings('.curr').css('display', 'none');
        }else{
          $("#date3").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart4(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date4").html('-');
          $("#date4").siblings('.curr').css('display', 'none');
        }else{
          $("#date4").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart5(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date5").html('-');
          $("#date5").siblings('.curr').css('display', 'none');
        }else{
          $("#date5").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStart6(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area').html() + "&schArrivalPoint=" + $('.arr_area').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#date6").html('-');
          $("#date6").siblings('.curr').css('display', 'none');
        }else{
          $("#date6").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
}

function setting_day(res) {
  let ress = res;
  console.log(ress);
  let sub_res;
  console.log(ress.length);
  if (ress.length == 13) {
    sub_res = res.substring(0, 10);
  } else if (ress.length == 12) {
    sub_res = res.substring(0, 9);
  } else {
    sub_res = res.substring(0, 8);
  }
  let select_day = sub_res.split("-");

  let yyyy = Number(select_day[0]);
  let mm = Number(select_day[1])-1;
  let dd = Number(select_day[2]);
  let week = new Array("일", "월", "화", "수", "목", "금", "토"); //숫자로 추출한sel_day 문자로 변경할 배열;
  let datearr = new Array(1, 2, 3, 4, 5, 6, 7);

  let date0 = new Date(yyyy, mm, dd - 3);
  let date1 = new Date(yyyy, mm, dd - 2);
  let date2 = new Date(yyyy, mm, dd - 1);
  let date3 = new Date(yyyy, mm, dd);
  let date4 = new Date(yyyy, mm, dd + 1);
  let date5 = new Date(yyyy, mm, dd + 2);
  let date6 = new Date(yyyy, mm, dd + 3);

  let sel_date0 = `${date0.getFullYear()}-${date0.getMonth()+1}-${date0.getDate()}(${week[date0.getDay()]
  })`;
  let sel_date1 = `${date1.getFullYear()}-${date1.getMonth()+1}-${date1.getDate()}(${week[date1.getDay()]
  })`;
  let sel_date2 = `${date2.getFullYear()}-${date2.getMonth()+1}-${date2.getDate()}(${week[date2.getDay()]
  })`;
  let sel_date3 = `${date3.getFullYear()}-${date3.getMonth()+1}-${date3.getDate()}(${week[date3.getDay()]
  })`;
  let sel_date4 = `${date4.getFullYear()}-${date4.getMonth()+1}-${date4.getDate()}(${week[date4.getDay()]
  })`;
  let sel_date5 = `${date5.getFullYear()}-${date5.getMonth()+1}-${date5.getDate()}(${week[date5.getDay()]
  })`;
  let sel_date6 = `${date6.getFullYear()}-${date6.getMonth()+1}-${date6.getDate()}(${week[date6.getDay()]
  })`;

  $(".dating0").html(sel_date0);
  $(".dating1").html(sel_date1);
  $(".dating2").html(sel_date2);
  $(".dating3").html(sel_date3);
  $(".dating4").html(sel_date4);
  $(".dating5").html(sel_date5);
  $(".dating6").html(sel_date6);

  let string0 = sel_date0.split('-')
  if(string0[1].length == 1){
    string0[1] = `0${string0[1]}`
  }
  if(string0[2].length == 4){
    string0[2] = `0${string0[2]}`
  }
  let strring0 = `${string0[0]}-${string0[1]}-${string0[2].substring(0,2)}`

  let string1 = sel_date1.split('-')
  if(string1[1].length == 1){
    string1[1] = `0${string1[1]}`
  }
  if(string1[2].length == 4){
    string1[2] = `0${string1[2]}`
  }
  let strring1 = `${string1[0]}-${string1[1]}-${string1[2].substring(0,2)}`

  let string2 = sel_date2.split('-')
  if(string2[1].length == 1){
    string2[1] = `0${string2[1]}`
  }
  if(string2[2].length == 4){
    string2[2] = `0${string2[2]}`
  }
  let strring2 = `${string2[0]}-${string2[1]}-${string2[2].substring(0,2)}`

  let string3 = sel_date3.split('-')
  if(string3[1].length == 1){
    string3[1] = `0${string3[1]}`
  }
  if(string3[2].length == 4){
    string3[2] = `0${string3[2]}`
  }
  let strring3 = `${string3[0]}-${string3[1]}-${string3[2].substring(0,2)}`

  let string4 = sel_date4.split('-')
  if(string4[1].length == 1){
    string4[1] = `0${string4[1]}`
  }
  if(string4[2].length == 4){
    string4[2] = `0${string4[2]}`
  }
  let strring4 = `${string4[0]}-${string4[1]}-${string4[2].substring(0,2)}`

  let string5 = sel_date5.split('-')
  if(string5[1].length == 1){
    string5[1] = `0${string5[1]}`
  }
  if(string5[2].length == 4){
    string5[2] = `0${string5[2]}`
  }
  let strring5 = `${string5[0]}-${string5[1]}-${string5[2].substring(0,2)}`

  let string6 = sel_date6.split('-')
  if(string6[1].length == 1){
    string6[1] = `0${string6[1]}`
  }
  if(string6[2].length == 4){
    string6[2] = `0${string6[2]}`
  }
  let strring6 = `${string6[0]}-${string6[1]}-${string6[2].substring(0,2)}`

  searchStaring0(strring0);
  searchStarting1(strring1);
  searchStarting2(strring2);
  searchStarting3(strring3);
  searchStarting4(strring4);
  searchStarting5(strring5);
  searchStarting6(strring6);

  function searchStaring0(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating0").html('-');
          $("#dating0").siblings('.curr').css('display', 'none');
        }else{
          $("#dating0").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting1(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating1").html('-');
          $("#dating1").siblings('.curr').css('display', 'none');
        }else{
          $("#dating1").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting2(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating2").html('-');
          $("#dating2").siblings('.curr').css('display', 'none');
        }else{
          $("#dating2").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting3(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating3").html('-');
          $("#dating3").siblings('.curr').css('display', 'none');
        }else{
          $("#dating3").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting4(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating4").html('-');
          $("#dating4").siblings('.curr').css('display', 'none');
        }else{
          $("#dating4").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting5(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating5").html('-');
          $("#dating5").siblings('.curr').css('display', 'none');
        }else{
          $("#dating5").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
  function searchStarting6(strr){
    $.post({
      url: "/api/schedule/price",
      data: "schDeparturePoint=" + $('.dep_area1').html() + "&schArrivalPoint=" + $('.arr_area1').html() + "&goDateSelectOptt=" + strr,
      dataType: "text",
      success: function (response) {
        let dataJson = JSON.parse(response)
        if(dataJson.data == 0){
          $("#dating6").html('-');
          $("#dating6").siblings('.curr').css('display', 'none');
        }else{
          $("#dating6").html((dataJson.data[0].schBasicPrice).toLocaleString('ko-KR'));
        }
      }
    })
  }
}

$(() => {
  $(".code").on("click", () => {
    $("#modal_input_code_wrap").fadeIn();
    $("body").css("overflow", "hidden");
  });
  $(".input_ok").on("click", () => {
    $("#modal_input_code_wrap").fadeOut();
    $("body").css("overflow", "");
  });
  $(".close").on("click", () => {
    $("#modal_input_code_wrap").fadeOut();
    $("body").css("overflow", "");
  });

});


// 운임 규정
$(() => {
  // 모달 닫기
  $(".close_crr").on("click", function () {
    $(".crr_modal").fadeOut(200);
    $("body").css("overflow", "");
  });
  // 운임 종류
  $(".kind_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
    $(".superlow_btn, .flex_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_index").css("display", "block");
    $(".kind_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "660px",
    });
    $(".crr_contents").css({
      height: "550px",
    });
  });

  // 슈퍼로우
  $(".superlow_btn").on("click", function () {
    $(".crr_index, .crr_flex, .crr_jini, .crr_biz").css("display", "none");
    $(".kind_btn, .flex_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_superlow").css({
      display: "block",
    });
    $(".superlow_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 플렉스
  $(".flex_btn").on("click", function () {
    $(".crr_superlow, .crr_index, .crr_jini, .crr_biz").css("display", "none");
    $(".superlow_btn, .kind_btn, .jini_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_flex").css("display", "block");
    $(".flex_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 지니
  $(".jini_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_index, .crr_biz").css("display", "none");
    $(".superlow_btn, .flex_btn, .kind_btn, .biz_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_jini").css("display", "block");
    $(".jini_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });

  // 지니비즈
  $(".biz_btn").on("click", function () {
    $(".crr_superlow, .crr_flex, .crr_jini, .crr_index").css("display", "none");
    $(".superlow_btn, .flex_btn, .jini_btn, .kind_btn").css({
      "background-color": "#fff",
      color: "#555",
    });
    $(".crr_biz").css("display", "block");
    $(".biz_btn").css({
      "background-color": "rgb(102, 30, 67)",
      color: "#fff",
    });
    $(".crr_box").css({
      height: "900px",
    });
    $(".crr_contents").css({
      height: "820px",
    });
  });
});

// 수정 모달 창 ***********************
$(() => {
  $(".trip_edit_butt").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "block");
    $("body").css("overflow", "hidden");
  });
  $(".modal_edit_close_btn").on("click", function () {
    $("#modal_edit_jour_wrap").css("display", "none");
    $("body").css("overflow", "");
  });
});

$(() => {
  $("#round").on("click", function () {
    $(".round_wrap").css("display", "block");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#oneway").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "block");
    $(".multi_wrap").css("display", "none");
    $(".edit_jour_wrap").css("height", "450px");
  });
  $("#multi").on("click", function () {
    $(".round_wrap").css("display", "none");
    $(".oneway_wrap").css("display", "none");
    $(".multi_wrap").css("display", "block");
    $(".edit_jour_wrap").css("height", "520px");
  });
});

//person-layer
$(() => {
  $(".person_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".person_down_img").css({ display: "none" });
    $(".person_up_img").css({ display: "inline-block" });
    $(".person_pop_layer").slideDown("fast");

    // 예약 관련 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img").css({ display: "inline-block" });
    $(".go_up_img").css({ display: "none" });
    $(".go_layer").slideUp(50);

    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_down_img2").css({ display: "inline-block" });
    $(".go_up_img2").css({ display: "none" });
    $(".go_layer2").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_up_img").css({ display: "none" });
    $(".arrive_layer").slideUp(50);

    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img2").css({ display: "inline-block" });
    $(".arrive_up_img2").css({ display: "none" });
    $(".arrive_layer2").slideUp(50);
  });
});

// go-layer
$(() => {
  // 옵션1
  $(".go_layerbtn").on("click", function (e) {
    e.stopPropagation();

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지1 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_down_img").css({ display: "inline-block" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".go_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt2").addClass("on");
    $(".go_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 도착지2 레이어 닫기
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);

    // 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
});

// arrive-layer
$(() => {
  // 옵션 1
  $(".arrive_layerbtn").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt").addClass("on");
    $(".arrive_layer").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지1 레이어 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 다구간 옵션2 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });

  // 옵션 2
  $(".arrive_layerbtn2").on("click", function (e) {
    e.stopPropagation();
    $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
    $(".arrive_select_opt2").addClass("on");
    $(".arrive_layer2").slideDown("fast");

    // 사람 수 선택 닫기
    e.stopPropagation();
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    // 출발지2 레이어 닫기
    e.stopPropagation();

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    // 다구간 옵션1 닫기
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);
    e.stopPropagation();

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);
  });
  $(".person_pop_layer").on("click", function (e) {
    e.stopPropagation();
  });
});

// 화면 클릭
$(() => {
  $("body").on("click", function (e) {
    e.stopPropagation();
    $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt").removeClass("on");
    $(".go_layer").slideUp(50);

    // 사람 수 선택 닫기
    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".go_select_opt2").removeClass("on");
    $(".go_layer2").slideUp(50);

    $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt").removeClass("on");
    $(".arrive_layer").slideUp(50);

    $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
    $(".arrive_select_opt2").removeClass("on");
    $(".arrive_layer2").slideUp(50);
  });
});

function fnSetPaxCountDown(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  switch (strPaxType) {
    case "ADULT":
      --iAdultCount;
      if (iAdultCount >= 0) {
        --iPaxCount;
      }

      if (iInfantCount > iAdultCount) {
        iInfantCount = iAdultCount;
      }

      if (iAdultCount <= 0) {
        iAdultCount = 0;
        iInfantCount = 0;
      }
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
    case "CHILD":
      --iChildCount;
      if (iChildCount >= 0) {
        --iPaxCount;
      }
      if (iChildCount <= 0) {
        iChildCount = 0;
      }

      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      --iInfantCount;
      if (iInfantCount <= 0) {
        iInfantCount = 0;
      }

      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function fnSetPaxCountUp(strPaxType, obj) {
  var btnParent = $(obj).parents("ul");

  var //
    iAdultCount = parseInt(
      $(btnParent).find("strong[name=adultPaxCnt]").text()
    ),
    iChildCount = parseInt(
      $(btnParent).find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(btnParent).find("strong[name=infantPaxCnt]").text()
    ),
    iPaxCount = iAdultCount + iChildCount;

  // Count 증감
  switch (strPaxType) {
    case "ADULT":
      ++iAdultCount;
      ++iPaxCount;
      $("strong[name=adultPaxCnt]").text(iAdultCount);
      break;
    case "CHILD":
      ++iChildCount;
      ++iPaxCount;
      $("strong[name=childPaxCnt]").text(iChildCount);
      break;
    case "INFANT":
      ++iInfantCount;
      if (iInfantCount > iAdultCount) {
        alert("소아는 성인을 넘을 수 없음");
        break;
      }
      $("strong[name=infantPaxCnt]").text(iInfantCount);
      break;
  }
}

function submit1() {
  console.log("작동");
  var iAdultCount = parseInt(
    $(".person_pop_layer1").find("strong[name=adultPaxCnt]").text()
  ),
    iChildCount = parseInt(
      $(".person_pop_layer1").find("strong[name=childPaxCnt]").text()
    ),
    iInfantCount = parseInt(
      $(".person_pop_layer1").find("strong[name=infantPaxCnt]").text()
    );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 소아 " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
      "성인 " + iAdultCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("성인 " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("소아 " + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

function submit2() {
  console.log("작동");
  var iAdultCount = parseInt(
          $(".person_pop_layer2").find("strong[name=adultPaxCnt]").text()
      ),
      iChildCount = parseInt(
          $(".person_pop_layer2").find("strong[name=childPaxCnt]").text()
      ),
      iInfantCount = parseInt(
          $(".person_pop_layer2").find("strong[name=infantPaxCnt]").text()
      );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 소아 " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("성인 " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("소아 " + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

function submit3() {
  console.log("작동");
  var iAdultCount = parseInt(
          $(".person_pop_layer3").find("strong[name=adultPaxCnt]").text()
      ),
      iChildCount = parseInt(
          $(".person_pop_layer3").find("strong[name=childPaxCnt]").text()
      ),
      iInfantCount = parseInt(
          $(".person_pop_layer3").find("strong[name=infantPaxCnt]").text()
      );

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 소아 " + iChildCount
    );
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text(
        "성인 " + iAdultCount + " 유아 " + iInfantCount
    );
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text("성인 " + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text("소아 " + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $(".adultPaxCnt").val(iAdultCount);
  $(".childPaxCnt").val(iChildCount);
  $(".infantPaxCnt").val(iInfantCount);

  $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
  $(".person_down_img").css({ display: "inline-block" });
  $(".person_up_img").css({ display: "none" });
  $(".person_pop_layer").slideUp(50);

  $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass("on");
  $(".go_layer").slideDown("fast");
}

$(function () {
  $(".infant_modal").hide();
  $(".baby_info_btn").click(function () {
    $(".child_modal").hide();
    $(".infant_modal").fadeIn(200);
    $(".infant_modal").click(function () {
      $(".infant_modal").fadeOut(200);
    });
  });

  $(".child_modal").hide();
  $(".infant_modal").hide();
  $(".child_info_btn").click(function () {
    $(".child_modal").fadeIn(200);
    $(".child_modal").click(function () {
      $(".child_modal").fadeOut(200);
    });
  });
});

function updateTrip() {
  let person = $("#person_cnt").text();
  let go1 = $("#go_area1").text();
  let arr1 = $("#arr_area1").text();

  $(".person_num").text(person);
  $(".go_default").attr("value", go1);
  $(".arrive_default").attr("value", arr1);
}

function modification() {
  let inonesoo = $('.person_num').html().split(' ');
  let modiAdult = 0;
  let modiChild = 0;
  let modiBaby = 0;
  if(inonesoo.length == 2){
    if(inonesoo[0] == '소아'){
      modiChild = Number(inonesoo[1])
    }else if(inonesoo[0] == '성인'){
      modiAdult = Number(inonesoo[1])
    }
  }else if(inonesoo.length == 4){
    if(inonesoo[2] == '유아'){
      modiAdult = Number(inonesoo[1]);
      modiBaby = Number(inonesoo[3]);
    }else if(inonesoo[2] == '소아'){
      modiAdult = Number(inonesoo[1]);
      modiChild = Number(inonesoo[3])
    }
  }else if(inonesoo.length == 6){
    modiAdult = Number(inonesoo[1]);
    modiChild = Number(inonesoo[3])
    modiBaby = Number(inonesoo[5]);
  }


if($('input[type="radio"][name="tripType"]:checked').val() == "왕복"){

    if($('.go_date_select_optt').val()=="가는날" || $('.come_date_select_optt').val()=="오는날"){
      alert('입력하신 내용을 확인해주세요');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'comeDateSelectOptt');
      obj4.setAttribute('value', $('.come_date_select_optt').val());
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'AdultNumber');
      obj5.setAttribute('value', modiAdult);
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'ChildNumber');
      obj6.setAttribute('value', modiChild);
      f.appendChild(obj6);

      let obj7;
      obj7 = document.createElement('input');
      obj7.setAttribute('type', 'hidden');
      obj7.setAttribute('name', 'InfantNumber');
      obj7.setAttribute('value', modiBaby);
      f.appendChild(obj7);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/twoway');
      document.body.appendChild(f);
      f.submit();
    }
  }else if($('input[type="radio"][name="tripType"]:checked').val() == "편도") {
    if($('.go_date_select_optt').val()=="가는날"){
      alert('입력하신 내용을 확인해주세요');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'AdultNumber');
      obj4.setAttribute('value', modiAdult);
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'ChildNumber');
      obj5.setAttribute('value', modiChild);
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'InfantNumber');
      obj6.setAttribute('value', modiBaby);
      f.appendChild(obj6);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/oneway');
      document.body.appendChild(f);
      f.submit();
    }
  }else if($('input[type="radio"][name="tripType"]:checked').val() == "다구간") {
    if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
        $('.go_date_select_optt').val()=="가는날" || $('.go_select_optt2').val()=="출발지" ||
        $('.arrive_select_optt2').val()=="도착지" || $('.go_date_select_optt2').val()=="가는날"){
      alert('입력하신 내용을 확인해주세요');
    }else{
      let f = document.createElement('form');

      let obj1;
      obj1 = document.createElement('input');
      obj1.setAttribute('type', 'hidden');
      obj1.setAttribute('name', 'schDeparturePoint');
      obj1.setAttribute('value', $('.go_select_optt').val());
      f.appendChild(obj1);

      let obj2;
      obj2 = document.createElement('input');
      obj2.setAttribute('type', 'hidden');
      obj2.setAttribute('name', 'schArrivalPoint');
      obj2.setAttribute('value', $('.arrive_select_optt').val());
      f.appendChild(obj2);

      let obj3;
      obj3 = document.createElement('input');
      obj3.setAttribute('type', 'hidden');
      obj3.setAttribute('name', 'goDateSelectOptt');
      obj3.setAttribute('value', $('.go_date_select_optt').val());
      f.appendChild(obj3);

      let obj4;
      obj4 = document.createElement('input');
      obj4.setAttribute('type', 'hidden');
      obj4.setAttribute('name', 'schDeparturePoint1');
      obj4.setAttribute('value', $('.go_select_optt2').val());
      f.appendChild(obj4);

      let obj5;
      obj5 = document.createElement('input');
      obj5.setAttribute('type', 'hidden');
      obj5.setAttribute('name', 'schArrivalPoint1');
      obj5.setAttribute('value', $('.arrive_select_optt2').val());
      f.appendChild(obj5);

      let obj6;
      obj6 = document.createElement('input');
      obj6.setAttribute('type', 'hidden');
      obj6.setAttribute('name', 'goDateSelectOptt1');
      obj6.setAttribute('value', $('.go_date_select_optt2').val());
      f.appendChild(obj6);

      let obj7;
      obj7 = document.createElement('input');
      obj7.setAttribute('type', 'hidden');
      obj7.setAttribute('name', 'AdultNumber');
      obj7.setAttribute('value', modiAdult);
      f.appendChild(obj7);

      let obj8;
      obj8 = document.createElement('input');
      obj8.setAttribute('type', 'hidden');
      obj8.setAttribute('name', 'ChildNumber');
      obj8.setAttribute('value', modiChild);
      f.appendChild(obj8);

      let obj9;
      obj9 = document.createElement('input');
      obj9.setAttribute('type', 'hidden');
      obj9.setAttribute('name', 'InfantNumber');
      obj9.setAttribute('value', modiBaby);
      f.appendChild(obj9);

      f.setAttribute('method', 'post');
      f.setAttribute('action', '/pages/getAvailabilityList/multiway');
      document.body.appendChild(f);
      f.submit();
    }
  }
}














function comewhatday() {
  $(".whatday").html("오는날");
}
function gowhatday() {
  $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
  let str1 = str.substr(0, 4);
  let str2 = str.substr(4, 2);
  let str3 = str.substr(6, 2);
  $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
  $(".modal_container").fadeIn(200);
  $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
  $(".cal").css({ display: "none" });
  $(".cal2").css({ display: "none" });
  $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
  // 왕복, 편도 출발지 지정
  $(".go_layer")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt").val(str);
      $(".go_layer").slideUp(50);
      $(".arrive_layer").slideDown(100);
      $(".go_select_opt").removeClass("on");
      $(".arrive_select_opt").addClass("on");
      bbb = "y";
    });
  // 왕복, 편도 도착지 지정
  $(".arrive_layer")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt").val(str);
      ccc = "y";
    });
  // 왕복 달력 모달
  $(".go_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("가는날");
    d;
  });
  $(".come_date").on("click", function () {
    $(".cal").css({ display: "flex" });
    $(".whatday").html("오는날");
  });

  // 편도 달력 모달
  $(".go_date2").on("click", function () {
    $(".cal2").css({ display: "flex" });
    $(".whatday").html("가는날");
  });

  // 다구간 출발지 지정
  $(".go_layer2")
    .find("li")
    .find("a")
    .on("click", function (e) {
      e.stopPropagation();
      let str = "";
      str = $(this).html();
      $(".go_select_optt2").val(str);
      $(".go_layer2").slideUp(50);
      $(".arrive_layer2").slideDown(100);
      $(".go_select_opt2").removeClass("on");
      $(".arrive_select_opt2").addClass("on");
      bbb = "y";
    });
  // 다구간 도착지 지정
  $(".arrive_layer2")
    .find("li")
    .find("a")
    .on("click", function () {
      let str = "";
      str = $(this).html();
      $(".arrive_select_optt2").val(str);
      ccc = "y";
    });
  // 다구간1 달력 모달
  $(".go_date3").on("click", function () {
    if (bbb == "n" && ccc == "n") {
      departure();
      $(".cal3").css({ display: "none" });
    } else if (bbb == "y" && ccc == "n") {
      arrive();
    } else {
      $(".cal3").css({ display: "flex" });
      $(".whatday").html("가는날");
    }
  });

  // 달력 X 버튼
  $(".x_box").on("click", function () {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
  });

  // 모달모음 확인 버튼
  $(".btn_cancel").on("click", function () {
    $(".modal_container").fadeOut(200);
  });
});


