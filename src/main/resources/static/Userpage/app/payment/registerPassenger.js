'use strict';
let memIndex;
let memUserId;
let memKorFirstName;
let memKorLastName;
let memBirth;
let memGender;
let memNation;
let memEmail;
let memHpNation;
let memHp;
let adult = 0;
let child = 0;
let baby = 0;

function adult_memberOk(i){
    if($(`.adultEdit${i}`).val()=='확인'){
        if(!$(`.adultFirstName${i}`).val()){
            alert('성(한글)을 입력하세요')
        }else if(!$(`.adultLastName${i}`).val()){
            alert('이름(한글)을 입력하세요')
        }else if(!$(`.adultBirth${i}`).val()){
            alert('생년월일을 입력하세요')
        }else if(!$(`.adultId${i}`).val()){
            alert('회원 아이디을 입력하세요')
        }else {
            $.get("/api/user/searchToReser/" + $(`.adultBirth${i}`).val() + "/" + $(`.adultFirstName${i}`).val() + "/" + $(`.adultLastName${i}`).val(), function (response) {
                if(response.data != null){
                    if (response.data.memUserid == $(`.adultId${i}`).val().toLowerCase()) {
                        $.get("/api/reservation/member/" + $(`#${(i - 1) * 2}`).val() + "/" + response.data.memIndex, function (response) {});
                        $.get("/api/reservation/member/" + $(`#${(i - 1) * 2 + 1}`).val() + "/" + response.data.memIndex, function (response) {});
                        alert('확인되었습니다.')
                        $(`.adultFirstName${i}`).attr('readonly', true);
                        $(`.adultLastName${i}`).attr('readonly', true);
                        $(`.adultBirth${i}`).attr('readonly', true);
                        $(`.adultId${i}`).attr('readonly', true);
                        $(`.adultEdit${i}`).val('수정')
                    } else {
                        alert('일치하는 회원 정보가 없습니다.');
                        $(`.adultId${i}`).val('');
                    }
                }else{
                    alert('일치하는 회원 정보가 없습니다.');
                    $(`.adultId${i}`).val('');
                }
            });
        }
    }else if($(`.adultEdit${i}`).val()=='수정') {
        $(`.adultFirstName${i}`).attr('readonly', false);
        $(`.adultLastName${i}`).attr('readonly', false);
        $(`.adultBirth${i}`).attr('readonly', false);
        $(`.adultId${i}`).attr('readonly', false);
        $(`.adultEdit${i}`).val('확인')
        $.get("/api/reservation/member/"+$(`#${(i-1)*2}`).val()+"/-1", function(){});
        $.get("/api/reservation/member/"+$(`#${(i-1)*2+1}`).val()+"/-1", function(){});
        $("input:radio[name='adultGender1'][value='남자']").attr('disabled', false);
        $("input:radio[name='adultGender1'][value='여자']").attr('disabled', false);
        $('.adultNation1').attr('disabled', false);
    }
}
function child_memberOk(i){
    if($(`.childEdit${i}`).val()=='확인'){
        if(!$(`.childFirstName${i}`).val()){
            alert('성(한글)을 입력하세요')
        }else if(!$(`.childLastName${i}`).val()){
            alert('이름(한글)을 입력하세요')
        }else if(!$(`.childBirth${i}`).val()){
            alert('생년월일을 입력하세요')
        }else if(!$(`.childId${i}`).val()){
            alert('회원 아이디을 입력하세요')
        }else {
            $.get("/api/user/searchToReser/" + $(`.childBirth${i}`).val() + "/" + $(`.childFirstName${i}`).val() + "/" + $(`.childLastName${i}`).val(), function (response) {
                if(response.data != null) {
                    if (response.data.memUserid == $(`.childId${i}`).val().toLowerCase()) {
                        $.get("/api/reservation/member/" + $(`#${(Number(adult) + i - 1) * 2}`).val() + "/" + response.data.memIndex, function (response) {
                        });
                        $.get("/api/reservation/member/" + $(`#${(Number(adult) + i - 1) * 2 + 1}`).val() + "/" + response.data.memIndex, function (response) {
                        });
                        alert('확인되었습니다.')
                        $(`.childFirstName${i}`).attr('readonly', true);
                        $(`.childLastName${i}`).attr('readonly', true);
                        $(`.childBirth${i}`).attr('readonly', true);
                        $(`.childId${i}`).attr('readonly', true);
                        $(`.childEdit${i}`).val('수정')
                    } else {
                        alert('일치하는 회원 정보가 없습니다.');
                        $(`.childId${i}`).val('');
                    }
                }
            });
        }
    }else if($(`.childEdit${i}`).val()=='수정'){
        $(`.childFirstName${i}`).attr('readonly',false);
        $(`.childLastName${i}`).attr('readonly',false);
        $(`.childBirth${i}`).attr('readonly',false);
        $(`.childId${i}`).attr('readonly',false);
        $(`.childEdit${i}`).val('확인')
        $.get("/api/reservation/member/"+$(`#${(Number(adult)+i-1)*2}`).val()+"/-1", function(){});
        $.get("/api/reservation/member/"+$(`#${(Number(adult)+i-1)*2+1}`).val()+"/-1", function(){});
        $("input:radio[name='childGender1'][value='남자']").attr('disabled', false);
        $("input:radio[name='childGender1'][value='여자']").attr('disabled', false);
        $('.childNation1').attr('disabled', false);
    }
}

