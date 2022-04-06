// trip-layer
$(() => {
    $(".trip_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".trip_layerbtn").addClass('close');
        $(".trip_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".trip_down_img").css({ "display": "none" });
        $(".trip_up_img").css({ "display": "inline-block" });
        $(".trip_pop_layer").slideDown("fast");

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);

        // 도착지1 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);

    })
    $(".trip_type1").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type1").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").removeClass('close');
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
        $(".reserve_round").css({ "display": "block" });
        $(".reserve_oneway").css({ "display": "none" });
        $(".reserve_multi").css({ "display": "none" });
        $("#hidden_trip_type").val("왕복");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })
    $(".trip_type2").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type2").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").removeClass('close');
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
        $(".reserve_round").css({ "display": "none" });
        $(".reserve_oneway").css({ "display": "block" });
        $(".reserve_multi").css({ "display": "none" });
        $("#hidden_trip_type").val("편도");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })
    $(".trip_type3").on("click", function (e) {
        e.stopPropagation();
        const text = $(".trip_type3").text();
        $(".trip_select_opt").text(text);
        $(".trip_layerbtn").removeClass('close');
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);
        $(".reserve_round").css({ "display": "none" });
        $(".reserve_oneway").css({ "display": "none" });
        $(".reserve_multi").css({ "display": "block" });
        $("#hidden_trip_type").val("다구간");

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })
})

//person-layer
$(() => {
    $(".person_layerbtn").on("click", function (e) {

        e.stopPropagation();
        $(".person_layerbtn").addClass('close');
        $(".person_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".person_down_img").css({ "display": "none" });
        $(".person_up_img").css({ "display": "inline-block" });
        $(".person_pop_layer").slideDown("fast");

        // 여행 타입 레이어 닫기
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        // 예약 관련 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img").css({ "display": "inline-block" });
        $(".go_up_img").css({ "display": "none" });
        $('.go_layer').slideUp(50);

        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_down_img2").css({ "display": "inline-block" });
        $(".go_up_img2").css({ "display": "none" });
        $('.go_layer2').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_up_img").css({ "display": "none" });
        $('.arrive_layer').slideUp(50);

        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img2").css({ "display": "inline-block" });
        $(".arrive_up_img2").css({ "display": "none" });
        $('.arrive_layer2').slideUp(50);
    })

    // // 완료버튼
    // $(".submit_btn > button").on('click', function (e) {
    //     e.stopPropagation();
    //     $(".person_layerbtn").removeClass('close');
    //     $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".person_down_img").css({ "display": "inline-block" });
    //     $(".person_up_img").css({ "display": "none" });
    //     $('.person_pop_layer').slideUp(50);

    //     // 예약 관련 레이어 닫기
    //     e.stopPropagation();
    //     $(".go_layerbtn").removeClass('close');
    //     $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".go_down_img").css({ "display": "inline-block" });
    //     $(".go_up_img").css({ "display": "none" });
    //     $('.go_layer').slideUp(50);

    //     e.stopPropagation();
    //     $(".go_layerbtn2").removeClass('close');
    //     $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
    //     $(".go_down_img2").css({ "display": "inline-block" });
    //     $(".go_up_img2").css({ "display": "none" });
    //     $('.go_layer2').slideUp(50);

    //     e.stopPropagation();
    //     $(".arrive_layerbtn").removeClass('close');
    //     $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    //     $(".arrive_down_img").css({ "display": "inline-block" });
    //     $(".arrive_up_img").css({ "display": "none" });
    //     $('.arrive_layer').slideUp(50);

    //     e.stopPropagation();
    //     $(".arrive_layerbtn2").removeClass('close');
    //     $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
    //     $(".arrive_down_img2").css({ "display": "inline-block" });
    //     $(".arrive_up_img2").css({ "display": "none" });
    //     $('.arrive_layer2').slideUp(50);
    // })
})

// go-layer
$(() => {
    // 옵션1
    $(".go_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn").addClass('close');
        $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".go_select_opt").addClass('on');
        $(".go_layer").slideDown("fast");

        // 여행 타입 레이어 닫기
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);

        // 도착지1 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_down_img").css({ "display": "inline-block" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass('on');
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass('on');
        $('.arrive_layer2').slideUp(50);
    })

    // 옵션 2
    $(".go_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".go_layerbtn2").addClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(145, 0, 70)" });
        $(".go_select_opt2").addClass('on');
        $(".go_layer2").slideDown("fast");

        // 여행 타입 레이어 닫기
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);

        // 도착지2 레이어 닫기
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass('on');
        $('.arrive_layer2').slideUp(50);

        // 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

    })
})

