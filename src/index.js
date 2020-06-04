import './styles/style.css';
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