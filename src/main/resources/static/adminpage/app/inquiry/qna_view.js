$(function () {
    $('.nav7').find('a').css({"color":"#BDD600"});
    $('.nav7').siblings('li').css({"display":"block"});
    $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

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
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav7').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav7').find('a').css({"color":"#BDD600"});
        $('.nav7').siblings('li').css({"display":"block"});
        $('.nav7').parent().siblings().find('li').css({"display":"none"});
        $('.nav7').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

    $('.btn_user_container').hide();
    $('.user_container').hide();
    $('.user_name').on('click', function(e){
        x = e.clientX;
        y = e.clientY;
        $('.btn_user_container').css("position", "absolute").css("top", y).css("left", x);
        $('.btn_user_container').fadeIn(200);
    });

    $('.btn_user').on('click', function(){
        $('.btn_user_container').hide();
        $('.user_container').fadeIn(200);
    });

    $('.btn_check').on('click', function(e){
        $('.user_container').fadeOut(200);
        e.stopPropagation();
    });

    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });


    var str = $(location).attr('href').split('/');
    searchStart(str[6]);

    function searchStart(index){
        $.get("/api/qnaAns/list/"+index, function(response){

            // 검색 데이터
            itemList.itemList = response.data;

        });
    }

    $(".qa_btn").click( () => {
        if( $('#qaTitle').html() != null || $('#qaContent').html() != null) {
            alert('답변이 완료되어 접근이 불가능합니다. 문의가 필요하시면 010-5516-4987로 연락바랍니다.');
        }else{
            location.href=`/pages/admin/qna_reply/${str[6]}`
        }
    })

});