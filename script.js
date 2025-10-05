var cur = document.querySelector(".cursur");
var full = document.querySelector("body");

full.addEventListener("mousemove",function(dets){
    cur.style.top= dets.y+"px"
    cur.style.left= dets.x+"px"
})