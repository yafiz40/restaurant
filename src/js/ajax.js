var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "menu.html") {
	function order(order) {
		const xhr = new XMLHttpRequest();
 
		xhr.onload = function () {
			// console.log(this.responseText);
		}
		xhr.onerror = function () {
		 console.log("Ups something error")
		}
		xhr.open("GET", "data/database.php?keyword=orders&order="+JSON.stringify(order)+"&table="+localStorage.getItem('ordered'));
		xhr.send();
	}

	document.getElementById("pesan").addEventListener("click", _ => {
		let orders = {};
		document.querySelectorAll(".desc-m").forEach( (element, index) => {
			element.querySelectorAll("p").forEach( harga => {
				if (!(harga.getElementsByTagName("input")[0] == undefined)) {
					if (harga.getElementsByTagName("input")[0].value > 0) {
						const foodName = element.querySelector(".desc-one").textContent;

						const harga1 = harga.textContent.split(".")[1]
						const harga2 = harga.textContent.split(".")[2]
						const harga3 = harga2.split(",")[0];
						const harga4 = harga1.concat(harga3);

						const porsi = harga.getElementsByTagName("input")[0].value;
						
						orders[foodName] = [parseInt(harga4), parseInt(porsi)];
					}
				}
			})
		})
		order(orders);
	})
		// window.location.href = "index.html";

}else if (page == 'dapur.html') {
	setInterval(function checkOrders() {
		const xhr = new XMLHttpRequest();
		document.body.innerHTML = "";
		xhr.onload = function () {
		 	let data = JSON.parse(this.responseText);
		 	// console.log(data);
		 	let meja = data[0][4];
		 	let div = document.createElement("div");
		 	for (var i = 0; i < data.length; i++) {
		 		if (data[i][4] == meja) {
		 			div.innerHTML += "<h5>Nama : "+data[i][1]+" | "+data[i][2]+" Porsi</h5>";
		 		}else{
		 			document.body.appendChild(div);
		 			document.body.innerHTML+="<hr>";
		 			div = document.createElement("div");
		 			div.innerHTML += "<h5>Nama : "+data[i][1]+" | "+data[i][2]+" Porsi</h5>";
		 			meja = data[i][4];
		 		}
		 	}
		 	document.body.appendChild(div);
			document.body.innerHTML+="<hr>";
		}
		 	
		xhr.onerror = function () {
			console.log("Ups something error")
		}
		xhr.open("GET", "data/database.php?keyword=kitchen");
		xhr.send();
	}, 3000);
	
}else {
	function checkTable() {
		const xhr = new XMLHttpRequest();
	
		xhr.onload = function () {
		 	let data = JSON.parse(this.responseText);
			document.querySelectorAll('.one1').forEach( (element, index) => {
				if (data[index] == "ordered") {
					element.setAttribute('hidden','');
				}
			});
		}
		 	
		xhr.onerror = function () {
		 console.log("Ups something error")
		}
		xhr.open("GET", "data/database.php?keyword=tables");
		xhr.send();
	}

	const xhr = new XMLHttpRequest();

	xhr.onload = function () {
	 	
	}
	xhr.onerror = function () {
	 console.log("Ups something error")
	}

	document.querySelectorAll('.one1').forEach( (element, index) => {
		element.addEventListener('click', _ => {
			localStorage.setItem(index, 'order');
			xhr.open("GET", "data/database.php?keyword=reserve&id="+(index+1));
			xhr.send();
		});
	});
		
	checkTable();
}