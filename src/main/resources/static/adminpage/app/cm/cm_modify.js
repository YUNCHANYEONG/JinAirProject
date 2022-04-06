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

    let selPass = $('#passport_list');
    let selNation = $('#nation_list');
    let selHpNation = $('#hp_nation');

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

    // 사용자 인덱스
    let idx = $(location).attr('href').split('/')[7];

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

    search(idx);

    function search(index){
        console.log("index : " + index);
        $.get("/api/user/"+index, function (response){
            console.dir(response);
            gender = response.data.memGender;

            isEmail = response.data.memEmailIsagree;

            isSns = response.data.memSnsIsagree;

            nation = response.data.memNation;

            hpNation = response.data.memHpNation;

            console.log(nation);
            console.log(hpNation);

            $("#memIndex").text(response.data.memIndex);
            $("#userid").text(response.data.memUserid);
            $("#userpw").val(response.data.memUserpw);
            $("#zipcode").val(response.data.memZipcode);
            $("#address1").val(response.data.memAddress1);
            $("#address2").val(response.data.memAddress2);
            $("#address3").val(response.data.memAddress3);
            $("#kor_first_name").val(response.data.memKorFirstName);
            $("#kor_last_name").val(response.data.memKorLastName);
            $("#eng_first_name").val(response.data.memEngFirstName);
            $("#eng_last_name").val(response.data.memEngLastName);
            $("#email").val(response.data.memEmail);
            $("#birth").val(response.data.memBirth);
            $("#hp").val(response.data.memHp);

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
                    $('#passport_list').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < countryList.length; i++){
                if (nation === countryList[i]){
                    $('#nation_list').find(`option[value=${nation}]`).attr('selected', true);
                }
            }

            for(let i = 0; i < hpNationList.length; i++){
                if (hpNation === hpNationList[i]){
                    $('#hp_nation').find(`option[value=${hpNation}]`).attr('selected', true);
                }
            }

            let regDate = response.data.memRegdate.replace('T', '/')
            $('#regDate').text(regDate)
        })
    }

    let jsonData

    function updating(){
        jsonData = {
            data : {
                memIndex : idx,
                memUserpw : $("#userpw").val(),
                memZipcode : $("#zipcode").val(),
                memAddress1 : $("#address1").val(),
                memAddress2 : $("#address2").val(),
                memAddress3 : $("#address3").val(),
                memEmail : $("#email").val(),
                memGender : $("input[name=memGender]:checked").val(),
                memEmailIsagree : $("input[name=memEmailIsagree]:checked").val(),
                memBirth : $("#birth").val(),
                memSnsIsagree : $("input[name=memSnsIsagree]:checked").val(),
                memPassport : $("#passport_list").find("option:selected").val(),
                memNation : $("#nation_list").find("option:selected").val(),
                memHp : $("#hp").val(),
                memHpNation : $("#hp_nation").find("option:selected").val()
            }
        }
        $.ajax({
            url : "/api/user",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $("#update").click( () => {
        if(!$("#zipcode").val()
            || !$("#address1").val()
            || !$("#address2").val()
            || !$("#address3").val()
            || !$("#email").val()
            || !$("#birth").val()
            || !$("#hp").val()
        ){
            alert('입력을 확인해주세요')
        }
        else{
            updating();
            location.href = `/pages/admin/cm_list/cm_detail/${idx}`;
        }
    })

    point(idx);

    // 유저에 따른 포인트
    function point(index){
        let sum = 0;
        $.get("/api/point/user/"+index, function (response){
            for(let i = 0; i < response.data.length; i++){
                let point = response.data[i].poPoint;
                sum += point;
            }
            if( sum < 1){
                $('#point').val('-');
            }else {
                $('#point').val(sum.toLocaleString('ko-KR'));
            }
        })
    }



})(jQuery)

