var liLinks= document.querySelectorAll(".links ul li");
var viewWraps= document.querySelectorAll(".view-wrap");
var listView= document.querySelector(".list-view");
var gridView= document.querySelector(".grid-view");



liLinks.forEach(function(nav){
 nav.addEventListener("click",function(){
     liLinks.forEach(function(nav){
         nav.classList.remove("active");
     })
     nav.classList.add("active");

var list= nav.getAttribute("data-view");
viewWraps.forEach(function(view)
{
 view.style.display="none";
})

if(list==="list-view"){
 listView.style.display= "block";
}
else{
 gridView.style.display= "block";
}
 });
});