$(function () {
    // 비회원 회원 구분, 회원 인덱스 가져오기
    if($('#memberApiResponse').val() == '비회원'){
        memIndex = 0;
    }else{
        memIndex = $('#memberApiResponse').val().split(',')[0].substring($('#memberApiResponse').val().search('memIndex')+9, $('#memberApiResponse').val().split(',')[0].length);
        memUserId = $('#memberApiResponse').val().split(',')[1].substring(11, $('#memberApiResponse').val().split(',')[1].length);
        memKorFirstName = $('#memberApiResponse').val().split(',')[3].substring(17, $('#memberApiResponse').val().split(',')[3].length);
        memKorLastName = $('#memberApiResponse').val().split(',')[4].substring(16, $('#memberApiResponse').val().split(',')[4].length);
        memBirth = $('#memberApiResponse').val().split(',')[11].substring(10, $('#memberApiResponse').val().split(',')[11].length);
        memGender = $('#memberApiResponse').val().split(',')[10].substring(11, $('#memberApiResponse').val().split(',')[10].length);
        memNation = $('#memberApiResponse').val().split(',')[13].substring(11, $('#memberApiResponse').val().split(',')[13].length);
        memEmail = $('#memberApiResponse').val().split(',')[9].substring(10, $('#memberApiResponse').val().split(',')[9].length);
        memHpNation = $('#memberApiResponse').val().split(',')[7].substring(13, $('#memberApiResponse').val().split(',')[7].length);
        memHp = $('#memberApiResponse').val().split(',')[8].substring(7, $('#memberApiResponse').val().split(',')[8].length);
    }
    // 쿠키갯수(인원수 * 2) 구하기
    let personNum = 0
    for( let i = 0 ; i < 60; i++){
        if(document.getElementById(`${i}`)){
            personNum = personNum + 1;
        }
    }


    // 구간 2 정보 출력
    let itemList = new Vue({
        el : '#itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });
    function searchStart(index){
        $.get("/api/reservation/"+index, function(response){
            // 검색 데이터
            itemList.itemList = response.data;
        });
    }


    let reSchBasicPrice1 = $('.reSchBasicPrice1').val();
    let reSchBasicPrice2 = $('.reSchBasicPrice2').val();
    let reSchDepPoint2 = $('.reSchDepPoint2').val();
    let reSchArrPoint2 = $('.reSchArrPoint2').val();
    // 구간별 필요사항
    if($('#reTripKind').html() == '왕복'){
        searchStart($('#1').val());
        $('.tot_price11').html(((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2).toLocaleString('ko-KR'));
        $('.tot_price22').html((10000*personNum/2).toLocaleString('ko-KR'))
        $('.tot_price33').html((8000*personNum/2).toLocaleString('ko-KR'))
        $('.finaltotalpricee').html(((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2).toLocaleString('ko-KR'));
        $('.strrr1').html((Number(reSchBasicPrice1)*personNum/2).toLocaleString('ko-KR'));
        $('.strrr2').html((Number(reSchBasicPrice2)*personNum/2).toLocaleString('ko-KR'));
        $('.final_tit').html((10000*personNum/2).toLocaleString('ko-KR'))
        $('.way1_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.way2_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.taxpriceprint').html((8000*personNum/2).toLocaleString('ko-KR'))
        $('#finalPrice').html((((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2)+(10000*personNum/2)+(8000*personNum/2)).toLocaleString('ko-KR'));
        $('.DepPoint').html(reSchDepPoint2.substr(reSchDepPoint2.length-4, 3))
        $('.ArrPoint').html(reSchArrPoint2.substr(reSchArrPoint2.length-4, 3))
    }
    if($('#reTripKind').html() == '편도'){
        $('.arrow_img').css('display', "none");
        $('.trip_info2').css('display', "none");
        $('.jour2').css("visibility","hidden");
        $('.onewaywww').css('display', "none");
        $('.tot_price11').html(((Number(reSchBasicPrice1))*personNum/2).toLocaleString('ko-KR'));
        $('.tot_price22').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.tot_price33').html((4000*personNum/2).toLocaleString('ko-KR'))
        $('.finaltotalpricee').html(((Number(reSchBasicPrice1))*personNum/2).toLocaleString('ko-KR'));
        $('.strrr1').html((Number(reSchBasicPrice1)*personNum/2).toLocaleString('ko-KR'));
        $('.final_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.way1_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.taxpriceprint').html((4000*personNum/2).toLocaleString('ko-KR'))
        $('#finalPrice').html(((Number(reSchBasicPrice1)*personNum/2)+(5000*personNum/2)+(4000*personNum/2)).toLocaleString('ko-KR'));
    }
    if($('#reTripKind').html() == '다구간'){
        searchStart($('#1').val());
        $('.tot_price11').html(((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2).toLocaleString('ko-KR'));
        $('.tot_price22').html((10000*personNum/2).toLocaleString('ko-KR'))
        $('.tot_price33').html((8000*personNum/2).toLocaleString('ko-KR'))
        $('.finaltotalpricee').html(((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2).toLocaleString('ko-KR'));
        $('.strrr1').html((Number(reSchBasicPrice1)*personNum/2).toLocaleString('ko-KR'));
        $('.strrr2').html((Number(reSchBasicPrice2)*personNum/2).toLocaleString('ko-KR'));
        $('.final_tit').html((10000*personNum/2).toLocaleString('ko-KR'))
        $('.way1_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.way2_tit').html((5000*personNum/2).toLocaleString('ko-KR'))
        $('.taxpriceprint').html((8000*personNum/2).toLocaleString('ko-KR'))
        $('#finalPrice').html((((Number(reSchBasicPrice1)+Number(reSchBasicPrice2))*personNum/2)+(10000*personNum/2)+(8000*personNum/2)).toLocaleString('ko-KR'));
        $('.DepPoint').html(reSchDepPoint2.substr(reSchDepPoint2.length-4, 3))
        $('.ArrPoint').html(reSchArrPoint2.substr(reSchArrPoint2.length-4, 3))
    }

    // 인원수 구하기
    let peopleKind = $('.person_cnt').html()
    let peice = peopleKind.split(' ')
    if(peice.length == 2){
        if(peice[0] == '성인'){
            adult = peice[1].substr(0, peice[1].length)
        }else if(peice[0] == '소아'){
            child = peice[1].substr(0, peice[1].length)
        }
    }else if(peice.length == 4){
        adult = peice[1].substr(0, peice[1].length)
        if(peice[2] == '소아'){
            child = peice[3].substr(0, peice[3].length)
        }else if(peice[2] == '유아'){
            baby = peice[3].substr(0, peice[3].length)
        }
    }else if(peice.length == 6){
        adult = peice[1].substr(0, peice[1].length)
        child = peice[3].substr(0, peice[3].length)
        baby = peice[5].substr(0, peice[5].length)
    }

    function adults(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper" class="tableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">성인 ${i}</p><input type="checkbox" class="userCheck" id="adultUserCheck${i}">
                            <p class="check_txt" id="adultCheckTxt${i}">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required class="name name1 cursor adultFirstName${i}"><input type="text" placeholder="이름" name="last_name" value="" required class="name name2 adultLastName${i} cursor">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="adultGender${i}" class="adultGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="adultGender${i}" class="adultGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor adultBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor adultNation${i}">
                                <option value="대한민국" selected="selected">대한민국</option>
                                <option value="대만">대만</option>
                                <option value="몽골">몽골</option>
                                <option value="미얀마">미얀마</option>
                                <option value="베트남">베트남</option>
                                <option value="인도">인도</option>
                                <option value="인도네시아">인도네시아</option>
                                <option value="캄보디아">캄보디아</option>
                                <option value="필리핀">필리핀</option>
                                <option value="홍콩">홍콩</option>
                                <option value="그리스">그리스</option>
                                <option value="네덜란드">네덜란드</option>
                                <option value="덴마크">덴마크</option>
                                <option value="노르웨이">노르웨이</option>
                                <option value="독일">독일</option>
                                <option value="벨기에">벨기에</option>
                                <option value="스웨덴">스웨덴</option>
                                <option value="스위스">스위스</option>
                                <option value="아이슬란드">아이슬란드</option>
                                <option value="영국">영국</option>
                                <option value="이탈리아">이탈리아</option>
                                <option value="체코">체코</option>
                                <option value="포르투갈">포르투갈</option>
                                <option value="폴란드">폴란드</option>
                                <option value="프랑스">프랑스</option>
                                <option value="헝가리">헝가리</option>
                                <option value="이집트">이집트</option>
                                <option value="미국">미국</option>
                                <option value="멕시코">멕시코</option>
                                <option value="브라질">브라질</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <table class="options_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <td>회원 아이디</td>
                        <td><input type="text" name="id" class="id cursor adultId${i}" style="text-transform:uppercase;"><input type="button" value="확인"
                                class="butt_edit adultEdit${i}" onclick="adult_memberOk(${i})"></td>
                        <td>추가할인<img src="/userpage/lib/img/discount.PNG" alt="" class="discount"></td>
                        <td>
                            <select name="discount" title="추가할인 선택" class="p90 cursor adultDiscount${i}"
                                onchange="fnBlockDupDisc(this, '', 'DIS1,DIS2,DIS3,DIS4,DIS5,DIS9')">
                                <option value="">선택</option>
                                <optgroup label="<운임 40% / 공항세 50% 할인>" groupcd="DIS1">
                                    <option value="DIS">1~4급 장애인 본인 또는 중증 장애인 본인</option>
                                    <option value="DISAT">1~3급 장애인 동반보호자 1명 또는 중증 장애인의 동반보호자 1명</option>
                                    <option value="NM13AT">1~3급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM17">국가유공상이자 본인</option>
                                    <option value="NM518J">5/18 민주유공 부상자 본인</option>
                                    <option value="NMETC">국가유공자(고엽제)</option>
                                </optgroup>
                                <optgroup label="<운임 40% 할인>" groupcd="DIS2">
                                    <option value="NM1">국가유공자 본인 및 유족</option>
                                    <option value="NM14AT">4급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM2">독립유공자 본인</option>
                                    <option value="NM22">독립유공자 유족</option>
                                    <option value="NM2AT">독립유공자 동반보호자 1명</option>
                                    <option value="NM518">5/18 민주유공자 본인</option>
                                    <option value="NM518AT">5/18 민주유공자 유족</option>
                                </optgroup>
                                <optgroup label="<운임 10% 할인>" groupcd="DIS5">
                                    <option value="JIR1">제주도민</option>
                                    <option value="JIR2">재외 제주도민</option>
                                    <option value="JIR3">명예 제주도민 및 배우자</option>
                                    <option value="MIL">국방부 소속 군장병</option>
                                    <option value="MIL2">군인 공무원</option>
                                    <option value="MIL3">군무원</option>
                                </optgroup>
                                <optgroup label="<공항세 50% 할인>" groupcd="DIS6">
                                    <option value="DIS56">5~6급 장애인 본인 또는 경증 장애인 본인</option>
                                    <option value="ETC1">고엽제 피해자</option>
                                    <option value="ETC2">우수 숙련기술자</option>
                                    <option value="ETC3">숙련기술자</option>
                                    <option value="ETC4">대한민국명장</option>
                                    <option value="ETC5">전국기능경기대회입상자</option>
                                    <option value="ETC6">국제기능올림픽입상자</option>
                                    <option value="ETC7">기초생활수급대상자</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }
    function childs(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">소아 ${i}</p><input type="checkbox" class="userCheck" id="childUserCheck${i}">
                            <p class="check_txt" id="childCheckTxt${i}">회원 본인이 탑승하지 않는 경우 체크 해 주세요.</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required
                                class="name name1 cursor childFirstName${i}"><input type="text" placeholder="이름"
                                name="last_name" value="" required class="name name2 cursor childLastName${i}">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="childGender${i}" class="childGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="childGender${i}" class="childGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor childBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor childNation${i}">
                                <option value="대한민국" selected="selected">대한민국</option>
                                <option value="대만">대만</option>
                                <option value="몽골">몽골</option>
                                <option value="미얀마">미얀마</option>
                                <option value="베트남">베트남</option>
                                <option value="인도">인도</option>
                                <option value="인도네시아">인도네시아</option>
                                <option value="캄보디아">캄보디아</option>
                                <option value="필리핀">필리핀</option>
                                <option value="홍콩">홍콩</option>
                                <option value="그리스">그리스</option>
                                <option value="네덜란드">네덜란드</option>
                                <option value="덴마크">덴마크</option>
                                <option value="노르웨이">노르웨이</option>
                                <option value="독일">독일</option>
                                <option value="벨기에">벨기에</option>
                                <option value="스웨덴">스웨덴</option>
                                <option value="스위스">스위스</option>
                                <option value="아이슬란드">아이슬란드</option>
                                <option value="영국">영국</option>
                                <option value="이탈리아">이탈리아</option>
                                <option value="체코">체코</option>
                                <option value="포르투갈">포르투갈</option>
                                <option value="폴란드">폴란드</option>
                                <option value="프랑스">프랑스</option>
                                <option value="헝가리">헝가리</option>
                                <option value="이집트">이집트</option>
                                <option value="미국">미국</option>
                                <option value="멕시코">멕시코</option>
                                <option value="브라질">브라질</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <table class="options_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <td>회원 아이디</td>
                        <td><input type="text" name="id" class="id cursor childId${i}" style="text-transform:uppercase;"><input type="button" value="확인"
                                class="butt_edit childEdit${i}" onclick="child_memberOk(${i})"></td>
                        <td>추가할인<img src="/userpage/lib/img/discount.PNG" alt="" class="discount"></td>
                        <td>
                            <select name="discount" title="추가할인 선택" class="p90 cursor childDiscount${i}"
                                onchange="fnBlockDupDisc(this, '', 'DIS1,DIS2,DIS3,DIS4,DIS5,DIS9')">
                                <option value="">선택</option>
                                <optgroup label="<운임 40% / 공항세 50% 할인>" groupcd="DIS1">
                                    <option value="DIS">1~4급 장애인 본인 또는 중증 장애인 본인</option>
                                    <option value="DISAT">1~3급 장애인 동반보호자 1명 또는 중증 장애인의 동반보호자 1명</option>
                                    <option value="NM13AT">1~3급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM17">국가유공상이자 본인</option>
                                    <option value="NM518J">5/18 민주유공 부상자 본인</option>
                                    <option value="NMETC">국가유공자(고엽제)</option>
                                </optgroup>
                                <optgroup label="<운임 40% 할인>" groupcd="DIS2">
                                    <option value="NM1">국가유공자 본인 및 유족</option>
                                    <option value="NM14AT">4급 국가유공상이자의 동반보호자 1명</option>
                                    <option value="NM2">독립유공자 본인</option>
                                    <option value="NM22">독립유공자 유족</option>
                                    <option value="NM2AT">독립유공자 동반보호자 1명</option>
                                    <option value="NM518">5/18 민주유공자 본인</option>
                                    <option value="NM518AT">5/18 민주유공자 유족</option>
                                </optgroup>
                                <optgroup label="<운임 10% 할인>" groupcd="DIS5">
                                    <option value="JIR1">제주도민</option>
                                    <option value="JIR2">재외 제주도민</option>
                                    <option value="JIR3">명예 제주도민 및 배우자</option>
                                    <option value="MIL">국방부 소속 군장병</option>
                                    <option value="MIL2">군인 공무원</option>
                                    <option value="MIL3">군무원</option>
                                </optgroup>
                                <optgroup label="<공항세 50% 할인>" groupcd="DIS6">
                                    <option value="DIS56">5~6급 장애인 본인 또는 경증 장애인 본인</option>
                                    <option value="ETC1">고엽제 피해자</option>
                                    <option value="ETC2">우수 숙련기술자</option>
                                    <option value="ETC3">숙련기술자</option>
                                    <option value="ETC4">대한민국명장</option>
                                    <option value="ETC5">전국기능경기대회입상자</option>
                                    <option value="ETC6">국제기능올림픽입상자</option>
                                    <option value="ETC7">기초생활수급대상자</option>
                                </optgroup>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }
    function babys(i){
        $('#pass_info_title').after(
            `<div id="tableWrapper" class="babyTableWrapper">
                <table class="required_table">
                    <colgroup>
                        <col width="8%">
                        <col width="42%">
                        <col width="8%">
                        <col width="42%">
                    </colgroup>
                    <tr>
                        <th colspan="4">
                            <p class="nop">유아 ${i}</p>
                        </th>
                    </tr>
                    <tr>
                        <td class="required">이름</td>
                        <td>
                            <input type="text" placeholder="성" name="first_name" value="" required
                                class="name name1 cursor babyFirstName${i}"><input type="text" placeholder="이름"
                                name="last_name" value="" required class="name name2 cursor babyLastName${i}">
                        </td>
                        <td class="required">성별</td>
                        <td class="genderRadio">
                            <label class="radio_wrap cursor men">
                                <input type="radio" name="babyGender${i}" class="babyGender${i}" id="mam" value="남자"><span>남자</span>
                            </label>
                            <label class="radio_wrap cursor">
                                <input type="radio" name="babyGender${i}" class="babyGender${i}" id="woman" value="여자"><span>여자</span>
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td class="required">생년월일</td>
                        <td><input type="text" value="" name="birth" placeholder="YYYYMMDD (예. 19820626)"
                                class="p90 cursor babyBirth${i}"></td>
                        <td class="required">국적</td>
                        <td>
                            <select name="nationality" class="p90 cursor babyNation${i}">
                                <option value="대한민국" selected="selected">대한민국</option>
                                <option value="대만">대만</option>
                                <option value="몽골">몽골</option>
                                <option value="미얀마">미얀마</option>
                                <option value="베트남">베트남</option>
                                <option value="인도">인도</option>
                                <option value="인도네시아">인도네시아</option>
                                <option value="캄보디아">캄보디아</option>
                                <option value="필리핀">필리핀</option>
                                <option value="홍콩">홍콩</option>
                                <option value="그리스">그리스</option>
                                <option value="네덜란드">네덜란드</option>
                                <option value="덴마크">덴마크</option>
                                <option value="노르웨이">노르웨이</option>
                                <option value="독일">독일</option>
                                <option value="벨기에">벨기에</option>
                                <option value="스웨덴">스웨덴</option>
                                <option value="스위스">스위스</option>
                                <option value="아이슬란드">아이슬란드</option>
                                <option value="영국">영국</option>
                                <option value="이탈리아">이탈리아</option>
                                <option value="체코">체코</option>
                                <option value="포르투갈">포르투갈</option>
                                <option value="폴란드">폴란드</option>
                                <option value="프랑스">프랑스</option>
                                <option value="헝가리">헝가리</option>
                                <option value="이집트">이집트</option>
                                <option value="미국">미국</option>
                                <option value="멕시코">멕시코</option>
                                <option value="브라질">브라질</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>`
        );
    }


    if(memIndex == 0){ // 회원이 아니라면
        if (adult === 0){
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
        }else{
            for(let i = baby ; i > 0 ; i--){
                babys(i);
            }
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            for(let i = adult ; i > 0 ; i--){
                adults(i);
            }
        }
        $('.userCheck').css('display','none');
        $('.check_txt').css('display','none');


    }else{ // 회원이라면
        $('.input_email').val(memEmail);
        $('#countryNum').val(memHpNation).prop("selected",true);
        $('.input_phone').val(memHp);
        $('.userCheck').css('display','none');
        $('.check_txt').css('display','none');
        if (adult === 0){
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            $('.childFirstName1').val(memKorFirstName);
            $('.childLastName1').val(memKorLastName);
            $("input:radio[name='childGender1'][value='" + memGender + "']").attr('checked', true);
            $('.childBirth1').val(memBirth);
            $('.childNation1').val(memNation).prop("selected",true);
            $('.childId1').val(memUserId.toUpperCase());
            $('.childFirstName1').attr('readonly', true);
            $('.childLastName1').attr('readonly', true);
            $('.childBirth1').attr('readonly', true);
            $('.childId1').attr('readonly', true);
            $("input:radio[name='childGender1'][value='남자']").attr('disabled', true);
            $("input:radio[name='childGender1'][value='여자']").attr('disabled', true);
            $('.childNation1').attr('disabled', true);
            $('.childEdit1').val('수정');
            $('.userCheck').css('display','none');
            $('.check_txt').css('display','none');
            $('#childUserCheck1').css('display','inline');
            $('#childCheckTxt1').css('display','inline');
            $.get("/api/reservation/member/"+$('#0').val()+"/"+memIndex, function(){});
            $.get("/api/reservation/member/"+$('#1').val()+"/"+memIndex, function(){});

            $('#childUserCheck1').on('change', function (){
                if($('#childUserCheck1').is(":checked")){
                    $('.childFirstName1').attr('readonly', false);
                    $('.childLastName1').attr('readonly', false);
                    $('.childBirth1').attr('readonly', false);
                    $("input:radio[name='childGender1'][value='남자']").attr('disabled', false);
                    $("input:radio[name='childGender1'][value='여자']").attr('disabled', false);
                    $('.childNation1').attr('disabled', false);
                    $('.childFirstName1').val('');
                    $('.childLastName1').val('');
                    $('.childBirth1').val('');
                }else{
                    $('.childFirstName1').val(memKorFirstName);
                    $('.childLastName1').val(memKorLastName);
                    $("input:radio[name='childGender1'][value='" + memGender + "']").attr('checked', true);
                    $('.childBirth1').val(memBirth);
                    $('.childNation1').val(memNation).prop("selected",true);
                    $('.childId1').val(memUserId.toUpperCase());
                    $('.childFirstName1').attr('readonly', true);
                    $('.childLastName1').attr('readonly', true);
                    $('.childBirth1').attr('readonly', true);
                    $("input:radio[name='childGender1'][value='남자']").attr('disabled', true);
                    $("input:radio[name='childGender1'][value='여자']").attr('disabled', true);
                    $('.childNation1').attr('disabled', true);
                    $.get("/api/reservation/member/"+$('#0').val()+"/"+memIndex, function(){});
                    $.get("/api/reservation/member/"+$('#1').val()+"/"+memIndex, function(){});
                    $('.childEdit1').val('수정');
                }
            })

        }else{
            for(let i = baby ; i > 0 ; i--){
                babys(i);
            }
            for(let i = child ; i > 0 ; i--){
                childs(i);
            }
            for(let i = adult ; i > 0 ; i--){
                adults(i);
            }
            $('.adultFirstName1').val(memKorFirstName);
            $('.adultLastName1').val(memKorLastName);
            $("input:radio[name='adultGender1'][value='" + memGender + "']").attr('checked', true);
            $('.adultBirth1').val(memBirth);
            $('.adultNation1').val(memNation).prop("selected",true);
            $('.adultId1').val(memUserId.toUpperCase());
            $('.adultFirstName1').attr('readonly', true);
            $('.adultLastName1').attr('readonly', true);
            $('.adultBirth1').attr('readonly', true);
            $('.adultId1').attr('readonly', true);
            $("input:radio[name='adultGender1'][value='남자']").attr('disabled', true);
            $("input:radio[name='adultGender1'][value='여자']").attr('disabled', true);
            $('.adultNation1').attr('disabled', true);
            $('.adultEdit1').val('수정');
            $('.userCheck').css('display','none');
            $('.check_txt').css('display','none');
            $('#adultUserCheck1').css('display','inline');
            $('#adultCheckTxt1').css('display','inline');
            $.get("/api/reservation/member/"+$('#0').val()+"/"+memIndex, function(){});
            $.get("/api/reservation/member/"+$('#1').val()+"/"+memIndex, function(){});

            $('#adultUserCheck1').on('change', function (){
                if($('#adultUserCheck1').is(":checked")){
                    $('.adultFirstName1').attr('readonly', false);
                    $('.adultLastName1').attr('readonly', false);
                    $('.adultBirth1').attr('readonly', false);
                    $("input:radio[name='adultGender1'][value='남자']").attr('disabled', false);
                    $("input:radio[name='adultGender1'][value='여자']").attr('disabled', false);
                    $('.adultNation1').attr('disabled', false);
                    $('.adultFirstName1').val('');
                    $('.adultLastName1').val('');
                    $('.adultBirth1').val('');
                }else{
                    $('.adultFirstName1').val(memKorFirstName);
                    $('.adultLastName1').val(memKorLastName);
                    $("input:radio[name='adultGender1'][value='" + memGender + "']").attr('checked', true);
                    $('.adultBirth1').val(memBirth);
                    $('.adultNation1').val(memNation).prop("selected",true);
                    $('.adultId1').val(memUserId.toUpperCase());
                    $('.adultFirstName1').attr('readonly', true);
                    $('.adultLastName1').attr('readonly', true);
                    $('.adultBirth1').attr('readonly', true);
                    $("input:radio[name='adultGender1'][value='남자']").attr('disabled', true);
                    $("input:radio[name='adultGender1'][value='여자']").attr('disabled', true);
                    $('.adultNation1').attr('disabled', true);
                    $.get("/api/reservation/member/"+$('#0').val()+"/"+memIndex, function(){});
                    $.get("/api/reservation/member/"+$('#1').val()+"/"+memIndex, function(){});
                    $('.adultEdit1').val('수정');
                }
            })
        }
    }
    function adultUpdate(a, b, c, d, e, f, g, h) {
        let jsonData;
            jsonData = {
                data : {
                    reIndex: Number(a),
                    reFirstName: b,
                    reLastName: c,
                    reBirth : d,
                    reNation : e,
                    reMemberId : f,
                    reGender : g,
                    reExtraSale : h
                }
            }
            $.ajax({
                url : "/api/reservation/updating",
                type : "PUT",
                data : JSON.stringify(jsonData),
                dataType : "text",
                contentType : "application/json",
                async: false
            });
    }
    function babyUpdate(a, b, c, d, e, f) {
        let jsonData;
        jsonData = {
            data : {
                reIndex: Number(a),
                reFirstName: b,
                reLastName: c,
                reBirth : d,
                reNation : e,
                reGender : f
            }
        }
        $.ajax({
            url : "/api/reservation/updating1",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json",
            async: false
        });
    }

    function email(a, b, c, d){
        let jsonData;
        jsonData = {
            data : {
                reIndex: Number(a),
                reEmail: b,
                reHpNation: c,
                reHp : d
            }
        }
        $.ajax({
            url : "/api/reservation/updating2",
            type : "PUT",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json",
            async: false
        });
    }

    $('.fix_next_butt').on('click',function (){
        for(let i = 1 ; i < Number(adult)+1 ; i++){
            adultUpdate(
                $(`#${(i - 1) * 2}`).val(),
                $(`.adultFirstName${i}`).val(),
                $(`.adultLastName${i}`).val(),
                $(`.adultBirth${i}`).val(),
                $(`.adultNation${i}`).val(),
                $(`.adultId${i}`).val(),
                $(`input:radio[name='adultGender${i}']:checked`).val(),
                $(`.adultDiscount${i}`).val()
            );
            adultUpdate(
                $(`#${((i-1)*2)+1}`).val(),
                $(`.adultFirstName${i}`).val(),
                $(`.adultLastName${i}`).val(),
                $(`.adultBirth${i}`).val(),
                $(`.adultNation${i}`).val(),
                $(`.adultId${i}`).val(),
                $(`input:radio[name='adultGender${i}']:checked`).val(),
                $(`.adultDiscount${i}`).val()
            );
        }
        for(let i = 1 ; i < Number(child)+1 ; i++){
            adultUpdate(
                $(`#${(Number(adult) + i - 1) * 2}`).val(),
                $(`.childFirstName${i}`).val(),
                $(`.childLastName${i}`).val(),
                $(`.childBirth${i}`).val(),
                $(`.childNation${i}`).val(),
                $(`.childId${i}`).val(),
                $(`input:radio[name='childGender${i}']:checked`).val(),
                $(`.childDiscount${i}`).val()
            );
            adultUpdate(
                $(`#${((Number(adult) + i - 1) * 2)+1}`).val(),
                $(`.childFirstName${i}`).val(),
                $(`.childLastName${i}`).val(),
                $(`.childBirth${i}`).val(),
                $(`.childNation${i}`).val(),
                $(`.childId${i}`).val(),
                $(`input:radio[name='childGender${i}']:checked`).val(),
                $(`.childDiscount${i}`).val()
            );
        }
        for(let i = 1 ; i < Number(baby)+1 ; i++){
            babyUpdate(
                $(`#${(Number(adult) + Number(child) + i - 1) * 2}`).val(),
                $(`.babyFirstName${i}`).val(),
                $(`.babyLastName${i}`).val(),
                $(`.babyBirth${i}`).val(),
                $(`.babyNation${i}`).val(),
                $(`input:radio[name='babyGender${i}']:checked`).val()
            );
            babyUpdate(
                $(`#${((Number(adult) + Number(child) + i - 1) * 2)+1}`).val(),
                $(`.babyFirstName${i}`).val(),
                $(`.babyLastName${i}`).val(),
                $(`.babyBirth${i}`).val(),
                $(`.babyNation${i}`).val(),
                $(`input:radio[name='babyGender${i}']:checked`).val()
            );
        }
        if(!$('#countryNum').val() || !$('.input_email').val() || !$('.input_phone').val()){
            alert('필수 항목을 입력해주세요.')
        }else{
            for(let i = 0 ; i < personNum ; i++){
                email(
                    $(`#${i}`).val(),
                    $('.input_email').val(),
                    $('#countryNum').val(),
                    $('.input_phone').val()
                )
            }
            window.setTimeout(goToNext, 200);
        }
    })

    function goToNext(){
        if($('#reTripKind').html() == '왕복'){
            location.href="/pages/extras/twoway"
        }
        if($('#reTripKind').html() == '편도'){
            location.href="/pages/extras/oneway"
        }
        if($('#reTripKind').html() == '다구간'){
            location.href="/pages/extras/multiway"
        }
    }










    $('.open1').on('click', function (e) {
        e.stopPropagation();
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.reservation').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open2').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.service').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open3').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $('.benefit').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open4').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.optional').slideUp(50);
        $('.point').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.open5').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideDown("fast");
        $(this).siblings().css({ "border-bottom": "none" });
        $(this).css({ "border-bottom": "3px solid #652043" });
    })
    $('.nav_all').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
    })
    $('body').on('click', function (e) {
        e.stopPropagation();
        $('.reservation').slideUp(50);
        $('.service').slideUp(50);
        $('.benefit').slideUp(50);
        $('.point').slideUp(50);
        $('.optional').slideUp(50);
        $("li[class *= 'open']").css({ "border-bottom": "none" });
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

    $(".arrow_img").on('click', function () {
        $(".arrow_img").css("display", "none");
        $(".trip_info2").slideDown(200);
        $(".arrow_up_img").css("display", "block");
    })
    $(".arrow_up_img").on('click', function () {
        $(".arrow_img").css("display", "block");
        $(".arrow_up_img").css("display", "none");
        $(".trip_info2").slideUp(200);
    })

    $("select .KRW").on('select', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })
    $("select .USD").on('click', function () {
        $("butt_ok").css("background-color", "#BDD600");
    })

    $(".list1_wrap").on("click", function () {
        $(".list2_wrap").focus();
    })



    $(window).scroll(function () {
        let y = $(".contentswrap").offset().top;    //고정할 메뉴
        if (window.pageYOffset <= $(".contentswrap").offset().top) {
            $(".fix_trip_info").css("position", "fixed");
            $(".fix_trip_info").css("top", y);
        } else {
            $(".fix_trip_info").css("top", "0px");
            $("#header").css("position", "absolute");
        }
    });

    /*하단 총액 모달창 */

    $(".info_table_wrap").css("overflow", "hidden");
    $(".info_table_wrap").css("overflow-x", "none");

    $(".img").on('click', () => {
        $(".img").css("display", "none");
        $(".img2").css("display", "block");
        $("#modal_totP_wrap").fadeIn();
        $(".fix_modal").fadeIn();
    })
    $(".close").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })
    $(".img2").on('click', () => {
        $(".img2").css("display", "none");
        $(".img").css("display", "block");
        $("#modal_totP_wrap").fadeOut();
        $(".fix_modal").fadeOut();
    })

    /*자세히 보기 */
    $(".det1").on('click', () => {
        $(".detD1").css("display", "inline-block");
    })

    $(".det2").on('click', () => {
        $(".detD2").css("display", "inline-block");
    })

    $(".plus_1").on('click', () => {
        $(".info_table_wrap").css("overflow", "scroll");
        $(".info_table_wrap").css("overflow-x", "hidden");
        $(".info_table_wrap").animate({ scrollTop: 300 }, 600);
        $(".plus_1").css("display", "none");
        $(".minus_1").css("display", "inline-block");
    })
    $(".minus_1").on('click', () => {
        $(".info_table_wrap").css("overflow", "hidden");
        $(".info_table_wrap").css("overflow-x", "none");
        $(".plus_1").css("display", "inline-block");
        $(".minus_1").css("display", "none");
    })


    $(window).scroll(function () {
        let y = $(".fix_bott_wrap").offset().top - 650;
        let h = $(document).scrollTop();
        if (window.pageYOffset <= y) {
            $(".fix_bott").css("position", "fixed");
            $(".fix_bott").css("bottom", "0px");
            $("#modal_totP_wrap").css("position", "fixed");
            $("#modal_totP_wrap").css("top", "-100px");
            $(".fix_trip_info").css("position", "fixed");
        } else {
            $(".fix_bott").css("position", "absolute");
            $("#modal_totP_wrap").css("position", "absolute");
            $("#modal_totP_wrap").css("top", y - 280);
            $(".fix_trip_info").css("position", "absolute");
        }
    });



})

// 수정 모달 창 ***********************
$(() => {
    $(".trip_edit_butt").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "block");
        $("body").css("overflow", "hidden");
    });
    $(".modal_edit_close_btn").on("click", function () {
        $("#modal_edit_jour_wrap").css("display", "none");
        $("body").css("overflow", "");
    });
});

