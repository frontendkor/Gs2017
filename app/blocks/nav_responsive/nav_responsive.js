let NavResponsive = ()=>{
  
  $(document).ready(()=>{
    
    /* Open nav_responsive ==============================================================*/
    let tahBtn = $('.nav-top__tah-btn');
    tahBtn.on("click", ()=>{
      $('.nav-modal').fadeToggle(300);
      $('body').toggleClass('scrol_none');
      $(".nav_responsive").toggleClass("nav_responsive_open");
      tahBtn.toggleClass("nav-top__tah-btn_active");
    });
    
    
    /* Open nav_responsive panels =======================================================*/
    let ResponsivNavOpenPanels = {
        PanelWidth: '+=' + $('.nav_responsive').css("width"),

        OpenPanel: (link, panel, main_panel)=>{
          $(link).on( "click", (e)=>{
            e.preventDefault();
            $(main_panel).animate({right: "50px" },500);
            $(panel).animate({left: 0},400);
          });   
        }, 
        HidePanel: (panelHeader, panel, main_panel)=> {
          let panel_w     = '+=' + $(panel).css("width");
          $(panelHeader).on( "click", (e)=>{
            e.preventDefault();
            $(panel).animate({left: panel_w },400);
            $(main_panel).animate({right: 0},500);
          });
        }
    };
    ResponsivNavOpenPanels.OpenPanel('.link-panel-2', '.panel-2', '.panel-1');
    ResponsivNavOpenPanels.OpenPanel('.link-panel-3', '.panel-3', '.panel-1');

    ResponsivNavOpenPanels.HidePanel('.panel-2__header', '.panel-2', '.panel-1'); 
    ResponsivNavOpenPanels.HidePanel('.panel-3__header', '.panel-3', '.panel-1');
    
  });
  
  
  /* Remove indents from the top of the element (nav_responsive) when scrolling the window =========*/
  let ResponsivNavScroll = ()=>{
    let scroll = $(window).scrollTop();
    let navTopHeight = parseInt($('.nav-top').css("height"));
    let headerTopBlockHeight = parseInt($('.header__top-blok').css("height"));
    let marginTop =  navTopHeight - scroll;
    let responsivNavHeightScroll = "calc(100vh - " + navTopHeight + "px";
    let navRes = $('.nav_responsive');
    navRes.css("padding-top", marginTop + 'px' );
    if( scroll > navTopHeight){
      navRes.css({"top": navTopHeight, "padding-top": "1px", "height": responsivNavHeightScroll});
    } else {
      navRes.css("top", headerTopBlockHeight);
    }
  };
  ResponsivNavScroll();
  $(window).scroll(()=>{
      ResponsivNavScroll();
    });
  
    
    
    
};

export default NavResponsive;