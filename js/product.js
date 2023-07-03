/*`````````````````CHANGE MAIN IMAGE`````````````````````````*/
const mainImg = document.querySelector(".prod-images .main-img img");
const thumbImgs = [...document.querySelectorAll('.thumbnail img')];


thumbImgs.forEach(thumbImg =>{
    thumbImg.addEventListener('click',(e) =>{
        mainImg.src = thumbImg.src;
    })
});

/*```````````````````````LIGHTBOX````````````````````````````*/
const lightbox = document.querySelector(".lightbox");
const lbImg = document.querySelector(".lightbox img");
const lbCross = document.querySelector(".lb-cross");


mainImg.addEventListener('click',() =>{
    lbImg.src = mainImg.src;
    lightbox.style.display = 'flex';
});

lbCross.addEventListener('click', () =>{
    lightbox.style.display = 'none';
})

/*```````````````````LIGHTBOX SLIDER``````````````````````````*/
const previous = document.querySelector('.slider-btns .previous');
const next = document.querySelector('.slider-btns .next');
const totalThumbs = thumbImgs.length;

let counter = 0;

next.addEventListener('click', () =>{
    counter++;
    if(counter == totalThumbs) counter = 0;
    lbImg.src = thumbImgs[counter].src;
});

previous.addEventListener('click', () =>{
    counter--;
    if(counter == -1) counter = totalThumbs-1 ;
    lbImg.src = thumbImgs[counter].src;
});