$(() => {
    $("#round").on("click", function () {
        $(".round_wrap").css("display", "block");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#oneway").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "block");
        $(".multi_wrap").css("display", "none");
        $(".edit_jour_wrap").css("height", "450px");
    });
    $("#multi").on("click", function () {
        $(".round_wrap").css("display", "none");
        $(".oneway_wrap").css("display", "none");
        $(".multi_wrap").css("display", "block");
        $(".edit_jour_wrap").css("height", "520px");
    });
});

//person-layer
$(() => {
    $(".person_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".person_down_img").css({ display: "none" });
        $(".person_up_img").css({ display: "inline-block" });
        $(".person_pop_layer").slideDown("fast");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img").css({ display: "inline-block" });
        $(".go_up_img").css({ display: "none" });
        $(".go_layer").slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ display: "inline-block" });
        $(".go_up_img2").css({ display: "none" });
        $(".go_layer2").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_up_img").css({ display: "none" });
        $(".arrive_layer").slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ display: "inline-block" });
        $(".arrive_up_img2").css({ display: "none" });
        $(".arrive_layer2").slideUp(50);
    });
});

// go-layer
$(() => {
    // 옵션1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();

        $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt").addClass("on");
        $(".go_layer").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 도착지1 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ display: "inline-block" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".go_select_opt2").addClass("on");
        $(".go_layer2").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 도착지2 레이어 닫기
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);

        // 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
});

