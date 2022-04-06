$(function () {

    // saveAll 용
    $('.select_comp').on('click', function () {
        let arr = new Array();
        let status = $('select option:selected').val();
        console.log("실행됌")
        let apid = $('input:checkbox[class="apid"]:checked').val();
            $('input:checkbox[class="nation"]:checked').each(function (){
                let price = "";
                let nation = "";
                if($(this).val() == "국내"){
                    if(status == "JiniPl"){
                        price = 9000;
                    }else if(status == "JiniSt"){
                        price = 9000;
                    }else if(status == "JiniFs"){
                        price = 5000;
                    }else if(status == "JiniEE"){
                        price = 7000;
                    }else if(status == "JiniSA"){
                        price = 3000;
                    }else if(status == "JiniSB"){
                        price = 1000;
                    }else if(status == "JiniBz"){
                        price = 15000;
                    }
                    nation = "국내";
                }else if($(this).val() == "일본/중국 본토"){
                    if(status == "JiniPl"){
                        price = 19000;
                    }else if(status == "JiniSt"){
                        price = 14000;
                    }else if(status == "JiniFs"){
                        price = 7000;
                    }else if(status == "JiniEE"){
                        price = 9000;
                    }else if(status == "JiniSA"){
                        price = 4000;
                    }else if(status == "JiniSB"){
                        price = 2000;
                    }else if(status == "JiniBz"){
                        price = 35000;
                    }
                    nation = "일본/중국 본토";
                }else if($(this).val() == "홍콩/마카오/대만/러시아"){
                    if(status == "JiniPl"){
                        price = 29000;
                    }else if(status == "JiniSt"){
                        price = 24000;
                    }else if(status == "JiniFs"){
                        price = 12000;
                    }else if(status == "JiniEE"){
                        price = 19000;
                    }else if(status == "JiniSA"){
                        price = 6000;
                    }else if(status == "JiniSB"){
                        price = 3000;
                    }else if(status == "JiniBz"){
                        price = 50000;
                    }
                    nation = "홍콩/마카오/대만/러시아";
                }else if($(this).val() == "동남아/대양주"){
                    if(status == "JiniPl"){
                        price = 49000;
                    }else if(status == "JiniSt"){
                        price = 34000;
                    }else if(status == "JiniFs"){
                        price = 19000;
                    }else if(status == "JiniEE"){
                        price = 34000;
                    }else if(status == "JiniSA"){
                        price = 9000;
                    }else if(status == "JiniSB"){
                        price = 4000;
                    }else if(status == "JiniBz"){
                        price = 80000;
                    }
                    nation = "동남아/대양주";
                }else if($(this).val() == "호주/미주"){
                    if(status == "JiniPl"){
                        price = 99000;
                    }else if(status == "JiniSt"){
                        price = 79000;
                    }else if(status == "JiniFs"){
                        price = 29000;
                    }else if(status == "JiniEE"){
                        price = 69000;
                    }else if(status == "JiniSA"){
                        price = 12000;
                    }else if(status == "JiniSB"){
                        price = 5000;
                    }else if(status == "JiniBz"){
                        price = 150000;
                    }
                    nation = "호주/미주";
                }
                $('input:checkbox[class="SSC2"]:checked').each(function () {
                    let arrData = new Object();
                    arrData.sdId = $(this).val();
                    console.log($(this).val());
                    arrData.sdPrice = price;
                    arrData.sdStatus = status;
                    arrData.sdNation = nation;
                    arrData.sdApid = apid;
                    arr.push(arrData);
                    $('input:checkbox[class="SSC"]:checked').attr('checked', false);
                });
            });
        console.dir(arr);
        $.post({
            url: '/api/seatDetail/list',
            dataType: "json",
            data: JSON.stringify(arr),
            contentType: "application/json",
            success(arr) {
                alert("통신은 완료")
            },
            error(error) {
                alert("통신도 불가")
            }
        });
    });
});
    // })
    //  register();
    //  let arrData = new Object();
    //      arrData.sdId = Id;
    //      arrData.sdPrice = Price;
    //      arrData.sdStatus = Status;
    //  arr.push(arrData);
    // }
    // console.dir(arr);