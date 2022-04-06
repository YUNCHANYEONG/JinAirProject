'use strict';

$(function () {
  $('.open1').on('click', function (e) {
    e.stopPropagation();
    $('.service').slideUp(50);
    $('.benefit').slideUp(50);
    $('.point').slideUp(50);
    $('.optional').slideUp(50);
    $('.reservation').slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  })
  $('.open2').on('click', function (e) {
    e.stopPropagation();
    $('.reservation').slideUp(50);
    $('.benefit').slideUp(50);
    $('.point').slideUp(50);
    $('.optional').slideUp(50);
    $('.service').slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  })
  $('.open3').on('click', function (e) {
    e.stopPropagation();
    $('.reservation').slideUp(50);
    $('.service').slideUp(50);
    $('.point').slideUp(50);
    $('.optional').slideUp(50);
    $('.benefit').slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  })
  $('.open4').on('click', function (e) {
    e.stopPropagation();
    $('.reservation').slideUp(50);
    $('.service').slideUp(50);
    $('.benefit').slideUp(50);
    $('.optional').slideUp(50);
    $('.point').slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  })
  $('.open5').on('click', function (e) {
    e.stopPropagation();
    $('.reservation').slideUp(50);
    $('.service').slideUp(50);
    $('.benefit').slideUp(50);
    $('.point').slideUp(50);
    $('.optional').slideDown("fast");
    $(this).siblings().css({ "border-bottom": "none" });
    $(this).css({ "border-bottom": "3px solid #652043" });
  })
  $('.nav_all').on('click', function (e) {
    e.stopPropagation();
    $('.reservation').slideUp(50);
    $('.service').slideUp(50);
    $('.benefit').slideUp(50);
    $('.point').slideUp(50);
    $('.optional').slideUp(50);
    $("li[class *= 'open']").css({ "border-bottom": "none" });
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
  $("body").on('click', function (e) {
    e.stopPropagation();
    $('.modal').fadeOut(200);
  })

  $(".arrow_img").on('click', function () {
    $(".arrow_img").css("display", "none");
    $(".trip_info2").slideDown(200);
    $(".arrow_up_img").css("display", "block");
  })
  $(".arrow_up_img").on('click', function () {
    $(".arrow_img").css("display", "block");
    $(".arrow_up_img").css("display", "none");
    $(".trip_info2").slideUp(200);
  })

  $("select .KRW").on('select', function () {
    $("butt_ok").css("background-color", "#BDD600");
  })
  $("select .USD").on('click', function () {
    $("butt_ok").css("background-color", "#BDD600");
  })

  $(".list1_wrap").on("click", function () {
    $(".list2_wrap").focus();
  })


  /*화면 구성 */

  $(".service_menu .menu1img").css("display", "none");
  $(".service_menu .menu1_invert").css("display", "block");

  $(".service_menu .menu2img").css("display", "block");
  $(".service_menu .menu2_invert").css("display", "none");

  $(".service_menu .menu3img").css("display", "block");
  $(".service_menu .menu3_invert").css("display", "none");


  $(".service_content_wrap1").css("display", "blcok");
  $(".service_content_wrap2").css("display", "none");
  $(".service_content_wrap3").css("display", "none");
  $("service_content_wrap3 section1").css("background", "")
  $("service_content_wrap3 section1")

  $(".service_menu .menu1").on("click", function () {
    $('html, body').scrollTop(0)
    $(".service_content_wrap1").css("display", "block");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "none");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");

    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "none");
    $(".service_menu .menu1_invert").css("display", "block");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");

    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");
    $(".seat_info").css("z-index", "20");

  })
  $(".service_menu .menu2").on("click", function () {
    $('html, body').scrollTop(0)
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "block");
    $(".service_content_wrap3").css("display", "none");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "none");
    $(".service_menu .menu2_invert").css("display", "block");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");
  })
  $(".select_seat_wrap2 .select_comp").on("click", function () {
    optionTotalPrice(personNumber)
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "block");
    $(".service_content_wrap3").css("display", "none");
    $(".service_menu .menu2").css("color", "white");
    $(".service_menu .menu2").css("background-color", "#661e43");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu3").css("color", "#444");
    $(".service_menu .menu3").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "none");
    $(".service_menu .menu2_invert").css("display", "block");

    $(".service_menu .menu3img").css("display", "block");
    $(".service_menu .menu3_invert").css("display", "none");
  })

  $(".service_menu .menu3").on("click", function () {

    $('html, body').scrollTop(0)
    $("#modal_agree_wrap").hide();
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "block");
    $(this).css("color", "white");
    $(this).css("background-color", "#661e43");
    $("table .detail").css("display", "none");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "none");
    $(".service_menu .menu3_invert").css("display", "block");
  })

  /*좌석안내 모달창 */
  $(".seat_info_wrap .info").click(function () {
    $(".modal_seat_info_wrap").fadeIn(200);

    $(".modal_seat_info_wrap .close").click(function () {
      $(".modal_seat_info_wrap").fadeOut(200);
    })
  })


  /*좌석안내 모달창 끝 */
  /*구간선택 */

  $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#661e43");
  $(".service_content_wrap1 .service_title1 .section2").css("color", "#fff");
  $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
  $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

  $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
  $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

  $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
  $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");

  $(".service_content_wrap1 .select_seat_wrap1").css("display", "flex");
  $(".service_content_wrap1 .select_seat_wrap2").css("display", "none");



  /*구간선택1 */
  $(".service_content_wrap1 .service_title1 .section1").on('click', function () {
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");
    $(".seat_info").css("z-index", "20");

    $(this).css("background-color", "#661e43");
    $(this).css("color", "#fff");
    $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
    $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

    $(".select_seat_wrap1").css("display", "flex");
    $(".select_seat_wrap2").css("display", "none");
    $(".passenger_info_wrap1").css("display", "block");
    $(".passenger_info_wrap2").css("display", "none");
    $(".seat_info_wrap1").css("display", "block");
    $(".seat_info_wrap2").css("display", "none");
  })
  /*구간선택1 끝*/

  /*구간선택2 */
  $(".service_content_wrap1 .service_title1 .section2").on('click', function () {
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");
    let radio2 = $("#person2_0").parents(".passenger_info2");
    borderChange2(radio2);
    changeRadio2();

    $(this).css("background-color", "#661e43");
    $(this).css("color", "#fff");
    $(".service_title1 .section1").css("background-color", "#EBEBEB");
    $(".service_title1 .section1").css("color", "#444");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "inline-block");
    $(".select_seat_wrap1").css("display", "none");
    $(".select_seat_wrap2").css("display", "flex");
    $(".passenger_info_wrap1").css("display", "none");
    $(".passenger_info_wrap2").css("display", "block");
    $(".seat_info_wrap1").css("display", "none");
    $(".seat_info_wrap2").css("display", "block");
    $("#seat_info1").css("display", "none");
    $("#seat_info2").css("display", "none");
  })

  $(".select_seat_wrap1 .select_comp").on("click", function () {
    optionTotalPrice(personNumber)
    changeRadio2()
    $(".move_map").css("position", "absolute");
    $(".move_map").css("top", "80px");
    $(".seat_info").css("position", "absolute");
    $(".seat_info").css("top", "95px");
    $(".seat_info").css("left", "30px");

    $(".service_title1 .section1").css("background-color", "#EBEBEB");
    $(".service_title1 .section1").css("color", "#444");
    $(".service_title1 .section2").css("background-color", "#661e43");
    $(".service_title1 .section2").css("color", "#fff");

    $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "inline-block");
    $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "none");
    $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "inline-block");
    $(".select_seat_wrap1").css("display", "none");
    $(".select_seat_wrap2").css("display", "flex");
    $(".passenger_info_wrap1").css("display", "none");
    $(".passenger_info_wrap2").css("display", "block");
    $(".seat_info_wrap1").css("display", "none");
    $(".seat_info_wrap2").css("display", "block");
    $("#seat_info1").css("display", "none");
    $("#seat_info2").css("display", "block");
  })
  /*구간선택2 */
  /*구간선택 끝 */

  /*스크롤시 따라다니는 영역 */
  $(window).scroll(function () {
    let x = $(".service_menu_wrap ").offset().left + 465;
    let i = $(".seat_info_view2").offset().left + 30;
    if (x == 30) {
      $(".seat_map").css("top", "0px");
      $(".seat_info_wrap").css("top", "0px");

      if ($(window).scrollTop() > $(".service_title1").offset().top - 115 && $(window).scrollTop() < 1900) {
        $(".move_map").css("position", "fixed");
        $(".move_map").css("top", "239px");
        $(".seat_info").css("position", "fixed");
        $(".seat_info").css("top", "239px");
        $(".seat_info").css("left", i);
        $(".seat_info").css("z-index", "20");
        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");

      } else if ($(window).scrollTop() > 1895) {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "1680px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "5px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "absolute");
        $(".select_comp").css("left", "20%");
      } else {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      }
    } else {
      $(".seat_map").css("top", "0px");
      $(".seat_info_wrap").css("top", "0px");
      if ($(window).scrollTop() > $(".service_title1").offset().top - 115 && $(window).scrollTop() < 1900) {
        $(".move_map").css("position", "fixed");
        $(".move_map").css("top", "239px");
        $(".seat_info").css("position", "fixed");
        $(".seat_info").css("top", "239px");
        $(".seat_info").css("left", x);
        $(".seat_info").css("z-index", "20");
        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      } else if ($(window).scrollTop() > 1895) {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "1680px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "1680px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "absolute");
        $(".select_comp").css("left", "20%");
      }
      else {
        $(".move_map").css("position", "absolute");
        $(".move_map").css("top", "80px");
        $(".seat_info").css("position", "absolute");
        $(".seat_info").css("top", "95px");
        $(".seat_info").css("left", "30px");

        $(".select_comp").css("position", "fixed");
        $(".select_comp").css("bottom", "100px");
        $(".select_comp").css("left", "56%");
      }
    }
  });

  /*스크롤시 미니맵 이동 */
  $(window).scroll(function () {
    let a = $(window).scrollTop();  //스크롤 위치
    let b = $(".location").offset().top; //지도 가리키는 영역 위치

    //좌석선택영역 높이 : 2250px;
    //지도 높이 : 400px
    //지도 가르키는 영역 높이 : 160px

    let x = $(".move_map").height();
    // if($(window).scrollTop() >  $(".seat_map").offset().top+5) {
    //     $(".location").css("height", "160px");
    // } else {
    //     $(".location").css("heigth", "100px");
    // }
    if ($(window).scrollTop() < 1900) {
      if (a / ($(".location").height() * b < 400)) {
        $(".location").css("top", a / (2250 / x));
      }
    }
  })
  /*스크롤시 미니맵 이동 끝*/
  /*스크롤시 따라다니는 영역 끝*/


  /*무료 수하물/기내식 안내*/
  $(".modal_content1").css("display", "block");
  $(".modal_content2").css("display", "none");
  $(".modal_menu_wrap > .menu1").css("background", "#661e43");
  $(".modal_menu_wrap > .menu1").css("color", "#fff");

  $(".modal_menu_wrap > .menu2").css("background", "#fff");
  $(".modal_menu_wrap > .menu2").css("color", "#444");

  $(".modal_menu_wrap .menu2").on("click", function () {
    $(".modal_menu_wrap > .menu1").css("background", "#fff");
    $(".modal_menu_wrap > .menu1").css("color", "#444");
    $(".modal_menu_wrap > .menu2").css("background", "#661e43");
    $(".modal_menu_wrap > .menu2").css("color", "#fff");
    $(".modal_content1").css("display", "none");
    $(".modal_content2").css("display", "block");
  })

  $(".modal_menu_wrap .menu1").on("click", function () {
    $(".modal_menu_wrap > .menu2").css("background", "#fff");
    $(".modal_menu_wrap > .menu2").css("color", "#444");
    $(".modal_menu_wrap > .menu1").css("background", "#661e43");
    $(".modal_menu_wrap > .menu1").css("color", "#fff");
    $(".modal_content1").css("display", "block");
    $(".modal_content2").css("display", "none");
  })

  /*무료 수하물/기내식 안내 끝*/

  /*보험가입 페이지*/
  $(".service_content_wrap3 .service_title1 .section1").css("background-color", "#661e43");
  $("service_content_wrap3 .service_title1 .section1").css("color", "#fff");

  $(".service_content_wrap3 .service_title1 .section2").css("background-color", "#661e43");
  $("service_content_wrap3 .service_title1 .section2").css("color", "#fff");

  $(".service_content_wrap3 .service_title1 .section2").off('click');
  $(".service_content_wrap3 .service_title1 .section1").off('click');

  $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
  $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
  $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
  $(".insurance_menu_wrap .ins_menu2").css("color", "#444");

  $(".insContent1").css("display", "block");
  $(".insContent2").css("display", "none");

  $(".insurance_price .next_butt").on("click", function () {
    $('html, body').scrollTop(0)
    if ($(".ins_check").is(":checked")) {
      $(".insurance_menu_wrap .ins_menu1").css("background-color", "#fff");
      $(".insurance_menu_wrap .ins_menu2").css("background-color", "#661e43");
      $(".insurance_menu_wrap .ins_menu1").css("color", "#444");
      $(".insurance_menu_wrap .ins_menu2").css("color", "#fff");
      $(".insContent1").css("display", "none");
      $(".insContent2").css("display", "block");
      for (let i = 0; i < $(".ins_check").length * 2; i++) {
        if(nameArr[i] != null) {
          str7 += '<div class="nameBox" id="modal_ins_people_' + i + '">'
          str7 += '<input type="checkbox" class="checkbox insCheckBox" id="check_ins_' + i + '"><span>' + nameArr[i] + '</span>'
          str7 += '</div>'
        }
      }  $("#modal_ins_people").html(str7);
    } else {
      $("#modal_agree_wrap").fadeIn();
      $("#modal_agree_wrap").css("display", "flex")
    }
  })
  $("#modal_agree_wrap input").on("click", function () {
    $("#modal_agree_wrap").fadeOut();
  })

  $(".insContent2 .noti").on("click", function () {
    $("#modal_insurance_info_wrap").fadeIn();
    $("#modal_insurance_info_wrap").css("display", "flex")
    $('body').css("overflow", "hidden");

  })
  $("#modal_insurance_info_wrap .title .close").on("click", function () {
    $("#modal_insurance_info_wrap").fadeOut();
    $('body').css("overflow", "scroll");
    str7 = "";
  })


  $(".ins_check").change(function() {
    for (let i = 0; i < personNumber; i++) {
      if ($("#ins_check_" + i).is(':checked') == false) {
        $("#agree_check0").prop("checked", false)
        $("#agree_check1").prop("checked", false)
        $("#agree_check2").prop("checked", false)
        $(".insCheckBox").prop("checked", false)
        $("#agree1").prop("checked", false)
        $("#agree2").prop("checked", false)
        isinsjoin = false;
      }
    }
  })

  $("#check_ins_0").change(function() {
    for (let i = 0; i < personNumber; i++) {
      if ($("#check_ins_0").is(':checked')) {
        $("#modal_ins_people_0").css("background-color", "rgb(0, 173, 239)");
        $("#modal_ins_people_0").css("color", "#fff");
        $(this).parent().css("background-color", "rgb(0, 173, 239)")
        $(this).parent().css("color", "#fff");
        // changeBackground1($("#modal_ins_people_" + i))
      } else {
        $("#modal_ins_people_" + i + "").css("background-color", "#fff");
        $("#modal_ins_people_" + i + "").css("color", "rgb(0, 173, 239)");
        // changeBackground2($("#modal_ins_people_" + i))
      }
    }
  })

  // function changeBackground1(box1) {
  //   box1.css("background-color", "rgb(0, 173, 239)");
  //   box1.css("color", "#fff");
  // }
  // function changeBackground2(box2) {
  //   box2.css("background-color", "#fff");
  //   box2.css("color", "rgb(0, 173, 239)");
  // }

  let sum2 = 0;
  $('.cookies').each(function (i) {

    let num = $('.cookies').eq(i).attr("value");
    if (num % 2 != 0) {
      sum2++;
    }
    $("#info1_" + i).html(sum2);
    $("#info2_" + i).html(sum2);
    $("#bagginfo" + i).html(sum2);
    $("#bagg1_1" + i).html(sum2);
    $("#bagg1_2" + i).html(sum2);
    $("#insinfo" + i).html(sum2);
  })

  $(".insContent2 .ins_before_butt").on("click", function () {
    $(".insurance_menu_wrap .ins_menu1").css("background-color", "#661e43");
    $(".insurance_menu_wrap .ins_menu2").css("background-color", "#fff");
    $(".insurance_menu_wrap .ins_menu1").css("color", "#fff");
    $(".insurance_menu_wrap .ins_menu2").css("color", "#444");
    str7 = "";
    $('html, body').scrollTop(0)
    $(".insContent1").css("display", "block");
    $(".insContent2").css("display", "none");
  })


  /*보험가입 페이지 끝 */

  // 탑승객 수
  let personNumber = 0;
  let cookies = "";
  for( let i = 0 ; i < 1000; i++){
    if(document.getElementById(`${i}`)){
      personNumber = personNumber + 1;
      cookies += i + ",";
    }
  }
  cookies = cookies.slice(0, -1); // /api/reservation
  let indexArr = cookies.split(",")

  // 항공기 번호별 화면구성
  let type1 = $("#type1").val();
  let type2 = $("#type2").val();

  if (type1 == 'B737-800') {
    $(".seat_info_view1").not("#seat_info_view1-1").css("display", "none");
    $("#seat_info_view1-1").css("display", "block");
    $(".seat_view1").not("#seat_view1-1").css("display", "none");
    $("#seat_view1-1").css("display", "block");
    $(".seat_info_view1").remove("#seat_info_view1-2, #seat_info_view1-3");
    $(".seat_view1").remove("#seat_view1-2, #seat_view1-3");
  } else if (type1 == 'B737-900') {
    $(".seat_info_view1").not("#seat_info_view1-2").css("display", "none");
    $("#seat_info_view1-2").css("display", "block");
    $(".seat_view1").not("#seat_view1-2").css("display", "none");
    $("#seat_view1-2").css("display", "block");
    $(".seat_info_view1").remove("#seat_info_view1-1, #seat_info_view1-3");
    $(".seat_view1").remove("#seat_view1-1, #seat_view1-3");
  } else {
    $(".seat_info_view1").not("#seat_info_view1-3").css("display", "none");
    $("#seat_info_view1-3").css("display", "block");
    $(".seat_view1").not("#seat_view1-3").css("display", "none");
    $("#seat_view1-3").css("display", "block");
    $(".seat_info_view1").remove("#seat_info_view1-1, #seat_info_view1-2");
    $(".seat_view1").remove("#seat_view1-1, #seat_view1-2");
  }

  if (type2 == 'B737-800') {
    $(".seat_info_view2").not("#seat_info_view2-1").css("display", "none");
    $("#seat_info_view2-1").css("display", "block");
    $(".seat_view2").not("#seat_view2-1").css("display", "none");
    $("#seat_view2-1").css("display", "block");
    $(".seat_info_view2").remove("#seat_info_view2-2, #seat_info_view2-3");
    $(".seat_view2").remove("#seat_view2-2, #seat_view2-3");
  } else if (type2 == 'B737-900') {
    $(".seat_info_view2").not("#seat_info_view2-2").css("display", "none");
    $("#seat_info_view2-2").css("display", "block");
    $(".seat_view2").not("#seat_view2-2").css("display", "none");
    $("#seat_view2-2").css("display", "block");
    $(".seat_info_view2").remove("#seat_info_view2-1, #seat_info_view2-3");
    $(".seat_view2").remove("#seat_view2-1, #seat_view2-3");
  } else {
    $(".seat_info_view2").not("#seat_info_view2-3").css("display", "none");
    $("#seat_info_view2-3").css("display", "block");
    $(".seat_view2").not("#seat_view2-3").css("display", "none");
    $("#seat_view2-3").css("display", "block");
    $(".seat_info_view2").remove("#seat_info_view2-1, #seat_info_view2-2");
    $(".seat_view2").remove("#seat_view2-1, #seat_view2-2");
  }


  // multiway


  let href = $(location).attr('href').split('/');

  if (href[5] == 'oneway') {
    $(".service_title1 .section2").css("display", "none")
    $("#passenger_info_3 .section2").css("display", "none")
    $("#select_baggage_wrap .baggage_2").css("display", "none")
    $(".select_bagg_price2").css("display", "none");
    $(".passenger_info_wrap2").css("display", "none");
    $(".seat_info_wrap2").css("display", "none");
    $(".select_seat_wrap2").css("display", "none");
    $("#passenger_info_3 .passenger_info").css("height", "260px")
    $("#select_baggage_wrap .baggage_wrap").css("height", "260px")

    $(".select_seat_wrap1 .select_comp").on("click", function () {
      optionTotalPrice(personNumber)
      $(".service_content_wrap1").css("display", "none");
      $(".service_content_wrap2").css("display", "block");
      $(".service_content_wrap3").css("display", "none");
      $(".service_menu .menu2").css("color", "white");
      $(".service_menu .menu2").css("background-color", "#661e43");

      $(".service_menu .menu1").css("color", "#444");
      $(".service_menu .menu1").css("background-color", "#EBEBEB");
      $(".service_menu .menu3").css("color", "#444");
      $(".service_menu .menu3").css("background-color", "#EBEBEB");

      $(".service_menu .menu1img").css("display", "block");
      $(".service_menu .menu1_invert").css("display", "none");

      $(".service_menu .menu2img").css("display", "none");
      $(".service_menu .menu2_invert").css("display", "block");

      $(".service_menu .menu3img").css("display", "block");
      $(".service_menu .menu3_invert").css("display", "none");
    })

    $(".service_menu .menu1").on("click", function() {
      $(".service_content_wrap1 .section1").css("background-color", "#661e43");
      $(".service_content_wrap1 .section1").css("color", "#fff");
      $(".service_content_wrap1 .service_title1 .section2").css("background-color", "#EBEBEB");
      $(".service_content_wrap1 .service_title1 .section2").css("color", "#444");

      $(".service_content_wrap1 .service_title1 .section2 .checkBox_1").css("display", "none");
      $(".service_content_wrap1 .service_title1 .section2 .checkBox_2").css("display", "inline-block");
      $(".service_content_wrap1 .service_title1 .section1 .checkBox_1").css("display", "inline-block");
      $(".service_content_wrap1 .service_title1 .section1 .checkBox_2").css("display", "none");

      $(".select_seat_wrap1").css("display", "flex");
      $(".select_seat_wrap2").css("display", "none");
      $(".passenger_info_wrap1").css("display", "block");
      $(".passenger_info_wrap2").css("display", "none");
      $(".seat_info_wrap1").css("display", "block");
      $(".seat_info_wrap2").css("display", "none");

    })



  } else if (href[5] == 'multiway') {

  } else if (href[5] == 'twoway') {

  }

  firstTotal();
  function firstTotal() {
    let firstFlightPrice = 0;
    $(".flight_price").each(function() {
      firstFlightPrice += Number($(this).val());
    })
    $("#flightPrice").html(firstFlightPrice.toLocaleString("ko-KR"));
    // 세금
    let firstFlightTax = 0;
    if(href[5] == 'oneway') {
      firstFlightTax = Number(4000*personNumber/2);
    } else {
      firstFlightTax = Number(8000*personNumber/2);
    }
    $("#flightTax").html(firstFlightTax.toLocaleString("ko-KR"));
    $("#flight_tax").html($("#flightTax").html());

    // 유류할증료
    let firstFlightCharge = 0;
    if(href[5] == 'oneway') {
      firstFlightCharge = Number(5000*personNumber/2);
    } else {
      firstFlightCharge = Number(10000*personNumber/2);
    }
    $("#flightCharge").html(firstFlightCharge.toLocaleString("ko-KR"));
    let firstTotal = + firstFlightPrice + firstFlightTax + firstFlightCharge
    $("#modal_tot_price").html(firstTotal.toLocaleString("ko-KR"));
  }

  let str7 = ""; // 모달 보험 가입자 선택

  $(".seat_P1, .seat_P2").css("visibility", "hidden");

  $(".passenger_info_wrap1 p.select_seat_num1 span.close").on('click', function () {
    radio = $(this).parents(".passenger_info1");
    let i = radio.val();
    $('input:checkbox[value="' + i + '"]').prop("checked", false);
    radio.find(".seat_num1").val("");
    radio.find(".price1").text("");
    radio2.find(".hid_price1").html("");
    radio.find(".seat_P1").css("visibility", "hidden");
    radio.find(".checkPerson").val("");
    radio.val("");

  });
  $(".passenger_info_wrap2 p.select_seat_num2 span.close").on('click', function () {
    radio2 = $(this).parents(".passenger_info2");
    let i = radio2.val();
    $('input:checkbox[value="' + i + '"]').prop("checked", false);
    radio2.find(".seat_num2").val("");
    radio2.find(".price2").text("");
    radio2.find(".hid_price2").html("");
    radio2.find(".seat_P2").css("visibility", "hidden");
    radio2.find(".checkPerson2").val("");
    radio2.val("");
  });

  let price1 = '9000';let price2 = '5000';let price3 = '9000';let price4 = '7000';let price5 = '3000';
  let price6 = '1000';let pricePlus = "10000";let priceBiz = '15000'

  $(".select_seat_wrap .box1").siblings().text(price1);
  $(".select_seat_wrap .box2").siblings().text(price2);
  $(".select_seat_wrap .box3").siblings().text(price3);
  $(".select_seat_wrap .box4").siblings().text(price4);
  $(".select_seat_wrap .box5").siblings().text(price5);
  $(".select_seat_wrap .box6").siblings().text(price6);
  $(".select_seat_wrap .box7").siblings().text("");
  $(".select_seat_wrap .boxPlus").siblings().text(pricePlus);
  $(".select_seat_wrap .boxBiz").siblings().text(priceBiz);


  let radio;
  let radio2;

  $(".checkPerson").change(function() {
    if($(".checkPerson").is(":checked")) {
      radio = $(this).parents(".passenger_info1");
      borderChange(radio)
    }
  })

  $(".checkPerson2").change(function() {
    if($(".checkPerson2").is(":checked")) {
      radio2 = $(this).parents(".passenger_info2");
      borderChange2(radio2)
    }
  })

  function borderChange(radio) {
    let c = radio.find(".select_seat_num");
    $(".select_seat_num").not(c).css("border", "none");
    c.css("border", "3px solid #661e43");
  }

  function borderChange2(radio2) {
    let c = radio2.find(".select_seat_num2");
    $(".select_seat_num2").not(c).css("border", "none");
    c.css("border", "3px solid #661e43");
  }

  if ($(".checkPerson").is(":checked") == false) {
    $("#person_0").prop("checked", true)
    radio = $("#person_0").parents(".passenger_info1");
    borderChange(radio)
  }

  if ($(".checkPerson2").is(":checked") == false ) {
    $("#person2_0").prop("checked", true)
    radio2 = $("#person2_0").parents(".passenger_info2");
    borderChange2(radio2)
  }

  if($(".checkPerson").val().length != 0) {
    $("input:radio[name ='selectPerson']:input[value='']").prop("checked", true);
  }

  if($(".checkPerson2").val().length != 0) {
    $("input:radio[name ='selectPerson2']:input[value='']").prop("checked", true);
  }

  function changeRadio() {
    for(let i = 0; i < $(".checkPerson").length * 2; i++) {
      if (i % 2 == 0) {
        if ($("#person_" + i + "").val() == 'on' || $("#person_" + i + "").val().length == 0) {
          $("#person_" + i + "").prop("checked", true);
          radio = $("#person_" + i + "").parents(".passenger_info1");
          borderChange(radio);
          break;
        }
      }
    }
  }

  function changeRadio2() {
    for(let i = 1; i < $(".checkPerson2").length * 2; i++) {
      if (i % 2 != 0) {
        if ($("#person2_" + i + "").val() == 'on' || $("#person2_" + i + "").val().length == 0) {
          $("#person2_" + i + "").prop("checked", true);
          radio2 = $("#person2_" + i + "").parents(".passenger_info2");
          borderChange2(radio2);
          break;
        }
      }
    }
  }
  $(".SSC").on("click", function() {
    let num = $(this).val();
    let price = $(this).next().text();
    if (radio.val().length == 0 && $(this).hasClass('prop') == false) { // radio값이 없고, 체크박스가 미체크 시
      $(this).prop("checked", true);
      $(this).addClass('prop'); // 체크값 구별하기 위한 클래스 추가
      radio.find(".seat_num1").val(num);
      radio.find(".price").html(price);
      radio.find(".hid_price1").html(price);
      radio.find(".price").html(Number(price).toLocaleString('ko-KR'));
      radio.find(".seat_P1").css("visibility", "visible");
      radio.val(num);
      radio.find(".checkPerson").val(num);
      radio.addClass('check');
      radio.prop("checked", false);
      changeRadio(radio);
    }
    else if(radio.val().length != 0 && $(this).hasClass('prop') == false) { // radio 에 값이 있고 체크박스가 미체크 일 시
      $(this).prop("checked", false); // 여러개 중복 방지.
      $(this).click(false);
    }
    else if ((radio.val().length == 0 && $(this).hasClass('prop')) || (radio.val().length != 0 && $(this).hasClass('prop'))){ // 이미 체크되어 있을 시 체크된 체크박스 체크해제, 라디오 초기화
      let thisVal = $(this).val();
      $(this).removeClass('prop')
      let a = $("input:radio[name ='selectPerson']:input[value='" + thisVal + "']");
      if (a.val() == thisVal) {
        a.prop("checked", true);
        a.val("");
        radio = a.parents(".passenger_info1");
        radio.find(".seat_num1").val("");
        radio.find(".price").html("");
        radio.find(".hid_price1").html("");
        radio.find(".seat_P1").css("visibility", "hidden")
        radio.val("");
        borderChange(radio);
      }
    }
    else if(radio.val() == $(this).val() && $(this).hasClass('prop')) { // radio의 값이 체크박스의 밸류값과 일치 시 체크박스 체크 해제
      $(this).attr("disabled", false);
      $(this).removeClass('prop')
      $(this).prop("checked", false);
      radio.find(".seat_num1").val("");
      radio.find(".price").html("");
      radio.find(".hid_price1").html("");
      radio.find(".seat_P1").css("visibility", "hidden")
      radio.val("");
      radio.find(".checkPerson").val("");
      radio.removeClass('check');
      borderChange(radio);
    }
    else if(radio.val() != $(this).val() && $(this).hasClass('prop')) { // radio 값과 체크박스의 값이 같지 않고, 체크박스가 선택되어있을 때
      let thisVal2 = $(this).val();
      let a = $("input:radio[name ='selectPerson']:input[value='" + thisVal2 + "']");
      if (a.val() == $(this).val()) {
        $(this).attr("disabled", false);
        $(this).removeClass('prop')
        $(this).prop("checked", false);
        radio = a.find('.passenger_info1');
        radio.find(".seat_num1").val("");
        radio.find(".price").html("");
        radio.find(".hid_price1").html("");
        radio.find(".checkPerson").val("");
        radio.find(".seat_P1").css("visibility", "hidden")
        radio.val("");
        radio.removeClass('check');
      }
    }
  })



  $(".SSC2").on("click", function() {
    let num2 = $(this).val();
    let price2 = $(this).next().text();
    if (radio2.val().length == 0 && $(this).hasClass('prop') == false) { // radio값이 없고, 체크박스가 미체크 시
      $(this).prop("checked", true);
      $(this).addClass('prop'); // 체크값 구별하기 위한 클래스 추가
      radio2.find(".seat_num2").val(num2);
      radio2.find(".price2").html(Number(price2).toLocaleString('ko-KR'));
      radio2.find(".hid_price2").html(price2);
      radio2.find(".seat_P2").css("visibility", "visible")
      radio2.val(num2);
      radio2.find(".checkPerson2").val(num2);
      radio2.addClass('check');
      radio2.prop("checked", false);
      changeRadio2(radio2);
    }
    else if(radio2.val().length != 0 && $(this).hasClass('prop') == false) { // radio 에 값이 있고 체크박스가 미체크 일 시
      $(this).prop("checked", false); // 여러개 중복 방지.
      $(this).click(false);
    }
    else if ((radio2.val().length == 0 && $(this).hasClass('prop')) || (radio2.val().length != 0 && $(this).hasClass('prop'))){ // 이미 체크되어 있을 시 체크된 체크박스 체크해제, 라디오 초기화
      let thisVal = $(this).val();
      $(this).removeClass('prop')
      let a2 = $("input:radio[name ='selectPerson2']:input[value='" + thisVal + "']");
      if (a2.val() == thisVal) {
        a2.prop("checked", true);
        a2.val("");
        radio2 = a2.parents(".passenger_info2");
        radio2.find(".seat_num2").val("");
        radio2.find(".price2").html("");
        radio2.find(".hid_price2").html("");
        radio2.find(".seat_P2").css("visibility", "hidden")
        radio2.val("");
        borderChange2(radio2);
      }
    }
    else if(radio2.val() == $(this).val() && $(this).hasClass('prop')) { // radio의 값이 체크박스의 밸류값과 일치 시 체크박스 체크 해제
      $(this).attr("disabled", false);
      $(this).removeClass('prop');
      $(this).prop("checked", false);
      radio2.find(".seat_num2").val("");
      radio2.find(".price2").html("");
      radio2.find(".hid_price2").html("");
      radio2.find(".seat_P2").css("visibility", "hidden")
      radio2.val("");
      radio2.find(".checkPerson2").val("");
      radio2.removeClass('check');
      borderChange2(radio2);
    }
    else if(radio2.val() != $(this).val() && $(this).hasClass('prop')) { // radio 값과 체크박스의 값이 같지 않고, 체크박스가 선택되어있을 때
      let thisVal = $(this).val();
      let a2 = $("input:radio[name ='selectPerson2']:input[value='" + thisVal + "']");
      if (a2.val() == $(this).val()) {
        $(this).attr("disabled", false);
        $(this).removeClass('prop')
        $(this).prop("checked", false);
        radio2 = a2.find('.passenger_info2');
        radio2.find(".seat_num2").val("");
        radio2.find(".price").html("");
        radio2.find(".hid_price2").html("");
        radio2.find(".checkPerson2").val("");
        radio2.find(".seat_P2").css("visibility", "hidden")
        radio2.val("");
        radio2.removeClass('check');
      }
    }
  })

  /*좌석 선택 끝 */

  /*수하물 선택 구간 */

  $(".bot_bagg_price1 .cur").css("display", "none");
  $(".bot_bagg_price1 .price").text("");
  $(".bot_bagg_price1 .close").css("display", "none");

  $(".bot_bagg_price2 .cur").css("display", "none");
  $(".bot_bagg_price2 .price").text("");
  $(".bot_bagg_price2 .close").css("display", "none");
  $(".seat_info_wrap .seat_box .cur, .seat_box .seat_name").css("display", "block");



  // 수하물 선택 구간1
  function bagg_borderChange(priceBox) {
    $(".select_bagg_price").not(priceBox).css("border", "none")
    priceBox.css("border", "3px solid #661e43");
  }

  for(let i = 0; i < $(".selectBagg1").length * 2; i++) {
    $('#bagg1_'+i +'').change(function () {
      let s = i;
      let a = $("#select_bagg_price1_" + s);
      bagg_borderChange(a)
      $('#select_bagg1_' + i + '').text($('#bagg1_'+i).val());
      $("#cur1_" + i).css("display", "inline-block");
      $("#bagg_price1_" + i).text("");
      $("#hid_bagg_price1_" + i).text("")
      $("#bagg_close1_" + i).css("display", "block");
      if ($('#bagg1_'+i +'').val() == "5KG(+KRW 8,000)") {
        $("#bagg_price1_" + i).text("8,000");
        $("#hid_bagg_price1_" + i).text("8000")
      } else if ($('#bagg1_'+i +'').val() == "10KG(+KRW 16,000)") {
        $("#bagg_price1_" + i).text("16,000");
        $("#hid_bagg_price1_" + i).text("16000")
      } else if ($('#bagg1_'+i +'').val() == "15KG(+KRW 24,000)") {
        $("#bagg_price1_" + i).text("24,000");
        $("#hid_bagg_price1_" + i).text("24000")
      } else if ($('#bagg1_'+i +'').val() == "20KG(+KRW 32,000)") {
        $("#bagg_price1_" + i).text("32,000");
        $("#hid_bagg_price1_" + i).text("32000")
      } else {
        $("#cur1_" + i).css("display", "none");
        $("#bagg_price1_" + i).text("");
        $("#hid_bagg_price1_" + i).text("");
        $("#bagg_close1_" + i).css("display", "none");
      }
    });
    $("#bagg_close1_" + i).on("click", function() {
      $("#cur1_" + i).css("display", "none");
      $("#bagg_price1_" + i).text("");
      $("#hid_bagg_price1_" + i).text("")
      $('#select_bagg1_' + i + '').text("");
      $("#bagg_close1_" + i).css("display", "none");
      $('#bagg1_'+i).val('').prop("selected", true);
    })
  }

  // 수하물 선택 구간2

  for(let i2 = 0; i2 < $(".selectBagg2").length * 2; i2++) {
    $('#bagg2_'+i2 +'').change(function () {
      let s = i2;
      let a = $("#select_bagg_price2_" + s);
      bagg_borderChange(a)
      $('#select_bagg2_' + i2 + '').text($('#bagg2_'+i2).val());
      $("#cur2_" + i2).css("display", "inline-block");
      $("#bagg_price2_" + i2).text("");
      $("#hid_bagg_price2_" + i2).text("")
      $("#bagg_close2_" + i2).css("display", "block");
      if ($('#bagg2_'+i2 +'').val() == "5KG(+KRW 8,000)") {
        $("#bagg_price2_" + i2).text("8,000");
        $("#hid_bagg_price2_" + i2).text("8000")
      } else if ($('#bagg2_'+i2 +'').val() == "10KG(+KRW 16,000)") {
        $("#bagg_price2_" + i2).text("16,000");
        $("#hid_bagg_price2_" + i2).text("16000")
      } else if ($('#bagg2_'+i2 +'').val() == "15KG(+KRW 24,000)") {
        $("#bagg_price2_" + i2).text("24,000");
        $("#hid_bagg_price2_" + i2).text("24000")
      } else if ($('#bagg2_'+i2 +'').val() == "20KG(+KRW 32,000)") {
        $("#bagg_price2_" + i2).text("32,000");
        $("#hid_bagg_price2_" + i2).text("32000")
      } else {
        $("#cur2_" + i2).css("display", "none");
        $("#bagg_price2_" + i2).text("");
        $("#hid_bagg_price2_" + i2).text("")
        $("#bagg_close2_" + i2).css("display", "none");
      }
    });
    $("#bagg_close2_" + i2).on("click", function() {
      $("#cur2_" + i2).css("display", "none");
      $("#bagg_price2_" + i2).text("");
      $('#select_bagg2_' + i2 + '').text("");
      $("#hid_bagg_price2_" + i2).text("")
      $("#bagg_close2_" + i2).css("display", "none");
      $('#bagg2_'+i2).val('').prop("selected", true);
    })
  }


  $("#bagg_select_comp").on("click", function () {
    optionTotalPrice(personNumber)
    $("#modal_agree_wrap").hide();
    $(".service_content_wrap1").css("display", "none");
    $(".service_content_wrap2").css("display", "none");
    $(".service_content_wrap3").css("display", "block");
    $(".service_menu .menu3").css("color", "white");
    $(".service_menu .menu3").css("background-color", "#661e43");
    $("table .detail").css("display", "none");

    $(".service_menu .menu1").css("color", "#444");
    $(".service_menu .menu1").css("background-color", "#EBEBEB");
    $(".service_menu .menu2").css("color", "#444");
    $(".service_menu .menu2").css("background-color", "#EBEBEB");

    $(".service_menu .menu1img").css("display", "block");
    $(".service_menu .menu1_invert").css("display", "none");

    $(".service_menu .menu2img").css("display", "block");
    $(".service_menu .menu2_invert").css("display", "none");

    $(".service_menu .menu3img").css("display", "none");
    $(".service_menu .menu3_invert").css("display", "block");
  })


  /*수하물 선택 구간 끝 */


  /*보험 선택 구간 */

  // 처음 페이지 로드 시 총보험료 0원 세팅, 셀렉트박스 비활성화화
  $(".insurance_price .int_tot_price").text("0");
  $('.select_product').prop('disabled', true);

  let priceArr = [];
  let nameArr = [personNumber];
  let ins_totalPrice = Number(0);
  let sum = 0;
  let ins_join_num = 0;
  let reTotal1 = []
  let reTotal2 = []
  for (let i = 0; i < personNumber; i++) {
    nameArr[i] = $("#name" + i).text();
    priceArr[i] = 0;
    reTotal1[i] = $("#re_total1").val();
    reTotal2[i] = $("#re_total2").val();

    if($("#ins_check_" + i).is(":checked") == true) {
      nameArr[i] = $("#name" + i).text();
    } else {
      delete nameArr[i];
      delete priceArr[i];
    }

    $("#ins_check_" + i).change(function() {
      // 가입자명 체크박스 체크 시 보험종료 선택 가능
      if ($("#ins_check_" + i).is(":checked") == true) {
        $("#select_product_" + i).prop('disabled', false);
        priceArr[i] = Number($("#select_product_" + i).val());
        ins_totalPrice += priceArr[i]
        nameArr[i] = $("#name" + i).text();
        ins_join_num += 1;
        $("#ins_join_num").text(ins_join_num);
        $(".insurance_price .int_tot_price").text(ins_totalPrice.toLocaleString('ko-KR'));
      } else if ($("#ins_check_" + i).is(":checked") == false) {
        $("#select_product_" + i).prop('disabled', true);
        ins_totalPrice -= priceArr[i]
        delete nameArr[i];
        delete priceArr[i]
        ins_join_num -= 1;
        $("#ins_join_num").text(ins_join_num);
        $(".insurance_price .int_tot_price").text(ins_totalPrice.toLocaleString('ko-KR'));
      }
    })
    $("#select_product_" + i).change(function() {
      if ($("#select_product_" + i).val() == "1970") {
        ins_totalPrice -= priceArr[i];
        priceArr[i] = Number(1970);
        ins_totalPrice += priceArr[i];
      } else if ($("#select_product_" + i).val() == "3660") {
        ins_totalPrice -= priceArr[i];
        priceArr[i] = Number(3660);
        ins_totalPrice += priceArr[i];
      } else if ($("#select_product_" + i).val() == "7040") {
        ins_totalPrice -= priceArr[i];
        priceArr[i] = Number(7040);
        ins_totalPrice += priceArr[i];
      }
      $(".insurance_price .int_tot_price").text(ins_totalPrice.toLocaleString('ko-KR'));
      $("#ins_join_num").text(ins_join_num);
    })
  }
  //
  let seatNumArr1 = [personNumber];
  let seatNumArr2 = [personNumber];
  let seatTypeArr1 = [personNumber];
  let seatTypeArr2 = [personNumber];
  let seatPriceArr1 = [personNumber];
  let seatPriceArr2 = [personNumber];
  let baggArr1 = [personNumber];
  let baggArr2 = [personNumber];
  let baggPriceArr1 = [personNumber];
  let baggPriceArr2 = [personNumber];
  let insArr = [personNumber];
  let insPriceArr = [personNumber];
  let total_price = 0;
  let seat_price = 0;
  let bagg_price = 0;
  let finalTotalPrice = 0;
  let baggIndex1 = [personNumber];
  let baggIndex2 = [personNumber];
  let insIndex = [personNumber];
  let jourPrice1 = [personNumber];
  let jourPrice2 = [personNumber];
  let flightPrice = 0;
  let flightArr = [personNumber];

  /*부가서비스 신청내역*/
  function optionTotalPrice(personNumber) {
    total_price = 0;
    seat_price = 0;
    bagg_price = 0;
    finalTotalPrice = 0;
    flightPrice = 0;
    /* 좌석 */
    for (let i = 0; i < personNumber; i++) {
      seatNumArr1[i] = "";seatNumArr2[i] = "";seatPriceArr1[i] = 0;seatPriceArr2[i] = 0;baggArr1[i] = "";baggArr2[i] = "";
      baggPriceArr1[i] = 0;baggPriceArr2[i] = 0;insArr[i] = "";insPriceArr[i] = 0;seatTypeArr1[i] = "";seatTypeArr2[i] = "";
      flightArr[i] = "";jourPrice1[i] = 0;jourPrice2[i] = 0;


      seatNumArr1[i] = $("#seat_num1_" + i).val();
      seatNumArr2[i] = $("#seat_num2_" + i).val();
      seatPriceArr1[i] = Number($("#hid_price1_" + i).text());
      seatPriceArr2[i] = Number($("#hid_price2_" + i).text());
      baggArr1[i] = $("#select_bagg1_" + i).text();
      baggArr2[i] = $("#select_bagg2_" + i).text();
      baggPriceArr1[i] = Number($("#hid_bagg_price1_" + i).text());
      baggPriceArr2[i] = Number($("#hid_bagg_price2_" + i).text());

      if ($("#ins_check_" + i).is(":checked") && $("#agree_check0, #agree_check1, #agree_check2").is(":checked")) {
        insArr[i] = $("#select_product_" + i + " option:selected").text();
        insPriceArr[i] = Number($("#select_product_"+i).val());
      } else {
        delete insArr[i];
        delete insPriceArr[i];
      }
      if (seatPriceArr1[i] == price1) {
        seatTypeArr1[i] = '지니 스트레치'
      } else if(seatPriceArr1[i] == price2) {
        seatTypeArr1[i] = '지니 패스트'
      } else if(seatPriceArr1[i] == price3) {
        seatTypeArr1[i] = '비상구열'
      } else if(seatPriceArr1[i] == price4) {
        seatTypeArr1[i] = '비상구열(등받이 고정)'
      } else if(seatPriceArr1[i] == price5) {
        seatTypeArr1[i] = '지니 스탠다드 A'
      } else if(seatPriceArr1[i] == price6) {
        seatTypeArr1[i] = '지니 스탠다드 B'
      } else if(seatPriceArr1[i] == pricePlus) {
        seatTypeArr1[i] = '지니 플러스'
      } else if(seatPriceArr1[i] == priceBiz) {
        seatTypeArr1[i] = '지니 비즈'
      } else if(isNaN(seatPriceArr1[i])){
        delete seatTypeArr1[i]
      }

      if (seatPriceArr2[i] == price1) {
        seatTypeArr2[i] = '지니 스트레치'
      } else if(seatPriceArr2[i] == price2) {
        seatTypeArr2[i] = '지니 패스트'
      } else if(seatPriceArr2[i] == price3) {
        seatTypeArr2[i] = '비상구열'
      } else if(seatPriceArr2[i] == price4) {
        seatTypeArr2[i] = '비상구열(등받이 고정)'
      } else if(seatPriceArr2[i] == price5) {
        seatTypeArr2[i] = '지니 스탠다드 A'
      } else if(seatPriceArr2[i] == price6) {
        seatTypeArr2[i] = '지니 스탠다드 B'
      } else if(seatPriceArr2[i] == pricePlus) {
        seatTypeArr2[i] = '지니 플러스'
      } else if(seatPriceArr2[i] == priceBiz) {
        seatTypeArr2[i] = '지니 비즈'
      } else if(isNaN(seatPriceArr2[i])){
        delete seatTypeArr2[i]
      }
    }
    for (let i = 0; i < personNumber; i++) {
      if (i % 2 == 0) {
        jourPrice1[i] += beforeTotArr[i];
      } else {
        jourPrice2[i] += beforeTotArr[i];
      }
    }
    // 부가서비스 옵션 총 금액 계산
    for (let i = 0; i < personNumber; i++) {
      if(seatNumArr1[i] != null && typeof seatNumArr1[i] != "undefined") {
        total_price += seatPriceArr1[i];
        seat_price += seatPriceArr1[i];
        jourPrice1[i] += seatPriceArr1[i];
      }
      if (seatNumArr2 != null && typeof seatNumArr2[i] != "undefined") {
        total_price += seatPriceArr2[i];
        seat_price += seatPriceArr2[i];
        jourPrice2[i] += seatPriceArr2[i];
      }
      if(baggArr1[i] != null && typeof baggArr1[i] != "undefined") {
        total_price += baggPriceArr1[i];
        bagg_price += baggPriceArr1[i];
        jourPrice1[i] += baggPriceArr1[i];
      }
      if (baggArr2[i] != null && typeof baggArr2[i] != "undefined") {
        total_price += baggPriceArr2[i];
        bagg_price += baggPriceArr2[i];
          jourPrice2[i] += baggPriceArr2[i-1];
      }
    }
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
      total_price += ins_totalPrice;
    }


    for (let i = 0; i < personNumber; i++) {
      insIndex[i] = 0;
      baggIndex1[i] = 0;
      baggIndex2[i] = 0;
      if (baggArr1[i] == '5KG(+KRW 8,000)') {baggIndex1[i] = Number(11);}
      else if(baggArr1[i] == '10KG(+KRW 16,000)') {baggIndex1[i] = Number(18);}
      else if(baggArr1[i] == '15KG(+KRW 24,000)') {baggIndex1[i] = Number(19);}
      else if(baggArr1[i] == '20KG(+KRW 32,000)') {baggIndex1[i] = Number(20);}
      else {delete baggIndex1[i]}
      if (baggArr2[i] == '5KG(+KRW 8,000)') {baggIndex2[i] = Number(11);}
      else if(baggArr2[i] == '10KG(+KRW 16,000)') {baggIndex2[i] = Number(18);}
      else if(baggArr2[i] == '15KG(+KRW 24,000)') {baggIndex2[i] = Number(19);}
      else if(baggArr2[i] == '20KG(+KRW 32,000)') {baggIndex2[i] = Number(20);}
      else {delete baggIndex2[i]}
      if (insArr[i] == '실속형') {insIndex[i] = Number(1); jourPrice1[i] += Number(1970);jourPrice2[i] += Number(1970) }
      else if(insArr[i] == '표준형') {insIndex[i] = Number(2); jourPrice1[i] += Number(3660);jourPrice2[i] += Number(3660) }
      else if(insArr[i] == '고급형') {insIndex[i] = Number(3); jourPrice1[i] += Number(7040);jourPrice2[i] += Number(7040) }
      else {delete insIndex[i]; jourPrice1[i] += Number(0); jourPrice2[i] += Number(0);}
    }



    // 항공 운임금액
    $(".flight_price").each(function() {
      flightPrice += Number($(this).val());
    })

    $("#flightPrice").html(flightPrice.toLocaleString("ko-KR"));
    $("#flight_price").html($("#flightPrice").html());
    // 세금
    let flightTax = 0;
    if (href[5] == 'oneway') {
      flightTax = Number(4000*personNumber/2);
    } else {
      flightTax = Number(8000*personNumber/2);
    }
    $("#flightTax").html(flightTax.toLocaleString("ko-KR"));
    // 유류할증료
    let flightCharge = 0;
    if (href[5] == 'oneway') {
      flightCharge = Number(5000*personNumber/2);
    } else {
      flightCharge = Number(10000*personNumber/2);

    }
    $("#flightCharge").html(flightCharge.toLocaleString("ko-KR"));
    $("#flight_charge").html($("#flightCharge").html());

    finalTotalPrice = total_price + flightPrice + flightTax + flightCharge
    $("#modal_tot_price").html(finalTotalPrice.toLocaleString("ko-KR"));

    if (seat_price > 0) {
      $("#option_price_list #option_seat").html("사전좌석지정")
      $("#option_price_list #option_seat_price").html(seat_price.toLocaleString('ko-KR'))
    }  else {
      $("#option_price_list #option_seat").remove();
      $("#option_price_list #option_seat").parent().remove();
      $("#option_price_list #option_seat_price").remove();
    }
    if (bagg_price > 0) {
      $("#option_price_list #option_bagg").html("초과수하물")
      $("#option_price_list #option_bagg_price").html(bagg_price.toLocaleString('ko-KR'))
    }  else {
      $("#option_price_list #option_bagg").remove();
      $("#option_price_list #option_bagg").parent().remove();
      $("#option_price_list #option_bagg_price").remove();
    }
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
        $("#option_price_list #option_ins").html("보험료")
        $("#option_price_list #option_ins_price").html(ins_totalPrice.toLocaleString('ko-KR'))
      } else {
        $("#option_price_list #option_ins").remove();
      $("#option_price_list #option_ins").parent().remove();
        $("#option_price_list #option_ins_price").remove();
      }
  }



  $("#optional_ok").click( () => {
    if(href[5] == 'oneway') {
      for (let i = 0; i < personNumber; i++) {
        if(i % 2 == 0) {
          onewayData1(i);
        } else {
          onewayData2(i);
        }
      }
      location.href="/pages/payment/oneway"
    } else if(href[5] == 'multiway') {
      for (let i = 0; i < personNumber; i++) {
        if(i % 2 == 0) {
          multiwayData1(i)
        } else {
          multiwayData2(i)
        }
      }
      location.href="/pages/payment/multiway"
    } else if(href[5] == 'twoway') {
      for (let i = 0; i < personNumber; i++) {
        if(i % 2 == 0) {
          towayData1(i)
        } else {
          towayData2(i)
        }
      }
      location.href="/pages/payment/twoway"
    }
  })


  let beforeTotArr = [personNumber];
  let totBagicPrice1 = 0;
  let totBagicPrice2 = 0;

  for(let i = 0; i < personNumber; i++) {
    let idx = indexArr[i];
    if (i % 2 == 0) {
      getTotal(i, idx);
    }
  }

  function getTotal(i, idx){
    $.get("/api/reservation/"+idx, function (response) {
      beforeTotArr[i] = response.data.reTotal;
      if(i % 2 == 0) {
        totBagicPrice1 += Number(response.data.reSchBasicPrice);
      } else {
        totBagicPrice2 += Number(response.data.reSchBasicPrice);
      }
    })
  }


  // 예약된 좌석 불러오기

  let airplane1 = "";
  let airplane2 = "";
  let startdate1;
  let startdate2;

  for(let i = 0; i < 2; i++) {
    let idx = indexArr[i];
    getInfo(i, idx);
  }

  function getInfo(i, idx){
    $.get("/api/reservation/"+idx, function (response) {
      if(i % 2 == 0) {
        airplane1 = response.data.reSchName;
        startdate1 = response.data.reSchStartTime;
        findSeat1(response.data.reSchName, response.data.reSchStartTime)
      } else {
        airplane2 = response.data.reSchName;
        startdate2 = response.data.reSchStartTime;
        findSeat2(response.data.reSchName, response.data.reSchStartTime)
      }
    })
  }


  // 조건으로 찾기
  let Data1;
  let seatArr1 = [];
  function findSeat1(airplane, startdate1) {
    Data1 = {
      data : {
        reSchName : airplane,
        reSchStartTime : startdate1
      }
    }
    $.post({
      url: "/api/reservation/list/seat",
      data : JSON.stringify(Data1),
      dateType: 'text',
      contentType : "application/json",
      success : function(response){
        for(let i = 0; i < response.data.length; i++) {
          seatArr1[i] = "";
          seatArr1[i] = response.data[i].reSeatDetail;
        }
        seat1();
      }
    });
  }

  let Data2;
  let seatArr2 = [];
  function findSeat2(airplane, startdate2) {
    Data2 = {
      data : {
        reSchName : airplane,
        reSchStartTime : startdate2
      }
    }
    $.post({
      url: "/api/reservation/list/seat",
      data : JSON.stringify(Data2),
      dateType: 'text',
      contentType : "application/json",
      success : function(response){
        for(let i = 0; i < response.data.length; i++) {
          seatArr2[i] = "";
          seatArr2[i] = response.data[i].reSeatDetail;
        }
        seat2();
      }
    });
  }


  // 구간 1 마감 좌석
  function seat1() {
    $(".SSC").each(function(){
      for (let i = 0; i < seatArr1.length; i++) {
        if ($(this).attr("id") == seatArr1[i]) {
          let label = $(this).next();
          if (label.hasClass("box1")) {
            label.removeClass('box1')
            label.addClass("box7");
          } else if (label.hasClass("box2")){
            label.removeClass('box2')
            label.addClass("box7");
          } else if (label.hasClass("box3")){
            label.removeClass('box3')
            label.addClass("box7");
          } else if (label.hasClass("box4")){
            label.removeClass('box4')
            label.addClass("box7");
          } else if (label.hasClass("box5")){
            label.removeClass('box5')
            label.addClass("box7");
          } else if (label.hasClass("box6")){
            label.removeClass('box6')
            label.addClass("box7");
          } else if (label.hasClass("boxBiz")){
            label.removeClass('boxBiz')
            label.addClass("box9");
          } else if (label.hasClass("boxPlus")){
            label.removeClass('boxPlus')
            label.addClass("box8");
          }
        }
      }
    })
  }
  // 구간 2 마감 좌석
  function seat2() {
    for (let i = 0; i < seatArr2.length; i++) {
      if (seatArr2[i] != null) {}
      seatArr2[i] = "2_" + String(seatArr1[i]);
    }
    $(".SSC2").each(function(){
      for (let i = 0; i < seatArr2.length; i++) {
        if ($(this).attr("id") == seatArr2[i]) {
          let label = $(this).next();
          if (label.hasClass("box1")) {
            label.removeClass('box1')
            label.addClass("box7");
          } else if (label.hasClass("box2")){
            label.removeClass('box2')
            label.addClass("box7");
          } else if (label.hasClass("box3")){
            label.removeClass('box3')
            label.addClass("box7");
          } else if (label.hasClass("box4")){
            label.removeClass('box4')
            label.addClass("box7");
          } else if (label.hasClass("box5")){
            label.removeClass('box5')
            label.addClass("box7");
          } else if (label.hasClass("box6")){
            label.removeClass('box6')
            label.addClass("box7");
          } else if (label.hasClass("boxBiz")){
            label.removeClass('boxBiz')
            label.addClass("box9");
          } else if (label.hasClass("boxPlus")){
            label.removeClass('boxPlus')
            label.addClass("box8");
          }
        }
      }
    })
  }


  // 결제정보 전송
  let jsonData = new Array();
  function onewayData1(i) {
        let finalarr = new Object();
        finalarr.reIndex = indexArr[i];
        finalarr.reStatus = "Progress";
        finalarr.reSeatDetail = seatNumArr1[i];
        finalarr.reBaggageidx = Number(baggIndex1[i]);
        finalarr.reInsuranceidx = Number(insIndex[i]);
        finalarr.reTotal = jourPrice1[i];
        finalarr.reSeatPrice = Number(seatPriceArr1[i]);
        jsonData.push(finalarr);
      $.ajax({
        url : "/api/reservation/paymentsUpdate",
        type : "PUT",
        data : JSON.stringify(jsonData),
        dataType : "text",
        contentType : "application/json",
      });
  }

  let jsonData1 = new Array();
  function onewayData2(i) {
    let finalarr1 = new Object();
    finalarr1.reIndex = indexArr[i];
    finalarr1.reStatus = "Progress";
    jsonData1.push(finalarr1);
    $.ajax({
      url : "/api/reservation/paymentsUpdate",
      type : "PUT",
      data : JSON.stringify(jsonData1),
      dataType : "text",
      contentType : "application/json",
    });
  }

  let jsonData2 = new Array();
  function multiwayData1(i) {
        let finalarr2 = new Object();
        finalarr2.reIndex = indexArr[i];
        finalarr2.reStatus = "Progress";
        finalarr2.reSeatDetail = seatNumArr1[i];
        finalarr2.reBaggageidx = Number(baggIndex1[i]);
        finalarr2.reInsuranceidx = Number(insIndex[i]);
        finalarr2.reTotal = finalTotalPrice;
        finalarr2.reSeatPrice = Number(seatPriceArr1[i]);
        jsonData2.push(finalarr2);
    $.ajax({
      url : "/api/reservation/paymentsUpdate",
      type : "PUT",
      data : JSON.stringify(jsonData2),
      dataType : "text",
      contentType : "application/json",
    });
  }

  let jsonData3 = new Array();
  function multiwayData2(i) {
        let finalarr3 = new Object();
        finalarr3.reIndex = indexArr[i];
        finalarr3.reStatus = "Progress";
        finalarr3.reSeatDetail = seatNumArr2[i];
        finalarr3.reBaggageidx = Number(baggIndex2[i-1]);
        finalarr3.reInsuranceidx = Number(insIndex[i-1]);
        finalarr3.reTotal = jourPrice2[i];
        finalarr3.reSeatPrice = Number(seatPriceArr2[i]);
        jsonData3.push(finalarr3);
      $.ajax({
        url : "/api/reservation/paymentsUpdate",
        type : "PUT",
        data : JSON.stringify(jsonData3),
        dataType : "text",
        contentType : "application/json",
      });
  }

  let jsonData4 = new Array();
  function towayData1(i) {
      let finalarr4 = new Object();
      finalarr4.reIndex = indexArr[i];
      finalarr4.reStatus = "Progress";
      finalarr4.reSeatDetail = seatNumArr1[i];
      finalarr4.reBaggageidx = Number(baggIndex1[i]);
      finalarr4.reInsuranceidx = Number(insIndex[i]);
      finalarr4.reTotal = jourPrice1[i];
      finalarr4.reSeatPrice = Number(seatPriceArr1[i]);
      jsonData4.push(finalarr4);
      $.ajax({
        url: "/api/reservation/paymentsUpdate",
        type: "PUT",
        data: JSON.stringify(jsonData4),
        dataType: "text",
        contentType: "application/json",
      });

  }

  let jsonData5 = new Array();
  function towayData2(i) {
      let finalarr5 = new Object();
      finalarr5.reIndex = indexArr[i];
      finalarr5.reStatus = "Progress";
      finalarr5.reSeatDetail = seatNumArr2[i];
      finalarr5.reBaggageidx = Number(baggIndex2[i - 1]);
      finalarr5.reInsuranceidx = Number(insIndex[i - 1]);
      finalarr5.reTotal = jourPrice2[i];
      finalarr5.reSeatPrice = Number(seatPriceArr2[i]);
      jsonData5.push(finalarr5);
      $.ajax({
        url: "/api/reservation/paymentsUpdate",
        type: "PUT",
        data: JSON.stringify(jsonData5),
        dataType: "text",
        contentType: "application/json",
      });

  }


  // /*부가서비스 신청내역 끝*/
