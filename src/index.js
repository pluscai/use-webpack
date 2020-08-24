import detailImg from './detail.png'
import './index.scss'

var img = new Image();
img.src = detailImg;
img.classList.add('advatar')

var root = document.getElementById('root');
root.append(img);



