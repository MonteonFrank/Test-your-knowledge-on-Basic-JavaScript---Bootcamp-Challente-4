//Variables with query selector
var paragraphBeginQuiz = document.querySelector(".BeginQuiz");
var StartButtonContainer = document.querySelector(".buttoncontainer");
var startButton = document.querySelector(".startQuizButton");
var timeEl = document.querySelector(".time");
var quizquestion = document.querySelector(".quizquestion");
var multiplechoiceContainer = document.querySelector(".multiplechoice");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var grades = document.querySelector(".grades");
var nameinput = document.querySelector(".nameinputcontainer");
var initialsinput = document.querySelector(".initials");
var submitnamebutton = document.querySelector(".submitnamebutton");
var gobackbutton = document.querySelector(".gobackbutton");
var HighScoreContainer = document.querySelector(".HighScoreBoard");
var record = document.querySelector("#record");
var score = 0;
var secondsLeft = 60;
var quizComplete = false;
var AllHighScores = [];


//AllHighScores = JSON.parse(localStorage.getItem("AllHighScores")); //Text into JS Object


//Set attributes dynamically and hide some elements at the beginning of the quiz
quizquestion.setAttribute("style", "align-text:center");
multiplechoiceContainer.style.display = "none";
nameinput.style.display="none";
quizquestion.style.display = "none";
timeEl.textContent = "Time Left: "

//Starts the Quiz and the timer for the first time
startButton.addEventListener("click", setTime);                 
startButton.addEventListener("click", Q1Question);


//Questions as an object
var QuizQuestions = {
	Q1: "Inside what element do we put JavaScript?",
	Q2:"Which operator is used to assign a value to a variable?",
	Q3:"How do we insert a comment that has more than one line in JavaScript?",
	Q4:"How does a for loop start?",
	Q5:"Is Java the same as JavaScript?",
};


//Answers per question as an object
var QuizAnswersQ1 = {
		Q1A1: "Script",
		Q1A2: "JavaScript",
		Q1A3: "Scripting",
		Q1A4: "JS"
}

var QuizAnswersQ2 = {
		Q2A1: "=",
		Q2A2: "-",
		Q2A3: "*",
		Q2A4: "X",
}

var QuizAnswersQ3 = {
		Q3A1: "/*....*/",
		Q3A2: "//....",
		Q3A3: "<!....-->",
		Q3A4: "**....**",
}

var QuizAnswersQ4 = {
		Q4A1: "for (i=0 ; i<5 ; i++)",
		Q4A2: "for (i=0 ; i<5)",
		Q4A3: "for (i<5 ; i++)",
		Q4A4: "for (i=1 to i=5)",
}

var QuizAnswersQ5 = {
		Q5A1: "No",
		Q5A2: "Yes",
		Q5A3: "Maybe",
		Q5A4: "Its complicated"
}



//Function to set time and to finish the quiz if the timer reaches 0 or if the last question is answered
function setTime() {



	StartButtonContainer.style.display = "none";
    paragraphBeginQuiz.style.display = "none";

	var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Time Left: " + secondsLeft;
  
  
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time is up!");
		window.location.reload();

      }
	
	  if (quizComplete == true){
		clearInterval(timerInterval);
		secondsLeft = 0
	}

      }, 1000);


	}
//Function per question to dinamically change as the user answers the quiz
function Q1Question(){



	console.log(quizComplete);

	quizquestion.style.display = "block";

	multiplechoiceContainer.style.display = "block";
	
	quizquestion.innerHTML = QuizQuestions.Q1;
	
	option1.textContent = QuizAnswersQ1.Q1A1;
	option2.textContent = QuizAnswersQ1.Q1A2;
	option3.textContent= QuizAnswersQ1.Q1A3;
	option4.textContent = QuizAnswersQ1.Q1A4;

	option1.addEventListener("click", Q2Question);
	option1.addEventListener("click", correct);

	option2.addEventListener("click", wrong);
	option2.addEventListener("click", Q2Question);

	option3.addEventListener("click", wrong);
	option3.addEventListener("click", Q2Question);
	
	option4.addEventListener("click", wrong);
	option4.addEventListener("click", Q2Question);



}

function Q2Question(){

	quizquestion.textContent = QuizQuestions.Q2

	option1.textContent = QuizAnswersQ2.Q2A1;
	option2.textContent = QuizAnswersQ2.Q2A2;
	option3.textContent= QuizAnswersQ2.Q2A3;
	option4.textContent = QuizAnswersQ2.Q2A4;
	
	option1.addEventListener("click", Q3Question);
	option1.addEventListener("click", correct);

	option2.addEventListener("click", wrong);
	option2.addEventListener("click", Q3Question);

	option3.addEventListener("click", wrong);
	option3.addEventListener("click", Q3Question);
	
	option4.addEventListener("click", wrong);
	option4.addEventListener("click", Q3Question);

}

