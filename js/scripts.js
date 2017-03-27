//Tripple protected "Final Act" button

var button = document.getElementsByClassName("button");
console.log(button);	

for (var i=0; i<3; i++) {
	alert ("You will activate Countdown!!!");
}


for (var i=0; i<button.length; i++) {
	
	var btn = button[i];
    btn.addEventListener('click', function(e){
	    var color = e.target.getAttribute('data-color');
	    alert('Countdown - button_'+color);

    })

};