import _ from 'lodash';
import test from './test.js'

console.log(test.name);

var element = document.createElement('div');
element.innerHTML = _.join(['c', 's', 'x'], '-');
document.body.appendChild(element);

// function getComponent() {
//     return import('lodash').then(({ default: _ }) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['c', 's', 'x'], '-');
//         return element;
//     })
// }

// // 异步获取lodash库
// getComponent().then(element => {
//     document.body.appendChild(element);
// })