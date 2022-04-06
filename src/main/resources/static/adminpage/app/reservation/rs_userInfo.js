$(function () {
    $('.nav3').find('a').css({"color":"#BDD600"});
    $('.nav3').siblings('li').css({"display":"block"});
    $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});

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
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav3').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav3').find('a').css({"color":"#BDD600"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parent().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav3').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav3').find('a').css({"color":"#BDD600"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parent().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })

});

$(()=> {
    $('#modal_iscancel').hide();
    $(".cancbutt").on('click', () => {
        $("#modal_iscancel").fadeIn();
    })
    $(".uncomplete").on('click', () => {
        $("#modal_iscancel").fadeOut();
    })
})

$(()=> {
    $('#modal_issearch').hide();
    $(".search_butt").on('click', () => {
        $("#modal_issearch").fadeIn();
    })
    $(".modal_issearch_ok").on('click', () => {
        $("#modal_issearch").fadeOut();
    })
})

$(() => {
    let idx = $(location).attr('href').split('/')[6];

    console.log(idx)

    detail();

    function detail(){
        $.get('/api/reservation/'+idx, function (response){
            console.dir(response);

            let useridx = response.data.reUserindex;



            $('#airplaneName').text(response.data.reSchName)
            let startdate = response.data.reSchStartTime.substr(0, 10)
            $('#landingDate').text(startdate)
            let starttime = response.data.reSchStartTime.substr(11, 5)
            $('#landingTime').text(starttime)
            $('#landingPoint').text(response.data.reSchDepPoint)
            $('#arrPoint').text(response.data.reSchArrPoint)
            let endtime = response.data.reSchEndTime.substr(11, 5)
            $('#arrTime').text(endtime)


            $('#resCode').text(response.data.reReserNum)
            $('#userEmail').text(response.data.reEmail)
            $('#userKorName').text(response.data.reFirstName + response.data.reLastName)
            $('#userHp').text(response.data.reHp)
            $('#userBirth').text(response.data.reBirth)
            $('#reNation').text(response.data.reNation)

            // 성별
            let gender = response.data.reGender;
            if(gender === $("#male").val()){
                $("#male").prop('checked', true);
                $("#female").prop('checked', false);
            }else if(gender === $("#female").val()){
                $("#male").prop('checked', false);
                $("#female").prop('checked', true);
            }

            // 성인 소아 유아 판별
            let birthYear = response.data.reBirth.substr(0, 4)
            let now = new Date();
            let year = now.getFullYear();
            console.log(birthYear)
            let minus = year - birthYear
            if ( minus > 19){
                $('#personType').text('성인')
            }else if( minus > 5){
                $('#personType').text('소아')
            }else{
                $('#personType').text('유아')
            }

            // 회원 여부
            if (useridx == null){
                $("#True").prop('checked', false);
                $('#False').prop('checked',true);
                $('#userId').text('-');
                $('#userEngName').text('-')
                $('#rePassport').text('-')
                $('#userZipcode').text('-')
                $('#address1').text('-')
                $('#address2').text('-')
            }else {
                $("#True").prop('checked', true);
                $('#False').prop('checked',false);

                // 유저 상세정보 불러와야되는 것들
                $.get('/api/user/'+useridx, function (response2){
                    console.dir(response2)

                    $('#userId').text(response2.data.memUserid);
                    $('#userEngName').text(response2.data.memEngFirstName + response2.data.memEngLastName)
                    $('#rePassport').text(response2.data.memPassport)
                    $('#userZipcode').text(response2.data.memZipcode)
                    $('#address1').text(response2.data.memAddress1 + ' ' + response2.data.memAddress2)
                    $('#address2').text(response2.data.memAddress3)
                })
            }

            // 결제 관련
            $('#payType').text(response.data.rePayment)
            $('#refundType').text(response.data.rePayment)
            let regDate = response.data.reRegdate.substr(0, 10)
            $('#payCompleteDate').text(regDate)
        })
    }

    // 예약 취소
    let jsonData;
    jsonData = {
        data : {
            reIndex: idx,
        }
    }
    $('#resDelete').on('click', function (){
        $.ajax({
            url: "/api/reservation",
            data: JSON.stringify(jsonData),
            method: "PUT",
            dataType: "text",
            contentType : "application/json",
            success: function (response) {
                location.href="/pages/admin/rsIndex"
            }
        })
    })
})