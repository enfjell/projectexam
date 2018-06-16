// JavaScript Document


// CALENDER



function nasaCalendar(){
	
	var htmlContent ="";
	var FebNumberOfDays ="";
	var counter = 1;
	var dateNow = new Date();
	var month = dateNow.getMonth();
	var nextMonth = month+1;
	var prevMonth = month -1;
	var day = dateNow.getDate();
	var year = dateNow.getFullYear();
 
 
 // February (28,or 29)  
	
	if (month == 1){
		if ( (year%100!=0) && (year%4==0) || (year%400==0)){
			FebNumberOfDays = 29;
		} else {
			FebNumberOfDays = 28;
		}
 }
 
 
 var monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
 var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday", "Saturday"];
 var dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]
 
 var nextDate = new Date(nextMonth +' 1 ,'+year);
 var weekdays= nextDate.getDay();
 var weekdays2 = weekdays
 var numOfDays = dayPerMonth[month];
     
 
 while (weekdays>0) { htmlContent += "<td class='monthPre'></td>";
					weekdays--;
					}
	
	
while (counter <= numOfDays) {
	if (weekdays2 > 6) {
		weekdays2 = 0;
		htmlContent += "</tr><tr>";
    }
 
 
// highlight current day using the CSS
	
if (counter === day){
	htmlContent +="<td class='dayNow' onMouseOver='this.style.background=\"#0e8ddb\"; this.style.color=\"#FFFFFF\"' " +
        "onMouseOut='this.style.background=\"#FFFFFF\"; this.style.color=\"#0e8ddb\"'>"+counter+"</td>";
    } else {
		htmlContent +="<td class='monthNow' onMouseOver='this.style.background=\"#0e8ddb\"'" +
        " onMouseOut='this.style.background=\"#FFFFFF\"'>"+counter+"</td>";    
 
    }
	
	weekdays2++;
	counter++;
 }
	
	
	
 
 
 // building the calendar
	
 var calendarBody = "<table class='calendar'> <tr class='monthNow'><th colspan='7'>" + monthNames[month]+" "+ year +"</th></tr>";
 calendarBody +="<tr class='dayNames'>  <td>Sun</td>  <td>Mon</td> <td>Tue</td>" + "<td>Wed</td> <td>Thu</td> <td>Fri</td> <td>Sat</td> </tr>";
 calendarBody += "<tr>";
 calendarBody += htmlContent;
 calendarBody += "</tr></table>";

document.getElementById("calendar").innerHTML=calendarBody; 
	
}


 // PREV NEXT BUTTONS



var articleIndex = 1;
showDivs(articleIndex);

function plusDivs(n) {
    showDivs(articleIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("nextEvent");
    if (n > x.length) {articleIndex = 1} 
    if (n < 1) {articleIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[articleIndex-1].style.display = "block"; 
}


