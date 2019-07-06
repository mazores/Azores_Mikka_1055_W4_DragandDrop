(() => {
	// set up the puzzle pieces and boards
	// 
	// const is short for constant -> variables that shouldn't change
	const piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
		dropZones = document.querySelectorAll(".drop-zones");
		draggablePieces = document.querySelectorAll(".puzzle-pieces img");

	// arrays are indexed and start at 0
	const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function switchImage() {
		console.log(this);

	//grab corresponding bg image (0, 1, 2, or 3)
	//and get from images folder (backGround1.jpg as an example)
		let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

	//set bg image style on dropzone container
		puzzleBoard.style.backgroundImage = `url(${bgImage})`; 
	
		//work on switching the right-hand images so that they match the buttons at the bottom
		//draggablepieces = image getting dragged, 4 thumbnails
		//just wanna see whats in the array
		draggablePieces.forEach((image, index) => {
			// log the image and the current index
			console.log(image, index);

			//try to change image source
			image.src = `images/${imageNameArray[index]}${this.dataset.puzzleref}.jpg`;
			//debugger;
		});
	}


	// thumbnail can be changed
	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", switchImage) });

		//thumbnail.addEventListener("click", resetPuzzlePieces)

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
			let draggedElement = e.dataTransfer.getData("text/plain");
			console.log('you dragged:', draggedElement);

			if (this.children.length > 0) {
				console.log('Oops, I already have a puzzle piece!');
				return;
			} else {
				e.preventDefault(); // don't do your default behaviour, instead do ff
				console.log('u dropped sumpin on me');

				//add image to drop zone when img is dragged over drop zone it becomes a child of the drop
				e.target.appendChild(document.querySelector(`#${draggedElement}`));				
				console.log(e.target.parentNode);
				console.log(e.target.childElementCount);
				
				//const ParentImage = this;
			}
		});
	})


	function resetPuzzlePieces() {
		console.log('Reset Puzzle Pieces check');		

		//let dropZonesParent = document.querySelectorAll(".drop-zones");
		//let draggablePiecesChild = document.querySelectorAll(".puzzle-pieces img");
		//let throwawayNode = dropZonesParent.removeChild(draggablePiecesChild);
  		//draggablePiecesChild.removeChild(draggablePiecesChild.firstChild);
		

		//dropZones.forEach((zone, index) => {


		//});

		//draggablePiecesChild.removeChild(draggablePiecesChild);
		//dropZones.forEach((zone, index) => {
			//console.log(zone, index);
		//	puzzleBoard.removeChild(draggablePieces);
		//});
	
		//dropZones.removeChild(draggablePieces);
		//puzzleBoard.parentNode.removeChild(draggablePieces);
		//(gives out error) puzzleBoard.parentNode.removeChild(dropZones);
		//(gives out error)dropZones.forEach((image, index) => {
		//	piecesBoard.removeChild(draggablePieces);
		//});


		//dropZones.removeChild(dropZones.children[1]);

		//let parentImage = piecesBoard;
		//let childImage = piecesBoard.childNodes[1];
		//let garbage = parentImage.removeChild(childImage);
	
		//if (draggablePieces.parentNode) {
		//	console.log('Draggable Piece');
  		//	draggablePieces.parentNode.removeChild(draggablePieces);
		//}

		//while (dropZones.firstChild) {
  		//	dropZones.removeChild(dropZones.firstChild);
		//}

		//while (draggablePieces.parentNode) {
  		//	draggablePieces.parentNode.removeChild(draggablePieces);
		//}

		//draggablePieces.forEach((image, index) => {
			//dropZones.parentNode.removeChild(dropZones);
		//});
		
		//piecesBoard.forEach((image, index) => {
		//	node.removeChild(child);
		//});
	}

	//function resetPuzzlePieces() {
	//	console.log('Reset Puzzle Pieces check');
		
	//	if (e.currentTarget.firstChild) {
  	//		e.currentTarget.removeChild(e.currentTarget.firstChild);
	//	} else {
	//		return;
	//	}
		//let draggedElement =
		//var zoneImage = document.querySelector(`#${draggedElement}`);
		//zoneImage.parentNode.removeChild(document.querySelector(`#${draggedElement}`));
		//draggablePieces.forEach((image, index) => {
			// log the image and the current index
			//console.log(image, index);

			//try to change image source
			//draggablePieces.removeChild(draggablePieces);
			//debugger;
		//});

	//	dropZones.forEach((image, index) => {
	//		if (dropZones.firstChild) {
  				//dropZones.removeChild(dropZones.firstChild);
	//	});
	//}

		//while (dropZones.firstChild) {
			//dropZones.removeChild(dropZones.firstChild);
			//console.log('Puzzle pieces reset');
		//} else {
		//	return;
			//dropZones.removeChild();
			
		//}
	//} 

	puzzleSelectors.forEach(thumbnail => { thumbnail.addEventListener("click", resetPuzzlePieces) });


	
})();
