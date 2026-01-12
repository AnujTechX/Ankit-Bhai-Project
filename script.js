
//hamburger button

let menu= document.querySelector(".mobil-navbar-btn");
let header= document.querySelector("header");

menu.addEventListener("click",()=>{
  header.classList.toggle("active");
  
  console.log("button clicked")
});

// image zoom in  zoom out

let images= document.querySelectorAll(".zoom");
let lightbox= document.querySelector("#lightbox");
let lightboxImage= document.querySelector("#lightbox-img");

images.forEach((img)=>{
  img.addEventListener("click",()=>{
    lightboxImage.src=img.src;
    lightbox.classList.add("active");
    
  })
})
if(lightbox){

  lightbox.addEventListener("click",()=>{
    lightbox.classList.remove("active")
  })
}

// Active page section

const links= document.querySelectorAll(".link");

let currentPath= window.location.pathname.split("/").pop();
links.forEach(link=>{
  if(currentPath.includes(link.getAttribute('href')))  
    link.classList.add("active-link")
})

  // ====brand slide section =====
  
  let slider= document.querySelector(".carousel-slider");

  slider.innerHTML = slider.innerHTML+slider.innerHTML;
  let slides= document.querySelectorAll(".slide");
  let scrollPos=0;
  let speed=1;
  let isMoving= false;
  let sWidth= slides[0].clientWidth;

  let sliderMarquee=()=>{
    if(!isMoving) scrollPos+=speed;

    if(scrollPos === sWidth*(slides.length/2)) scrollPos=0;
 
    slider.style.transform=`translateX(-${scrollPos}px)`;
    requestAnimationFrame(sliderMarquee);
  }
  requestAnimationFrame(sliderMarquee);
  

slider.addEventListener("mouseenter",()=>isMoving=true);
slider.addEventListener("mouseleave",()=>isMoving=false);
 
  