// arrive-layer
$(() => {
    // 옵션 1
    $(".arrive_layerbtn").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn").addClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(145, 0, 70)" });
        $(".arrive_select_opt").addClass('on');
        $(".arrive_layer").slideDown("fast");

        // 출발지1 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        // 다구간 옵션2 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass('on');
        $('.go_layer2').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass('on');
        $('.arrive_layer2').slideUp(50);

        // 여행 타입 레이어 닫기
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })

    // 옵션 2
    $(".arrive_layerbtn2").on("click", function (e) {
        e.stopPropagation();
        $(".arrive_layerbtn2").addClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(145, 0, 70)" });
        $(".arrive_select_opt2").addClass('on');
        $(".arrive_layer2").slideDown("fast");

        // 출발지2 레이어 닫기
        e.stopPropagation();
        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass('on');
        $('.go_layer2').slideUp(50);

        // 다구간 옵션1 닫기
        e.stopPropagation();
        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);
        e.stopPropagation();
        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        // 여행 타입 레이어 닫기
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        // 사람 수 선택 닫기
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);
    })

    $(".person_pop_layer").on("click", function (e) {
        e.stopPropagation();
    })
})

// 화면 클릭
$(() => {
    $("body").on('click', function (e) {
        e.stopPropagation();
        $(".person_layerbtn").removeClass('close');
        $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".person_down_img").css({ "display": "inline-block" });
        $(".person_up_img").css({ "display": "none" });
        $('.person_pop_layer').slideUp(50);

        $(".trip_layerbtn").removeClass('close');
        $(".trip_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".trip_down_img").css({ "display": "inline-block" });
        $(".trip_up_img").css({ "display": "none" });
        $('.trip_pop_layer').slideUp(50);

        $(".go_layerbtn").removeClass('close');
        $(".go_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt").removeClass('on');
        $('.go_layer').slideUp(50);

        $(".go_layerbtn2").removeClass('close');
        $(".go_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".go_select_opt2").removeClass('on');
        $('.go_layer2').slideUp(50);

        $(".arrive_layerbtn").removeClass('close');
        $(".arrive_layerbtn").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt").removeClass('on');
        $('.arrive_layer').slideUp(50);

        $(".arrive_layerbtn2").removeClass('close');
        $(".arrive_layerbtn2").css({ "color": "rgb(0, 0, 0)" });
        $(".arrive_select_opt2").removeClass('on');
        $('.arrive_layer2').slideUp(50);

    })
})


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

function submit() {

    iAdultCount = parseInt($('.person_pop_layer').find('strong[name=adultPaxCnt]').text()), // 성인
        iChildCount = parseInt($('.person_pop_layer').find('strong[name=childPaxCnt]').text()), // 소아
        iInfantCount = parseInt($('.person_pop_layer').find('strong[name=infantPaxCnt]').text()) // 유아

    if (iAdultCount > 0 && iChildCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount + ' 유아 ' + iInfantCount);
    } else if (iAdultCount > 0 && iChildCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 소아 ' + iChildCount);
    } else if (iAdultCount > 0 && iInfantCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount + ' 유아 ' + iInfantCount);
    } else if (iAdultCount > 0) {
        $("strong[name=person_num]").text('성인 ' + iAdultCount);
    } else if (iChildCount > 0) {
        $("strong[name=person_num]").text('소아 ' + iChildCount);
    }

    // 중요. 확인 버튼 누를 때 성인, 소아, 유아의 수를 input:hidden에 넣음
    // 아무것도 선택 안할 경우 .adultPaxCnt의 default값 : 1로 지정
    $('.adultPaxCnt').val(iAdultCount);
    $('.childPaxCnt').val(iChildCount);
    $('.infantPaxCnt').val(iInfantCount);

    $(".person_layerbtn").removeClass('close');
    $(".person_layerbtn").css({ "color": "rgb(0, 0, 0)" });
    $(".person_down_img").css({ "display": "inline-block" });
    $(".person_up_img").css({ "display": "none" });
    $('.person_pop_layer').slideUp(50);

    $(".go_layerbtn").addClass('close');
    $(".go_layerbtn").css({ "color": "rgb(145, 0, 70)" });
    $(".go_select_opt").addClass('on');
    $(".go_layer").slideDown("fast");
}


