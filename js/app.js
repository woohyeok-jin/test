var slideIndex,slideWidth;

//ready함수의 역할
//스크립트로 디자인을 바꾸고, 태그를 조정하고
//태그가 없다? null pointer exception
//우리가 적용시키려는 대상이 존재하지 않는다.
//ready는 태그가 다 생성되면 실행.
$(document).ready(function(){
    init();
    menu(); 
    slide();
    tab();
    popup();
});

function menu(){
    var idx=0;

    $(".gnb > li").hover(
    function(){
        $(".lnb").stop().slideDown(500);
    },
    function(){
        $(".lnb").stop().slideUp(500);
    }
    );
}

function init(){
    slideIndex=0;
    slideWidth=1200;
}

function slide(){
    setInterval(slide_move,3000);
}

function slide_move(){
    var newLeft= -slideWidth*slideIndex;
                    //0
                    //-1200
                    //-2400
                    //0
                    //-1200
                    //-2400
                    //0
                    //-1200
                    //-2400
                    
                 //-1200*slideIndex;
                 //left 음수가 왼쪽이동
                 //왼쪽으로 1200 위치
                 //왼쪽으로 2400 위치
                 //왼쪽으로 0 위치
    $("#slide_contents").animate(
        {left:newLeft},400,"swing");

    if(slideIndex>=2) { 
        slideIndex=0;                
    } else {
        slideIndex++;    
    }
}

function tab(){

    $(".tab_btn>a").eq(0).click(function(){

        $(".tab_contents>div").eq(0).show();
        $(".tab_contents>div").eq(1).hide();
    })

    $(".tab_btn>a").eq(1).click(function(){

        $(".tab_contents>div").eq(1).show();
        $(".tab_contents>div").eq(0).hide();
    })
}

function popup(){

    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();
    });

    $("#popup>#closeBtn").click(function(){
        $("#popup").hide();
    });

}