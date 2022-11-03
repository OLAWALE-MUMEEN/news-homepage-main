const toggle_button = document.querySelector('#toggle-button');
const nav_ul = document.querySelector('nav ul');
const hamburger_icon = document.querySelectorAll('.hamburger-icon');
const open_menu = document.querySelector('#open-menu')

toggle_button.addEventListener('click',() => {
 nav_ul.classList.toggle('show');

 hamburger_icon.forEach(icon => {
    icon.classList.toggle('close-menu')
    
 });
});

window.addEventListener('resize',() => {
    if (document.body.clientWidth > 768) {
        nav_ul.classList.remove('show');

        hamburger_icon.forEach(icon => {
            icon.classList.add('close-menu')
            
         });
         open_menu.classList.remove('close-menu');
    }
});