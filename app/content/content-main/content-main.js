function contentMain() {
  $(document).ready(function () {
    var workersPriseHover = function workersPriseHover(link, worker) {
      $(link).hover(function () {
        $(worker + ' div').addClass('worker_hover');
      }, function () {
        $(worker + ' div').removeClass('worker_hover');
      });
    };

    workersPriseHover('.link-worker_01', '.worker_01');
    workersPriseHover('.link-worker_02', '.worker_02');
    workersPriseHover('.link-worker_03', '.worker_03');
    workersPriseHover('.link-worker_04', '.worker_04');
    workersPriseHover('.link-worker_05', '.worker_05');

    var workersPriseAdaptive = function workersPriseAdaptive(block, blockOffset) {
      if (window.innerWidth <= 1200) {
        $(block).removeClass('col-lg-2');
        $(blockOffset).removeClass('offset-lg-1');
      }

      ;

      if (window.innerWidth > 1200) {
        $(block).addClass('col-lg-2');
        $(blockOffset).addClass('offset-lg-1');
      }

      ;
    };

    workersPriseAdaptive('.workers', '.block_offset');
    workersPriseAdaptive('.valuation', '.blockOffset');

    var removeTagBr = function removeTagBr() {
      if (window.innerWidth <= 769) {
        $('.removeTagBr').remove();
      }
    };

    removeTagBr();
    $(window).resize(function () {
      workersPriseAdaptive('.workers', '.block_offset');
      workersPriseAdaptive('.valuation', '.blockOffset');
      removeTagBr();
    });
  });
};
contentMain();