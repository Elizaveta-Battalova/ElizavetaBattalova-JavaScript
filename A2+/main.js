let mainInput = document.getElementById("mainInput");

const mainButton = document.getElementById('mainButton');

function addedSomeText(){
	let text = mainInput.value;
    var result = text.split(' ').join('_')
    alert(result);
}

mainButton.addEventListener('click', addedSomeText);
