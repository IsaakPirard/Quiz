console.log("Hello!");

const question = "test";
const rightAnswer = "hor";
document.getElementById("container").innerText = question;
document.getElementById("submit")?.addEventListener("click", function (event) {
	console.log("clicked");
	event.preventDefault;

	const currentValue = document.getElementById("container").value;
    const answer = cleanString(currentValue);
    const correctAnswer = cleanString(rightAnswer);

	if (answer == correctAnswer) {
		alert("Gracias");
	} else {
		alert("No es bueno.");
	}

    checkAnswer();
});


function checkAnswer {
    console.log("Hmm..")

}

function cleanString(input) {
    return input.lowerCase().replace(/, "");
}