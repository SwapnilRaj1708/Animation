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
                document.getElementById("openG").style.visibility="hidden";
                document.getElementById("king_speak1").style.visibility="hidden";
                document.getElementById("king_speak2").style.visibility="visible";
            },3200);
            setTimeout(function(){
                document.getElementById("king_shout").style.visibility="visible";
            },4100);
            setTimeout(function(){
                document.getElementById("gates").style.visibility="visible";
            },5200);
            setTimeout(function(){
                document.getElementById("sleepy1").style.visibility="hidden";
                document.getElementById("sleepy2").style.visibility="hidden";
                document.getElementById("exclamation1").style.visibility="visible";
                document.getElementById("exclamation2").style.visibility="visible";
                document.getElementById("shocked1").style.visibility="visible";
                document.getElementById("shocked2").style.visibility="visible";
            },5800);
            setTimeout(function(){
                document.getElementById("king_speak2").style.visibility="hidden";
                document.getElementById("king_shout").style.visibility="hidden";
                document.getElementById("gates").style.visibility="hidden";
            },6800);
            setTimeout(function(){
                document.getElementById("exclamation1").style.visibility="hidden";
                document.getElementById("exclamation2").style.visibility="hidden";
                document.getElementById("shocked1").style.visibility="hidden";
                document.getElementById("shocked2").style.visibility="hidden";

                document.getElementById("guard1").style.visibility="visible";
                document.getElementById("guard2").style.visibility="visible";
            },7800);
            setTimeout(function(){
                document.getElementById("guards_speak").style.visibility="visible";
                document.getElementById("yes_sir").style.visibility="visible";
            },8200);
            
        }
        else {
            pos+=10;
            elem.style.left = pos + "px";
        }
    }
}