// arrive-layer
$(() => {
    // 옵션 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt").addClass("on");
        $(".arrive_layer").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });

    // 옵션 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").css({ color: "rgb(145, 0, 70)" });
        $(".arrive_select_opt2").addClass("on");
        $(".arrive_layer2").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        // 출발지2 레이어 닫기
        e.stopPropagation();

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        // 다구간 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);
        e.stopPropagation();

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);
    });
    $(".person_pop_layer").on("click", function (e) {
        e.stopPropagation();
    });
});

// 화면 클릭
$(() => {
    $("body").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass("on");
        $(".go_layer").slideUp(50);

        // 사람 수 선택 닫기
        $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".person_down_img").css({ display: "inline-block" });
        $(".person_up_img").css({ display: "none" });
        $(".person_pop_layer").slideUp(50);

        $(".go_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass("on");
        $(".go_layer2").slideUp(50);

        $(".arrive_layerbtn").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass("on");
        $(".arrive_layer").slideUp(50);

        $(".arrive_layerbtn2").css({ color: "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass("on");
        $(".arrive_layer2").slideUp(50);
    });
});

function fnSetPaxCountDown(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
        iPaxCount = iAdultCount + iChildCount;

    switch (strPaxType) {
        case "ADULT":
            --iAdultCount;
            if (iAdultCount >= 0) {
                --iPaxCount;
            }

            if (iInfantCount > iAdultCount) {
                iInfantCount = iAdultCount;
            }

            if (iAdultCount <= 0) {
                iAdultCount = 0;
                iInfantCount = 0;
            }
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
        case "CHILD":
            --iChildCount;
            if (iChildCount >= 0) {
                --iPaxCount;
            }
            if (iChildCount <= 0) {
                iChildCount = 0;
            }

            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            --iInfantCount;
            if (iInfantCount <= 0) {
                iInfantCount = 0;
            }

            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function fnSetPaxCountUp(strPaxType, obj) {
    var btnParent = $(obj).parents("ul");

    var //
        iAdultCount = parseInt($(btnParent).find('strong[name=adultPaxCnt]').text()),
        iChildCount = parseInt($(btnParent).find('strong[name=childPaxCnt]').text()),
        iInfantCount = parseInt($(btnParent).find('strong[name=infantPaxCnt]').text()),
        iPaxCount = iAdultCount + iChildCount;

    // Count 증감
    switch (strPaxType) {
        case "ADULT":
            ++iAdultCount;
            ++iPaxCount;
            console.log(iAdultCount)
            $("strong[name=adultPaxCnt]").text(iAdultCount);
            break;
        case "CHILD":
            ++iChildCount;
            ++iPaxCount;
            $("strong[name=childPaxCnt]").text(iChildCount);
            break;
        case "INFANT":
            ++iInfantCount;
            if (iInfantCount > iAdultCount && iAdultCount == 0) {
                alert('소아는 성인 한 명이 같이 동반 해야함!')
                break;
            }
            $("strong[name=infantPaxCnt]").text(iInfantCount);
            break;
    }
}

function submit1() {
    console.log("작동");
    var iAdultCount = parseInt(
            $(".person_pop_layer1").find("strong[name=adultPaxCnt]").text()
        ),
        iChildCount = parseInt(
            $(".person_pop_layer1").find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(".person_pop_layer1").find("strong[name=infantPaxCnt]").text()
        );

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount
        );
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text("성인 " + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text("소아 " + iChildCount);
    }

    // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
    // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
    $(".adultPaxCnt").val(iAdultCount);
    $(".childPaxCnt").val(iChildCount);
    $(".infantPaxCnt").val(iInfantCount);

    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");
}

function submit2() {
    console.log("작동");
    var iAdultCount = parseInt(
            $(".person_pop_layer2").find("strong[name=adultPaxCnt]").text()
        ),
        iChildCount = parseInt(
            $(".person_pop_layer2").find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(".person_pop_layer2").find("strong[name=infantPaxCnt]").text()
        );

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount
        );
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text("성인 " + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text("소아 " + iChildCount);
    }

    // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
    // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
    $(".adultPaxCnt").val(iAdultCount);
    $(".childPaxCnt").val(iChildCount);
    $(".infantPaxCnt").val(iInfantCount);

    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");
}

