// import './style.css';
import counter from './counter'
import number from './number'

// var btn = document.createElement('button');
// btn.innerHTML = '新增'
// document.body.appendChild(btn);

// btn.onclick = function(){
//     var div = document.createElement('div');
//     div.innerHTML = 'item';
//     document.body.appendChild(div);
// }

counter();
number();

if(module.hot) {
    module.hot.accept('./number', () => {
        document.body.removeChild(document.getElementById('number'));
        number();
    })
}




