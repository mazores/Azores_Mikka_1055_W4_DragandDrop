(() => {
	// set up the puzzle pieces and boards
	// 
	// const is short for constant -> variables that shouldn't change
	const piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		dropZones = document.querySelectorAll(".drop-zones");

	let draggablePieces = document.querySelectorAll(".puzzle-pieces img");

	//debugger;

	function switchImage() {
		console.log(this);


	//grab corresponding bg image (0, 1, 2, or 3)
	//and get from images folder (backGround1.jpg as an example)
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

	//set bg image style on dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;
	
		debugger;
	}

	// thumbnail can be changed
	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage) });

	//loop throughout the draggable images
	//draggable function
	//this lets us drag stuff => not that hard
	draggablePieces.forEach(piece => { 
		piece.addEventListener("dragstart", function(e) {
			console.log('draggin...');

			// dataTransfer object has two methods, a seter and getter
			// set data on the drag, and retrieve it on the drop
			e.dataTransfer.setData("text/plain", this.id);
		});
	});


	//this is the dragover and drop functionality => this is for the dropzones
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", function(e) {
			e.preventDefault();
			console.log('dragged sumpin over me');
		});
	
	//allows user to drop element
		zone.addEventListener("drop", function(e) { 
			e.preventDefault();
			console.log('u dropped sumpin on me');

			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged:', draggedElement);

			//add image to drop zone when img is dragged over drop zone it becomes a child of the drop
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		});
	})

})();
