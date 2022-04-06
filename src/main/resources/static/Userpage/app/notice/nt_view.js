(function ($){
    let idx = $(location).attr('href').split('/')[6];
    let prev = Number(idx) + 1;
    let next = Number(idx) - 1;
    console.log(idx);
    let notiView = new Vue({
        el : '#notiView',
        data : {
            notiView : {}
        }
    })

    let notiPriv = new Vue({
        el : '#notiPriv',
        data : {
            notiPriv : {}
        }
    })

    let notiNext = new Vue({
        el : '#notiNext',
        data : {
            notiNext : {}
        }
    })

    search(idx);
    searchPrev(prev);
    searchNext(next);

    function search(idx){
        $.get("/api/notify/"+idx, function (response){
            console.dir(response);
            notiView.notiView = response.data;
        })
    }

    let id  = prev;
    let max = Number(id) + 30;

    function searchPrev(prev){
        $.get("/api/notify/"+prev, function (response){
            notiPriv.notiPriv = response.data;
            if(response.data == null && prev != max) {
                prevPage(prev);
            }
        })
    }

    function prevPage(num) {
        searchPrev(num + 1)
        if (num == max){
            searchPrev(max)
        }
    }

    let id2 = next;
    let min = Number(id2) - 30;

    function searchNext(next){
        $.get("/api/notify/"+next, function (response){
            notiNext.notiNext = response.data;
            if(response.data == null && next != min) {
                nextPage(next);
            }
        })
    }

    function nextPage(num) {
        searchNext(num -1)
        if (num == min){
            searchNext(min)
        }
    }

})(jQuery)