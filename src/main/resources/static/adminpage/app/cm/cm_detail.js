$(function () {
    $('.nav4').find('a').css({"color":"#BDD600"});
    $('.nav4').siblings('li').css({"display":"block"});
    $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

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
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav4').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav4').find('a').css({"color":"#BDD600"});
        $('.nav4').siblings('li').css({"display":"block"});
        $('.nav4').parent().siblings().find('li').css({"display":"none"});
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav4').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav4').find('a').css({"color":"#BDD600"});
        $('.nav4').siblings('li').css({"display":"block"});
        $('.nav4').parent().siblings().find('li').css({"display":"none"});
        $('.nav4').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
});

(function ($){

    console.log("url : "+$(location).attr('href'));


    let idx = $(location).attr('href').split('/')[7];


    let memberDetail = new Vue({
        el : '#memberDetail',
        data : {
            memberDetail : {}
        }
    })

    search(idx);
    point(idx);
    couponResult(idx);

    function search(index){
        $.get("/api/user/"+index, function (response){
            console.dir(response);
            memberDetail.memberDetail = response.data;
            if(response.data.memEmailIsagree == 'True'){
                $('#isEmailAgree').text('동의')
            }else{
                $('#isEmailAgree').text('미동의')
            }
            if(response.data.memSnsIsagree == 'True'){
                $('#isSnsAgree').text('동의')
            }else{
                $('#isSnsAgree').text('미동의')
            }
            let regDate = response.data.memRegdate.replace('T', '/')
            $('#regDate').text(regDate)
        })
    }

    // 유저에 따른 포인트
    function point(index){
        let sum = 0;
        $.get("/api/point/user/"+index, function (response){
            for(let i = 0; i < response.data.length; i++){
                let point = response.data[i].poPoint;
                sum += point;
            }
            if( sum < 0){
                $('#point').val(0);
            }else {
                $('#point').val(sum.toLocaleString('ko-KR'));
            }
        })
    }

    function couponResult(idx) {
        $.get("/api/userCoupon/list/" + idx, function (response) {
            let coupon;
            if (response == "") {
                coupon = "-";
            } else {
                coupon = response + "장";
            }
            $('#coupon').val(coupon.toLocaleString('ko-KR'));
        });
    }
})(jQuery)