const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const cross = document.querySelector('.cross');

hamburger.addEventListener('click',() =>{
    navigation.classList.add('active');
    hamburger.classList.add('active');
})

cross.addEventListener('click',() =>{
    navigation.classList.remove('active');
    hamburger.classList.remove('active');
})

/*`````````````````STICKY NAVBAR```````````````````````*/
const nav = document.querySelector('nav');
let topOfNav = nav.offsetTop;

function fixNav() {
  if(window.scrollY == 0){
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  } else {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);