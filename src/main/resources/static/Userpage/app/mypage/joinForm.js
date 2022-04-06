'use strict';

let idDupl = 'n';

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
    $('.policy_box').hide();
    $('.btnTypeB').click(function(){
        $('.policy_box').fadeIn(200);
        $('body').css('overflow', 'hidden');

        $('.btn_agree').click(function(){
            $('.policy_box').fadeOut(200);
            $('body').css('overflow', '');
        })
    })

    // 국적
    let countryList = [
        '대한민국', '대만', '몽골', '미얀마', '베트남'
        , '인도', '인도네시아', '말레이시아', '일본'
        ,'중국', '카자흐스탄', '캄보디아', '필리핀', '홍콩'
        , '그리스', '네덜란드', '덴마크', '노르웨이'
        ,'독일', '벨기에', '스웨덴', '스위스', '아이슬란드'
        , '영국', '이탈리아', '체코', '포르투갈',
        '폴란드', '프랑스', '헝가리', '이집트', '미국', '멕시코', '브라질'
    ]

    // 휴대전화 국적
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

    // 아이디 대소문자 숫자 제외 전부 막기
    $('#id').on("keyup", function (){
        $(this).val($(this).val().replace(/[^A-Za-z0-9]/g,""));
    })
    // 생년월일 막아놓기
    $('#bthDt').on("keyup", function (){
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    })
    // 생년월일 막아놓기
    $('#mbrLnm').on("keyup", function (){
        $(this).val($(this).val().replace(/[^ㄱ-힣]/g,""));
    })
    $('#mbrFnm').on("keyup", function (){
        $(this).val($(this).val().replace(/[^ㄱ-힣]/g,""));
    })
    $('#engLnm').on("keyup", function (){
        $(this).val($(this).val().replace(/[^A-Za-z]/g,""));
    })
    $('#engFnm').on("keyup", function (){
        $(this).val($(this).val().replace(/[^A-Za-z]/g,""));
    })

    // 아이디 키 다운시 중복확인 필요
    $('#id').on('keydown', function (){
        idDupl = 'n';
    })

    // 아이디 중복 확인
    $('#duplication').on('click', function (){
        if(!$('#id').val()) {
            alert('아이디를 입력하세요');
        }else if($('#id').val().length < 4 || $('#id').val().length > 20){
            alert('아이디는 6자 이상 20자 이하로 입력하세요');
            $('#id').val('');
            $('#id').focus();
        }else {
            list($('#id').val());
        }
    })
    function list(index){
        $.get("/api/user/read/"+index, function(response){
            let itemList = response.data;
            if (!itemList){
                alert('사용 가능한 아이디 입니다.');
                idDupl = 'y'
            }else{
                alert('중복된 아이디가 있습니다.');
                $('#id').val('');
                idDupl = 'n'
            }
        });
    }


    // 회원가입 데이터 보내기
    let jsonData;
    function creating(){
        jsonData = {
            data : {
                memUserid: $('#id').val(),
                memUserpw: $('#pw').val(),
                memKorFirstName : $('#mbrLnm').val(),
                memKorLastName : $('#mbrFnm').val(),
                memEngFirstName : $('#engLnm').val().toUpperCase(),
                memEngLastName : $('#engFnm').val().toUpperCase(),
                memHpNation : $('#mblFonCtrCd').val(),
                memHp : $('#mblFonNo').val(),
                memEmail : $('#emAdr').val(),
                memGender : $('input:radio[name="gndrCd"]:checked').val(),
                memBirth : $('#bthDt').val(),
                memPassport : $('#ntnltyCd').val(),
                memNation : $('#residenceIataCountryCode').val(),
                memZipcode : $('#sample6_postcode').val(),
                memAddress1 : $('#sample6_address').val(),
                memAddress2 : $('#sample6_extraAddress').val(),
                memAddress3 : $('#sample6_detailAddress').val(),
                memEmailIsagree : $('input:radio[name="emRcvYn"]:checked').val(),
                memSnsIsagree : $('input:radio[name="smsRcvYn"]:checked').val()
            }
        }
        $.ajax({
            url : "/api/user",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#btn_regist").click( () => {
        if(sendit()) {
            creating();
            location.href = "/pages/index/joinConfirm/"+$('#id').val().toLowerCase();
        }
    })

});


