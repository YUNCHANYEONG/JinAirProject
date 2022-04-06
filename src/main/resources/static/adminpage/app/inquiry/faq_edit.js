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
    $('.edit_container').css("display","none");
    $('.btn_cancel').on('click', function() {
        $('.edit_container').css("display", "none");
    })
});

// (function ($){
//     // 세부사항 출력
//     let faqEdit = new Vue({
//         el : '#faqEdit',
//         data : {
//             faqEdit : {}
//         },
//     });
//
//
//     let str = $(location).attr('href').split('/');
//     searchStart(str[6]);
//
//     function searchStart(index){
//         alert(index);
//         $.get("/api/faq/view/"+index, function(response){
//             console.dir(response);
//             faqEdit.faqEdit = response.data;
//
//
//         });
//     }
//
//     // 수정
//     let jsonData
//
//     function updating(){
//         jsonData = {
//             data : {
//                 faqIndex : str[6],
//                 faqTitle : $("#faqTitle").val(),
//                 faqContent : $("#faqContent").val()
//             }
//         }
//         $.ajax({
//             url : "/api/faq",
//             type : "PUT",
//             data : JSON.stringify(jsonData),
//             dataType : "text",
//             contentType : "application/json"
//         });
//     }
//
//     $("#update").click( () => {
//         updating();
//         location.href = `/pages/admin/faq_view/${str[6]}`;
//         console.dir(jsonData);
//     })
//
//
//
// })(jQuery)

(function ($){

    console.log("url : "+$(location).attr('href'));

    let idx = $(location).attr('href').split('/')[6];

    let tableBoard = new Vue({
        el : '#tableBoard',
        data : {
            tableBoard : {}
        }
    })

    search(idx);

    function search(index){
        console.log("index : " + index);
        $.get("/api/faq/view/"+index, function (response){
            console.dir(response);
            tableBoard.tableBoard = response.data;

        })
    }


    let jsonData

    function updating(){
        jsonData = {
            data : {
                faqIndex : idx,
                faqType : $("#faqType").val(),
                faqTitle : $("#faqTitle").val(),
                faqContent : $("#faqContent").val(),
                faqRegdate : $("#faqRegdate").text()

            }
        }
        $.ajax({
            url : "/api/faq",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#update").click( () => {
        updating();
        location.href = `/pages/admin/faq_view/${idx}`;
        console.dir(jsonData);
    })

})(jQuery)


function editBtn(){
    $('.edit_container').css("display","flex");
}