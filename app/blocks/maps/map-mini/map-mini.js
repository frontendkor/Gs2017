let mapMini = ()=>{
  
  $(document).ready(()=>{
    
    var strURL = window.location.toString();
    let testURL = strURL.indexOf('vacancies.html');
    let testURL2 = strURL.indexOf('contacts.html');
    
    function init(){ 
          var myMap = new ymaps.Map("map-mini", {
              center: [53.895226, 27.436003],
              zoom: 9,
              controls: ['zoomControl', 'fullscreenControl', 'routeButtonControl']
          }); 

        var place;
        place = new ymaps.Placemark([53.895226, 27.436003],{hintContent: 'улица Лобанка 19'}, 
                                                       {iconLayout: 'default#image',
                                                       iconImageHref: 'img/marker.png',
                                                       iconImageSize: [15, 15]});
        myMap.geoObjects.add(place);
      
      };
    
    if(testURL >= 0 || testURL2 >= 0){
      ymaps.ready(init);    
    }
    
    
  });
};

export default mapMini;
