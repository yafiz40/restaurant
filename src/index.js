import './styles/style.css';
import './js/tables.js';
import './js/orders.js';

// import x from "./js/x.png";
// import './x.html';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));

// Add the image to our existing div.
// const myIcon = new Image();
// myIcon.src = images['mix.jpg']['default'];

import table from './js/tables.js';
var path = window.location.pathname;
var page = path.split("/").pop();
if (page == 'menu.html') {
	if (table != -1) {
		console.log("BERHASIL MASUK HALAMAN PAGE");
	}else{
		// window.location.href = "index.html";
	}
}