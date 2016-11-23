// javascript library for simple game development

    document.getElementById('option1').innerHTML = 'Start';
    document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('gameover').style.display = "none"
    



function Level1() {
	console.log("Level1()");
	

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Ga de grot in ';
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Cave';
	document.body.style.backgroundImage = "url('cave.jpg')";


}


function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Test';
	opt1.setAttribute("onClick", "javascript:Level3();");

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = '100';
	opt2.setAttribute("onClick", "javascript:Level3();");

	var opt3 = document.getElementById('option3');
	opt3.innerHTML = '100';
	opt3.setAttribute("onClick", "javascript:Level3();");

	var opt1 = document.getElementById('gameover');
	optgameover.innerHTML = '100';
	optgameover.setAttribute("onClick", "javascript:gameover();");

	document.getElementById('level_title').innerHTML = 'Een gat in de grond';
	document.body.style.backgroundImage = "url('hole.jpg')";


}

