// import _ from 'lodash';

// var element = document.createElement('div');
// element.innerHTML = _.join(['c', 's', 'x'], '-');
// document.body.appendChild(element);

function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['c', 's', 'x'], '-');
        return element;
    })
}

// 页面一开始不加载 0.js  只有在点击页面时，才会去加载 0.js，并在页面上打印出 csx
document.addEventListener('click', () => {
    // 异步获取lodash库
    getComponent().then(element => {
        document.body.appendChild(element);
    })
});

