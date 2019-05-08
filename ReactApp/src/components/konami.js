var key_seq = 0;

document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;

    if (e.keyCode === '38') { //up
        if (key_seq === 0 || key_seq === 1) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '40') { //down
        if (key_seq === 2 || key_seq === 3) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '37') { //left
        if (key_seq === 4 || key_seq === 6) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '39') { //right
        if (key_seq === 5 || key_seq === 7) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '65') { //a
        if (key_seq === 9) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '66') { //b
        if (key_seq === 8) {
            key_seq++;
        } else {
            key_seq = 0;
        }
    } else if (e.keyCode === '13') { //enter / start
        if (key_seq === 10) {
            var audio = new Audio('js/ven_ven_ven.mp3');
            audio.play();
            key_seq = 0;
            console.log("VEN");
        } 
        key_seq = 0;
    } else { //other
        key_seq = 0;
    }
    
    console.log(key_seq);
}