function Q3Question (){

	quizquestion.textContent = QuizQuestions.Q3

	option1.textContent = QuizAnswersQ3.Q3A1;
	option2.textContent = QuizAnswersQ3.Q3A2;
	option3.textContent= QuizAnswersQ3.Q3A3;
	option4.textContent = QuizAnswersQ3.Q3A4;
	
	option1.addEventListener("click", Q4Question);
	option1.addEventListener("click", correct);

	option2.addEventListener("click", wrong);
	option2.addEventListener("click", Q4Question);

	option3.addEventListener("click", wrong);
	option3.addEventListener("click", Q4Question);
	
	option4.addEventListener("click", wrong);
	option4.addEventListener("click", Q4Question);
}

function Q4Question (){

	quizquestion.textContent = QuizQuestions.Q4

	option1.textContent = QuizAnswersQ4.Q4A1;
	option2.textContent = QuizAnswersQ4.Q4A2;
	option3.textContent= QuizAnswersQ4.Q4A3;
	option4.textContent = QuizAnswersQ4.Q4A4;
	
	option1.addEventListener("click", Q5Question);
	option1.addEventListener("click", correct);

	option2.addEventListener("click", wrong);
	option2.addEventListener("click", Q5Question);

	option3.addEventListener("click", wrong);
	option3.addEventListener("click", Q5Question);
	
	option4.addEventListener("click", wrong);
	option4.addEventListener("click", Q5Question);

}

function Q5Question (){

	quizquestion.textContent = QuizQuestions.Q5

	option1.textContent = QuizAnswersQ5.Q5A1;
	option2.textContent = QuizAnswersQ5.Q5A2;
	option3.textContent= QuizAnswersQ5.Q5A3;
	option4.textContent = QuizAnswersQ5.Q5A4;
	
	option1.addEventListener("click", correct);
	option1.addEventListener("click", showgrades);

	option2.addEventListener("click", wrong);
	option2.addEventListener("click", showgrades);

	option3.addEventListener("click", wrong);
	option3.addEventListener("click", showgrades);
	
	option4.addEventListener("click", wrong);
	option4.addEventListener("click", showgrades);

}

function correct(){


	grades.textContent = "Correct!";
	grades.style.display = "block";
	grades.setAttribute("style", "color:green ; font-weight: bold");
	score++;
	console.log(score);

}
function wrong(){

	grades.textContent = "Wrong!";
	grades.style.display="block";
	grades.setAttribute("style", "color:red ; font-weight: bold");
	secondsLeft = secondsLeft - 10;
	}        

function showgrades(){

	multiplechoiceContainer.style.display = "none";
	
	quizquestion.style.display= "none";
	
	grades.textContent = " Your score was: " + score + " of 5, please add your initials";
	grades.style.display = "block";
	grades.setAttribute("style", "color:blue ; font-weight: bold");
	
	nameinput.style.display="block";
	submitnamebutton.style.display= "inline";
	gobackbutton.style.display="inline";

	quizComplete =true;
}

submitnamebutton.addEventListener("click", function() {

	var HighScore = [{
	  Initials: initialsinput.value,
	  Score: score,
	}];

if(localStorage.getItem("AllHighScores") === null){

	AllHighScores.push(HighScore);
	localStorage.setItem("AllHighScores", JSON.stringify(AllHighScores));
	AllHighScores = JSON.parse(localStorage.getItem("AllHighScores"));
	renderMessage();
	console.log(AllHighScores);

	}

else{
		
		AllHighScores = JSON.parse(localStorage.getItem("AllHighScores"));
		AllHighScores.push(HighScore);
		console.log(AllHighScores);
		localStorage.setItem("AllHighScores", JSON.stringify(AllHighScores));

	submitnamebutton.style.display = "none";

	renderMessage();
}
	});

function renderMessage(){

	//do not touch
	HighScoreContainer.textContent = JSON.stringify(AllHighScores);
	console.log(HighScoreContainer);

	//testing
	var ol = document.createElement("ol");
	var list = JSON.stringify(localStorage.getItem("AllHighScores"));
	for (var i = 0 ; i<list.length ; i++){
		var li = document.createElement("li");
		var text = document.createTextNode(list[i]);
		li.appendChild(text);
		ol.appendChild(li);
		console.log(list);
	}

document.getElementById("record").appendChild(ol);


}

gobackbutton.addEventListener("click", function(){

	window.location.reload();

});