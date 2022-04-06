$(function () {
    $('.nav3').find('a').css({"color":"#BDD600"});
    $('.nav3').siblings('li').css({"display":"block"});    
    $('.nav3').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    
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
        $('.nav3').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
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
        $('.nav3').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav3').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav3').find('a').css({"color":"#BDD600"});
        $('.nav3').siblings('li').css({"display":"block"});
        $('.nav3').parent().siblings().find('li').css({"display":"none"});
        $('.nav3').siblings('li').eq(1).find('a').css({"color":"#BDD600"});
    })

});

$(() => {
    $('#searchBtn').on('click', function (){
        let resNum = $('#res_num1').val()
        let firstName = $('#res_korFirstName').val()
        let lastName = $('#res_korLastName').val()

        if(!resNum || !firstName || !lastName){
            alert('입력을 확인해주세요!')
        }else{
            $.post({
                url: '/api/reservation/searchOfCode',
                data: "resCode=" + resNum + "&firstName=" + firstName + "&lastName=" + lastName,
                dataType: 'text',
                success: function (response){
                    let jsonData = JSON.parse(response)
                    console.dir(jsonData)
                    if(jsonData.data == null){
                        alert('예약 정보가 없습니다')
                    }else{
                        let useridx = jsonData.data[0].reUserindex;

                        $('#airplaneName').text(jsonData.data[0].reSchName)
                        let startdate = jsonData.data[0].reSchStartTime.substr(0, 10)
                        $('#landingDate').text(startdate)
                        let starttime = jsonData.data[0].reSchStartTime.substr(11, 5)
                        $('#landingTime').text(starttime)
                        $('#landingPoint').text(jsonData.data[0].reSchDepPoint)
                        $('#arrPoint').text(jsonData.data[0].reSchArrPoint)
                        let endtime = jsonData.data[0].reSchEndTime.substr(11, 5)
                        $('#arrTime').text(endtime)


                        $('#resCode').text(jsonData.data[0].reReserNum)
                        $('#userEmail').text(jsonData.data[0].reEmail)
                        $('#userKorName').text(jsonData.data[0].reFirstName + jsonData.data[0].reLastName)
                        $('#userHp').text(jsonData.data[0].reHp)
                        $('#userBirth').text(jsonData.data[0].reBirth)
                        $('#reNation').text(jsonData.data[0].reNation)

                        // 성별
                        let gender = jsonData.data[0].reGender;
                        if(gender === $("#male").val()){
                            $("#male").prop('checked', true);
                            $("#female").prop('checked', false);
                        }else if(gender === $("#female").val()){
                            $("#male").prop('checked', false);
                            $("#female").prop('checked', true);
                        }

                        // 성인 소아 유아 판별
                        let birthYear = jsonData.data[0].reBirth.substr(0, 4)
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
                        $('#payType').text(jsonData.data[0].rePayment)
                        $('#refundType').text(jsonData.data[0].rePayment)
                        let regDate = jsonData.data[0].reRegdate.substr(0, 10)
                        $('#payCompleteDate').text(regDate)
                    }
                }
            })
        }
    })
})
