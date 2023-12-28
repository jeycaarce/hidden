const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(e){
    cursor.style.left = (e.x-100)+"px";
    cursor.style.top = (e.y-100)+"px";
})