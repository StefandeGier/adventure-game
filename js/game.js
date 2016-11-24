// javascript library for simple game development


    document.getElementById('option1').innerHTML = 'Start';
    document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    Haskey = false;

    

function GAMEOVER(){
	console.log("GAMEOVER");
	document.body.style.backgroundImage = "url('gameover.png')";
	document.getElementById('level_title').innerHTML = 'Je bent af...';
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('touw').style.display = "none"
	document.getElementById('opnieuw').style.display = "inline"

}

function opnieuw(){

    location.reload();	
}


function Level1() {
	console.log("Level1()");
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
	

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga de grot in ';
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Cave';
	document.body.style.backgroundImage = "url('cave.jpg')";


}


function Level2() {
	console.log("Level2()");
document.getElementById('touw').style.display = "inline"
    document.getElementById('level_title').innerHTML = 'Een gat in de grond';
	document.body.style.backgroundImage = "url('gat.png')";
	document.getElementById('opnieuw').style.display = "none"


	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Walrunnen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
	document.getElementById('option3').style.display = "inline"

document.getElementById('option2').style.display = "inline"
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Touw';
	opt2.onclick = function(){
		if (Haskey) {
			level3();
	} else{
		alert('Geen touw!')
	}
}

var touw = document.getElementById('touw')

touw.onclick = function(){
	Haskey = true;
}
}

function level3() {
    
	console.log("Level3")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"

	document.getElementById('level_title').innerHTML = 'Next test'
	document.body.style.backgroundImage = "url('ijstare.jpg')"

}

    	
