// // document.getElementById("king").margin
// var left = 0;
// var change = document.getElementById("king").style.marginLeft + 'px';
function move_forward(){
    let id = null;
    const elem = document.getElementById("king");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 350) {
            clearterval(id);
        }
        else {
            pos++; 
            // elem.style.top = pos + "px"; 
            elem.style.left = pos + "px"; 
        }
    }
    // left = left + 20;
    // while(change < 200)
    // {
    //     change++;
    // }
}