let isinsjoin = false;
  $(".ins_join_butt").on("click", function () {
    optionTotalPrice(personNumber)
    confirmOptional()
    if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
      $("#modal_service_app_wrap").fadeIn();
      $("#modal_service_app_wrap").css("display", "flex")
      $(".modal_join_ins").fadeIn();
    } else {
        $("#modal_conf_check").fadeIn();
        $("#modal_conf_check").css("display", "flex")
      }
  });


  // 보험 안내사항 확인 눌렀을 시 체크박스 확인
  $("#modal_insurance_info_wrap .butt_ok").on("click", function () {
    let isCheck = 0;
    for (let i = 0; i < $(".ins_check").length; i++) {
      if ($("#ins_check_"+i).is(":checked")) {
        isCheck += 1;
        console.log("첫번째 체크박스 : " + isCheck)
      }
    }
    let is = 0;
    for (let i = 0; i < $(".ins_check").length; i++) {
      if ($("#check_ins_" + i).is(":checked")) {
        is += 1;
        console.log("두번째 체크박스 : " + is)
      }
    }
    if (isCheck == is) {
      $("#modal_insurance_info_wrap").fadeOut();
      $("#agree_check1").prop("checked", true);
      $('body').css("overflow", "scroll");
      isinsjoin = true;
    } else {
      $("#modal_insurance_info_wrap .modal_agree2").fadeIn();
      isinsjoin = false;
    }

  })


  $(".fix_bott .img").on("click", function() {
    optionTotalPrice(personNumber);
  })
  confirmOptional();

  function confirmOptional() {
    // 부가서비스신청 최종확인
    let str8 = "";
    let personName = [personNumber];
    let name = $("#person_name0").text()
    for (let i = 0; i < personNumber; i++) {
      personName[i] = $("#person_name"+i).text()
      if (i % 2 == 0) {
        str8 += '<thead id="modal_option_people_info_'+i+'"></thead>'
        str8 += '<tbody id="modal_option_section1_'+i+'"></tbody>'
        str8 += '<tbody id="modal_option_section2_'+i+'"></tbody>'
      }
    }

    $("#modal_option_table").append(str8);
    let option_table_head = [personNumber]; // 탑승자 정보
    let option_table_body1 = [personNumber]; // 구간1
    let option_table_body2 = [personNumber]; // 구간2

    for (let i = 0; i < personNumber; i++) {
      if (i % 2 == 0) {
        option_table_head[i] = "";
        option_table_body1[i] = "";
        option_table_body2[i] = "";
        option_table_head[i] += '<tr><th colSpan="3" id="modal_option_name_' + i + '">' + personName[i] +'</th></tr>'

        // 사전좌석, 수하물 2개 다 신청 시
        if ((seatNumArr1[i] != null && typeof seatNumArr1[i] != undefined && seatPriceArr1[i] != 0) &&
            (baggArr1[i] != null && typeof baggArr1[i] != undefined && baggPriceArr1[i] != 0)) {
          option_table_body1[i] += '<tr><td rowSpan="2" class="b_r cell">구간1</td>'

          option_table_body1[i] += '<td class="cell"><div class="item_wrap1"><p class="img img_seat"></p>'
          option_table_body1[i] += '<p class="txt">사전좌석지정 <span id="modal_option_seat1_' + i + '">' + seatNumArr1[i] + ' </span>'
          option_table_body1[i] += '(<span id="modeal_option_seatType1_' + i + '">' + seatTypeArr1[i] + '</span>)</p></div></td>'
          option_table_body1[i] += '</div></td>'
          option_table_body1[i] += '<td class="left cell">KRW ' + Number(seatPriceArr1[i]).toLocaleString('ko-KR') + '<p>자동 체크인 신청 가능</p></td></tr>'

          option_table_body1[i] += '<tr><td class="none_b_t cell"><div class="item_wrap1"><p class="img img_bagg"></p>'
          option_table_body1[i] += '<p class="txt" id="modal_option_bagg1_' + i + '">초과수하물 ' + baggArr1[i] + '</p></div></td>'
          option_table_body1[i] += '<td class="left none_b_t cell">KRW <span id="modal_option_bagg_price1_' + i + '">' + Number(baggPriceArr1[i]).toLocaleString('ko-KR') + '</span></td></tr>'
        }
          // 사전좌석, 수하물 중 한개만 신청 시
          else if ((seatNumArr1[i] != null && typeof seatNumArr1[i] != undefined && seatPriceArr1[i] != 0) ||
            (baggArr1[i] != null && typeof baggArr1[i] != undefined && baggPriceArr1[i] != 0)) {
            option_table_body1[i] += '<tr><td class="b_r cell">구간1</td>'
            // 사전 좌석만 신청 시
            if ((seatNumArr1[i] != null && typeof seatNumArr1[i] != undefined && seatPriceArr1[i] != 0)) {
              option_table_body1[i] += '<td class="cell"><div class="item_wrap1"><p class="img img_seat"></p>'
              option_table_body1[i] += '<p class="txt">사전좌석지정 <span id="modal_option_seat1_' + i + '">' + seatNumArr1[i] + ' </span>'
              option_table_body1[i] += '(<span id="modeal_option_seatType1_' + i + '">' + seatTypeArr1[i] + '</span>)</p></div></td>'
              option_table_body1[i] += '</div></td>'
              option_table_body1[i] += '<td class="left cell">KRW ' + Number(seatPriceArr1[i]).toLocaleString('ko-KR') + '<p>자동 체크인 신청 가능</p></td>'
            }
            // 수하물만 신청 시
            if ((baggArr1[i] != null && typeof baggArr1[i] != undefined && baggPriceArr1[i] != 0)) {
              option_table_body1[i] += '<td class="cell"><div class="item_wrap1"><p class="img img_bagg"></p>'
              option_table_body1[i] += '<p class="txt" id="modal_option_bagg1_' + i + '">초과수하물 ' + baggArr1[i] + '</p></div></td>'
              option_table_body1[i] += '<td class="left cell">KRW <span id="modal_option_bagg_price1_' + i + '">' + Number(baggPriceArr1[i]).toLocaleString('ko-KR') + '</span></td>'
            }
            option_table_body1[i] += '</tr>'
          }
        if (href[5] != 'oneway') { // 편도가 아닐 때
          // 사전좌석, 수하물 2개 다 신청 시
          if ((seatNumArr2[i+1] != null && typeof seatNumArr2[i+1] != undefined && seatPriceArr2[i+1] != 0) &&
              (baggArr2[i] != null && baggArr2[i] != undefined && baggPriceArr2[i] != 0)) {
            option_table_body2[i] += '<tr><td rowSpan="2"  class="b_r cell">구간2</td>'

            option_table_body2[i] += '<td class="cell"><div class="item_wrap2"><p class="img img_seat"></p>'
            option_table_body2[i] += '<p class="txt">사전좌석지정 <span id="modal_option_seat2_' + i + '">' + seatNumArr2[i+1] + ' </span>'
            option_table_body2[i] += '(<span id="modeal_option_seatType2_' + i + '">' + seatTypeArr2[i+1] + '</span>)</p></div></td>'
            option_table_body2[i] += '</div></td>'
            option_table_body2[i] += '<td class="left cell">KRW ' + Number(seatPriceArr2[i+1]).toLocaleString('ko-KR') + '<p>자동 체크인 신청 가능</p></td></tr>'

            option_table_body2[i] += '<td class="none_b_t cell"><div class="item_wrap2"><p class="img img_bagg"></p>'
            option_table_body2[i] += '<p class="txt" id="modal_option_bagg2_' + i + '">초과수하물 ' + baggArr2[i] + '</p></div></td>'
            option_table_body2[i] += '<td class="left none_b_t cell">KRW <span id="modal_option_bagg_price2_' + i + '">' + Number(baggPriceArr2[i]).toLocaleString('ko-KR') + '</span></td></tr>'
          }
            // 사전좌석, 수하물 중 한개만 신청 시
            else if ((seatNumArr2[i+1] != null && typeof seatNumArr2[i+1] != undefined && seatPriceArr2[i+1] != 0) ||
                (baggArr2[i] != null && baggArr2[i] != undefined && baggPriceArr2[i] != 0)) {
              option_table_body2[i] += '<tr><td class="b_r cell">구간2</td>'
              if ((seatNumArr2[i+1] != null && typeof seatNumArr2[i+1] != undefined && seatPriceArr2[i+1] != 0)) {
                option_table_body2[i] += '<td class="cell"><div class="item_wrap2"><p class="img img_seat"></p>'
                option_table_body2[i] += '<p class="txt">사전좌석지정 <span id="modal_option_seat2_' + i + '">' + seatNumArr2[i+1] + ' </span>'
                option_table_body2[i] += '(<span id="modeal_option_seatType2_' + i + '">' + seatTypeArr2[i+1] + '</span>)</p></div></td>'
                option_table_body2[i] += '</div></td>'
                option_table_body2[i] += '<td class="left cell">KRW <span id="modal_option_seat_price1_' + i+1 + '">'
                    + Number(seatPriceArr2[i+1]).toLocaleString('ko-KR') + '</span><p>자동 체크인 신청 가능</p></td>'
              }
              if ((baggArr2[i] != null && typeof baggArr2[i] != undefined && baggPriceArr2[i] != 0)){
                option_table_body2[i] += '<td class="cell"><div class="item_wrap2"><p class="img img_bagg"></p>'
                option_table_body2[i] += '<p class="txt" id="modal_option_bagg2_' + i + '">초과수하물 ' + baggArr2[i] + '</p></div></td>'
                option_table_body2[i] += '<td class="left cell">KRW <span id="modal_option_bagg_price2_' + i + '">' + Number(baggPriceArr2[i]).toLocaleString('ko-KR') + '</span></td>'
              }
              option_table_body2[i] += '</tr>'
            }
        }
        // 보험
        if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked") && isinsjoin == true && insPriceArr[i] != undefined) {
          option_table_body2[i] += '<tr><td class="b_r">전 구간</td>'
          option_table_body2[i] += '<td><div class="item_wrap1"><p class="img img_ins"></p>'
          option_table_body2[i] += '<p class="txt" id="modal_option_ins_' + i + '">여행보험 (' + insArr[i] + ')</p></div></td>'
          option_table_body2[i] += '<td class="left" id="modal_option_ins_price_' + i + '">KRW ' + insPriceArr[i].toLocaleString('ko-KR') + '</td></tr>'
        }

      }
    }
    for(let i = 0;  i < personNumber; i++) {
      $("#modal_option_people_info_"+i).html(option_table_head[i]);
      $("#modal_option_section1_"+i).html(option_table_body1[i]);
      $("#modal_option_section2_"+i).html(option_table_body2[i]);
    }

  }

  $(".fix_next_butt, .menu4").on("click", () => {
    optionTotalPrice(personNumber);
    confirmOptional();
    $("#modal_service_app_wrap").fadeIn();
    $('body').css("overflow", "hidden");
    $("#modal_service_app_wrap").css("display", "flex")
  });

  // 부가서비스신청 최종확인 끝

  /*하단 총액 모달창 */
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

  // 운임총액 더보기
  $("#plus1").on('click', () => {
    $(".info_table_wrap1").css("overflow", "scroll");
    $(".info_table_wrap1").css("overflow-x", "hidden");
    $(".info_table_wrap1").animate({ scrollTop: 300 }, 600);
    $("#plus1").css("display", "none");
    $("#minus1").css("display", "inline-block");
  })
  $("#minus1").on('click', () => {
    $(".info_table_wrap1").css("overflow", "hidden");
    $(".info_table_wrap1").css("overflow-x", "none");
    $("#plus1").css("display", "inline-block");
    $("#minus1").css("display", "none");
  })


  $(window).scroll(function () {
    let y = $(".fix_bott_wrap").offset().top - 650;
    if (window.pageYOffset <= y) {
      $(".fix_bott").css("position", "fixed");
      $(".fix_bott").css("bottom", "0px");
      $("#modal_totP_wrap").css("position", "fixed");
      $("#modal_totP_wrap").css("top", "-100px");
    } else {
      $(".fix_bott").css("position", "absolute");
      $("#modal_totP_wrap").css("position", "absolute");
      $("#modal_totP_wrap").css("top", y - 280);
    }
  });

  $(window).scroll(function () {
    let y = $(".contentswrap").offset().top;
    let h = $(document).scrollTop();

    if (h > y) {
      $(".fix_trip_info").css("position", "fixed");
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "absolute");
    } else {
      $(".fix_trip_info").css("position", "absolute");
      $(".fix_trip_info").css("top", "0px");
      $("#header").css("position", "fixed");
    }
  })
  /*하단 총액 모달창 끝 */
});


