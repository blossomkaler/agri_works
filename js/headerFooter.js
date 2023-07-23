const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
const cross = document.querySelector('.cross');
const navItems = [...document.querySelectorAll('.nav-item')] ;

hamburger.addEventListener('click',() =>{
    navigation.classList.add('active');
    hamburger.classList.add('active');
})

cross.addEventListener('click',() =>{
    navigation.classList.remove('active');
    hamburger.classList.remove('active');
})

navItems.forEach(item => item.addEventListener('click',() =>{
  navigation.classList.remove('active');
  hamburger.classList.remove('active');

}));

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


/*````````````````````````````````````````````````````````````````````````````*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach( entry =>{
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = [...document.querySelectorAll('.hidden')] ;
hiddenElements.forEach(el => observer.observe(el));