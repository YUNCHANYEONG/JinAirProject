$(function () {

    let itemList = new Vue({
        el : '.itemList',
        data : {
            itemList : {}
        },
        methods:{
        }
    });


    var str = $(location).attr('href').split('/');
    searchStart(str[6]);

    function searchStart(index){
        $.get("/api/qna/list/"+index, function(response){

            // 검색 데이터
            itemList.itemList = response.data;

        });
    }


    function updating(){
        jsonData = {
            data : {
                qaType: "ALL",
                qaTitle: $('#qaTitle').val(),
                qaContent : $('#qaContent').val(),
                qaQnaindex : str[6]
            }
        }
        $.ajax({
            url : "/api/qnaAns",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json"
        });
    }

    $(".qa_btn").click( () => {
        if( $('#qaTitle').val().length == 0 || $('#qaContent').val().length == 0) {
            alert('제목 혹은 내용을 정확히 입력해주세요');
        }else{
            updating();
            location.href = `/pages/admin/qna_view/${str[6]}`;
        }
    })




});