$(() => {
  $('#modal_free_wrap').hide();
  $(".service_title2 .section1").on('click', () => {
    $("#modal_free_wrap").fadeIn();
    $("#modal_free_wrap").css("display", "flex");
    $("body").css("overflow", "hidden");
  })
  $(".modal_free_wrap .close").on('click', () => {
    $("#modal_free_wrap").fadeOut();
    $("body").css("overflow", "scroll");
  })
})

/* 비상구 좌석 유의사항안내 모달창 */
$(() => {
  let block;
  if ($(".passenger_info_wrap1").css("display", "block")) {
    block = $(".checkPerson").is("b").parents(".passenger_info1");
  } else if($(".passenger_info_wrap1").css("display", "block")) {
    block = $(".checkPerson2").is(":checked").parents(".passenger_info2");
  }

  $('#modal_notice_wrap').hide();
  $(".select_seat .exit_seat, box3").on('click', () => {
    if ($(".exit_seat").is(":checked")) {
      $("#modal_notice_wrap").fadeIn();
      $("#modal_notice_wrap").css("display", "flex")
      $("body").css("overflow", "hidden");
      $("#checkbox_m").prop("checked", false);
      $('#modal_notice_wrap .modal_content_wrap').animate({//모달띄울 때 스크롤위치 위로 고정
        scrollTop: 0
      }, 50);
    }
  })

  $(".modal_notice_wrap .close").on('click', () => {
    block.find(".seat_P").css("display", "none");
    block.find(".seat_num").html("");
    $("#modal_notice_wrap").fadeOut();
    $("body").css("overflow", "scroll");
    $('.box3').prop("checked", false);
    $('.box3').attr("disabled", false);
  })

  $("#modal_notice_wrap .butt_ok").on('click', () => {
    if ($("#checkbox_m").is(":checked")) {
      $("#modal_notice_wrap").fadeOut();
    }
    $("body").css("overflow", "scroll");
  })
})


