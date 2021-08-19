function displayClockTime(){
  //write HH:MM:SS AM (or PM) to browser
  const today = new Date();

  const clockHours = convertAmPm( today.getHours());  
  const clockMinutes = padWithZeros(today.getMinutes());
  const clockSeconds = padWithZeros(today.getSeconds());

  const timeDisplayHandle = document.getElementById('time-text')
  timeDisplayHandle.textContent = clockHours[0]+":"+clockMinutes+":"+clockSeconds+" "+clockHours[1];  
}

function displayDate(){
  // write Day, Month Date Year to browser. Date has suffix -th, -st, -rd, -nd  as necessary
  const today = new Date();

  const dayOfWeek  = listOfDays[today.getDay()]; 
  const monthOfYear  = listOfMonths[today.getMonth()]; 
  const dateOfMonth  = today.getDate();
  const dateSuffix = getDateSuffix(dateOfMonth);
  const nameOfYear = today.getFullYear();

  const dateDisplayHandle = document.getElementById('date-text')
  dateDisplayHandle.textContent = dayOfWeek +", "+monthOfYear +" "+ dateOfMonth + dateSuffix +" "+nameOfYear;  
}

function padWithZeros(time){
  if (time < 10){
    return '0'+ time; 
  } else {
    return time;
  }
}

function convertAmPm(hour){
  //return a 2-element array: ex: [11,'AM'], or [04,'PM']
  if (hour > 12){
    return [padWithZeros(hour -12), 'PM']; 
  } else {
    return [hour, 'AM'];
  }
}

function getDateSuffix(dateOfMonth){
  // there is probably a more elegant way to do this!//
  switch(dateOfMonth){
    case 1: 
      return 'st';
    case 21:
      return 'st';
    case 31:
      return 'st';
    case 2:
      return 'nd';
    case 22:
      return 'nd';      
    case 3:
      return 'rd';
    case 23:
      return 'rd';  
    default:
      return 'th';
  }
}

const listOfDays =[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'  
];

const listOfMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
// load clock display immediately so no delay when opening/ refreshing page
displayClockTime(); 
displayDate();   

//Then use setInterval() to update each 1.0 sec 
setInterval(displayClockTime,1000);
setInterval(displayDate,1000);   
