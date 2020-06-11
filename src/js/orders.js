var path = window.location.pathname;
var page = path.split("/").pop();
if (page == 'menu.html') {
	if (true) {
		var l = 2;
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
		})
	}else{
		// window.location.href = "index.html";
	}
}

var path = window.location.pathname;
var page = path.split("/").pop()
if (page == 'dapur.html') {
	console.log(l)
}