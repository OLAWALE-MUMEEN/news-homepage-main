# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![desktop-design](https://user-images.githubusercontent.com/72676373/199729904-a4600d87-f274-4e50-bbef-1cbfb47d90b6.jpg)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-javascript

### What I learned

In this challege learnt how handle hamburger menu using javascript

```html
<h1>Some HTML code I'm proud of</h1>
```
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

### Continued development

 My next Area to focus on is javascript ,because in this project i found that javascript 
 has feature that a frontend developer


### Useful resources

- [Youtube](https://www.youtube.com) - with the help of youtube tutorial ,i was able to implement hamburger menu
- [MDN]](https://developer.mozilla.org) - This is an amazing article which helped me finally understand hamburger menu. I'd recommend it to anyone still learning this concept.



## Author

- Frontend Mentor - [@OLAWALE-MUMEEN(https://www.frontendmentor.io/profile/OLAWALE-MUMEEN)
- Twitter - [@OLAWALEMUMEEN2(https://www.twitter.com/OLAWALEMUMEEN2)
- Linkedin -[OLAWALE MUMEEN(www.linkedin.com/in/olawale-mumeen)