$(function () {
    $('.infant_modal').hide();
    $('.baby_info_btn').click(function () {
        $('.child_modal').hide();
        $('.infant_modal').fadeIn(200);
        $('.infant_modal').click(function () {
            $('.infant_modal').fadeOut(200);
        })
    });

    $('.child_modal').hide();
    $('.infant_modal').hide();
    $('.child_info_btn').click(function () {
        $('.child_modal').fadeIn(200);
        $('.child_modal').click(function () {
            $('.child_modal').fadeOut(200);
        })
    });
})

function comewhatday() {
    $('.whatday').html('오는날');
}
function gowhatday() {
    $('.whatday').html('가는날');
}

// 왕복에 넣어주기
function gowhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $('.go_date_select_optt').val(`${str1}-${str2}-${str3}`);
}
function comewhatdaydd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $('.come_date_select_optt').val(`${str1}-${str2}-${str3}`);
}

// 편도에 넣어주기
function gowhatdayddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $('.go_date_select_optt').val(`${str1}-${str2}-${str3}`);
}

// 다구간에 넣어주기
function gowhatdaydddd(str) {
    let str1 = str.substr(0, 4);
    let str2 = str.substr(4, 2);
    let str3 = str.substr(6, 2);
    $('.go_date_select_optt2').val(`${str1}-${str2}-${str3}`);
}


function minday() {
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발일보다 이전 날짜를 선택할 수 없습니다.');
}
function departure() {
    $('.modal_container').fadeIn(200);
    $('.moditext').html('출발지 항목을 입력하세요.');
}
function arrive() {
    $('.modal_container').fadeIn(200);
    $('.moditext').html('도착지 항목을 입력하세요.');
}


function twochoice() {
    $('.cal').css({ "display": "none" });
    $('.cal2').css({ "display": "none" });
    $('.cal3').css({ "display": "none" });
}

let bbb = 'n';
let ccc = 'n';
$(() => {
    // 왕복, 편도 출발지 지정
    $('.go_layer').find('li').find('a').on('click', function (e) {
        e.stopPropagation();
        let str = '';
        str = $(this).html();
        $('.go_select_optt').val(str);
        $('.go_layer').slideUp(50);
        $('.arrive_layer').slideDown(100);
        $(".go_select_opt").removeClass('on');
        $(".arrive_select_opt").addClass('on');
        bbb = 'y';
    })
    // 왕복, 편도 도착지 지정
    $('.arrive_layer').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.arrive_select_optt').val(str);
        ccc = 'y';
    })
    // 왕복 달력 모달
    $('.go_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
            $('.cal').css({ "display": "none" });
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        } else {
            $('.cal').css({ "display": "flex" });
            $('.whatday').html('가는날');
        }
    })
    $('.come_date').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
            $('.cal').css({ "display": "none" });
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        } else {
            $('.cal').css({ "display": "flex" });
            $('.whatday').html('오는날');
        }
    })


    // 편도 달력 모달
    $('.go_date2').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
            $('.cal2').css({ "display": "none" });
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        } else {
            $('.cal2').css({ "display": "flex" });
            $('.whatday').html('가는날');
        }
    })


    // 다구간 출발지 지정
    $('.go_layer2').find('li').find('a').on('click', function (e) {
        e.stopPropagation();
        let str = '';
        str = $(this).html();
        $('.go_select_optt2').val(str);
        $('.go_layer2').slideUp(50);
        $('.arrive_layer2').slideDown(100);
        $(".go_select_opt2").removeClass('on');
        $(".arrive_select_opt2").addClass('on');
        bbb = 'y';
    })
    // 다구간 도착지 지정
    $('.arrive_layer2').find('li').find('a').on('click', function () {
        let str = '';
        str = $(this).html();
        $('.arrive_select_optt2').val(str);
        ccc = 'y';
    })
    // 다구간1 달력 모달
    $('.go_date3').on('click', function () {
        if (bbb == 'n' && ccc == 'n') {
            departure();
            $('.cal3').css({ "display": "none" });
        } else if (bbb == 'y' && ccc == 'n') {
            arrive();
        } else {
            $('.cal3').css({ "display": "flex" });
            $('.whatday').html('가는날');
        }
    })

    // 달력 X 버튼
    $('.x_box').on('click', function () {
        $('.cal').css({ "display": "none" });
        $('.cal2').css({ "display": "none" });
        $('.cal3').css({ "display": "none" });
    })

    // 모달모음 확인 버튼
    $('.btn_cancel').on('click', function () {
        $('.modal_container').fadeOut(200);
    })


})

