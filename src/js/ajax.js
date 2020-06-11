var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "menu.html") {
	const xhr = new XMLHttpRequest();
 
	xhr.onload = function () {
	 	console.log(this.responseText);
	}
	xhr.onerror = function () {
	 console.log("Ups something error")
	}
	 
	xhr.open("GET", "data/database.php?keyword=orders");
	xhr.send();
}else {
	const xhr = new XMLHttpRequest();
	
	xhr.onload = function () {
	 	let data = JSON.parse(this.responseText);
		document.querySelectorAll('.one1').forEach( (element, index) => {
			console.log(element);
			if (data[index] == "ordered") {
				element.setAttribute('hidden','');
			}else{
				element.addEventListener('click', _ => {
					localStorage.setItem(index, 'ordered');
				});
			}
		});
	}
	 	
	xhr.onerror = function () {
	 console.log("Ups something error")
	}
	xhr.open("GET", "data/database.php?keyword=tables");
	xhr.send();

	
	
}


// keyword = document.getElementById('keyword')
// keyword.addEventListener('keyup', function () {
// 	const xhr = new XMLHttpRequest();

	 
// 	xhr.onload = function () {
// 	 console.log(xhr.responseText)
// 	}
// 	xhr.onerror = function () {
// 	 console.log("Ups something error")
// 	}
 
	 
// 	xhr.open("GET", "../ajax/database.php?keyword=" + keyword.value);
// 	xhr.send();
// })