let initMap = ()=>{
  
  $(document).ready(()=>{
    
    var strURL = window.location.toString();
    let testURL = strURL.indexOf('about-us.html');
    
    
     

    function init() {  
        var i;
        var place;
        var pointer = [[[53.895281, 27.435990], 'Минск'], 
                       [[55.826465, 37.315373], 'Красногорск'], 
                       [[55.568985, 38.220911], 'Раменское'],
                       [[62.028339, 129.702753], 'Якутск'],
                       [[50.272922, 127.536158], 'Благовещенск'],
                       [[43.114502, 131.878586], 'Владивосток'],
                       [[46.952067, 142.736466], 'Южно-Сахалинск'],
                       [[56.011683, 92.867787], 'Красноярск'],
                       [[55.351941, 86.066149], 'Кемерово'],
                       [[56.470495, 84.971545], 'Томск'],
                       [[55.017711, 82.923284], 'Новосибирск'],
                       [[53.342588, 83.772285], 'Барнаул'],
                       [[57.902742, 59.993958], 'Нижний Тагил'],
                       [[57.155392, 65.546587], 'Тюмень'],
                       [[56.829359, 60.615081], 'Екатеринбург'],
                       [[58.014234, 56.253507], 'Пермь'],
                       [[55.167379, 61.389316], 'Челябинск'],
                       [[51.771740, 55.103102], 'Оренбург'],
                       [[56.857264, 53.221579], 'Ижевск'],
                       [[55.723092, 52.380131], 'Набережные Челны'],
                       [[53.226064, 50.191181], 'Самара'],
                       [[56.621522, 47.887207], 'Йошкар-Ола'],
                       [[55.806032, 49.198288], 'Казань'],
                       [[54.313500, 48.426387], 'Ульяновск'],
                       [[56.322086, 43.951457], 'Нижний Новгород'],
                       [[53.195457, 45.024905], 'Пенза'],
                       [[51.581325, 45.974404], 'Саратов'],
                       [[57.626606, 39.884403], 'Ярославль'],
                       [[57.767818, 40.923370], 'Кострома'],
                       [[56.991198, 40.989566], 'Иваново'],
                       [[58.525614, 31.280757], 'Великий Новгород'],
                       [[59.940041, 30.309809], 'Санкт-Петербург'],
                       [[52.725831, 41.450751], 'Тамбов'],
                       [[52.605186, 39.593208], 'Липецк'],
                       [[51.668120, 39.221360], 'Воронеж'],
                       [[51.725962, 36.181844], 'Курск'],
                       [[48.696997, 44.499464], 'Волгоград'],
                       [[47.249932, 39.697120], 'Ростов-на-Дону'],
                       [[45.034602, 38.973947], 'Краснодар'],
                       [[44.717312, 37.779389], 'Новороссийск'],
                       [[43.584030, 39.720020], 'Сочи'],
                       [[44.609224, 33.591716], 'Севастополь'],
                       [[42.989037, 47.489004], 'Махачкала']
                      ];
      
        var centerMap = [57.4336,67.1227];

        var myMap = new ymaps.Map("map", {
          center: centerMap,
          zoom: 4,
          controls: []
        });

        for(i = 0; i < pointer.length; ++i) {
          place = new ymaps.Placemark(pointer[i][0],{hintContent: pointer[i][1]}, 
                                                   {iconLayout: 'default#image',
                                                   iconImageHref: 'img/marker.png',
                                                   iconImageSize: [15, 15]});
          myMap.geoObjects.add(place);
        }
      }; 

   if(testURL >= 0){
      ymaps.ready(init);
    }; 
    
  });
  
};
export default initMap;