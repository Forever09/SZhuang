// 此网页的jQuery代码都为移入移出 较简单
$(function() {
    // 鼠标移入 mouseover
    // 鼠标移出 mouseout
    $(".userTeam-text").mouseover(function() {
        $(this).children(".minTech").css({
            background: "#cc3311",
        });
        $(this).find(".bTn1").css({
            background: "#cc3311",
        });
        $(this).children(".minTech2").css({
            background: "#cc3311",
        });
        $(this).find(".bTn2").css({
            background: "#cc3311",
        });
        $(this).children(".minTech3").css({
            background: "#cc3311",
        });
        $(this).find(".bTn3").css({
            background: "#cc3311",
        });
    });

    $(".userTeam-text").mouseout(function() {
        $(this).children(".minTech").css({
            background: "#b66128"
        });
        $(this).find(".bTn1").css({
            background: "#b66128"
        });
        $(this).children(".minTech2").css({
            background: "#c97131"
        });
        $(this).find(".bTn2").css({
            background: "#c97131"
        });
        $(this).children(".minTech3").css({
            background: "#ab7103"
        });
        $(this).find(".bTn3").css({
            background: "#ab7103"
        });
    });

    $(".nav-link").mouseover(function(){
        $(this).css({
            color: '#de630a'
        });
    });

    $(".nav-link").mouseout(function(){
        $(this).css({
            color: '#7f7f7f'
        });
    });

    $(".box-area").mouseover(function() {
        $(this).children().css({
            color: "#fff"
        });
        $(this).find("a").css({
            color: "#fff"
        })
    });

    $(".box-area").mouseout(function() {
        $(this).children().css({
            color: "#333"
        });
        $(this).find("a").css({
            color: "rgb(201,113,49)"
        })
    });

    $(".txtjieshao .btn").mouseover(function() {
        $(this).css({
            background: "#cc3333",
            color: "#fff"
        });
    });
    $(".txtjieshao .btn").mouseout(function() {
        $(this).css({
            background: "#dddddd",
            color: "#333333"
        });
    });
});