let Nav = ()=>{
  
  $(document).ready(()=>{
     var d = new Date();
     var year = 'Цены '+d.getFullYear();
     $('.link-prise').append(year);

    /* Active navigation link ===============================================================*/
    function addClassLinkActive(link,link2){
      $('#nav').find('a').removeClass('active');
      $(link).addClass('active');
      link2 ? $(link2).addClass('active') : null;
    }
    var strURL = window.location.toString();
    strURL.indexOf('prices.html') >= 0 && addClassLinkActive('.link-prise');
    strURL.indexOf('about-us.html') >= 0 && addClassLinkActive('.link-about-us', '.link-nav-drop');
    strURL.indexOf('service.html') >= 0 && addClassLinkActive('.link-service', '.link-nav-drop');
    strURL.indexOf('thanks.html') >= 0 && addClassLinkActive('.link-thanks', '.link-nav-drop');
    strURL.indexOf('vacancies.html') >= 0 && addClassLinkActive('.linlk-vacancies');
    strURL.indexOf('contacts.html') >= 0 && addClassLinkActive('.linlk-contacts');

    
    /* Display a drop-down navigation list (Company) =========================================*/
    let navDrop = $('.nav-drop');
    let addClass = 'nav-drop_open';
    
    $('.link-nav-drop').hover(()=>{
    navDrop.addClass(addClass).hover(
      ()=>{navDrop.css("opacity","1")}, 
      ()=>{navDrop.css("opacity","0").removeClass(addClass)});
    });
    
    
    /* Changing the position of blocks when changing the width of the window =================*/
    let NavTopRes = ()=>{
      let btnContainer = $('.nav-top__btn-container');
      let logoContainer = $('.nav-top__logo-container');
      if( window.innerWidth <= 1200 ){
        btnContainer.removeClass('col-lg-3');
        logoContainer.addClass('col-lg-5 col-md-5').removeClass('col-lg-2');
      } else {
        btnContainer.addClass('col-lg-3');
        logoContainer.addClass('col-lg-2').removeClass('col-lg-5 col-md-5');
      }
    };
    NavTopRes();
    $( window ).resize(function(){
      NavTopRes();
    });
    
    
    /* Sticky top navigation when scrolling window ===========================================*/
    let navSticky = ()=>{
      let navTop = $('.nav-top');
      let content = $('.content');
      let addCl = 'nav-top_sticky';
      let headerTopBlock = Number.parseInt($('.header__top-blok').css("height"));
      let navTopH = Number.parseInt($('.nav-top').css("height"));
       if ($(window).scrollTop() > headerTopBlock){
         navTop.addClass(addCl)
         content.css("margin-top", navTopH)
       } else {
         navTop.removeClass(addCl)
         content.css("margin-top", "0")
       }
    };
    navSticky();
    $(window).scroll(()=>{
      navSticky();
    });
    
  });
  
  
};

export default Nav;