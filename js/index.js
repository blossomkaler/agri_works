const image = document.getElementById('movingImage');

const pcFrames = [
    '../assests/landing-page/1-pc.webp',
    '../assests/landing-page/2-pc.webp',
    '../assests/landing-page/3-pc.webp'
  ];
const mobFrames = [
    '../assests/landing-page/1-mob.webp',
    '../assests/landing-page/2-mob.webp',
    '../assests/landing-page/3-mob.webp'
  ];



const animationInterval = 1500; // Time in milliseconds between frames
let currentFrameIndex = 0;


function animate() {
    if (currentFrameIndex == pcFrames.length) currentFrameIndex = 0;

    if(window.innerWidth < 600) image.src = mobFrames[currentFrameIndex];
    else image.src = pcFrames[currentFrameIndex];
  
    currentFrameIndex++;
    setTimeout(animate, animationInterval);
}

animate();


