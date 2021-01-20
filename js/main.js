$(function () { //////////////jQB ////////////////////



    var pos1; //위치값
    /*var winh = $(window).height();*/
    var pno = 0; /// 페이지 번호
    const totnum = 3;
    var psts = 1; // 광클 금지

    $(function () { /// jQB /////////////////

        /* $(".intro_bar").hide();*/

        var firstAct = 0; //실행여부

        $(".main_wrap").css({
            overflow: "hidden"
        });

        /* 마우스 커서 변경 !! */
        $(".museum_list_wrap").mouseenter(function () {
            $("#cursor").addClass("museum_list_cursor");
            $("#cursor").addClass("museum_list_cursor_T").html(" Scroll &<br>Click to<br> Explore!");
            
        });
        
        $(".gnbShow, .gnb, .hambar, .Hpage_logo a").mouseenter(function () {
            $("#cursor").removeClass("museum_list_cursor");
            $("#cursor").removeClass("museum_list_cursor_T").html("");
            
        });

        $(".gnbShow, .gnb, .hambar, .Hpage_logo a").mouseleave(function () {
            $("#cursor").addClass("museum_list_cursor");
            $("#cursor").addClass("museum_list_cursor_T").html("Scroll &<br>Click to<br> Explore!");
            
        });


        $(".pwrap").on("mousewheel", function (e) {

            if (firstAct === 0) {
                firstAct = 1; //잠금!
                $(".main_wrap").stop().animate({
                    height: "0"
                }, 2000, "easeOutQuint", function () {
                    psts = 0;
                }); //// animate //////
            } //////////// if /////////////


        }); ////// 마우스휠 /////////////////////////


        // 한페이지 크기를 윈도우 가로 크기로 계산
        var winW = $(window).width();

        $(".museum_list_wrap").on("mousewheel DOMMouseScroll",
            function (e) {
                if (psts === 1) return true; //돌아가 !
                psts = 1; // 잠금(기존0값을 변경)
                setTimeout(function () {
                    psts = 0;
                }, 600); ///// 타임아웃 //////

                e = window.event || e;
                var delta = e.detail ? e.detail : e.wheelDelta;

                if (delta < 0) {
                    pno++;
                    if (pno === totnum) pno = 0;
                    chgMenu();
                    chgRing();

                } /// if ///////
                else {
                    pno--;
                    if (pno === -1) pno = totnum - 1;
                    chgMenu();
                    chgRing();
                } ///else ////
                console.log("페이지번호:" + pno);

                //4. 해당순번 페이지 left 위치값 구하기(top값)
                var pgpos = winW * pno;

                console.log("이동페이지위치:" + pgpos);

                //5.페이지 이동 애니메이션
                $(".museum_slider").stop().animate({
                    left: -pgpos + "px"
                }, 600, "easeOutQuint")

                //6. 메뉴변경함수 호출하기
                chgMenu();
                chgRing();


            }) ///////////////// mouewheel /////////////////////////////////////////


        $(".hambar").hover(function () {
            $(this).toggleClass(".is-active");
        });


        var link = [
                "serve_one.html",
                "serve_one.html",
                "serve_one.html"
            ];

        $(".museum_list_box").click(function () {

            console.log(pno + "번째");

            location.href = link[pno];

        }); ///////click ///////////



    }); ///// jQB /////////////////////////

    /*///////////////////////////////////
        함수명: chgMenu
        기능: 미술관이름 현재페이지에 맞게 변경하기
    ///////////////////////////////////////////////*/
    function chgMenu() {

        $(".museum_namebox li").eq(pno)
            .addClass("on") //클래스 "on" 넣기
            .siblings()
            .removeClass("on");
    } ////////////////////////////////////// chgMenu 함수 /////////////////

    /*///////////////////////////////////
        함수명: chgRing
        기능: 미술관이름 현재페이지에 맞게 변경하기
    ///////////////////////////////////////////////*/
    function chgRing() {

        $(".indicator li").eq(pno)
            .addClass("on") //클래스 "on" 넣기
            .siblings()
            .removeClass("on");
    } ////////////////////////////////////// chgRing 함수 /////////////////



}) //////////////////// jQB ////////////////////
