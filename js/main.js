// СЛАЙДЕР
$(document).ready(function(){
    $('.review__slides').slick();
});
$('.review__slides').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

// БУРГЕР МЕНЮ
const menuBtn = document.querySelector('.menu__btn');
const menuClose = document.querySelector('.menu__close');
const menuList = document.querySelector('.menu__list');
const menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});

// ФИЛЬТР КАТЕГОРИЙ ТОВАРОВ
const filterContainer = document.querySelector(".products__category-list"),
 productItems = document.querySelectorAll(".products__item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("products__category-item")){
   	 // deactivate existing active 'products__category-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'products__category-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 productItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });
