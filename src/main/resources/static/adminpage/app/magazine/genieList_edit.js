$(function () {
    $('.nav11').find('a').css({"color":"#BDD600"});
    $('.nav11').siblings('li').css({"display":"block"});
    
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
        $('.nav11').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav11').find('a').css({"color":"#BDD600"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav11').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav11').find('a').css({"color":"#BDD600"});
        $('.nav11').siblings('li').css({"display":"block"});
        $('.nav11').parent().siblings().find('li').css({"display":"none"});
    })


    $('.edit_btn').on('click', function(){
        $("#modal_isfind").css("display","flex");
    });
    $('.uncomplete').on('click', function(){
        $("#modal_isfind").css("display","none");
    });

    $('#ex_file1').on('change', function(){
        console.log($('#ex_file1').val());
        $('.filetext1').val($('#ex_file1').val());
    });

    $('#ex_file2').on('change', function(){
        console.log($('#ex_file2').val());
        $('.filetext2').val($('#ex_file2').val());
    });

    $('#ex_file3').on('change', function(){
        console.log($('#ex_file3').val());
        $('.filetext3').val($('#ex_file3').val());
    });


// list
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });

    let str = $(location).attr('href').split('/');
    searchStart(str[6]);
    function searchStart(index){
        $.get("/api/magazine/view/"+index, function(response){
            // 검색 데이터
            itemList.itemList = response.data;

        });
    }

});

function sendit(){
    if(!$('#ex_file1').val()){
        alert('파일 첨부를 확인하세요.')
        return false;
    }
    if(!$('#ex_file2').val()){
        alert('파일 첨부를 확인하세요.')
        return false;
    }
    if(!$('#ex_file3').val()){
        alert('파일 첨부를 확인하세요.')
        return false;
    }
}