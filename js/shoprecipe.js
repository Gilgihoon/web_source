jQuery(function($){
    $(".hover-menu1").click(function(){
        $(".hover-menu-gnb2").stop().slideToggle("fast");
    });
});


jQuery(function($){
$(".ho1").click(function(){
    $(".hover-menu1").html("추천순");
});
});

jQuery(function($){
    $(".ho2").click(function(){
        $(".hover-menu1").html("이름순");
    });
    });

jQuery(function($){
    $(".ho3").click(function(){
        $(".hover-menu1").html("날짜순");
    });
    });


jQuery(function($){
$(".ho1,.ho2,.ho3").click(function(){
    $(".hover-menu-gnb2").hide();
});
});

