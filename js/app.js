(() => {
	//stub
	console.log('fired!');

	let mainHeadline = document.querySelector("h1");
		subhead = document.querySelector("h3");
		changeButton = document.querySelector("button");

	function changeText () {
		mainHeadline.textContent = "What's up";
		subhead.textContent = "I'm ok";
	}

	changeButton.addEventListener("click", changeText);
})()