$( document ).ready(function() {
    var audio = document.getElementById("audio");
    
    $("#zdj1").click(function(){
        audio.play();
        $(".c1").css("display","block");
        $(".c1").css("visibility","visible");
        $("html,body").animate({
            scrollTop: $(".c1").offset().top-10},
            "slow");
        $(".c1").animate({
            height: "500px",
        },1250);
        
    })

    
    $("#zdj2").click(function(){
        audio.play();
        $("html,body").animate({
            scrollTop: $(".c2").offset().top-10},
            "slow");
        $(".c2").animate({
            height: "500px",
        },1250);
        $(".c2").css("visibility","visible");
    })

    $("#zdj3").click(function(){
        audio.play();
        $("html,body").animate({
            scrollTop: $(".c3").offset().top-10},
            "slow");
        $(".c3").animate({
            height: "500px",
        },1250);
        $(".c3").css("visibility","visible");
    })

    $("#zdj4").click(function(){
        audio.play();
        $("html,body").animate({
            scrollTop: $(".c4").offset().top-10},
            "slow");
        $(".c4").animate({
            height: "500px",
        },1250);
        $(".c4").css("visibility","visible");
    })

    $("#zdj5").click(function(){
        audio.play();
        $("html,body").animate({
            scrollTop: $(".c5").offset().top-10},
            "slow");
        $(".c5").animate({
            height: "500px",
        },1250);
        $(".c5").css("visibility","visible");
    })

    $("#zdj6").click(function(){
        audio.play();
        $("html,body").animate({
            scrollTop: $(".c6").offset().top-10},
            "slow");
        $(".c6").animate({
            height: "500px",
        },1250);
        $(".c6").css("visibility","visible");
    })
});