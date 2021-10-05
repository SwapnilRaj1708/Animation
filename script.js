function move_forward() {
    let id = null;
    const elem = document.getElementById("king");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, .1);
    function frame() {
        if (pos == 700 || pos > 700) {
            clearInterval(id);
            setTimeout(function(){
                document.getElementById("king_speak1").style.visibility="visible";
            document.getElementById("openG").style.visibility="visible";
            },800);
            
        }
        else {
            pos+=3;
            elem.style.left = pos + "px";
        }
    }
    // if(pos == 700){
    //     document.getElementById("king_speak1").style.visibility="visible";
    // }
}