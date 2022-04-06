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

    function writing(){
        jsonData = {
            data : {
                faqRegdate : $("#faqRegdate").val(),
                faqType : $("#faqType").val(),
                faqTitle : $("#faqTitle").val(),
                faqContent : $("#faqContent").val()
            }
        }
        $.ajax({
            url : "/api/faq/",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#writeFaq").click( () => {
        if ( $("#faqTitle").val().length == 0 || $("#faqContent").val().length == 0 ) {
            alert('내용을 입력하세요.');
        } else {
            alert('등록 완료')
            writing();
            location.href='/pages/admin/faq_main'
        }

    })



});