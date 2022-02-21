$(window).scroll(function(){
    let value_of_scroll = $(window).scrollTop();
    let scrolled_nav = $.contains('nav', '.scrolled-nav');
    if(value_of_scroll>90 && scrolled_nav == false){
        $('nav').addClass('scrolled-nav');
    }
    else{
        $('nav').removeClass('scrolled-nav');
    }
});

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop>100 || document.documentElement.scrollTop>100){
        document.getElementById("bck_btn").style.display = "block";
    }
    else{
        document.getElementById("bck_btn").style.display = "none";
    }
}
  
function back_to_top(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}