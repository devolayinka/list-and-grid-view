var liLinks= document.querySelectorAll(".links ul li");
var viewWraps= document.querySelectorAll(".view-wrap");
var listView= document.querySelector(".list-view");
var gridView= document.querySelector(".grid-view");
var modalView = document.querySelector(".modal-view");
var orderMeBtn = document.querySelectorAll(".button");
var closeBtn = document.querySelector(".close-btn");
const modalImg=document.querySelector(".modal-img");
const titleP=document.querySelector(".heading");
const cost=document.querySelector(".price");
const descInfo=document.querySelector(".para");
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


const productCost= ["#500","#1000","#2100","#2200","#2400","#3400","#2700","#500","#1000","#2100","#2200","#2400","#3400","#2700"];

const productTitle=["Coco Meal","Watermelon Shake","Orange Smoothie","Pear Lala","Icecream","Coconut Milk","Strewberry Shakes","Coco Meal","Watermelon Shake","Orange Smoothie","Pear Lala","Icecream","Coconut Milk","Strewberry Shakes"];

var itemsView=document.querySelectorAll(".view-item");

itemsView.forEach((list,index)=>{
const view= list.querySelector(".button");
const mealImg= list.querySelector(".meal-img").getAttribute('src');
view.addEventListener("click",()=>{
    modalView.classList.add("activee");
    modalImg.setAttribute('src',mealImg);
cost.innerText= productCost[index];
titleP.innerText=productTitle[index];
/*descInfo.innerText=ParaContent[index];*/
});
});

closeBtn.addEventListener("click",()=>{
    modalView.classList.remove("activee");  
});