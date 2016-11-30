// javascript library for simple game development

var start = document.getElementById('start');
	start.innerHTML = '';
	start.setAttribute("onClick", "javascript:Level1();");
    document.getElementById('option1').innerHTML = 'Start';
    document.getElementById('start').style.display = "inline"
    document.getElementById('option1').style.display = "none"
    document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"

document.getElementById('option1').style.color = "white"
    document.getElementById('option1').style.fontSize = "20px";
    document.getElementById('option2').style.color = "white"
    document.getElementById('option2').style.fontSize = "20px";
    document.getElementById('option3').style.color = "white"
    document.getElementById('option3').style.fontSize = "20px";
    Haskey = false;
    Zak = false;
    

function GAMEOVER(){
	console.log("GAMEOVER");
	document.body.style.backgroundImage = "url('gameover.png')";
	document.getElementById('level_title').innerHTML = 'Je bent af...';
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('touw').style.display = "none"
	document.getElementById('zak').style.display = "none"
	document.getElementById('opnieuw').style.display = "inline"
	document.getElementById('start').style.display = "none"
	document.getElementById('start').style.display = "none"
document.getElementById('tekst').innerHTML = "";
}

function opnieuw(){

    location.reload();	
}


function Level1() {
	console.log("Level1()");
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
	document.getElementById('zak').style.display = "none"
	document.getElementById('start').style.display = "none"
	document.getElementById('option1').style.color = "white"

    document.getElementById('tekst').innerHTML = "Je bent bij de mysterieuze grot waar je in moet gaan... Lets go...";

	

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
	document.getElementById('zak').style.display = "none"

	document.getElementById('tekst').innerHTML = "Je bent in de grot... Het blijkt een tempel te zijn! en je ziet in de verte het goude beeldje! Maar... er zit een gat in de grond...";


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
	document.getElementById("touw").style.visibility="hidden";
}
}

