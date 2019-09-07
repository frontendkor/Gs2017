$(document).ready(()=>{
  
    let FooterRes = ()=>{
      if( $(window).width() <= 1200 ){
        $('.footer__content').removeClass('col-lg-5');
      };
      if ( $(window).width() > 1200 ){
        $('.footer__content').addClass('col-lg-5');
      };
    };
    FooterRes();
    $( window ).resize(function(){
      FooterRes();
    });
  

  // alert(jQuery.fn.jquery);
});


/* CommercialOfferModal scripts ===================================================*/
import commercialOfferModal from '../../blocks/modal-windows/commercial-offer-modal/commercial-offer-modal.js';
commercialOfferModal();
/* Job-application-modal Modal scripts ===================================================*/
import jobApplicationModal from '../../blocks/modal-windows/job-application-modal/job-application-modal.js';
jobApplicationModal();
/* QuickOrderModal Modal scripts ===================================================*/
import quickOrderModal from '../../blocks/modal-windows/quick-order-modal/quick-order-modal.js';
quickOrderModal();
/* QuickOrderModal Modal scripts ===================================================*/
import writeDirectorhModall from '../../blocks/modal-windows/write-dorouch-modal/write-dorouch-modal.js';
writeDirectorhModall();
import completeModal from '../../blocks/modal-windows/complete-modal/complete-modal.js';
completeModal();
$('[name = phone]').mask("+(999) 999-999-999");



/* Header Top Block scripts ===================================================*/
import headerTopBlock from '../../blocks/header-top-blok/header-top-blok.js';
headerTopBlock();



/* Сall Back Phone scripts ===================================================*/
import callBackPhone from '../../blocks/call-back-block/call-back-block.js';
callBackPhone();




/* Nav scripts ===============================================================*/
import Nav from '../../blocks/nav/nav.js';
Nav();
/* Nav Responsive scripts ====================================================*/
import NavResponsive from '../../blocks/nav_responsive/nav_responsive.js';
NavResponsive();

/* Slider is on the page (prices-service.html) & (about-us.html) =============*/
import sliderok from '../../blocks/sliderok/sliderok.js';
sliderok();

/* Gallery (thanks.html) =================================*/
import Galleries from '../../blocks/gallery/gallery.js';
Galleries();

/* initMaps ==============================================*/
import initMap from '../../blocks/maps/map.js';
initMap();
import mapMini from '../../blocks/maps/map-mini/map-mini.js';
mapMini();














