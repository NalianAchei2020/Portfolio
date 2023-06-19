const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close_menu");
const navItems = document.querySelector('.nav-items');

openMenu.addEventListener('click', ()=>{
 navItems.style.visibility = "visible"
})

closeMenu.addEventListener('click', ()=>{
    navItems.style.visibility = "hidden"
   })