$(() => {
  $(".detail .close").on('click', () => {
    $("table .detail").fadeOut();
  })
})


/*보험 가입 모달창 */

$(() => {
  $("#modal_insurance_info_wrap").hide();

  $("#agree_check1").on("click", function () {
    $("#modal_insurance_info_wrap").fadeIn();
    $('body').css("overflow", "hidden");
    $("#modal_insurance_info_wrap").css("display", "flex");
    if ($(".nameBox .checkbox").is(":checked")) {
      $(this).prop("checked", true);
    } else {
      $(this).prop("checked", false);
    }
  })




  $("#modal_insurance_info_wrap .modal_agree2 .butt input").on("click", function () {
    $("#modal_insurance_info_wrap .modal_agree2").fadeOut();
  })

  $(".detail .close").on("click", function () {
    $("table .detail").css("display", "none");
  })

  $("table .cursor1").on("click", function () {
    $("table .detail1").css("display", "block");
    $("table .detail").not("table .detail1").css("display", "none");
  })

  $("table .cursor2").on("click", function () {
    $("table .detail2").css("display", "block");
    $("table .detail").not("table .detail2").css("display", "none");
  })

  $("table .cursor3").on("click", function () {
    $("table .detail3").css("display", "block");
    $("table .detail").not("table .detail3").css("display", "none");
  })

  $("table .cursor4").on("click", function () {
    $("table .detail4").css("display", "block");
    $("table .detail").not("table .detail4").css("display", "none");
  })

  $("table .cursor5").on("click", function () {
    $("table .detail5").css("display", "block");
    $("table .detail").not("table .detail5").css("display", "none");
  })

  $("table .cursor6").on("click", function () {
    $("table .detail6").css("display", "block");
    $("table .detail").not("table .detail6").css("display", "none");
  })

  $("table .cursor7").on("click", function () {
    $("table .detail7").css("display", "block");
    $("table .detail").not("table .detail7").css("display", "none");
  })


  $("table .cursor8").on("click", function () {
    $("table .detail8").css("display", "block");
    $("table .detail").not("table .detail8").css("display", "none");
  })

  $("table .cursor9").on("click", function () {
    $("table .detail9").css("display", "block");
    $("table .detail").not("table .detail9").css("display", "none");
  })

  $("table .cursor10").on("click", function () {
    $("table .detail10").css("display", "block");
    $("table .detail").not("table .detail10").css("display", "none");
  })

  $("table .cursor11").on("click", function () {
    $("table .detail11").css("display", "block");
    $("table .detail").not("table .detail11").css("display", "none");
  })

  $("table .cursor12").on("click", function () {
    $("table .detail12").css("display", "block");
    $("table .detail").not("table .detail12").css("display", "none");
  })

  $("table .cursor13").on("click", function () {
    $("table .detail13").css("display", "block");
    $("table .detail").not("table .detail13").css("display", "none");
  })

  $("table .cursor14").on("click", function () {
    $("table .detail14").css("display", "block");
    $("table .detail").not("table .detail14").css("display", "none");
  })

  $("table .cursor15").on("click", function () {
    $("table .detail15").css("display", "block");
    $("table .detail").not("table .detail15").css("display", "none");
  })

  $("table .cursor16").on("click", function () {
    $("table .detail16").css("display", "block");
    $("table .detail").not("table .detail16").css("display", "none");
  })

  $("table .cursor17").on("click", function () {
    $("table .detail17").css("display", "block");
    $("table .detail").not("table .detail17").css("display", "none");
  })

  $("table .cursor18").on("click", function () {
    $("table .detail18").css("display", "block");
    $("table .detail").not("table .detail18").css("display", "none");
  })

})


