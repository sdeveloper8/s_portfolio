const span = document.querySelectorAll(".project-image span");
console.log(span);

const openCover = ((e)=>{
    e.target.style.backgroundColor = "transparent";
    //e.target.style.visibility = "hidden";

})
const closeCover = ((e)=>{
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0.548)";
})
span.forEach((e)=>{
    e.addEventListener("mouseenter", openCover);
})
span.forEach((e)=>{
    e.addEventListener("mouseleave", closeCover);
})