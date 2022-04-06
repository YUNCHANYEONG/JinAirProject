$(function () {
    $('.nav9').find('a').css({"color":"#BDD600"});
    $('.nav9').siblings('li').css({"display":"block"});
    $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    
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
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
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
        $('.nav9').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav9').find('a').css({"color":"#BDD600"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
    $('.contents').on('mouseover', function (e) {
        e.stopPropagation();
        $('.nav9').parent().siblings().find('a').css({"color":"#adb5bd"});
        $('.nav9').find('a').css({"color":"#BDD600"});
        $('.nav9').siblings('li').css({"display":"block"});
        $('.nav9').parent().siblings().find('li').css({"display":"none"});
        $('.nav9').siblings('li').eq(0).find('a').css({"color":"#BDD600"});
    })
});
(function ($) {
    let indexBtn = [];

    let pagination = {
        total_page : 0,
        total_element : 0,
        current_page : 0,
        curren_elements : 0
    }

    // 페이지 정보
    let showPage = new Vue({
        el : '#showPage',
        data : {
            totalElements : {},
            currentPage : {}
        }
    })

    let pointList = new Vue({
        el : '#pointList',
        data : {
            pointList : {}
        }
    })


    list(0);

    let page;

    function list(page){
        // 포인트 리스트
        $.get('/api/point?page='+page, function (response){
            console.dir(response)
            indexBtn = [];
            pagination = response.pagination;

            showPage.totalElements = pagination.currentPage;
            showPage.currentPage = pagination.currentPage;

            pointList.pointList = response.data;

            // 유저
            for(let i = 0; i < response.data.length; i++){
                $.get('/api/user/'+ response.data[i].poUserindex, function (response2){
                    $(`#userid${i}`).text(response2.data.memUserid)
                })
            }

            // 유저의 총 포인트
            for(let i = 0; i < response.data.length; i++){
                let sum = 0;
                $.get(`/api/point/user/${response.data[i].poUserindex}?page=` + page, function (response3){
                    for(let j = 0; j < response3.data.length; j++){
                        let point = response3.data[j].poPoint;
                        sum += point;
                    }
                    if(sum < 0){
                        $(`#totalPoint${i}`).text('0');
                    }else{
                        $(`#totalPoint${i}`).text(sum);
                    }
                })
            }

            for(let i = 0; i < response.data.length; i++){
                $.get('/api/point', function (response4){
                    if(response4.data[i].poPoint > 0){
                        // 적립 내역
                        $(`#addPoint${i}`).text(response4.data[i].poPoint)
                        $(`#usePoint${i}`).text('-')
                    }else{
                        // 사용 내역
                        $(`#addPoint${i}`).text('-')
                        $(`#usePoint${i}`).text(response4.data[i].poPoint)
                    }
                })
            }

            let lastPage = response.pagination.totalPages;
            let str = "";
            for (let i = 0; i < lastPage; i++) {
                str += "<td class='pageNum' id="+i+">" + (i+1) + "</td>";
            }
            $("#showPage").html(str);
            if(page == 0) {
                $(".firstPage1").css("visibility", "hidden");
            }
            if(page == lastPage-1) {
                $(".lastPage1").css("visibility", "hidden");
            }
            $(".pageNum").css({
                "background-color" : "#fff",
                "color" : "#444",
                "cursor" : "pointer"
            });
            $("#"+page+"").css({
                "background-color" : "#661e43",
                "color" : "white"
            });
            if (lastPage != 0) {
                str += "<td class='firstPage1'><<</td>";
            }
            if (lastPage != 0){
                str += "<td class='lastPage1'>>></td>";
            }
            $("#showPage").on('click', '.firstPage1', function(){
                list(0);
            });
            $("#showPage").on('click', '.lastPage1', function(){
                list(lastPage-1);
            });
        })
    }

    $('#searchUser').on('click', function (){
        if(!$('#userid').val()){
            alert('아이디를 입력해주세요')
        }else {
            searchList($('#userid').val(), 0)
        }

    })

    // 사용자 아이디로 검색
    function searchList(userid, page){
        $.get("/api/user/search/" + userid, function (response){
            let idx = response.data[0].memIndex;
            // 사용자 포인트 리스트
            $.get(`/api/point/user/${idx}?page=`+ page, function (response){
                console.dir(response)
                indexBtn = [];
                pagination = response.pagination;

                showPage.totalElements = pagination.currentPage;
                showPage.currentPage = pagination.currentPage;

                pointList.pointList = response.data;

                // 유저
                for(let i = 0; i < response.data.length; i++){
                    $.get('/api/user/'+ response.data[i].poUserindex, function (response2){
                        $(`#userid${i}`).text(response2.data.memUserid)
                    })
                }

                // 유저의 총 포인트
                for(let i = 0; i < response.data.length; i++){
                    let sum = 0;
                    $.get(`/api/point/user/${idx}?page=` + page, function (response3){
                        for(let j = 0; j < response3.data.length; j++){
                            let point = response3.data[j].poPoint;
                            sum += point;
                        }
                        console.log(sum)
                        if(sum < 0){
                            $(`#totalPoint${i}`).text('0');
                        }else{
                            $(`#totalPoint${i}`).text(sum);
                        }
                    })
                }

                for(let i = 0; i < response.data.length; i++){
                    $.get(`/api/point/user/${idx}?page=` + page, function (response4){
                        if(response4.data[i].poPoint > 0){
                            // 적립 내역
                            $(`#addPoint${i}`).text(response4.data[i].poPoint)
                            $(`#usePoint${i}`).text('-')
                        }else{
                            // 사용 내역
                            $(`#addPoint${i}`).text('-')
                            $(`#usePoint${i}`).text(response4.data[i].poPoint)
                        }
                    })
                }


                let lastPage = response.pagination.totalPages;
                let str2 = "";
                str2 += "<td class='firstPage2'><<</td>";
                for ( let i = 0; i < lastPage; i++ ) {
                    str2 += "<td class='pagesS' id="+i+">" + (i+1) + "</td>";
                }
                str2 += "<td class='lastPage2'>>></td>";
                $("#showPage").html(str2);
                if ( page == 0 ) {
                    $(".firstPage2").css("visibility", "hidden");
                }
                if ( page == lastPage-1 || response.totalElements != 0 ) {
                    $(".lastPage2").css("visibility", "hidden");
                }
                if ( response.pagination.totalElements == 0 ) {
                    alert("검색결과가 없습니다.");
                    list(0);
                }
                $(".pagesS").css({
                    "background-color" : "#fff",
                    "color" : "#444",
                    "cursor" : "pointer"
                });
                $("#"+page+"").css({
                    "background-color" : "#661e43",
                    "color" : "white"
                });
                $(document).on('click', '.firstPage2', function(){
                    searchList(userid, 0);
                });
                $(document).on('click', '.lastPage2', function(){
                    searchList(userid, lastPage-1);
                });
            })
        })
    }

    $("#showPage").on('click', '.pageNum', function(){
        let pageId = this.id;
        console.log(pageId);
        list(pageId);
    });

    $("#showPage").on('click', '.pageNum3', function(){
        let userid = $('#userid').val();
        let pageId2 = this.id;
        searchList(userid, pageId2);
    });


})(jQuery)