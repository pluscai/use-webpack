function Sidebar() {
    var dom = document.getElementById('root');
    var sidebar = document.createElement('div');
    sidebar.innerText = 'sidebar';
    dom.append(sidebar);
}

module.exports = Sidebar