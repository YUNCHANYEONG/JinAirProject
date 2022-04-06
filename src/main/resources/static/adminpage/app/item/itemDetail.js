$(function () {
    $('.nav5').find('a').css({ "color": "#BDD600" });
    $('.nav5').siblings('li').css({ "display": "block" });
    $('.nav5').siblings('li').eq(0).find('a').css({ "color": "#BDD600" });

    $('.nav1').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav2').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav3').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav4').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav5').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
        $('.nav5').siblings('li').eq(0).find('a').css({ "color": "#BDD600" });
    });
    $('.nav6').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav7').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav8').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav9').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav10').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('.nav11').on('mouseover', function (e) {
        e.stopPropagation();
        $(this).parent().siblings().find('a').css({ "color": "#adb5bd" });
        $(this).find('a').css({ "color": "#BDD600" });
        $(this).siblings('li').css({ "display": "block" });
        $(this).parent().siblings().find('li').css({ "display": "none" });
    });
    $('header').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({ "color": "#adb5bd" });
        $('.nav5').find('a').css({ "color": "#BDD600" });
        $('.nav5').siblings('li').css({ "display": "block" });
        $('.nav5').parent().siblings().find('li').css({ "display": "none" });
        $('.nav5').siblings('li').eq(0).find('a').css({ "color": "#BDD600" });
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav5').parent().siblings().find('a').css({ "color": "#adb5bd" });
        $('.nav5').find('a').css({ "color": "#BDD600" });
        $('.nav5').siblings('li').css({ "display": "block" });
        $('.nav5').parent().siblings().find('li').css({ "display": "none" });
        $('.nav5').siblings('li').eq(0).find('a').css({ "color": "#BDD600" });
    })

});

$(() => {

    let idx = $(location).attr("href").split('/')[7];

    console.log(idx)

    let itemDetail = new Vue({
        el : '#itemDetail',
        data : {
            itemDetail : {},

        }
    })

    search(idx);

    function search(index){
        $.get("/api/lost/"+index, function (response){
            itemDetail.itemDetail = response.data;
            $("#item_isfind_btn").val(response.data.losIsfind)
            console.log(response.data.losIsfind);
        })
    }

    $(document).on("click", "#item_del_btn", function (){
        $.ajax({
            url : "/api/lost/"+idx,
            type : "DELETE"
        })
        alert("삭제 완료");
        location.href = '/pages/admin/item';
    })

    $(document).on("click", '#isfind_P', function (){
        $("#modal_isfind").fadeIn(200);

    })

    $(".complete").on('click', function (){
        let jsonData = {
            data : {
                losIndex : idx,
                losIsfind : "Receipt"
            }
        }
        $.ajax({
            url : "/api/lost",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        })
        alert('변경 완료');
        $("#modal_isfind").fadeOut(200);
        location.reload();
    })

    $(".uncomplete").on('click', function (){
        let jsonData = {
            data : {
                losIndex: idx,
                losIsfind : "NotReceived"
            }
        }
        $.ajax({
            url : "/api/lost",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        })
        alert('변경 완료');
        $("#modal_isfind").fadeOut(200);
        location.reload();
    })

    $('body').on("click", function (){
        $("#modal_isfind").fadeOut(200);
    })

})