    
//    hero slider
   
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
    var slideNumber = 0;

// image slider next button 
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.a("active");
});

//-------------------------------------------
//image slider previous button
//--------------------------------------------
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});
//--------------------------------------------
//image slider autoplay
//-------------------------------------------
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 4000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});


// testimonial

const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})

//------ brands slider-------

$(function(){
  setInterval(function(){
    $(".slideshow1 ul").animate({marginLeft:-350},800,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  }, 3500);
});

//-----------------------------------------------
// controls the animation with mouse over
//----------------------------------------------
$(function(){
  var timeSlide;
  function goSlide() {
      $(".slideshow2 ul").animate({marginLeft:-350},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
  }
  timeSlide = setInterval(goSlide, 5000);
  
  $('.slideshow2').on('mouseenter', function(){
    // stop animation
    clearInterval(timeSlide);
  }).on('mouseleave', function(){
    // play animation
    timeSlide = setInterval(goSlide, 5000);
  });
});
//-------------------------------------------- 
// copy right year
//---------------------------------------------
const year = document.getElementById("year")

const date = new Date()
const presentYear = date.getFullYear();
year.innerText = presentYear;

//-------------------------------------------------
// animation function
//------------------------------------------------
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// mobile-menu

const menu = document.querySelector(".mobile-list");
const burgerBtn = document.querySelector(".menu-wrapper");
const menuList = document.querySelectorAll('.menu-list');

console.log(menuList)
function toggleMenu(){
  menu.classList.toggle("active")
}
menuList.forEach((list)=>{
  console.log(list)
  list.addEventListener('click', toggleMenu)
});

burgerBtn.addEventListener('click',toggleMenu);
menuList.addEventListener('click',toggleMenu);