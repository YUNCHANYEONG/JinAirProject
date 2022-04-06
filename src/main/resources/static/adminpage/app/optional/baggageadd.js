$(function () { //value="5KG(+KRW 8,000)
    let type;
    let price;
    let standard;
    let nation;

    $('#bagg').change(function() {
        if($("#bagg option:selected").val() == '국내선off') {
            type = '현장';
            price = 2000;
            nation = '국내선';
            standard = '1kg';
        };
        if($("#bagg option:selected").val() == '일본/중국본토off') {
            type = '현장';
            price = 10000;
            nation = '일본/중국본토';
            standard = '1kg';
        };
        if($("#bagg option:selected").val() == '홍콩/마카오/대만off') {
            type = '현장';
            price = 14000 ;
            nation = '홍콩/마카오/대만';
            standard = '1kg';
        };
        if($("#bagg option:selected").val() == '동남아off') {
            type = '현장';
            price = 15000 ;
            nation = '동남아';
            standard = '1kg';
        };
        if($("#bagg option:selected").val() == '대양주off개수') {
            type = '현장';
            price = 50000;
            nation = '대양주';
            standard = '1PC(32KG) 개수초과';
        };
        if($("#bagg option:selected").val() == '대양주off무게') {
            type = '현장';
            price = 50000;
            nation = '대양주';
            standard = '1PC(32KG) 무게초과';
        };
        if($("#bagg option:selected").val() == '호주off개수') {
            type = '현장';
            price = 100000;
            nation = '호주';
            standard = '1PC(32KG) 개수초과';
        };
        if($("#bagg option:selected").val() == '호주off무게') {
            type = '현장';
            price = 75000;
            nation = '호주';
            standard = '1PC(32KG) 무게초과';
        };
        if($("#bagg option:selected").val() == '미주off개수') {
            type = '현장';
            price = 150000 ;
            nation = '미주';
            standard = '1PC(32KG) 개수초과';
        };
        if($("#bagg option:selected").val() == '미주off무게') {
            type = '현장';
            price = 75000 ;
            nation = '미주';
            standard = '1PC(32KG) 무게초과';
        };


        if($("#bagg option:selected").val() == '국내선on') {
            type = '온라인';
            price = 8000;
            nation = '국내선';
            standard = '5KG';
        };
        if($("#bagg option:selected").val() == '일본/중국본토on') {
            type = '온라인';
            price = 35000;
            nation = '일본/중국본토';
            standard = '5KG';
        };
        if($("#bagg option:selected").val() == '홍콩/마카오/대만on') {
            type = '온라인';
            price = 45000 ;
            nation = '홍콩/마카오/대만';
            standard = '5KG';
        };
        if($("#bagg option:selected").val() == '동남아on') {
            type = '온라인';
            price = 50000 ;
            nation = '동남아';
            standard = '5KG';
        };
        if($("#bagg option:selected").val() == '대양주on') {
            type = '온라인';
            price = 40000;
            nation = '대양주';
            standard = '1PC(32KG)';
        };
        if($("#bagg option:selected").val() == '호주on') {
            type = '온라인';
            price = 80000 ;
            nation = '호주';
            standard = '1PC(32KG)';
        };
        if($("#bagg option:selected").val() == '미주on') {
            type = '온라인';
            price = 120000 ;
            nation = '미주';
            standard = '1PC(32KG)';
        };

    })

    let jsonData

    let str = "";
    function insert() {
        jsonData = {
                data: {
                    bgType: type,
                    bgNation: nation,
                    bgPrice: price,
                    bgStandard: standard
                }
        }
        $.ajax({
            url : "/api/optional/baggage",
            type : "POST",
            data : JSON.stringify(jsonData),
            dataType : "text",
            contentType : "application/json",
            success: function(){
                str += nation + " - " + type + ", ";
                $("#success").html(str);
            },
            error:function(){
                alert('실패');
            }
        })
    }

    $(".select_comp").on('click', function() {
        insert();
    })

})
