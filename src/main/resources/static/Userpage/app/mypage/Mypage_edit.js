'use strict';

$(function () {
    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({"border-bottom":"none"});
        $(this).css({"border-bottom":"3px solid #652043"});
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({"border-bottom":"none"});
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
    $('.edit').click(function(){
        $('.pwcheck_modal').css('display', 'flex');
        $('.pwcheck_modal').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.btn_cancel').click(function(e){
            $('.pwcheck_modal').fadeOut(200);
            $('body').css('overflow', '');
            e.stopPropagation();
        });
    });
    $('.btnTypeA').click(function(){
        $('.confirm_modal1').css('display', 'flex');
        $('.confirm_modal1').fadeIn(200);
        $('body').css('overflow', 'hidden');
        
        $('.xbox').click(function(){
            $('.confirm_modal1').fadeOut(200);
            $('body').css('overflow', '');
        })
    });

});

function hidePopupLayer(){
    $('.confirm_modal1', parent.document).fadeOut(200);
    $('body', parent.document).css('overflow', '');
}

(function ($) {

    let countryList = [
        '대한민국', '대만', '몽골', '미얀마', '베트남'
        , '인도', '인도네시아', '말레이시아', '일본'
        ,'중국', '카자흐스탄', '캄보디아', '필리핀', '홍콩'
        , '그리스', '네덜란드', '덴마크', '노르웨이'
        ,'독일', '벨기에', '스웨덴', '스위스', '아이슬란드'
        , '영국', '이탈리아', '체코', '포르투갈',
        '폴란드', '프랑스', '헝가리', '이집트', '미국', '멕시코', '브라질'
    ]

    let hpNationList = [
        '대한민국82', '대만886', '일본81', '베트남84',
        '중국86', '홍콩852', '미국1'
    ]

    let selPass = $('#ntnltyCd');
    let selNation = $('#residenceIataCountryCode');
    let selHpNation = $('#mblFonCtrCd');

    for (let i = 0; i < countryList.length; i++){
        let option = document.createElement('option');
        option.innerText = countryList[i];
        option.value = countryList[i];
        selPass.append(option);
    }

    for (let i = 0; i < countryList.length; i++){
        let option = document.createElement('option');
        option.innerText = countryList[i];
        option.value = countryList[i];
        selNation.append(option);
    }

    for (let i = 0; i < hpNationList.length; i++){
        let option = document.createElement('option');
        option.innerText = hpNationList[i];
        option.value = hpNationList[i];
        selHpNation.append(option);
    }

    let idx = $('#memid').val();

    // 사용자 성별
    let gender;

    // 사용자 이메일 동의 여부
    let isEmail;

    // 사용자 sns 동의 여부
    let isSns;

    // 사용자 국적
    let nation;

    // 사용자 휴대폰 국가 코드
    let hpNation;

    let oldPw;

    let userid;


    let memberDetail = new Vue({
        el : '#joinForm',
        data : {
            memberDetail : {}
        }
    })

    search(idx);

    function search(index){
        $.get("/api/user/"+index, function (response){
            userid = response.data.memUserid;

            gender = response.data.memGender;

            isEmail = response.data.memEmailIsagree;

            isSns = response.data.memSnsIsagree;

            nation = response.data.memNation;

            hpNation = response.data.memHpNation;

            oldPw = response.data.memUserpw;


            $(".idField").text(response.data.memUserid);
            $('#pwField').val(response.data.memUserpw);
            $("#pstNo").val(response.data.memZipcode);
            $("#adr1").val(response.data.memAddress1);
            $("#adr2").val(response.data.memAddress2);
            $("#adr3").val(response.data.memAddress3);
            $("#mbrLnm").val(response.data.memKorFirstName);
            $("#mbrFnm").val(response.data.memKorLastName);
            $("#engLnm").val(response.data.memEngFirstName);
            $("#engFnm").val(response.data.memEngLastName);
            $("#emAdr").val(response.data.memEmail);
            $("#birth").text(response.data.memBirth);
            $("#mblFonNo").val(response.data.memHp);

            if(gender === $("#male").val()){
                $("#male").prop('checked', true);
                $("#female").prop('checked', false);
            }else if(gender === $("#female").val()){
                $("#male").prop('checked', false);
                $("#female").prop('checked', true);
            }

            if(isEmail === $("#emailAgree").val()){
                $("#emailAgree").prop('checked', true);
                $("#emailDisagree").prop('checked', false);
            }else if(isEmail === $("#emailDisagree").val()){
                $("#emailAgree").prop('checked', false);
                $("#emailDisagree").prop('checked', true);
            }

            if(isSns === $("#snsAgree").val()){
                $("#snsAgree").prop('checked', true);
                $("#snsDisagree").prop('checked', false);
            }else if(isSns === $("#snsDisagree").val()){
                $("#snsAgree").prop('checked', false);
                $("#snsDisagree").prop('checked', true);
            }

            for(let i = 0; i < countryList.length; i++){
                if (nation === countryList[i]){
                    $('#ntnltyCd').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < countryList.length; i++){
                if (nation === countryList[i]){
                    $('#residenceIataCountryCode').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < hpNationList.length; i++){
                if (hpNation === hpNationList[i]){
                    $('#mblFonCtrCd').find(`option[value=${hpNation}]`).attr('selected', true);
                }
            }

            $('#pwChange').on('click', function (){
                if(sendPw()){
                    // 비밀번호 입력 완료
                    $('#pwField').val($('#newPw').val());
                    $('.confirm_modal1').fadeOut();
                    $('body').css('overflow', '');
                }
            })

            function sendPw(){
                let pw = $("#newPw").val();
                let checkNumber = pw.search(/[0-9]/g);
                let checkEnglish = pw.search(/[a-z]/ig);
                if($('#oldPw').val() == '' || $('#newPw').val() == '' || $('#newPwCheck').val() ==''){
                    alert('입력을 확인해주세요');
                    return false;
                }else{
                    if($('#oldPw').val() != oldPw){
                        alert('기존 비밀번호 불일치 \n 입력을 확인해주세요');
                        return false;
                    }
                    else{
                        if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)){
                            alert('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(checkNumber <0 || checkEnglish <0){
                            alert("숫자와 영문자를 혼용하여야 합니다.");
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(/(\w)\1\1\1/.test(pw)){
                            alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }else if(pw.search(userid) > -1){
                            alert("비밀번호에 아이디가 포함되었습니다.");
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }
                        if($('#newPw').val() != $('#newPwCheck').val()){
                            alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
                            $('#newPw').val("");
                            $('#newPwCheck').val("");
                            $('#newPw').focus();
                            return false;
                        }
                    }
                }
                return true;
            }
        })
    }

    let jsonData

    function updating(){
        jsonData = {
            data : {
                memIndex : idx,
                memUserpw : $('#pwField').val(),
                memZipcode : $("#pstNo").val(),
                memAddress1 : $("#adr1").val(),
                memAddress2 : $("#adr2").val(),
                memAddress3 : $("#adr3").val(),
                memEmail : $("#emAdr").val(),
                memGender : $("input[name=gndrCd]:checked").val(),
                memEmailIsagree : $("input[name=emRcvYn]:checked").val(),
                memBirth : $("#birth").val(),
                memSnsIsagree : $("input[name=smsRcvYn]:checked").val(),
                memPassport : $("#ntnltyCd").find("option:selected").val(),
                memNation : $("#residenceIataCountryCode").find("option:selected").val(),
                memHp : $("#mblFonNo").val(),
                memHpNation : $("#mblFonCtrCd").find("option:selected").val()
            }
        }
        $.ajax({
            url : "/api/user",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json",
            success : function (){
                alert('변경 완료');
                location.href = `/pages/index`;
            }
        });
    }

    $("#update").click( () => {
        updating();
    })

    // 회원탈퇴
    $('.btnTypeB').click( ()=> {
        if(!confirm('탈퇴 하시겠습니까?\n탈퇴시 포인트, 쿠폰, 예약 정보가 삭제됩니다.')){
            console.log('탈퇴 취소');
        }else {
            // let arrQnA = [];
            $.ajax({
                url : "/api/user/"+idx,
                type : "DELETE",
                success : function (){
                    location.href = '/pages/jinair/index';
                }
            })
            // 유저 포인트 삭제
            $.ajax({
                url : "/api/point/user/" + idx,
                type : "DELETE"
            })
            // // 유저 QnA 삭제
            // $.get('/api/qna/userQna/'+idx, function (response){
            //     let arrQnAIndex = {};
            //     console.dir(response)
            //     for(let i = 0; response.data.length; i++){
            //         console.log(response.data[i].qnaIndex);
            //         arrQnAIndex.qaQnaindex = response.data[i].qnaIndex;
            //         arrQnA.push(arrQnAIndex);
            //     }
            //     console.dir(arrQnA)
            //     $.post({
            //         url: '/api/qnaAns/QnAofAns/delete',
            //         data: JSON.stringify(arrQnA),
            //         dataType: 'text',
            //         contentType: 'application/json'
            //     })
            // })
            // 유저 쿠폰 삭제
            $.ajax({
                url: "/api/userCoupon/deleteForUser/"+idx,
                type : "DELETE",
            })
            // 유저 예약 리스트 삭제
            // $.ajax({
            //     url: "/api/reservation/deleteForUser/"+idx,
            //     type : "DELETE",
            // })
        }
    })

})(jQuery)