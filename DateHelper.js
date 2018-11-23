export function formatDate(dueDate){
    var days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    var months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    var dateObj = new Date(dueDate);
    return days[dateObj.getDay()] + ' ' + dateObj.getDate() + ' ' 
          + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear()
  }

function _getOrdinalOfDate(date){
    switch(date % 10){
      case 1 : return 'st';
      case 2 : return 'nd';
      case 3 : return 'rd';
      default: return 'th';
    }
  }