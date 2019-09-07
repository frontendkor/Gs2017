let headerTopBlock = ()=>{
  
  $(document).ready(()=>{
    
    /* Today's date output =====================================================================*/
    var today = new Date();
    var dd = today.getDate() + 1;
    var mm = today.getMonth(); //January is 0!
    var yyyy = today.getFullYear();
    
    var arrMm = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

    today = dd + ' ' + arrMm[mm] + ' ';
    $('#discount__date').html(today);
    
  })
  
};
export default headerTopBlock;