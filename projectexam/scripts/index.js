// Toggle content on / off

var button = document.getElementById('moreInfoTrigger');
button.onclick = function() {
	var div = document.getElementById('moreInfoContent');
	if (div.style.display !== 'none') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
};


// Space Station Location


fetch('http://api.open-notify.org/iss-now.json')
    .then(result => result.json())
    .then((res) => { 
    spaceStation(res);
})
	.catch(err => console.log(err))

function spaceStation(result){
	var stationLocal = document.getElementById("spaceStation");
	stationLocal.innerHTML = "<p><strong>Timestamp: </strong>" + result.timestamp + "<p>";
	
	var localList = result.iss_position;
	var stationArticle = document.getElementById("station");
	stationArticle.innerHTML += '<p><strong>Latitude: </strong>' + localList.latitude + '</p>'; 
	stationArticle.innerHTML += '<p><strong>Longitude: </strong>' + localList.longitude + '</p>';
}



// People in space 


fetch('http://api.open-notify.org/astros.json')
    .then(result => result.json())
    .then((res) => { 
    countHumans(res);
})
	.catch(err => console.log(err))

function countHumans(result){ 
	var humansIn = document.getElementById("humanNumber");
	humansIn.innerHTML = result.number;
	
	var humanList = result.people;
	for (var i = 0; i < humanList.length; i++){
		var humanArticle = document.getElementById("human");
		humanArticle.innerHTML += '<p>' + humanList[i].name + '</p>'; 
	}
}