/*보험 가입 모달창 끝 */

/*여행자보험 가입규약 및 개인정보 제3자 제공 동의 모달창*/
$(() => {
  $("#modal_agreement_wrap").hide();
  $(".modal_agree2").hide();

  $("#agree_check2").on("click", function () {
    $("#modal_agreement_wrap").fadeIn();
    $("#modal_agreement_wrap").css("display", "flex")
    $('body').css("overflow", "hidden");
    if ($("#agree1").is(":checked") && $("#agree2").is(":checked")) {
      $("#agree_check2").prop("checked", true);
    } else {
      $("#agree_check2").prop("checked", false);
    }
  })
  $(".insContent2 .agree").on("click", function () {
    $("#modal_agreement_wrap").fadeIn();
    $('body').css("overflow", "hidden");
  })
  $("#modal_agreement_wrap .close").on("click", function () {
    $("#modal_agreement_wrap").fadeOut();
    $('body').css("overflow", "scroll");
  })

  $(".butt_agree").on("click", function () {
    if ($("#agree1").is(":checked") && $("#agree2").is(":checked")) {
      $("#modal_agreement_wrap").fadeOut();
      $('body').css("overflow", "scroll");
      $("#agree_check2").prop("checked", true);
    } else {
      $("#modal_agreement_wrap #modal_agree").fadeIn();
    }
  })
  $(".modal_agree2 .butt").on("click", function () {
    $("#modal_agree").fadeOut();
  })
  $(".butt_canc, title close").on("click", function () {
    $("#modal_agreement_wrap").fadeOut();
    $('body').css("overflow", "scroll");
  })

})
/*여행자보험 가입규약 및 개인정보 제3자 제공 동의 모달창 끝*/

