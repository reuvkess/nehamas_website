// Changes the height of the icon bar to fill the screen height.
document.getElementById('icon-bar').style.height = (window.innerHeight-16).toString() + 'px';

// Changes the width of the toolbar and icons to 5% of the page width.
var target_width = 0.05 * window.innerWidth;
if (target_width < 16) {
    target_width = 16;
}
for (var i = 0; i < document.getElementsByClassName('icon').length; i++) {
    document.getElementsByClassName('icon')[i].style.width = 0.05 * window.innerWidth;
}
document.getElementById('icon-bar').style.width = 0.05 * window.innerWidth;