function sendit(){
    const expKorNameText = RegExp(/[가-힣]+$/);
    const expEngNameText = RegExp(/[A-Za-z]+$/);
    const expNumText = RegExp(/[0-9]+$/);
    const expHpText = RegExp(/^\d{3}-\d{3,4}-\d{4}$/);
    const expEmailText = RegExp(/^[A-Za-z0-9\-\.]+@[A-Za-z0-9\-\.]+\.[A-Za-z0-9]+$/);

    var pw = $("#pw").val();
    var id = $("#id").val();
    var checkNumber = pw.search(/[0-9]/g);
    var checkEnglish = pw.search(/[a-z]/ig);

    if(!$('#id').val()){
        alert('아이디를 입력하세요');
        $('#id').focus();
        return false;
    }

    if($('#id').val().length < 4 || $('#id').val().length > 20){
        alert('아이디는 6자 이상 20자 이하로 입력하세요');
        $('#id').focus();
        return false;
    }
    if(idDupl == 'n'){
        alert('아이디 중복 확인을 진행해주세요');
        $('#id').focus();
        return false;
    }

    if(!$('#pw').val()){
        alert('비밀번호를 입력하세요');
        $('#pw').focus();
        return false;
    }

    if(!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)){
        alert('숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.');
        $('#pw').val("");
        $('#pwCheck').val("");
        $('#pw').focus();
        return false;
    }else if(checkNumber <0 || checkEnglish <0){
        alert("숫자와 영문자를 혼용하여야 합니다.");
        $('#pw').val("");
        $('#pwCheck').val("");
        $('#pw').focus();
        return false;
    }else if(/(\w)\1\1\1/.test(pw)){
        alert('같은 문자를 4번 이상 사용하실 수 없습니다.');
        $('#pw').val("");
        $('#pwCheck').val("");
        $('#pw').focus();
        return false;
    }else if(pw.search(id) > -1){
        alert("비밀번호에 아이디가 포함되었습니다.");
        $('#pw').val("");
        $('#pwCheck').val("");
        $('#pw').focus();
        return false;
    }

    if($('#pw').val() != $('#pwCheck').val()){
        alert('비밀번호와 비밀번호 확인의 값이 다릅니다');
        $('#pw').val("");
        $('#pwCheck').val("");
        $('#pw').focus();
        return false;
    }

    if(!$('#mbrLnm').val()){
        alert('(한글/성)을 입력하세요');
        $('#mbrLnm').focus();
        return false;
    }
    if(!$('#mbrFnm').val()){
        alert('(한글/이름)을 입력하세요');
        $('#mbrFnm').focus();
        return false;
    }
    if(!$('#engLnm').val()){
        alert('(영문/성)을 입력하세요');
        $('#engLnm').focus();
        return false;
    }
    if(!$('#engFnm').val()){
        alert('(영문/이름)을 입력하세요');
        $('#engFnm').focus();
        return false;
    }
    if(!$('#bthDt').val()){
        alert('생년월일을 입력하세요');
        $('#bthDt').focus();
        return false;
    }
    if(!$('#sample6_postcode').val()){
        alert('우편번호를 입력하세요');
        $('#sample6_postcode').focus();
        return false;
    }
    if(!$('#sample6_address').val()){
        alert('주소를 입력하세요');
        $('#sample6_address').focus();
        return false;
    }
    if(!$('#mblFonNo').val()){
        alert('휴대폰 번호를 입력하세요');
        $('#mblFonNo').val("");
        $('#mblFonNo').focus();
        return false;
    }
    if(!expHpText.test($('#mblFonNo').val())){
        alert('휴대폰 번호 형식을 확인하세요 \n하이픈(-)을 포함해야합니다');
        $('#mblFonNo').val("");
        $('#mblFonNo').focus();
        return false;
    }
    if(!$('#emAdr').val()){
        alert('이메일을 입력하세요');
        $('#emAdr').val("");
        $('#emAdr').focus();
        return false;
    }
    if(!expEmailText.test($('#emAdr').val())){
        alert('이메일 형식을 확인하세요');
        $('#emAdr').val("");
        $('#emAdr').focus();
        return false;
    }
    return true;

}