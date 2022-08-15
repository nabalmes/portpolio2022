const menu = document.getElementById('mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.getElementById('navbar__logo');
const body = document.querySelector('body');


// Display menu - Mobileview

const mobileMenu = function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('active')

}

menu.addEventListener('click', mobileMenu)

//test btn

var testBtn = document.querySelector('.testBtn');
testBtn.addEventListener('click', react, false);

function react(e){
    if(e.target !== e.currentTarget){
        var clickedItem = e.target.id;
        console.log(clickedItem);
        alert ('hello' + clickedItem);
    }

    e.stopPropagation();
}
