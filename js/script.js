var dateElement = document.getElementById('date'), 
	monthElement = document.getElementById('month'),
	yearElement = document.getElementById('year'),
	hoursElement = document.getElementById('hours'),
	minutesElement = document.getElementById('minutes'),
	secondsElement = document.getElementById('seconds'),
	sunElement = document.getElementById('sat'),
	amElement = document.getElementById('am'),
	pmElement = document.getElementById('pm'),
	monElement = document.getElementById('mon'),
	tueElement = document.getElementById('tue'),
	wedElement = document.getElementById('wed'),
	thuElement = document.getElementById('thu'),
	friElement = document.getElementById('fri'),
	satElement = document.getElementById('sat');
	
function updateTime(){
	var dateObject = new Date(),
		hours = dateObject.getHours(),
		minutes = dateObject.getMinutes(),
		seconds = dateObject.getSeconds();
		hoursElement.innerText = parseNumber(hours);
		minutesElement.innerText = parseNumber(minutes);
		secondsElement.innerText = parseNumber(seconds);
		
}

function parseNumber(number){
	if(number < 10){
		return '0'+number;
	}else{
		return number;
	}
}

function updateDate(){
	var dateObject = new Date(),
		date = dateObject.getDate(),
		month = dateObject.getMonth(),
		year = dateObject.getFullYear(),
		day = dateObject.getDay();
		dateElement.innerText = parseNumber(date);
		monthElement.innerText = parseNumber(month+1);
		yearElement.innerText = year;
	
}
updateDate();
setInterval(updateTime, 1000);

var toDay=new Date();
var day=toDay.getDay();

switch(day){
	case 0:
		document.getElementById('sun').classList.add('day');
	break;
	case 1:
		document.getElementById('mon').classList.add('day');
	break;
	case 2:
		document.getElementById('thu').classList.add('day');
	break;
	case 3:
		document.getElementById('wed').classList.add('day');
	break;
	case 4:
		document.getElementById('thu').classList.add('day');
	break;
	case 5:
		document.getElementById('fri').classList.add('day');
	break;
	case 6:
		document.getElementById('sat').classList.add('day');
	break;
}

var h= new Date();

var currentHour=h.getHours();

if(currentHour > 12){
	document.getElementById('pm').classList.add('hours');
}else{
	document.getElementById('am').classList.add('hours');
}