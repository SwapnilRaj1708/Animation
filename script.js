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
            setTimeout(function(){
                document.getElementById("king_speak1").style.visibility="hidden";
                document.getElementById("king_speak2").style.visibility="visible";
            },3200);
            setTimeout(function(){
                document.getElementById("king_shout").style.visibility="visible";
            },4100);
            setTimeout(function(){
                document.getElementById("gates").style.visibility="visible";
            },4900);
            setTimeout(function(){
                document.getElementById("exclamation1").style.visibility="visible";
                document.getElementById("exclamation2").style.visibility="visible";
            },5400);
            
        }
        else {
            pos+=5;
            elem.style.left = pos + "px";
        }
    }
    // if(pos == 700){
    //     document.getElementById("king_speak1").style.visibility="visible";
    // }
}