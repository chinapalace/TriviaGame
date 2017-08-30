// array of question objects 
var questions = [sleep, fins, largestMammal, blowhole];

// question objects
var sleep = {

	ask: "How many hours a day are whales thought to sleep?"
	c: "8 hours"
	a: "6 hours"
	a: "4 hours"
	a: "10 hours"

	image: '../images/animatedWhales.mp4'

};

var fins = {

	ask: "What is the name of a whale's forelims?"
	c: "pectoral fins"
	a: "dorsal fins"
	a: "paddle fins"
	a: "flukes"

	image: "../images/nemoWhales.mp4"
};

var largestMammal = {

	ask: "Which whale is the largest know mammal?"
	c: "Blue Whale"
	a: "Grey Whale"
	a: "Orca"
	a: "Sperm Whale"

	image: "../images/whales.mp4"
};

var blowhole = {

	ask: "Which whale has two blowholes?"
	c: "Baleen Whale"
	a: "Pilot Whale"
	a: "Toothed Whale"
	a: "Orcas"

	image "../images/whalesAbove.mp4"
};


// question randomizer
var question = questions[Math.floor(Math.random()*questions.length)];
// show new question
function displayQuestion() = {

  $(".question").text(question.ask);
}


