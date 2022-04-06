$(function () {
    $('.nav8').find('a').css({"color":"#BDD600"});
    $('.nav8').siblings('li').css({"display":"block"});
    
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
        $('.nav8').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav8').find('a').css({"color":"#BDD600"});
        $('.nav8').siblings('li').css({"display":"block"});
        $('.nav8').parent().siblings().find('li').css({"display":"none"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav8').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav8').find('a').css({"color":"#BDD600"});
        $('.nav8').siblings('li').css({"display":"block"});
        $('.nav8').parent().siblings().find('li').css({"display":"none"});
    })

});

$(() => {
    document.getElementById('start_date').valueAsDate = new Date();
    document.getElementById('end_date').valueAsDate = new Date();
});


$(()=> {
    $('#modal_iswrite').hide();
    $(".write_btn").on('click', () => {
        if($('#evTitle').val().length <= 0 || $('#ex_file').val().length <= 0 || $('#evContent').val().length <= 0){
            alert('내용을 정확히 입력되었는지 다시 한번 확인해주세요.')
        }else{
            let str = $('#start_date').val().split('-');
            let strrr = str[0] + str[1] + str[2];
            let str1 = $('#end_date').val().split('-');
            let strrr1 = str1[0] + str1[1] + str1[2];
            if(strrr > strrr1){
                alert('이벤트 시작일이 종료일을 넘을 수 없습니다.');
            }else{
                if ($('.filetext').val().length <= 0){
                    alert('파일 첨부를 확인 해주세요.');
                }else{
                    $("#modal_iswrite").css("display", "flex");
                }
            }
        }
    })
    $(".uncomplete1").on('click', () => {
        $("#modal_iswrite").css("display", "none");
    })
})

$(()=> {
    $('#ex_file').on('change', function(){
        $('.filetext').val($('#ex_file').val());
    });
});