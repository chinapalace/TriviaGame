// click events 
// window.onload = function() {

  $(".answer1").on("click", correctChoice);
  $(".answer2").on("click", wrongChoice);
  $(".answer3").on("click", wrongChoice);
  $(".answer4").on("click", wrongChoice);

// };
// var to keep track of correct answer
var score = 0;
// var to keep track of questions
var questionCount = 0;

// question objects
 var sleep = {

	ask: "How many hours a day are whales thought to sleep?",
	correctAnswer: "8 hours",
	a1: "6 hours",
	a2: "4 hours",
	a3: "10 hours",

	image: 'assets/images/animatedWhales.gif'

};

var fins = {

	ask: "What is the name of a whale's forelims?",
	c: "pectoral fins",
	a1: "dorsal fins",
	a2: "paddle fins",
	a3: "flukes",

	image: "assets/images/nemoWhales.gif"
};

var largestMammal = {

	ask: "Which whale is the largest known mammal?",
	c: "Blue Whale",
	a1: "Grey Whale",
	a2: "Orca",
	a3: "Sperm Whale",

	image: "assets/images/whales.gif"
};

var blowhole = {

	ask: "Which whale has two blowholes?",
	c: "Baleen Whale",
	a1: "Pilot Whale",
	a2: "Toothed Whale",
	a3: "Orcas",

	image: "assets/images/whalesAbove.gif"
};

// array of question objects
var questions = [sleep, fins, largestMammal, blowhole]


// question randomizer
var question = questions[Math.floor(Math.random()*questions.length)];
console.log(questions);
console.log(Math.floor(Math.random()*questions.length))
console.log(question)
console.log(fins.ask)
console.log(question['ask'])
console.log(question['a'])


displayQuestion()
displayAnswers()

// show new question
function displayQuestion()	{

  $(".question").html(question.ask);
};

// show answer choices 
function displayAnswers()	{
	$(".answer1").html(question.c);
	$(".answer2").html(question.a1);
	$(".answer3").html(question.a2);
	$(".answer4").html(question.a3);
};

// correct answer selected
function displayCorrect()	{
	$('.questions').hide();
	$('#image-holder').append('<p>Correct!</p>')
	.append("<img src=" + question['image'] + " width='480' height='360' frameBorder='0'>");
};

function correctChoice()	{
	score++;
	console.log(score)
	questionCount++;
	displayCorrect();
};


// wrong answer selected
function displayIncorrect()	{
	$('.questions').hide()
	$('#image-holder').append('<p>Wrong!</p>')
	.append("<img src='assets/images/wrongAnswer.gif'>");
	
};

function wrongChoice()	{
	questionCount++;
	displayIncorrect();
};


