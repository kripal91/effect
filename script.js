const elem= document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[5].style.opacity="1";
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[5].style.opacity="0";
    })
    val.addEventListener("mousemove",function(e){
       val.childNodes[5].style.left=e.x+"px";
    //    val.childNodes[5].style.top=e.y+"px";
    //    val.childNodes[3].style.top=e.y+"px";
    })
})