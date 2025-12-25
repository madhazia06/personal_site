// JavaScript Document
// For achievements page
var awards=["Media/distinction.png","Media/acceptances.png","Media/LGS2.png","Media/LGS1.png","Media/MUN.png","Media/graduation.png"]; // Array of image file paths for the slideshow
var descript=["Awarded Top in Pakistan Distinction in Information Technology for achieving the highest marks in the subject nationwide", "Received acceptances and scholarships from universities in the US and UK for undergraduate studies", "Awarded for achieving 2 A*s and 1 A in Advanced Level examinations", "Awarded for attaining the highest marks in college in Information Technology, Psychology, and Global Perspectives & Research", "Recognized as Secretary General for Model United Nations", "Academic Excellence Award for outstanding performance in O Levels"] // Array of descriptions for the slideshow matching and changing with each image
var counter=0; // slideshow starts at first image
var end=awards.length-1; //slideshow stops at final image
// Shows the next image + description in the slideshow
function foreward() {
	if (counter===end){
		alert("You have reached end of images!"); // If already at the last image, show message and stop
		return;
	}
	else {
		counter++;
		document.getElementById("pic").src=awards[counter];
		document.getElementById("description").innerHTML=descript[counter];
	}
}
// Shows the previous image + description in the slideshow
function back() {
    if (counter===0) {
		alert("You are already at the start of images!"); // If already at the first image, show message and stop
		return;
    }
	else {
		counter--;
		document.getElementById("pic").src=awards[counter];
		document.getElementById("description").innerHTML=descript[counter];
    }
}
// For Contact Page
// Called when the user submits the contact form (shows a confirmation popup)
function Sub() {
	window.alert("Your message is sent!")
}