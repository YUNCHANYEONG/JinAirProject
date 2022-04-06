$(function () {

    $('.btn_login').on('click', function(){
        isLogin();
    })


    function isLogin(){
        if( !$('.admin_id').val() || !$('.admin_pw').val()){
            alert('아이디 비밀번호를 확인하세요');
            return false;
        }

        $.get('/api/admin/isRight/' + $('.admin_id').val() + "/" + $('.admin_pw').val(), function(response) {
            if(!response.data){
                alert('아이디, 비밀번호가 일치하지 않습니다.')
                return false
            }else{
                return true;
            }
        })
    }
});
