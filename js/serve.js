$(function () { ///////// jQB ////////

    // 부드러운 스크롤 함수 호출 !
    startSS();
    
    /* 커서 a에 닿으면 커지기 */
    
    $("a").hover(
        function () {
            $("#cursor").addClass("trC");
        },
        function () {
            $("#cursor").removeClass("trC");
        });


    /********** 전시 드레그 영역 커서 **********/
    $(".dragCW").mouseenter(function () {
        $("#cursor").addClass("drag_C");
    }); /////// mouseenter /////////////

    $(".dragCW").mouseout(function () {
        $("#cursor").removeClass("drag_C");

    }); /////// mouseenter /////////////



    /********** 미술관 소개 영상 커서 **********/

    $(".first_exhibit_video a").mouseenter(function () {
        $("#cursor").addClass("cursor").css({
            border: " 3px solid #fff",
            animation: "cursorAni .5s infinite alternate"

        }); ///////// css /////////

    }); /////// mouseenter /////////////

    $(".first_exhibit_video a").mouseout(function () {
        $("#cursor").removeClass("cursor").css({
            border: " 3px solid #000",
            animation: "0"

        }); ///////// css /////////

    }); /////// mouseenter /////////////

    /*********** 인트로 바 ***************/
    /*gnb*/
    $(".intro_bar_list li a").mouseover(function () {
        $(this).css({
                transform: "translateX(-1vw)",
                fontWeight: "bold"
            })
            .siblings().find("a").css({
                opacity: ".3"
            });
    }); ////////// mouseover ///////////////
    $(".intro_bar_list li a").mouseout(function () {
        $(this).css({
                transform: "translateX(0)",
                fontWeight: "normal"
            })
            .siblings().find("a").css({
                opacity: "1"
            });
    }); ////////////// mouseout //////////////

    /* 네비 바 스무스하게 이동시키기 */

    $(".intro_bar_list li a").click(function (e) {
        e.preventDefault();

        var pid = $(this).attr("href");
        var ppos = $(pid).offset().top;
        console.log(ppos);
        // 부드러운 스크롤에도 이동위치를 일치시켜야함!
        pos = ppos;


        $("html,body").animate({
            scrollTop: ppos
        }, 600)
    }); ////// click /////////////

/*
    $(".first_exhibit_img li>ol").on("mouseleave", function (e) {
        e.stopPropagation();
    });*/

    /************* 전시 호버 효과 *************/
    $(".first_exhibit_img>li").hover(function (e) {
        e.stopPropagation();
        $(".first_exhibit_text", this).css({
            opacity: "1",
            zIndex: "99"
        }); /////////// css ////////////
        $("#cursor").addClass("drag_C");
    }, function (e) {
        e.stopPropagation();
        $(".first_exhibit_text", this).css({
            opacity: "0"
        }); /////////// css ////////////
        $("#cursor").addClass("drag_C");
    }); //////////  hover ////////////////


    /*  전시 드레그 */
    var move = $(".exhibit_drag>ul");
    
    $(".exhibit_drag>ul").draggable({
        axis: "x"}) //x축 고정
        .css({
            transition: "all .5s ease-out"
        });
        // 첫번째 한계값
        var fpt = $(window).width() / 6;
       //  console.log("첫째한계:" + fpt);
        // 마지막 한계값
        var lpt = move.width() - (fpt * 2);
       // console.log("마지막한계:" + lpt);

        // 화면 한계시에 위치고정 코드
        $("html,body").on("mousedown mouseup mousemove touchstart touchend touchmove", function () {
            // console.log("마우스냐 터치냐");
            var mpos = move.offset().left;
            //console.log("현재 left는?" + mpos);

            if (mpos > fpt) {

                move.css({ //한계값으로 고정
                    left: fpt + "px"
                })
            } //////// if ///////////

            // 3. 마지막 한계값 체크 후 위치고정
            else if (mpos < -lpt) {
                move.css({ //한계값으로 고정
                    left: -lpt + "px"
                })
            } //////// else if //////////

        }); //////////// 마우스, 터치 이벤트 ////////////


    /* 미술관 영상 모달창 열고 닫기 */

    var Vmodal = $("#exhibit_video").attr("src");
    ///console.log("나와???"+ Vmodal);

    $(".first_exhibit_video a").click(function (e) {
        e.preventDefault();
        $("#video_modal").fadeIn(300);
        $("#exhibit_video").attr("src", Vmodal);
    }); ///////// click /////////////

    $(".video_modal_close").click(function () {
        $("#video_modal").fadeOut(300);
        $("#exhibit_video").attr("src", "");
    }); ///////// click /////////////
    
    /* 지도 맵에서 마우스커서 빼기 */
    $(".sub_map_box").mouseenter(function(){
       //console.log("보여커서????"); 
        $("#cursor").css({
            display:"none"
        });///// css //////
    });///////// mouseenter /////////
    $(".sub_map_box").mouseleave(function(){
        $("#cursor").css({
            display:"block"
        });///// css //////
    });/////////////// mouseleave ///////


}); ///////////// jQB /////////////
