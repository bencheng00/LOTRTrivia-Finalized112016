

var excellent = document.createElement('audio');
	       excellent.setAttribute('src', "assets/images/excellent.mp3");

var yousuck = document.createElement('audio');
	       yousuck.setAttribute('src', "assets/images/yousuck.mp3");

var prologue = document.createElement('audio');
	       prologue.setAttribute('src', "assets/images/prologue.mp3");

var moria = document.createElement('audio');
	       moria.setAttribute('src', "assets/images/moria.mp3");

var iseeyou = document.createElement('audio');
	       iseeyou.setAttribute('src', "assets/images/i_see_you_2.mp3");

var giveyouup = document.createElement('audio');
	       giveyouup.setAttribute('src', "assets/images/rickroll.mp3");

var sauronbattle = document.createElement('audio');
	       sauronbattle.setAttribute('src', "assets/images/sauronbattle.mp3");

var isengard = document.createElement('audio');
	       isengard.setAttribute('src', "assets/images/isengard.mp3");

var lothlorien = document.createElement('audio');
	       lothlorien.setAttribute('src', "assets/images/lothlorien.mp3");

var rivendell = document.createElement('audio');
	       rivendell.setAttribute('src', "assets/images/rivendell.mp3");

var entspissed1 = document.createElement('audio');
	       entspissed1.setAttribute('src', "assets/images/entspissed1.mp3");

var entspissed2 = document.createElement('audio');
	       entspissed2.setAttribute('src', "assets/images/entspissed2.mp3");

var fortheorlingas = document.createElement('audio');
	       fortheorlingas.setAttribute('src', "assets/images/fortheorlingas.mp3");

var rohan = document.createElement('audio');
	       rohan.setAttribute('src', "assets/images/rohan.mp3");

var hornburg = document.createElement('audio');
	       hornburg.setAttribute('src', "assets/images/hornburg.mp3");

var minastirith = document.createElement('audio');
	       minastirith.setAttribute('src', "assets/images/minastirith.mp3");

var minasmorgul = document.createElement('audio');
	       minasmorgul.setAttribute('src', "assets/images/minasmorgul.mp3");

var pelennor = document.createElement('audio');
	       pelennor.setAttribute('src', "assets/images/pelennor.mp3");

var finalbattle = document.createElement('audio');
	       finalbattle.setAttribute('src', "assets/images/finalbattle.mp3");

var rohirrim = document.createElement('audio');
	       rohirrim.setAttribute('src', "assets/images/rohirrim.mp3");

var scream = document.createElement('audio');
	       scream.setAttribute('src', "assets/images/scream1.mp3");

var eyesound = document.createElement('audio');
	       eyesound.setAttribute('src', "assets/images/eyesound.mp3");

var shire = document.createElement('audio');
	       shire.setAttribute('src', "assets/images/shire.mp3");

var newpower = document.createElement('audio');
	       newpower.setAttribute('src', "assets/images/newpower.mp3");


function benappear(){
	$("#takingcredit").css("display","block");
}

function startbuttonappear(){
	$("#startgame").css("display","block");
}

function playyousuck(){
	yousuck.play();
}

function playexcellent(){
	excellent.play();
}

function playprologue(){
	prologue.play();
}

function stopprologue(){
	prologue.pause();
	prologue.currentTime=0;
}

function playiseeyou(){
	iseeyou.play();
}

function music1(){
	moria.play();
	$("#screen").css("background-image", "url(assets/images/aragorn2.jpg)");
}

function music2(){
	sauronbattle.play();
	$("#screen").css("background-image", "url(assets/images/nazgul.jpg)");
}

function music3(){
	isengard.play();
	$("#screen").css("background-image", "url(assets/images/isengard1.jpg)");
}

function music4(){
	lothlorien.play();
	$("#screen").css("background-image", "url(assets/images/onering1.jpg)");
}

function music5(){
	rivendell.play();
	$("#screen").css("background-image", "url(assets/images/rivendell.jpg)");
}

function music6(){
	entspissed1.play();
	$("#screen").css("background-image", "url(assets/images/gandalf.jpg)");
}

function music7(){
	entspissed2.play();
	$("#screen").css("background-image", "url(assets/images/ents.jpg)");
}

function music8(){
	fortheorlingas.play();
	$("#screen").css("background-image", "url(assets/images/rohirrim.png)");
}

function music9(){
	rohan.play();
	$("#screen").css("background-image", "url(assets/images/rohan.jpg)");
}

function music10(){
	hornburg.play();
	$("#screen").css("background-image", "url(assets/images/elves.jpg)");
}