function submit3() {
    console.log("작동");
    var iAdultCount = parseInt(
            $(".person_pop_layer3").find("strong[name=adultPaxCnt]").text()
        ),
        iChildCount = parseInt(
            $(".person_pop_layer3").find("strong[name=childPaxCnt]").text()
        ),
        iInfantCount = parseInt(
            $(".person_pop_layer3").find("strong[name=infantPaxCnt]").text()
        );

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 소아 " + iChildCount
        );
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text(
            "성인 " + iAdultCount + " 유아 " + iInfantCount
        );
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text("성인 " + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text("소아 " + iChildCount);
    }

    // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
    // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
    $(".adultPaxCnt").val(iAdultCount);
    $(".childPaxCnt").val(iChildCount);
    $(".infantPaxCnt").val(iInfantCount);

    $(".person_layerbtn").css({ color: "rgb(0, 0, 0)" });
    $(".person_down_img").css({ display: "inline-block" });
    $(".person_up_img").css({ display: "none" });
    $(".person_pop_layer").slideUp(50);

    $(".go_layerbtn").css({ color: "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass("on");
    $(".go_layer").slideDown("fast");
}

$(function () {
    $(".infant_modal").hide();
    $(".baby_info_btn").click(function () {
        $(".child_modal").hide();
        $(".infant_modal").fadeIn(200);
        $(".infant_modal").click(function () {
            $(".infant_modal").fadeOut(200);
        });
    });

    $(".child_modal").hide();
    $(".infant_modal").hide();
    $(".child_info_btn").click(function () {
        $(".child_modal").fadeIn(200);
        $(".child_modal").click(function () {
            $(".child_modal").fadeOut(200);
        });
    });
});

function updateTrip() {
    let person = $(".person_cnt").text();
    let go1 = $("#go_area1").text();
    let arr1 = $("#arr_area1").text();

    $(".person_num").text(person);
    $(".go_default").attr("value", go1);
    $(".arrive_default").attr("value", arr1);
}

function modification() {
    let inonesoo = $('.person_num').html().split(' ');
    let modiAdult = 0;
    let modiChild = 0;
    let modiBaby = 0;
    if(inonesoo.length == 2){
        if(inonesoo[0] == '소아'){
            modiChild = Number(inonesoo[1])
        }else if(inonesoo[0] == '성인'){
            modiAdult = Number(inonesoo[1])
        }
    }else if(inonesoo.length == 4){
        if(inonesoo[2] == '유아'){
            modiAdult = Number(inonesoo[1]);
            modiBaby = Number(inonesoo[3]);
        }else if(inonesoo[2] == '소아'){
            modiAdult = Number(inonesoo[1]);
            modiChild = Number(inonesoo[3])
        }
    }else if(inonesoo.length == 6){
        modiAdult = Number(inonesoo[1]);
        modiChild = Number(inonesoo[3])
        modiBaby = Number(inonesoo[5]);
    }


    if($('input[type="radio"][name="tripType"]:checked').val() == "왕복"){

        if($('.go_date_select_optt').val()=="가는날" || $('.come_date_select_optt').val()=="오는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'comeDateSelectOptt');
            obj4.setAttribute('value', $('.come_date_select_optt').val());
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'AdultNumber');
            obj5.setAttribute('value', modiAdult);
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'ChildNumber');
            obj6.setAttribute('value', modiChild);
            f.appendChild(obj6);

            let obj7;
            obj7 = document.createElement('input');
            obj7.setAttribute('type', 'hidden');
            obj7.setAttribute('name', 'InfantNumber');
            obj7.setAttribute('value', modiBaby);
            f.appendChild(obj7);

            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityList/twoway');
            document.body.appendChild(f);
            f.submit();
        }
    }else if($('input[type="radio"][name="tripType"]:checked').val() == "편도") {
        if($('.go_date_select_optt').val()=="가는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'AdultNumber');
            obj4.setAttribute('value', modiAdult);
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'ChildNumber');
            obj5.setAttribute('value', modiChild);
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'InfantNumber');
            obj6.setAttribute('value', modiBaby);
            f.appendChild(obj6);

            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityList/oneway');
            document.body.appendChild(f);
            f.submit();
        }
    }else if($('input[type="radio"][name="tripType"]:checked').val() == "다구간") {
        if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
            $('.go_date_select_optt').val()=="가는날" || $('.go_select_optt2').val()=="출발지" ||
            $('.arrive_select_optt2').val()=="도착지" || $('.go_date_select_optt2').val()=="가는날"){
            alert('입력하신 내용을 확인해주세요');
        }else{
            let f = document.createElement('form');

            let obj1;
            obj1 = document.createElement('input');
            obj1.setAttribute('type', 'hidden');
            obj1.setAttribute('name', 'schDeparturePoint');
            obj1.setAttribute('value', $('.go_select_optt').val());
            f.appendChild(obj1);

            let obj2;
            obj2 = document.createElement('input');
            obj2.setAttribute('type', 'hidden');
            obj2.setAttribute('name', 'schArrivalPoint');
            obj2.setAttribute('value', $('.arrive_select_optt').val());
            f.appendChild(obj2);

            let obj3;
            obj3 = document.createElement('input');
            obj3.setAttribute('type', 'hidden');
            obj3.setAttribute('name', 'goDateSelectOptt');
            obj3.setAttribute('value', $('.go_date_select_optt').val());
            f.appendChild(obj3);

            let obj4;
            obj4 = document.createElement('input');
            obj4.setAttribute('type', 'hidden');
            obj4.setAttribute('name', 'schDeparturePoint1');
            obj4.setAttribute('value', $('.go_select_optt2').val());
            f.appendChild(obj4);

            let obj5;
            obj5 = document.createElement('input');
            obj5.setAttribute('type', 'hidden');
            obj5.setAttribute('name', 'schArrivalPoint1');
            obj5.setAttribute('value', $('.arrive_select_optt2').val());
            f.appendChild(obj5);

            let obj6;
            obj6 = document.createElement('input');
            obj6.setAttribute('type', 'hidden');
            obj6.setAttribute('name', 'goDateSelectOptt1');
            obj6.setAttribute('value', $('.go_date_select_optt2').val());
            f.appendChild(obj6);

            let obj7;
            obj7 = document.createElement('input');
            obj7.setAttribute('type', 'hidden');
            obj7.setAttribute('name', 'AdultNumber');
            obj7.setAttribute('value', modiAdult);
            f.appendChild(obj7);

            let obj8;
            obj8 = document.createElement('input');
            obj8.setAttribute('type', 'hidden');
            obj8.setAttribute('name', 'ChildNumber');
            obj8.setAttribute('value', modiChild);
            f.appendChild(obj8);

            let obj9;
            obj9 = document.createElement('input');
            obj9.setAttribute('type', 'hidden');
            obj9.setAttribute('name', 'InfantNumber');
            obj9.setAttribute('value', modiBaby);
            f.appendChild(obj9);

            f.setAttribute('method', 'post');
            f.setAttribute('action', '/pages/getAvailabilityList/multiway');
            document.body.appendChild(f);
            f.submit();
        }
    }
}