$(() => {
})

$(() => {
  $("#modal_service_app_wrap").hide();
  $(".modal_join_ins").hide();
  $("#addmodal_autoCheck_noti").hide();
  $("#modal_conf_check").hide();
  //
  // $(".ins_join_butt").on("click", () => {
  //   if ($("#agree_check0").is(":checked") && $("#agree_check1").is(":checked") && $("#agree_check2").is(":checked")) {
  //     $("#modal_service_app_wrap").fadeIn();
  //     $("#modal_service_app_wrap").css("display", "flex")
  //   }
  //   else {
  //     $("#modal_conf_check").fadeIn();
  //     $("#modal_conf_check").css("display", "flex")
  //   }
  // });

  $("#modal_conf_check input.cursor").on("click", () => {
    $("#modal_conf_check").fadeOut();
  })
  $("#modal_service_app_wrap .add_modal").on("click", () => {
    $("#addmodal_autoCheck_noti").fadeIn();
    $("#modal_service_app_wrap").fadeOut();
  })

  $("#addmodal_autoCheck_noti .add_modal_butt_ok, #addmodal_autoCheck_noti .add_modal_butt_canc, #addmodal_autoCheck_noti .tit_close").on("click", () => {
    $("#addmodal_autoCheck_noti").fadeOut();
    $("#modal_service_app_wrap").fadeIn();
    $("#modal_service_app_wrap").css("display", "flex")
    $("auto_check").prop(":checked", false);
  })

  $(".modal_join_ins .modal_join_butt input").on("click", () => {
    $(".modal_join_ins").fadeOut();
  });

  $("#modal_service_app_wrap .modal_butt_canc, #modal_service_app_wrap .tit_close").on("click", () => {
    $("#modal_service_app_wrap").fadeOut();
    $('body').css("overflow", "scroll");
  })

})


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