function music11(){
	minasmorgul.play();
	$("#screen").css("background-image", "url(assets/images/witchking.jpg)");
}

function music12(){
	minastirith.play();
	$("#screen").css("background-image", "url(assets/images/minastirith.jpg)");
}

function music13(){
	pelennor.play();
	$("#screen").css("background-image", "url(assets/images/pelennor.jpg)");
}

function music14(){
	finalbattle.play();
	$("#screen").css("background-image", "url(assets/images/baraddur.jpg)");
}

function music15(){
	rohirrim.play();
	$("#screen").css("background-image", "url(assets/images/army.jpg)");
}


function stopmusic(){
	moria.pause();
	moria.currentTime=0;
	sauronbattle.pause();
	sauronbattle.currentTime=0;
	isengard.pause();
	isengard.currentTime=0;
	lothlorien.pause();
	lothlorien.currentTime=0;
	rivendell.pause();
	rivendell.currentTime=0;
	entspissed1.pause();
	entspissed1.currentTime=0;
	entspissed2.pause();
	entspissed2.currentTime=0;
	fortheorlingas.pause();
	fortheorlingas.currentTime=0;
	hornburg.pause();
	hornburg.currentTime=0;
	minasmorgul.pause();
	minasmorgul.currentTime=0;
	minastirith.pause();
	minastirith.currentTime=0;
	pelennor.pause();
	pelennor.currentTime=0;
	finalbattle.pause();
	finalbattle.currentTime=0;
	rohirrim.pause();
	rohirrim.currentTime=0;
	rohan.pause();
	rohan.currentTime=0;
}


function randommusic1(){
	$("#correctanswerwas").css("display","none");
	var b = Math.floor(Math.random()*3); 
	if (b==0) {
		music2();
	}
	else if (b==1) {
		music4();
	}
	else if (b==2) {
		music5();
	}
}

function randommusic2(){
	$("#correctanswerwas").css("display","none");
	var c = Math.floor(Math.random()*3); 
	if (c==0) {
		music1();
	}
	else if (c==1) {
		music3();
	}
	else if (c==2) {
		music8();
	}
}


function randommusic3(){
	$("#correctanswerwas").css("display","none");
	var d = Math.floor(Math.random()*3); 
	if (d==0) {
		music6();
	}
	else if (d==1) {
		music7();
	}
	else if (d==2) {
		music9();
	}
}

function randommusic4(){
	$("#correctanswerwas").css("display","none");
	var e = Math.floor(Math.random()*3); 
	if (e==0) {
		music10();
	}
	else if (e==1) {
		music11();
	}
	else if (e==2) {
		music12();
	}
}

function randommusic5(){
	$("#correctanswerwas").css("display","none");
	var f = Math.floor(Math.random()*3); 
	if (f==0) {
		music13();
	}
	else if (f==1) {
		music14();
	}
	else if (f==2) {
		music15();
	}
}

function startscreen(){
	$("#screen").css("background-image", "url(assets/images/startingscreen5.jpg)");  
	$("#screen").css("background-size", "100% 100%");
	$("#startgame").css("position","absolute");
	$("#startgame").css("top","3%");
	$("#startgame").css("left","3%");
	$("#restart").css("position","absolute");
	$("#restart").css("top","3%");
	$("#restart").css("left","3%");
	setTimeout(playprologue,1000);
	setTimeout(benappear,3000);
	setTimeout(startbuttonappear,10500);
}


