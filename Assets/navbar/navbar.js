const Burger = document.querySelector('.burger');
const navigation = document.querySelector('.menus');
const navs = document.querySelectorAll('.menus li');

Burger.addEventListener('click', () => {
    navigation.classList.toggle('nav-open'); 

    navs.forEach((nav, index) => {
        if(nav.style.animation){
            nav.style.animation = ``; 
        }else{
            nav.style.animation = `nav-linksFade 2s ease Forwards ${index/ 4 + 0.1}s`;
        }
    });
    Burger.classList.toggle('toggle');
});
