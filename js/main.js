let sites = {
	"creatur": "https://www.creatur.io/",
	"paper": "https://www.paper-io.com/",
	"hole": "https://hole-io.com/",
	"worm": "https://wormate.io/",
	"silver": "https://silvergames.com/",
	/*"blank": "about:blank",*/
	"bing": "https://bing.com/"
};

function openSesame() {
	document.getElementById('truediv').classList = 'visible';
	document.getElementById('signinsuccess').classList = 'hidden';
	document.getElementById('googlesignin').classList = 'hidden';
	document.getElementById('body').classList = 'bgimg';
}
/*
function startChat() {
  var displayName = prompt("Please choose a nickname:", "Funny Cheetah");
  while (displayName == null) {
    prompt("Please choose a nickname:", "Funny Cheetah");
  } else {
    document.getElementById('startchat').classList = 'hidden';
  }
}*/

function openPage(evt, pageName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}

function openSite(evt, siteName) {
	var l, tabcontent1, tablink;

	tabcontent1 = document.getElementsByClassName("tabcontent1");
	for (l = 0; l < tabcontent1.length; l++) {
		tabcontent1[l].style.display = "none";
		document.getElementById(Object.keys(sites)[l]).src = "";
	}

	tablinks1 = document.getElementsByClassName("tablinks1");
	for (l = 0; l < tablinks1.length; l++) {
		tablinks1[l].className = tablinks1[l].className.replace(" active", "");
	}

	document.getElementById(siteName).parentElement.style.display = "block";

	document.getElementById(siteName).src = sites[siteName];
	evt.currentTarget.className += " active";
}
