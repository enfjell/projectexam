// JavaScript Document

// Article 1

fetch('http://enfjelldesign.com/proxy.php?url=https://api.nasa.gov/techport/api/projects/92065?api_key=rf4C3OLbTGk45o9s8DhUIXZgmZwI4i5WXDugW1q1')

	.then(result => result.json())
    .then((res) => { createArticle (res);
})
	.catch(err => console.log(err))

function createArticle (result){
	var contentList = result.project;
    var myArticle = document.getElementById("newArticleHead");
	myArticle.innerHTML += '<h4 class="h480">' + contentList.title + '</h4>';
	
	var myArticle1 = document.getElementById("newArticle");
    myArticle1.innerHTML += contentList.description;
	
	var myArticle2 = document.getElementById("newSide");
	myArticle2.innerHTML += '<p class="pcontact"><strong>Start Date:</strong>' + contentList.startDate + '</p>'; 
	myArticle2.innerHTML += '<p class="pcontact"><strong>End Date:</strong>' + contentList.endDate + '</p>';
}

// Article 2

fetch('http://enfjelldesign.com/proxy.php?url=https://api.nasa.gov/techport/api/projects/33080?api_key=rf4C3OLbTGk45o9s8DhUIXZgmZwI4i5WXDugW1q1')

	.then(result => result.json())
    .then((res) => { createArticle1 (res);
})
	.catch(err => console.log(err))

function createArticle1 (result){
	var contentList = result.project;
    var myArticle = document.getElementById("newArticleHead1");
	myArticle.innerHTML += '<h4 class="h480">' + contentList.title + '</h4>';
	
	var myArticle1 = document.getElementById("newArticle1");
    myArticle1.innerHTML += contentList.description;
	
	var myArticle2 = document.getElementById("newSide1");
	myArticle2.innerHTML += '<p class="pcontact"><strong>Start Date:</strong>' + contentList.startDate + '</p>'; 
	myArticle2.innerHTML += '<p class="pcontact"><strong>End Date:</strong>' + contentList.endDate + '</p>';
}


// Slider buttons



var articleIndex = 1;
showDivs(articleIndex);

function plusDivs(n) {
    showDivs(articleIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("newArticleC");
    if (n > x.length) {articleIndex = 1} 
    if (n < 1) {articleIndex = x.length};
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[articleIndex-1].style.display = "block"; 
}




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



// Toggle content on / off

var button = document.getElementById('moreInfoTrigger1');
button.onclick = function() {
	var div = document.getElementById('moreInfoContent1');
	if (div.style.display !== 'none') {
		div.style.display = 'none';
	}
	else {
		div.style.display = 'block';
	}
};



// IMAGE OF THE DAY



fetch('https://api.nasa.gov/planetary/apod?api_key=rf4C3OLbTGk45o9s8DhUIXZgmZwI4i5WXDugW1q1&count=1')
	.then(result => result.json())
    .then((res) => { createImg (res);
})
	.catch(err => console.log(err))

function createImg (result){
	var cardList = result;
	for(var i = 0; i < cardList.length; i++) {
	var myArticle = document.getElementById("newImg");
		myArticle.innerHTML += '<h4>' + cardList[i].title + '</h4>';
		myArticle.innerHTML += '<img src="' + cardList[i].url + '">';
		myArticle.innerHTML += '<p class="pcontact">Copyright by: ' + cardList[i].copyright + '</p>';
		myArticle.innerHTML += '<p class="pcontact"><strong>Date:</strong> ' + cardList[i].date + '</p>';
		
		var myArticle2 = document.getElementById("imgArticle");
		myArticle2.innerHTML += '<h4>Explanation</h4>';

		myArticle2.innerHTML += cardList[i].explanation;
	}
}
