import detailImg from './detail.png'
console.log(detailImg);

var img = new Image();
img.src = detailImg;

var root = document.getElementById('root');
root.append(img);