$(document).ready(function(){
	startscreen();

	// DETERMINES PROBABILITY OF GETTING RICK ROLLED
	var rickrollprob=7;

	$("#rick").attr("src","assets/images/rickroll.gif");
	$("#rick").css("display","none");
	$("#rick").css("position","absolute");
	$("#rick").css("width","50%");
	$("#rick").css("left","25%");
	$("#rick").css("top","5%");
	$("#rick").css("border-style","ridge");
	$("#rick").css("border-color","white");
	$("#rick").css("border-width","10px");
	$("#rickrolled").css("position","absolute");
	$("#rickrolled").css("bottom","2%");
	$("#rickrolled").css("left","36%");

// NUMBER OF MILLISECONDS AN IMAGE WILL FLASH ON SCREEN
var flashduration=400;

function bilbogone(){
	$("body").css("background-image","");
	$("#screen").css("display","block");
}

// FUNCTION TO MAKE SCARY BILBO IMAGE FLASH
function bilboflash(){
	$("body").css("background-image", "url(assets/images/scarybilbo2.jpg)"); 
	$("body").css("background-size","100% 100%");
	$("#screen").css("display","none"); 
	scream.play();
	setTimeout(bilbogone,flashduration);
}

function saurongone(){
	$("body").css("background-image","");
	$("#screen").css("display","block"); 
}

function saurondoesnotsee(){
	$("body").css("background-image","");
	$("#screen").css("display","block"); 
	$("#screen").css("background-image", "url(assets/images/blank.jpg)");
}

// FUNCTION TO MAKE EYE OF SAURON FLASH
function sauronflash(){
	$("body").css("background-image","url(assets/images/eyeofsauron2.jpg");
	$("body").css("background-size","100% 100%");
	$("#screen").css("display","none"); 
	eyesound.play();
	setTimeout(saurongone,flashduration);
}

function rickgone(){
	$("#rick").css("display","none");
	$("#screen").css("background-image", "url(assets/images/blank.jpg)"); 
}


function rickroll(){
	stopprologue();
	giveyouup.play();
	stopmusic();
	$("#correctanswerwas").css("display","none");
	$("#startgame").css("display","none");
	$("#restart").css("display","none");
	$("#takingcredit").css("display","none");
	$("#screen").css("background-image", "url(assets/images/rickrolled.jpg)"); 
	$("#rick").css("display","block");
	setTimeout(rickgone,8350);
	setTimeout(round1,10000);
}

function sauronsees(){
	setTimeout(stopprologue,4000);
	$("#startgame").css("display","none");
	$("#restart").css("display","none");
	$("#takingcredit").css("display","none");
	$("#screen").css("display","none"); 
	$("body").css("background-image","url(assets/images/eyeofsauron2.jpg");
	$("body").css("background-size","100% 100%");
	setTimeout(saurondoesnotsee,flashduration);
	iseeyou.play();	
	setTimeout(round1,4000);
}


function begingame(){
	var a = Math.floor(Math.random()*rickrollprob);
	if (a==0){
		rickroll();
	}
	else {
	sauronsees();
	}
}

$("#startgame").on("click", function(){
	begingame();
});

var timer = setTimeout(function() { $("#startgame").click(); }, 30000);
		$("#startgame").on("click",function(){
			clearTimeout(timer);
		});

var meaningless=0;
var playeranswer1=0;
var playeranswer2=0;
var playeranswer3=0;
var playeranswer4=0;
var playeranswer5=0;
var correctnumber1=0;
var correctanswer1="";
var correctnumber2=0;
var correctanswer2="";
var correctnumber3=0;
var correctanswer3="";
var correctnumber4=0;
var correctanswer4="";
var correctnumber5=0;
var correctanswer5="";
var correctanswer="";

var numbercorrect=0;
var numberwrong=0;

var timestillleft=25;
var buttonclicked=true;


function displaytime(){
	$("#timeleftsec").html(timestillleft);
}

function decrement(){
	timestillleft--;
	displaytime();
	if (timestillleft==0){
		buttonclicked=true;
		stopcountdown();
		timesup();
		if(numbercorrect+numberwrong==1){
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
		else if(numbercorrect+numberwrong==2){
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
		else if(numbercorrect+numberwrong==3){
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
		else if(numbercorrect+numberwrong==4){
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
		else if(numbercorrect+numberwrong==5){
			setTimeout(ending,4000);
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
		}
	}
}

function stopcountdown(){
	clearInterval(counter);
	$("#timeleftsec").css("display","none");
	$("#timeleft").css("display","none");
	timestillleft=25;
}

function countdown(){
	displaytime();
	$("#timeleftsec").css("display","block");
	$("#timeleft").css("display","block");
	counter=setInterval(decrement,1000);
}


function answercorrect(){
	excellent.play();
	stopcountdown();
	$("#questionarea").css("display","none")
	$("#screen").css("background-image", "url(assets/images/correctscreen1.jpg)"); 
	setTimeout(stopmusic,4000);
	numbercorrect++;
	console.log("Number Correct: "+numbercorrect);
	console.log("Number Wrong: "+numberwrong);
	console.log("----------------")
}

function answerwrong(){
	yousuck.play();
	stopcountdown();
	$("#questionarea").css("display","none")
	$("#screen").css("background-image", "url(assets/images/wrongscreen1.jpg)"); 
	$("#row1").css("height","75%");
	$("#correctanswerwas").css("display","block");
	$("#correctanswerwas").css("font-size","40px");
	$("#correctanswerwas").html("The correct answer was "+correctanswer);
	setTimeout(stopmusic,4000);
	numberwrong++;
	console.log("Number Correct: "+numbercorrect);
	console.log("Number Wrong: "+numberwrong);
	console.log("----------------")
}

function timesup(){
	yousuck.play();
	$("#questionarea").css("display","none")
	$("#screen").css("background-image", "url(assets/images/timeupscreen1.jpg)"); 
	$("#row1").css("height","75%");
	$("#correctanswerwas").css("display","block");
	$("#correctanswerwas").css("font-size","40px");
	$("#correctanswerwas").html("The correct answer was "+correctanswer);
	numberwrong++;
	console.log("Number Correct: "+numbercorrect);
	console.log("Number Wrong: "+numberwrong);
	console.log("----------------")
}


function restore(){
	if (!buttonclicked){
	$("#timeleft").css("display","block");
	$("#timeleftsec").css("display","block");
	// $("#questionarea").css("display","block");
}
	else if (buttonclicked){
		meaningless=meaningless;
	}
}


function scaryshit(){

	var g1=Math.floor(Math.random()*10000)+1100; // Determines time when image will flash
	var g2=Math.floor(Math.random()*3); // Determines if image will flash
	var g3=Math.floor(Math.random()*2); // Determines which image will flash

	function flashimage(){
		if (g3==0){
			sauronflash();
			$("#timeleft").css("display","none");
			$("#timeleftsec").css("display","none");
			// $("#questionarea").css("display","none");
			setTimeout(restore,flashduration);
		}
		else if (g3==1){
			bilboflash();
			$("#timeleft").css("display","none");
			$("#timeleftsec").css("display","none");
			// $("#questionarea").css("display","none");
			setTimeout(restore,flashduration);
		}
	}

	if (g2==0){
		setTimeout(flashimage,g1);
	}
}




function randomquestion1(){
	buttonclicked=false;
	scaryshit();
	countdown();
	$("#row1").css("height","32%");
	$("#questionarea").css("display","block");
	$("#questionnumber").html("QUESTION #1");

	var q1=Math.floor(Math.random()*6)

if (q1==0){
	$("#question").html('In Khazad-dum, right before Gandalf falls, he tells the Fellowship: "_______, you fools!"')
	$("#choice1a").html('(1) Run')
	$("#choice2a").html('(2) Fly')
	$("#choice3a").html('(3) Fries')
	$("#choice4a").html('(4) Bye')
	correctanswer1="FLY.";
	correctnumber1=2;
}

if (q1==1){
	$("#question").html('Aragorn actor Viggo Mortensen has NOT appeared in which of these movies?')
	$("#choice1a").html('(1) A History of Violence')
	$("#choice2a").html('(2) Eastern Promises')
	$("#choice3a").html('(3) Blood Ties')
	$("#choice4a").html('(4) A Dangerous Method')
	correctanswer1="BLOOD TIES.";
	correctnumber1=3;
}

if (q1==2){
	$("#question").html('Tolkien gave Christopher Lee his blessing to play which character?')
	$("#choice1a").html('(1) Saruman')
	$("#choice2a").html('(2) Gandalf')
	$("#choice3a").html('(3) Elrond')
	$("#choice4a").html('(4) Galadriel')
	correctanswer1="GANDALF.";
	correctnumber1=2;
}

if (q1==3){
	$("#question").html('Aragorn has had other names including all of the following EXCEPT:')
	$("#choice1a").html('(1) Strider')
	$("#choice2a").html('(2) Elessar')
	$("#choice3a").html('(3) Thorongil')
	$("#choice4a").html('(4) Thengel')
	correctanswer1="THENGEL.";
	correctnumber1=4;
}

if (q1==4){
	$("#question").html('Boromir helpfully offers: "One does not simply walk into __________."')
	$("#choice1a").html('(1) Isengard')
	$("#choice2a").html('(2) Mordor')
	$("#choice3a").html('(3) Rohan')
	$("#choice4a").html('(4) Nobu')
	correctanswer1="MORDOR.";
	correctnumber1=2;
}

if (q1==5){
	$("#question").html('The name of the tower that Saruman resides in is called:')
	$("#choice1a").html('(1) Cirith Ungol')
	$("#choice2a").html('(2) Barad-dur')
	$("#choice3a").html('(3) Ravenclaw Tower')
	$("#choice4a").html('(4) Orthanc')
	correctanswer1="ORTHANC.";
	correctnumber1=4;
}

correctanswer=correctanswer1;


	$("#choice1a").on("click",function(){
		playeranswer1=1;
		buttonclicked=true;
		if (playeranswer1==correctnumber1){
			answercorrect();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
		else {
			answerwrong();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
	});

	$("#choice2a").on("click",function(){
		playeranswer1=2;
		buttonclicked=true;
		if (playeranswer1==correctnumber1){
			answercorrect();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
		else {
			answerwrong();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
	});

	$("#choice3a").on("click",function(){
		playeranswer1=3;
		buttonclicked=true;
		if (playeranswer1==correctnumber1){
			answercorrect();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
		else {
			answerwrong();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
	});

	$("#choice4a").on("click",function(){
		playeranswer1=4;
		buttonclicked=true;
		if (playeranswer1==correctnumber1){
			answercorrect();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
		else {
			answerwrong();
			setTimeout(round2,4000);
			$("#questionarea").css("display","none");
			$("#choice1a").remove();
			$("#choice2a").remove();
			$("#choice3a").remove();
			$("#choice4a").remove();
		}
	});
}


function round1(){
setTimeout(randomquestion1,1000);
randommusic1();
}


function round2(){
setTimeout(randomquestion2,1000);
randommusic2();
}


function round3(){
setTimeout(randomquestion3,1000);
randommusic3();
}


function round4(){
setTimeout(randomquestion4,1000);
randommusic4();
}


function round5(){
setTimeout(randomquestion5,1000);
randommusic5();
}




function randomquestion2(){
	buttonclicked=false;
	scaryshit();
	countdown();
	$("#row1").css("height","32%");
	$("#questionarea").css("display","block");
	$("#questionnumber").html("QUESTION #2");

	var q2=Math.floor(Math.random()*6)

if (q2==0){
	$("#question").html('From which long-haired beauty did Aragorn reject a romantic advance?')
	$("#choice1b").html('(1) Arwen')
	$("#choice2b").html('(2) Eowyn')
	$("#choice3b").html('(3) Legolas')
	$("#choice4b").html('(4) None. Aragorn welcomes any and all advances.')
	correctanswer2="EOWYN.";
	correctnumber2=2;
}

if (q2==1){
	$("#question").html('At the end of the trilogy, Sam ends up marrying:')
	$("#choice1b").html('(1) Frodo')
	$("#choice2b").html('(2) Annie')
	$("#choice3b").html('(3) Rosie')
	$("#choice4b").html('(4) No one. Sam dies alone and unloved.')
	correctanswer2="ROSIE.";
	correctnumber2=3;
}

if (q2==2){
	$("#question").html('Complete this sentence: "Nobody tosses _________!"')
	$("#choice1b").html('(1) a dwarf')
	$("#choice2b").html('(2) a rock of that size')
	$("#choice3b").html('(3) his cookies on me')
	$("#choice4b").html('(4) my belongings')
	correctanswer2="A DWARF.";
	correctnumber2=1;
}

if (q2==3){
	$("#question").html('Narsil was the sword originally wielded by whom?')
	$("#choice1b").html('(1) Isildur')
	$("#choice2b").html('(2) Aragorn')
	$("#choice3b").html('(3) Elendil')
	$("#choice4b").html('(4) The Witch-King of Angmar')
	correctanswer2="ELENDIL.";
	correctnumber2=3;
}

if (q2==4){
	$("#question").html("The One Ring was cut off of Sauron's finger by whom?")
	$("#choice1b").html('(1) Elendil')
	$("#choice2b").html('(2) Isildur')
	$("#choice3b").html('(3) Elrond')
	$("#choice4b").html('(4) Lorena Bobbitt')
	correctanswer2="ISILDUR.";
	correctnumber2=2;
}

if (q2==5){
	$("#question").html('Gandalf and Saruman were all of the following EXCEPT:')
	$("#choice1b").html('(1) Wizards')
	$("#choice2b").html('(2) Istari')
	$("#choice3b").html('(3) Maiar')
	$("#choice4b").html('(4) Valar')
	correctanswer2="VALAR.";
	correctnumber2=4;
}

correctanswer=correctanswer2;


	$("#choice1b").on("click",function(){
		playeranswer2=1;
		buttonclicked=true;
		if (playeranswer2==correctnumber2){
			answercorrect();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
		else {
			answerwrong();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
	});

	$("#choice2b").on("click",function(){
		playeranswer2=2;
		buttonclicked=true;
		if (playeranswer2==correctnumber2){
			answercorrect();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
		else {
			answerwrong();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
	});

	$("#choice3b").on("click",function(){
		playeranswer2=3;
		buttonclicked=true;
		if (playeranswer2==correctnumber2){
			answercorrect();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
		else {
			answerwrong();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
	});

	$("#choice4b").on("click",function(){
		playeranswer2=4;
		buttonclicked=true;
		if (playeranswer2==correctnumber2){
			answercorrect();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
		else {
			answerwrong();
			setTimeout(round3,4000);
			$("#questionarea").css("display","none");
			$("#choice1b").remove();
			$("#choice2b").remove();
			$("#choice3b").remove();
			$("#choice4b").remove();
		}
	});
}


function randomquestion3(){
	buttonclicked=false;
	scaryshit();
	countdown();
	$("#row1").css("height","32%");
	$("#questionarea").css("display","block");
	$("#questionnumber").html("QUESTION #3");

	var q3=Math.floor(Math.random()*6)

if (q3==0){
	$("#question").html('Sauron was not the first Dark Lord in the Tolkien universe. Who was?')
	$("#choice1c").html('(1) Voldemort')
	$("#choice2c").html('(2) Morgoth')
	$("#choice3c").html('(3) Grindelwald')
	$("#choice4c").html('(4) Ganon')
	correctanswer3="MORGOTH.";
	correctnumber3=2;
}

if (q3==1){
	$("#question").html("Why did Theoden initially not want to come to Gondor's aid?")
	$("#choice1c").html('(1) Because he is a dick.')
	$("#choice2c").html("(2) Gondor did not come to Rohan's aid at Helm's Deep.")
	$("#choice3c").html("(3) Rohan's armed forces were already decimated.")
	$("#choice4c").html('(4) All of the above.')
	correctanswer3="ALL OF THE ABOVE.";
	correctnumber3=4;
}

if (q3==2){
	$("#question").html('Galadriel is married to whom?')
	$("#choice1c").html('(1) Gandalf')
	$("#choice2c").html('(2) Elrond')
	$("#choice3c").html('(3) Celeborn')
	$("#choice4c").html('(4) Radagast')
	correctanswer3="CELEBORN.";
	correctnumber3=3;
}

if (q3==3){
	$("#question").html("Who was Gimli's father?")
	$("#choice1c").html('(1) Balin')
	$("#choice2c").html('(2) Gloin')
	$("#choice3c").html('(3) Grond')
	$("#choice4c").html('(4) Peter Dinklage')
	correctanswer3="GLOIN.";
	correctnumber3=2;
}

if (q3==4){
	$("#question").html('The "advisor" who turned Theoden against Eomer was:')
	$("#choice1c").html('(1) Denethor')
	$("#choice2c").html('(2) Wormtail')
	$("#choice3c").html('(3) Wormtongue')
	$("#choice4c").html('(4) Theodred')
	correctanswer3="WORMTONGUE.";
	correctnumber3=3;
}

if (q3==5){
	$("#question").html('The Eye of Sauron sits atop which of the following?')
	$("#choice1c").html('(1) Isengard')
	$("#choice2c").html('(2) Barad-dur')
	$("#choice3c").html('(3) Minas Morgul')
	$("#choice4c").html('(4) The decorations at Cheesecake Factory')
	correctanswer3="BARAD-DUR.";
	correctnumber3=2;
}

correctanswer=correctanswer3;


	$("#choice1c").on("click",function(){
		playeranswer3=1;
		buttonclicked=true;
		if (playeranswer3==correctnumber3){
			answercorrect();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
		else {
			answerwrong();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
	});

	$("#choice2c").on("click",function(){
		playeranswer3=2;
		buttonclicked=true;
		if (playeranswer3==correctnumber3){
			answercorrect();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
		else {
			answerwrong();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
	});

	$("#choice3c").on("click",function(){
		playeranswer3=3;
		buttonclicked=true;
		if (playeranswer3==correctnumber3){
			answercorrect();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
		else {
			answerwrong();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
	});

	$("#choice4c").on("click",function(){
		playeranswer3=4;
		buttonclicked=true;
		if (playeranswer3==correctnumber3){
			answercorrect();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
		else {
			answerwrong();
			setTimeout(round4,4000);
			$("#questionarea").css("display","none");
			$("#choice1c").remove();
			$("#choice2c").remove();
			$("#choice3c").remove();
			$("#choice4c").remove();
		}
	});
}


function randomquestion4(){
	buttonclicked=false;
	scaryshit();
	countdown();
	$("#row1").css("height","32%");
	$("#questionarea").css("display","block");
	$("#questionnumber").html("QUESTION #4");

	var q4=Math.floor(Math.random()*6)

if (q4==0){
	$("#question").html('In the village of Bree, there is an inn called:')
	$("#choice1d").html("(1) The Hog's Head")
	$("#choice2d").html('(2) The Prancing Pony')
	$("#choice3d").html("(3) Applebee's")
	$("#choice4d").html('(4) The Three Broomsticks')
	correctanswer4="THE PRANCING PONY.";
	correctnumber4=2;
}

if (q4==1){
	$("#question").html('Legolas actor Orlando Bloom punched whom in the face?')
	$("#choice1d").html('(1) Johnny Depp')
	$("#choice2d").html('(2) Justin Bieber')
	$("#choice3d").html('(3) Viggo Mortensen')
	$("#choice4d").html('(4) Robert Pattinson')
	correctanswer4="JUSTIN BIEBER.";
	correctnumber4=2;
}

if (q4==2){
	$("#question").html("Treebeard took exception to Saruman's...")
	$("#choice1d").html('(1) destruction of Fangorn Forest')
	$("#choice2d").html('(2) failure to bathe regularly')
	$("#choice3d").html('(3) contempt for the Ents')
	$("#choice4d").html('(4) breeding of Uruk-hai')
	correctanswer4="DESTRUCTION OF FANGORN FOREST.";
	correctnumber4=1;
}

if (q4==3){
	$("#question").html("What is Merry's last name?")
	$("#choice1d").html('(1) Took')
	$("#choice2d").html('(2) Gamgee')
	$("#choice3d").html('(3) Brandybuck')
	$("#choice4d").html('(4) Christmas')
	correctanswer4="BRANDYBUCK.";
	correctnumber4=3;
}

if (q4==4){
	$("#question").html('In The Two Towers, Frodo and Sam were captured then released by whom?')
	$("#choice1d").html('(1) Denethor')
	$("#choice2d").html('(2) Faramir')
	$("#choice3d").html('(3) Boromir')
	$("#choice4d").html('(4) Theoden')
	correctanswer4="FARAMIR.";
	correctnumber4=2;
}

if (q4==5){
	$("#question").html('How many Rings of Power were given to the dwarves?')
	$("#choice1d").html('(1) One')
	$("#choice2d").html('(2) Three')
	$("#choice3d").html('(3) Seven')
	$("#choice4d").html('(4) Nine')
	correctanswer4="SEVEN.";
	correctnumber4=3;
}

correctanswer=correctanswer4;


	$("#choice1d").on("click",function(){
		playeranswer4=1;
		buttonclicked=true;
		if (playeranswer4==correctnumber4){
			answercorrect();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
		else {
			answerwrong();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
	});

	$("#choice2d").on("click",function(){
		playeranswer4=2;
		buttonclicked=true;
		if (playeranswer4==correctnumber4){
			answercorrect();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
		else {
			answerwrong();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
	});

	$("#choice3d").on("click",function(){
		playeranswer4=3;
		buttonclicked=true;
		if (playeranswer4==correctnumber4){
			answercorrect();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
		else {
			answerwrong();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
	});

	$("#choice4d").on("click",function(){
		playeranswer4=4;
		buttonclicked=true;
		if (playeranswer4==correctnumber4){
			answercorrect();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
		else {
			answerwrong();
			setTimeout(round5,4000);
			$("#questionarea").css("display","none");
			$("#choice1d").remove();
			$("#choice2d").remove();
			$("#choice3d").remove();
			$("#choice4d").remove();
		}
	});
}


function randomquestion5(){
	buttonclicked=false;
	// scaryshit();
	countdown();
	$("#row1").css("height","32%");
	$("#questionarea").css("display","block");
	$("#questionnumber").html("QUESTION #5");

	var q5=Math.floor(Math.random()*6)

if (q5==0){
	$("#question").html('At the Bridge of Khazad-dum, Gandalf battles against:')
	$("#choice1e").html('(1) Shelob')
	$("#choice2e").html('(2) a Balrog')
	$("#choice3e").html('(3) the Nazgul')
	$("#choice4e").html('(4) hour-long traffic delays')
	correctanswer5="A BALROG.";
	correctnumber5=2;
}

if (q5==1){
	$("#question").html('The shards of Narsil were later reforged as:')
	$("#choice1e").html('(1) Glamdring')
	$("#choice2e").html('(2) Anduril')
	$("#choice3e").html('(3) Sting')
	$("#choice4e").html('(4) Anguirel')
	correctanswer5="ANDURIL.";
	correctnumber5=2;
}

if (q5==2){
	$("#question").html('From whom did Gollum FIRST take the One Ring by force?')
	$("#choice1e").html('(1) Bilbo')
	$("#choice2e").html('(2) Frodo')
	$("#choice3e").html('(3) Deagol')
	$("#choice4e").html('(4) Sam')
	correctanswer5="DEAGOL.";
	correctnumber5=3;
}

if (q5==3){
	$("#question").html('The Witch-King of Angmar has his lair at:')
	$("#choice1e").html('(1) Minas Tirith')
	$("#choice2e").html('(2) Minas Morgul')
	$("#choice3e").html('(3) Cirith Ungol')
	$("#choice4e").html('(4) White Castle')
	correctanswer5="MINAS MORGUL.";
	correctnumber5=2;
}

if (q5==4){
	$("#question").html("Legolas insightfully shouts: \"They're taking the Hobbits to ________!\"")
	$("#choice1e").html('(1) Mordor')
	$("#choice2e").html('(2) Isengard')
	$("#choice3e").html('(3) Rivendell')
	$("#choice4e").html('(4) Hell')
	correctanswer5="ISENGARD.";
	correctnumber5=2;
}

if (q5==5){
	$("#question").html("Pippin's real first name is:")
	$("#choice1e").html('(1) Pelendur')
	$("#choice2e").html('(2) Pallando')
	$("#choice3e").html('(3) Peregrin')
	$("#choice4e").html('(4) Scottie')
	correctanswer5="PEREGRIN.";
	correctnumber5=3;
}

correctanswer=correctanswer5;


	$("#choice1e").on("click",function(){
		playeranswer5=1;
		buttonclicked=true;
		if (playeranswer5==correctnumber5){
			answercorrect();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
		else {
			answerwrong();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
	});

	$("#choice2e").on("click",function(){
		playeranswer5=2;
		buttonclicked=true;
		if (playeranswer5==correctnumber5){
			answercorrect();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
		else {
			answerwrong();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
	});

	$("#choice3e").on("click",function(){
		playeranswer5=3;
		buttonclicked=true;
		if (playeranswer5==correctnumber5){
			answercorrect();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
		else {
			answerwrong();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
	});

	$("#choice4e").on("click",function(){
		playeranswer5=4;
		buttonclicked=true;
		if (playeranswer5==correctnumber5){
			answercorrect();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
		else {
			answerwrong();
			$("#questionarea").css("display","none");
			$("#choice1e").remove();
			$("#choice2e").remove();
			$("#choice3e").remove();
			$("#choice4e").remove();
			setTimeout(ending,4000);
		}
	});
}


function restartappear(){
	$("#restart").css("display","block")
}

function makecomment(){
	$("#wins").css("display","none");
	$("#losses").css("display","none");
	$("#commentary").css("display","block");
	$("#commentary").css("font-size","30px");
	$("#row1").css("height","50%");

	if(numbercorrect==5){
		$("#commentary").html("You must be so proud.");
	}
	else if(numbercorrect==4){
		$("#commentary").html("You did fairly well, surprisingly.");
	}
	else if(numbercorrect==3){
		$("#commentary").html("You're pretty mediocre.");
	}
	else if(numbercorrect==2){
		$("#commentary").html("You're not too good at this.");
	}
	else if(numbercorrect==1){
		$("#commentary").html("You did a piss poor job.");
	}
	else if(numbercorrect==0){
		$("#commentary").html("You just suck.");
	}
}



function ending(){
	shire.play();
	$("#row1").css("height","45%");
	$("#screen").css("background-image", "url(assets/images/endscreen1.jpg)");  
	$("#correctanswerwas").css("display","none");
	$("#wins").css("display","block");
	$("#wins").css("font-size","35px");
	$("#wins").html("Correct: "+numbercorrect);
	$("#losses").css("display","block");
	$("#losses").css("font-size","35px");
	$("#losses").html("Wrong: "+numberwrong);
	setTimeout(restartappear,5000);
	setTimeout(makecomment,3000);
}


function startagain(){
	window.location.reload(true);
}


function sarumangone(){
	$("#sreen").css("display","block");
	$("body").css("background-image", "");
}


function sarumanflash(){
	$("body").css("background-image", "url(assets/images/saruman3.jpg)"); 
	$("body").css("background-size", "100% 100%"); 
	$("#screen").css("display","none");
	newpower.play();
	setTimeout(sarumangone,1000);
}


function newgame(){
	var t=Math.floor(Math.random()*5);

	if (t==0){
		rickroll();
		setTimeout(startagain,9000);
	}
	else if (t==1){
		bilboflash();
		setTimeout(startagain,2000);
	}
	else if (t==2){
		sarumanflash();
		setTimeout(startagain,3000);
	}

	else{
		startagain();
	}
}


$("#restart").on("click",function(){
	$("#screen").css("background-image", "url(assets/images/blank.jpg)");  
	$("#commentary").css("display","none");
	$("#restart").css("display","none");
	shire.pause();
	shire.currentTime=0;
	newgame();
});



// $("#test").on("click",function(){
// sarumanflash();
// });



}); 



// Last Updated September 20, 2016 at 10:26pm






