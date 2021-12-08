jQuery(function($){
    $(".menu-toggle-btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    });
});

jQuery(function($){
    $(".account").click(function(){
        $(".gnb2").stop().slideToggle("fast");
    });
});



jQuery(function($){
    $(".menu-toggle-btn").click(function(){
        if( $('.gnb2').css('display') === 'block') {
            $('.gnb2').hide();
        }
    });
});

jQuery(function($){
    $(".account").click(function(){
        if( $('.gnb').css('display') === 'block') {
            $('.gnb').hide();
        }
    });
});











