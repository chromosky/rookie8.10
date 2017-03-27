//Tripple protected "Final Act" button

document.addEventListener("DOMContentLoaded", function () {
	var button = document.getElementsByClassName("button");
	for (var i=0; i<3; i++) {
		alert ("You will activate Countdown!!!");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	var button = document.getElementsByClassName("button");
	for (var i=0; i<button.length; i++) {
	var newElem = document.createElement("");

	newElem.innerText = "You will activate Countdown!!!";

	alert(newElem);
    }

});