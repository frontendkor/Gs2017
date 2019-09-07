let Galleries = ()=>{
  
  
  /*Gallery plugin ================================================*/
  let Gallery = (gItem, gLinks, gModal, gOverlay, gCloseUpBtn, gNext, gPrev)=>{

      /* Func */
      let imgReplace = (srcNew)=>{
        gModal.find('img').attr('src', srcNew);
      };

      let getHref = (index)=>{
        return gItem.eq(index).find('>a').attr('href');
      };


      /* Open Gallery =============================================*/
      $(gLinks).on("click", function(e){
          e.preventDefault();
          gItemIndex = $(this).parent().index();
          targetImg = $(this).attr('href');
          imgReplace (targetImg);
          gModal.fadeIn(500);

        });



      /* Navigation Gallery =======================================*/
      gNext.click(()=>{
        if((gItemIndex + 1) < gLinks.length){
          targetImg = getHref(gItemIndex + 1);
          gItemIndex++;
        } else {
          targetImg = getHref(0);
          gItemIndex = 0;
        }
        imgReplace(targetImg);
      });


      gPrev.click(()=>{
        if(gItemIndex > 0){
          targetImg = getHref(gItemIndex - 1);
          gItemIndex--;
        } else {
          targetImg = getHref(gLinks.length - 1);
          gItemIndex = gLinks.length - 1;
        }
        imgReplace(targetImg);
      });


      /*Close Gallery ==============================================*/
      let galleryClose = ()=>{
        gModal.fadeOut(500);
      };
      gOverlay.click(()=>{
        galleryClose();
      });
      gCloseUpBtn.click(()=>{
        galleryClose();
      });


  };
  /* ===================================================================================*/
  
  
  let initGallery = ()=>{
    let gItem = $('.gallery__item');
    let gLinks = $('.gallery__item').find('>a');
    let gModal = $('.gallery__modal');
    let gOverlay = $('.gallery__overlay');
    let gCloseUpBtn = $('.close-up-btn');
    let gNext = $('.gallery_next');
    let gPrev = $('.gallery_prev');
    let gItemIndex;
    let targetImg;
    Gallery(gItem, gLinks, gModal, gOverlay, gCloseUpBtn, gNext, gPrev);
  };
  initGallery();
  
  
};




export default Galleries;



    let gItem = $('.gallery__item');
    let gLinks = $('.gallery__item').find('>a');
    let gModal = $('.gallery__modal');
    let gOverlay = $('.gallery__overlay');
    let gCloseUpBtn = $('.close-up-btn');
    let gNext = $('.gallery_next');
    let gPrev = $('.gallery_prev');
    let gItemIndex;
    let targetImg;