// 예약 버튼
$(() => {
    $('#reservateBTN').on('click', function(){
        if($('#hidden_trip_type').val() == "왕복") {

            if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
                $('.go_date_select_optt').val()=="가는날" || $('.come_date_select_optt').val()=="오는날"){
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
                obj5.setAttribute('value', $('.adultPaxCnt').val());
                f.appendChild(obj5);

                let obj6;
                obj6 = document.createElement('input');
                obj6.setAttribute('type', 'hidden');
                obj6.setAttribute('name', 'ChildNumber');
                obj6.setAttribute('value', $('.childPaxCnt').val());
                f.appendChild(obj6);

                let obj7;
                obj7 = document.createElement('input');
                obj7.setAttribute('type', 'hidden');
                obj7.setAttribute('name', 'InfantNumber');
                obj7.setAttribute('value', $('.infantPaxCnt').val());
                f.appendChild(obj7);

                f.setAttribute('method', 'post');
                f.setAttribute('action', '/pages/getAvailabilityList/twoway');
                document.body.appendChild(f);
                f.submit();
            }
        }else if($('#hidden_trip_type').val() == "편도") {
            if($('.go_select_optt').val()=="출발지" || $('.arrive_select_optt').val()=="도착지" ||
                $('.go_date_select_optt').val()=="가는날"){
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
                obj4.setAttribute('value', $('.adultPaxCnt').val());
                f.appendChild(obj4);

                let obj5;
                obj5 = document.createElement('input');
                obj5.setAttribute('type', 'hidden');
                obj5.setAttribute('name', 'ChildNumber');
                obj5.setAttribute('value', $('.childPaxCnt').val());
                f.appendChild(obj5);

                let obj6;
                obj6 = document.createElement('input');
                obj6.setAttribute('type', 'hidden');
                obj6.setAttribute('name', 'InfantNumber');
                obj6.setAttribute('value', $('.infantPaxCnt').val());
                f.appendChild(obj6);

                f.setAttribute('method', 'post');
                f.setAttribute('action', '/pages/getAvailabilityList/oneway');
                document.body.appendChild(f);
                f.submit();
            }
        }else if($('#hidden_trip_type').val() == "다구간") {
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
                obj7.setAttribute('value', $('.adultPaxCnt').val());
                f.appendChild(obj7);

                let obj8;
                obj8 = document.createElement('input');
                obj8.setAttribute('type', 'hidden');
                obj8.setAttribute('name', 'ChildNumber');
                obj8.setAttribute('value', $('.childPaxCnt').val());
                f.appendChild(obj8);

                let obj9;
                obj9 = document.createElement('input');
                obj9.setAttribute('type', 'hidden');
                obj9.setAttribute('name', 'InfantNumber');
                obj9.setAttribute('value', $('.infantPaxCnt').val());
                f.appendChild(obj9);

                f.setAttribute('method', 'post');
                f.setAttribute('action', '/pages/getAvailabilityList/multiway');
                document.body.appendChild(f);
                f.submit();
            }
        }
    })
});