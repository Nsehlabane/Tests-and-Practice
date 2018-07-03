function getData(){
		var button = document.getElementById("button");
		button.addEventListener("click",saveData, false);
}

function saveData(){
	var Name = document.getElementById("Name").value;
	var Surname = document.getElementById("Surname").value;
	var Age = document.getElementById("Age").value;
	sessionStorage.setItem(Name,Surname,Age);
	
	dispsplay(Name)
}

function display(Name) {
	var Showbox = document.getElementById("Showbox");
	var Name = sessionStorage.getItem(Name);
	Showbox.innerHTML = +Name+;
}
dow.addEventListener("load",getData,false)