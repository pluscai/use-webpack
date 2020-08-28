function getComponent() {
    return import('lodash').then(({ default: _ }) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['c', 's', 'x'], '-');
        return element;
    })
}

// 异步获取lodash库
getComponent().then(element => {
    document.body.appendChild(element);
})