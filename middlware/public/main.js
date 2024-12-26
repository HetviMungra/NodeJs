 $(window).scroll(function(){
    if($(document).scrollTop() > 800) {
        $(".navbar").css("background-color","white")
        $("#margin_nav .nav-item a").css("color", "black")
        $("#black").css("display","block");
        // $(".navbar-brand").css("display", "none")
    }  
    else{
      $(".navbar").css("background-color","transparent")
      $("#margin_nav .nav-item a").css("color", "white")
      $("#black").css("display","none");

  }
});


  new WOW().init();
