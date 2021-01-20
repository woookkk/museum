$(function(){////////////// jQB ////////////////
    
    /****************** 마우스 커서 ******************/

    $("#cursor").removeClass("cursor drag_C");

    $("body").mousemove(function (e) { // e-이벤트전달
        var posx = e.pageX - 25;
        var posy = e.pageY - 25;
        // console.log("x축:"+posx+"\ny축:"+posy);

        // 마우스 포인터 위치에 따라 이미지커서 위치값 변경하기
        // 대상: #cursor
        $("#cursor").css({
            top: posy + "px",
            left: posx + "px"
        }); ////// css /////////

    }); //////// mousemove ////////////

    
    
    
});////////////// jQB ////////////////