function submit() {

  var
    iAdultCount = parseInt($('.round_wrap').find('strong[name=adultPaxCnt]').text()), // 성인
    iChildCount = parseInt($('.oneway_wrap').find('strong[name=childPaxCnt]').text()), // 소아
    iInfantCount = parseInt($('.multi_wrap').find('strong[name=infantPaxCnt]').text()); // 유아

  if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount + ' 유아 ' + iInfantCount);
  } else if (iAdultCount > 0 && iChildCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount);
  } else if (iAdultCount > 0 && iInfantCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 유아 ' + iInfantCount);
  } else if (iAdultCount > 0) {
    $("strong[name=person_num]").text('성인 ' + iAdultCount);
  } else if (iChildCount > 0) {
    $("strong[name=person_num]").text('소아 ' + iChildCount);
  }

  // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
  // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
  $('.adultPaxCnt').val(iAdultCount);
  $('.childPaxCnt').val(iChildCount);
  $('.infantPaxCnt').val(iInfantCount);


  $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
  $(".person_down_img").css({ "display": "inline-block" });
  $(".person_up_img").css({ "display": "none" });
  $('.person_pop_layer').slideUp(50);


  $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
  $(".go_select_opt").addClass('on');
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

function updateTrip() {
  let person = $("#person_cnt").text();
  let go1 = $("#go_area1").text();
  let arr1 = $("#arr_area1").text();
  let godate = $("#godate").text();

  $(".person_num").text(person);
  $(".go_default").attr("value", go1);
  $(".arrive_default").attr("value", arr1);
  $(".go_date_default").attr("value", godate);

}



