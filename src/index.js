import detailImg from './detail.png'
import style from './index.scss'
import createAvatar from "./createAvatar";

createAvatar();

var img = new Image();
img.src = detailImg;
img.classList.add(style.advatar)

var root = document.getElementById('root');
root.append(img);