function level3() {
    
	console.log("Level3")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je bent het gat gepasseerd... Je bent er al bijna.. maar het is veelste makkelijk...";
	document.getElementById('level_title').innerHTML = 'Next test'
	document.body.style.backgroundImage = "url('nietsnor.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Onderzoeken';
	opt1.setAttribute("onClick", "javascript:level4();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Doorlopen';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}
function level4() {
    
	console.log("Level4")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "inline"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je hebt ontdekt dat de grond waar je gaat op lopen niet veilig is...";
	document.getElementById('level_title').innerHTML = 'Next test'
	document.body.style.backgroundImage = "url('discover.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Voorzichtig lopen';
	opt1.setAttribute("onClick", "javascript:level5();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Enorme huppelsprong';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Just walk over it';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level5() {
    
	console.log("Level5")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je passeerd de pressureplates goed en nauwkeurig...";
	document.getElementById('level_title').innerHTML = 'Klik Next'
	document.body.style.backgroundImage = "url('ijwalkgood.jpg.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Next';
	opt1.setAttribute("onClick", "javascript:level6();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Springen';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}
function level6() {
    
	console.log("Level6")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "inline"
document.getElementById('tekst').innerHTML = "Je bent bij de Idol! Maar je moet de mechanisme manipuleren om geen gevaar te brengen.. Misschien een zakje?";
	document.getElementById('level_title').innerHTML = 'See idol'
	document.body.style.backgroundImage = "url('change2.gif')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

document.getElementById('option2').style.display = "inline"
	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Zak';
	opt2.onclick = function(){
		if (Zak) {
			level7();
			
	} else{
		alert('Geen zak!')
	}
}

var zak = document.getElementById('zak')

zak.onclick = function(){
	Zak = true;
	
     document.getElementById("zak").style.visibility="hidden";
   
}


var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");

}

function level7() {
    
	console.log("Level7")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Oow neeeee. Het heeft niet gewerkt! alles stort in!";
	document.getElementById('level_title').innerHTML = 'Next test'
	document.body.style.backgroundImage = "url('315.jpg')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'RENNEN';
	opt1.setAttribute("onClick", "javascript:level8();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Andere uitweg vinden';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}
function level8() {
    
	console.log("Level8")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Het is je gelukt! Je bent ontsnapt uit de tempel! Maaaar...";
	document.getElementById('level_title').innerHTML = 'Next test'
	document.body.style.backgroundImage = "url('ijescaped.jpg')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Next act';
	opt1.setAttribute("onClick", "javascript:level10();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Springen';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}


function level10() {
    
	console.log("Level10")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Om je heen staat een heel leger met indianen... en eens nazi...";
	document.getElementById('level_title').innerHTML = ''
	document.body.style.backgroundImage = "url('indianen.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = ' Pak je Revolver';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Overgeven';
	opt2.setAttribute("onClick", "javascript:level13();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}



function level13() {
    
	console.log("Level13")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je hebt geen keuze dan gewoon opgeven...Je besluit om je revolver af te geven";
	document.getElementById('level_title').innerHTML = 'Revolver geven'
	document.body.style.backgroundImage = "url('pistool.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Revolver geven';
	opt1.setAttribute("onClick", "javascript:level14();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Springen';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level14() {
    
	console.log("Level14")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "inline"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "De nazi wilt dat je het goude idol geef...";
	document.getElementById('level_title').innerHTML = 'Idol geven'
	document.body.style.backgroundImage = "url('idolgeven.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Weigeren';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Gooi weg';
	opt2.setAttribute("onClick", "javascript:level15a();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Geven';
	opt3.setAttribute("onClick", "javascript:level15b();");
}

function level15a() {
    
	console.log("Level15")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je hebt het idol in de jungle gegooit... Alle ogen zijn gericht op het idol en je vlucht voor je leven.";
	document.getElementById('level_title').innerHTML = 'running'
	document.body.style.backgroundImage = "url('run.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Next';
	opt2.setAttribute("onClick", "javascript:level17();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level15b() {
    
	console.log("Level15b")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "inline"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "De nazi laat het glorieuze idol zien aan de indianen... Het lijkt dat ze je niet in de gaten hebben?!";
	document.getElementById('level_title').innerHTML = 'running'
	document.body.style.backgroundImage = "url('afgeleid.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Pak revolver af';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Ren';
	opt2.setAttribute("onClick", "javascript:level17();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Blijven zitten';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level17() {
    
	console.log("Level17")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "";
	document.getElementById('level_title').innerHTML = 'running'
	document.body.style.backgroundImage = "url('run.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Rennen';
	opt2.setAttribute("onClick", "javascript:level18();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level18() {
    
	console.log("Level18")
	document.getElementById('option1').style.display = "inline"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "inline"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
	document.getElementById('level_title').innerHTML = ''
	document.getElementById('tekst').innerHTML = "Je ziet je maat Jack maar hij lijkt niet opteletten... Je ziet ook een jetski!";
	document.body.style.backgroundImage = "url('kiezen.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Vliegtuigje';
	opt1.setAttribute("onClick", "javascript:level19();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Verstoppen';
	opt2.setAttribute("onClick", "javascript:GAMEOVER();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Jetski';
	opt3.setAttribute("onClick", "javascript:level19b();");
}

function level19() {
    
	console.log("Level19")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je ziet dat Jack niet oplet...";
	document.getElementById('level_title').innerHTML = ''
	document.body.style.backgroundImage = "url('plane.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'zeg...START THE ENGINE';
	opt2.setAttribute("onClick", "javascript:level20();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level19b() {
    
	console.log("Level19b")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je bent bijna bij de jetski maar je moet de jetksi ook nog opstarten en dat kost tijd...";
	document.getElementById('level_title').innerHTML = ''
	document.body.style.backgroundImage = "url('jetski.jpg')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Doen alsof je dood ben';
	opt2.setAttribute("onClick", "javascript:level21();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function level20() {
    
	console.log("Level20")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "Je bent ontsnapt van de Mayas en de Nazi!";
	document.getElementById('level_title').innerHTML = 'Je bent ontsnapt!'
	document.body.style.backgroundImage = "url('escapebyplane.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Next';
	opt2.setAttribute("onClick", "javascript:levelmenu();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

function levelmenu() {
    
	console.log("Levelmenu")
	document.getElementById('start').style.display = "none"
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "inline"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "";
	document.getElementById('level_title').innerHTML = 'You beat the game!!'
	document.getElementById('endtekst').innerHTML = 'Dankje voor spelen :D!!'
	document.body.style.backgroundImage = "url('.png')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Next';
	opt2.setAttribute("onClick", "javascript:levelmenu();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}


function levelmenu2() {
    
	console.log("Levelmenu2")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "none"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "inline"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "";
	document.getElementById('level_title').innerHTML = 'You beat the game!!'
	document.body.style.backgroundImage = "url('')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Next';
	opt2.setAttribute("onClick", "javascript:levelmenu();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}
function level21() {
    
	console.log("Levelmenu2")
	document.getElementById('option1').style.display = "none"
	document.getElementById('option2').style.display = "inline"
	document.getElementById('option3').style.display = "none"
	document.getElementById('opnieuw').style.display = "none"
    document.getElementById('touw').style.display = "none"
    document.getElementById('zak').style.display = "none"
document.getElementById('tekst').innerHTML = "";
	document.getElementById('level_title').innerHTML = ''
	document.body.style.backgroundImage = "url('leavingjetksi.jpg')"

var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Springen';
	opt1.setAttribute("onClick", "javascript:GAMEOVER();");

var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Next';
	opt2.setAttribute("onClick", "javascript:levelmenu();");

var opt3 = document.getElementById('option3');
	opt3.innerHTML = 'Springen';
	opt3.setAttribute("onClick", "javascript:GAMEOVER();");
}