function comewhatday() {
    $(".whatday").html("오는날");
}
function gowhatday() {
    $(".whatday").html("가는날");
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".come_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt").val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $(".go_date_select_optt2").val(`${str1}-${str2}-${str3}`);
}

function minday() {
    $(".modal_container").fadeIn(200);
    $(".moditext").html("출발일보다 이전 날짜를 선택할 수 없습니다.");
}

function twochoice() {
    $(".cal").css({ display: "none" });
    $(".cal2").css({ display: "none" });
    $(".cal3").css({ display: "none" });
}

let bbb = "n";
let ccc = "n";
$(() => {
    // 왕복, 편도 출발지 지정
    $(".go_layer")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt").val(str);
            $(".go_layer").slideUp(50);
            $(".arrive_layer").slideDown(100);
            $(".go_select_opt").removeClass("on");
            $(".arrive_select_opt").addClass("on");
            bbb = "y";
        });
    // 왕복, 편도 도착지 지정
    $(".arrive_layer")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt").val(str);
            ccc = "y";
        });
    // 왕복 달력 모달
    $(".go_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("가는날");
        d;
    });
    $(".come_date").on("click", function () {
        $(".cal").css({ display: "flex" });
        $(".whatday").html("오는날");
    });

    // 편도 달력 모달
    $(".go_date2").on("click", function () {
        $(".cal2").css({ display: "flex" });
        $(".whatday").html("가는날");
    });

    // 다구간 출발지 지정
    $(".go_layer2")
        .find("li")
        .find("a")
        .on("click", function (e) {
            e.stopPropagation();
            let str = "";
            str = $(this).html();
            $(".go_select_optt2").val(str);
            $(".go_layer2").slideUp(50);
            $(".arrive_layer2").slideDown(100);
            $(".go_select_opt2").removeClass("on");
            $(".arrive_select_opt2").addClass("on");
            bbb = "y";
        });
    // 다구간 도착지 지정
    $(".arrive_layer2")
        .find("li")
        .find("a")
        .on("click", function () {
            let str = "";
            str = $(this).html();
            $(".arrive_select_optt2").val(str);
            ccc = "y";
        });
    // 다구간1 달력 모달
    $(".go_date3").on("click", function () {
        if (bbb == "n" && ccc == "n") {
            departure();
            $(".cal3").css({ display: "none" });
        } else if (bbb == "y" && ccc == "n") {
            arrive();
        } else {
            $(".cal3").css({ display: "flex" });
            $(".whatday").html("가는날");
        }
    });

    // 달력 X 버튼
    $(".x_box").on("click", function () {
        $(".cal").css({ display: "none" });
        $(".cal2").css({ display: "none" });
        $(".cal3").css({ display: "none" });
    });

    // 모달모음 확인 버튼
    $(".btn_cancel").on("click", function () {
        $(".modal_container").fadeOut(200);
    });
});
