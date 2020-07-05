var path = window.location.pathname;
var page = path.split("/").pop();
if (page == "menu.html") {
	if (!(localStorage.getItem("ordered") <= 10)) document.location.href = "index.html";
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

}else if (page == 'kitchen.html') {
	function checkKitchen(id){
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			const data = JSON.parse(this.responseText);
		 	if (!(data.length == 0)) {
			 	let meja = data[0][4];
			 	const container = document.createElement("div");
			 	container.setAttribute("class","kitchen-box");
			 	document.body.appendChild(container);

			 	let div = document.createElement("div");
			 	div.setAttribute("class", "card");
			 	div.setAttribute("id", meja);

			 	let div2 = document.createElement("div");
			 	div2.setAttribute("class", "card-head");

			 	let h3 = document.createElement("h3");
			 	h3.innerText = "List Pesanan";

			 	div2.appendChild(h3);
			 	div.appendChild(div2);

			 	for (datum of data){
			 		if (datum[4] == meja) {
			 			const table = document.createElement("table");
			 			table.setAttribute("class", "card-table");

			 			const tr = document.createElement("tr");
			 			const td = document.createElement("td");
			 			td.setAttribute("class", "card-td");
			 			td.innerText = "Nama Pesanan";

			 			const td2 = document.createElement("td");
			 			td2.innerText = datum[1];

			 			const tr2 = document.createElement("tr");
			 			const td3 = document.createElement("td");
			 			td3.setAttribute("class", "card-td");
			 			td3.innerText = "Jumlah Pesanan";
			 			const td4 = document.createElement("td");
			 			td4.innerText = datum[2];

			 			tr.appendChild(td);
			 			tr.appendChild(td2);
			 			tr2.appendChild(td3);
			 			tr2.appendChild(td4);
			 			table.appendChild(tr);
			 			table.appendChild(tr2);
			 			div.appendChild(table);
			 		}else{
			 			container.appendChild(div);

			 			div = document.createElement("div");
			 			div.setAttribute("class", "card");
			 			div.setAttribute("id", datum[4]);
			 			div2 = document.createElement("div");
					 	div2.setAttribute("class", "card-head");
					 	h3 = document.createElement("h3");
					 	h3.innerText = "List Pesanan";
					 	div2.appendChild(h3);
					 	div.appendChild(div2);

			 			const table = document.createElement("table");
			 			table.setAttribute("class", "card-table");

			 			const tr = document.createElement("tr");
			 			const td = document.createElement("td");
			 			td.setAttribute("class", "card-td");
			 			td.innerText = "Nama Pesanan";

			 			const td2 = document.createElement("td");
			 			td2.innerText = datum[1];

			 			const tr2 = document.createElement("tr");
			 			const td3 = document.createElement("td");
			 			td3.setAttribute("class", "card-td");
			 			td3.innerText = "Jumlah Pesanan";

			 			const td4 = document.createElement("td");
			 			td4.innerText = datum[2];

			 			tr.appendChild(td);
			 			tr.appendChild(td2);
			 			tr2.appendChild(td3);
			 			tr2.appendChild(td4);
			 			table.appendChild(tr);
			 			table.appendChild(tr2);
			 			div.appendChild(table);

			 			meja = datum[4];
			 		}
			 	}
			 	container.appendChild(div);

			 	document.querySelectorAll(".card").forEach((element, index) => {
					element.addEventListener("click", _ => {
						element.remove();
						const xhr2 = new XMLHttpRequest();
						xhr2.open("GET", "data/database.php?keyword=already&id="+element.getAttribute("id"));
						xhr2.send();
					})
				})
				console.log(data);
			 	localStorage.setItem("data", data[data.length-1][0]);
		 	}
		 	
		}
		 	
		xhr.onerror = function () {
			console.log("Ups something error")
		}


		xhr.open("GET", "data/database.php?keyword=kitchen&id="+id);
		xhr.send();
	}

	checkKitchen(0);
	setInterval(function() { checkKitchen(localStorage.getItem("data")); }, 1000);

}else if (page == 'waiter.html' || page == 'waiter.html#') {

	function checkWaiter(id){
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
		 	const data = JSON.parse(this.responseText);
		 	if (!(data.length == 0)) {
			 	let meja = data[0][4];

			 	let container = document.createElement("div");
			 	container.setAttribute("class","kitchen-box");
			 	document.body.appendChild(container);

			 	let div = document.createElement("div");
			 	div.setAttribute("class", "waiter-card");
			 	div.setAttribute("id", meja);

			 	let hyperlink = document.createElement("a");
			 	hyperlink.setAttribute("class","waiter")
			 	hyperlink.setAttribute("href","#")

			 	let div2 = document.createElement("div");
			 	div2.setAttribute("class", "waiter-card-head");

			 	let h3 = document.createElement("h3");
			 	h3.innerText = "List Pesanan";

			 	div2.appendChild(h3);
			 	hyperlink.appendChild(div2);
			 	div.appendChild(hyperlink);

			 	for (datum of data) {
			 		if (datum[4] == meja) {
			 			const table = document.createElement("table");
			 			table.setAttribute("class", "waiter-card-table");

			 			const tr = document.createElement("tr");
			 			const td = document.createElement("td");
			 			td.setAttribute("class", "waiter-card-td");
			 			td.innerText = "Nama Pesanan";

			 			const td2 = document.createElement("td");
			 			td2.setAttribute("class", "waiter-card-td-t");
			 			td2.innerText = datum[1];

			 			const tr2 = document.createElement("tr");
			 			const td3 = document.createElement("td");
			 			td3.setAttribute("class", "waiter-card-td");
			 			td3.innerText = "Jumlah Pesanan";

			 			const td4 = document.createElement("td");
			 			td4.setAttribute("class", "waiter-card-td-t");
			 			td4.innerText = datum[2];

			 			tr.appendChild(td);
			 			tr.appendChild(td2);
			 			tr2.appendChild(td3);
			 			tr2.appendChild(td4);
			 			table.appendChild(tr);
			 			table.appendChild(tr2);
			 			div.appendChild(table);
			 		}else{
			 			container.appendChild(div);

			 			div = document.createElement("div");
			 			div.setAttribute("class", "waiter-card");
			 			div.setAttribute("id", datum[4]);

			 			hyperlink = document.createElement("a");
			 			hyperlink.setAttribute("class","waiter")
			 			hyperlink.setAttribute("href","#")

			 			div2 = document.createElement("div");
					 	div2.setAttribute("class", "waiter-card-head");

					 	h3 = document.createElement("h3");
					 	h3.innerText = "List Pesanan";

					 	div2.appendChild(h3);
					 	hyperlink.appendChild(div2);
					 	div.appendChild(hyperlink);

			 			const table = document.createElement("table");
			 			table.setAttribute("class", "waiter-card-table");

			 			const tr = document.createElement("tr");
			 			const td = document.createElement("td");
			 			td.setAttribute("class", "waiter-card-td");
			 			td.innerText = "Nama Pesanan";

			 			const td2 = document.createElement("td");
			 			td2.setAttribute("class", "waiter-card-td-t");
			 			td2.innerText = datum[1];

			 			const tr2 = document.createElement("tr");
			 			const td3 = document.createElement("td");
			 			td3.setAttribute("class", "waiter-card-td");
			 			td3.innerText = "Jumlah Pesanan";

			 			const td4 = document.createElement("td");
			 			td4.setAttribute("class", "waiter-card-td-t");
			 			td4.innerText = datum[2];

			 			tr.appendChild(td);
			 			tr.appendChild(td2);
			 			tr2.appendChild(td3);
			 			tr2.appendChild(td4);
			 			table.appendChild(tr);
			 			table.appendChild(tr2);
			 			div.appendChild(table);

			 			meja = datum[4];
			 		}
			 	}
			 	container.appendChild(div);

			 	document.querySelectorAll(".waiter-card").forEach((element, index) => {
					element.addEventListener("click", _ => {
						element.remove();
						const xhr2 = new XMLHttpRequest();
						xhr2.open("GET", "data/database.php?keyword=delivery&id="+element.getAttribute("id"));
						xhr2.send();
					})
				})
				console.log(data);
				localStorage.setItem("waiter", data[data.length-1][0]);
		 	}
		}
		 	
		xhr.onerror = function () {
			console.log("Ups something error")
		}

		xhr.open("GET", "data/database.php?keyword=waiter&id="+id);
		xhr.send();
	}
	checkWaiter(0);
	setInterval(function() { checkWaiter(localStorage.getItem("waiter")); }, 1000);
}else if (page == 'waiting.html') {
	setInterval(function check() {
		const xhr = new XMLHttpRequest();

 		const tableNumber = localStorage.getItem('ordered');
 		
 		
		xhr.onload = function () {
			let available = 0;
			let data1 = JSON.parse(this.responseText);
			for (var i = 0; i < data1.length; i++) {
				if (tableNumber == data1[i][4]) {
					available = 1;
				}
			}

			const xhr2 = new XMLHttpRequest();
			xhr2.onload = function () {
				let data2 = JSON.parse(this.responseText);
				for (var i = 0; i < data2.length; i++) {
					if (tableNumber == data2[i][4]) {
						available = 2;
					}
				}
				// console.log(available)
				if (available == 0) {
					localStorage.removeItem("ordered");
					const xhr3 = new XMLHttpRequest();
					xhr3.onload = function () {
						// console.log(this.responseText);
					}
					xhr3.onerror = function () {
						console.log("Ups something error")
					}
					xhr3.open("GET", "data/database.php?keyword=unordered&id="+tableNumber);
					xhr3.send();
					window.location.href = "index.html";
				}
			}
			xhr2.open("GET", "data/database.php?keyword=kitchen");
			xhr2.send();

		}
		
		xhr.open("GET", "data/database.php?keyword=waiter");
		xhr.send();
	},10000)
}else {
	const xhr = new XMLHttpRequest();
	const xhr2 = new XMLHttpRequest();

	xhr.onload = function () {
	 	let data = JSON.parse(this.responseText);
		document.querySelectorAll('.one1').forEach( (element, index) => {
			if (data[index] == "ordered") element.setAttribute('hidden','');
			else {
				element.addEventListener('click', _ => {
					localStorage.setItem('ordered',(index+1));
					xhr2.open("GET", "data/database.php?keyword=reserve&id="+(index+1));
					xhr2.send();
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