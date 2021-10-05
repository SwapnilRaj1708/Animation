function move_forward() {
    let id = null;
    const elem = document.getElementById("king");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, .1);
    function frame() {
        if (pos == 700) {
            clearInterval(id);
            document.getElementById("king_speak1").style.visibility="visible";
            document.getElementById("openG").style.visibility="visible";
        }
        else {
            pos+=2;
            elem.style.left = pos + "px";
        }
    }
    // if(pos == 700){
    //     document.getElementById("king_speak1").style.visibility="visible";
    // }
}