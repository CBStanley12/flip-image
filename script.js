var leftArr = document.getElementById('arrow-left');
var rightArr = document.getElementById('arrow-right');

var angleY = 0;

leftArr.onclick = function() {
    document.getElementById('cube').style.transform = `rotateY(${angleY + 90}deg)`;
    angleY += 90;
}

rightArr.onclick = function() {
    document.getElementById('cube').style.transform = `rotateY(${angleY - 90}deg)`
    angleY -= 90;
}