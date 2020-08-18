// Your code goes here

//stripes
const wholePage = document.querySelector('body');

wholePage.addEventListener('click', (event) => {
    event.target.style.backgroundImage = 'repeating-linear-gradient(125deg, #ffb3b3, #ffb3b3 10px, #ffccf2 10px, #ffccf2 20px)';
    event.target.style.backgroundColor = 'transparent';
});

//nav to rotate 360degrees
const navHeader = document.querySelector('.main-navigation');

navHeader.addEventListener('mouseover', (event) => {
    event.target.style.transform = 'rotate(360deg)';
    event.target.style.transition = 'transform 1s'
});


//nav items to turn a different color on click and then
//change back on clicking again
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach((item) => {
    item.addEventListener('click', (event) => {
       if (event.target.style.color === 'purple'){
           event.target.style.color = 'black'
       } else {
           event.target.style.color = 'purple'
       }

       event.target.style.backgroundColor = 'lightgrey';
       event.stopPropagation();
    })
});


//images get bigger and then go back to normal when mouse
//is over it and then leaves
const images = document.querySelectorAll('img');

images.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.transform = 'scale(1.3)';
        event.target.style.transition = "transform 1s";
    })
    item.addEventListener('mouseleave', (event) => {
        event.target.style.transform = 'scale(1)'
    })
});

//h2s background will change color on click
const h2s = document.querySelectorAll('h2');

h2s.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.target.style.backgroundColor = 'blue';
        event.target.style.textAlign = 'center';
        event.target.style.border = '4px double black';
        event.stopPropagation();
    })
});

//mouseover event - changes logo 'fun bus'
const logoHeading = document.querySelector('.logo-heading')

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.color = 'red';
    event.target.style.fontSize = '5rem';
    event.target.style.fontWeight = 'bold';
    event.target.textContent = "Hello YOU!";
});

//mouseover---rainbow p's
const allPs = document.querySelectorAll('p')
console.log(allPs)

allPs.forEach((item) => {
    item.addEventListener('mouseover', (event) => {
        event.target.style.fontSize = '2.2rem';
        event.target.style.backgroundImage = 'linear-gradient(600deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)';
        event.target.style.webkitBackgroundClip = 'text';
        event.target.style.webkitTextFillColor = 'transparent';
    })
});

//click event - spins and changes buttons
const buttons = document.querySelectorAll(".btn")

buttons.forEach(item => {
    item.addEventListener("pointermove", (event) => {
        event.target.style.backgroundColor = 'purple';
        event.target.style.color = 'white';
        event.target.style.transform = 'rotate(360deg)';
        event.target.style.transition = 'transform 1.5s';
    })
});


//mouse enter -- spins, changes color, centers h4s
const h4s = document.querySelectorAll('h4');

h4s.forEach(item => {
    item.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = 'purple';
        event.target.style.color = 'white';
        event.target.style.textAlign = 'center';
        event.target.style.transform = 'rotate(360deg)';
        event.target.style.transition = 'transform 1.5s';
    })
});

//page disappears
wholePage.addEventListener('dblclick', (event) => {
    event.target.style.display = 'none'
});