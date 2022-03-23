$(window).scroll(function(){
    var sticky = $('.header_two'),
        color = $('.header_two .nav-link')
        scroll = $(window).scrollTop();
  
    if (scroll >= 100){ sticky.addClass('fixed');
    color.css("color","black");
}
    else{ sticky.removeClass('fixed');
    color.css("color","white");
}
  });