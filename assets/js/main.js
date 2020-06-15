$(document).ready(function () {
  // header nav-bar start
  $(".navbar-nav .nav-item .nav-link").mouseenter(function () {
    $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
  });
  $(".navbar-nav .nav-item .nav-link").mouseleave(function () {
    $(this).children().removeClass("fa-angle-up").addClass("fa-angle-down");
  });
  
  $(".navbar-nav .nav-item.search .nav-link")
    .children()
    .click(function () {
      $(".navbar-nav .nav-item.search form").toggleClass("d-none");
    });
  $(".navbar-nav .nav-item.bars .nav-link")
    .children()
    .click(function () {
      $(".navbar-nav .nav-item.bars .side.on").removeClass("d-none");
    });
  $(".navbar-nav .nav-item.bars .side.on")
    .children()
    .click(function () {
      $(".navbar-nav .nav-item.bars .side.on").addClass("d-none");
    });
    // header nav-bar finished
    
    // home slider start
  if ($("#slider").length) {
    $("#slider .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      center: false,
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      autoWidth:true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });
  }
  // home slider finished

  // home counterUp start
  if($("#fixed-bg").length){
    $(".timer").counterUp({
      delay: 10,
      time: 5000,
    })
  }
  // home counterUp end

  // home progress start
  function wowAnimation() {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
}
$(window).on('load', function () {
  wowAnimation();
});
// home progress end

  // about header-scroll start
  if($("#about-header").length){
    $(window).scroll(function (e) { 
      e.preventDefault();
      let scroll = $(window).scrollTop();
      if(scroll > 10){
        $("#about-header").removeClass("about-header").addClass("show");
        $("#about-header .navbar-brand .logo-light").addClass("d-none");
        $("#about-header .navbar-brand .logo").removeClass("d-none");
      }
      else{
        $("#about-header").removeClass("show").addClass("about-header");
        $("#about-header .navbar-brand .logo-light").removeClass("d-none");
        $("#about-header .navbar-brand .logo").addClass("d-none");
      }
      
    });
  }
  // about header-scroll end

  // services header-scroll start
  if($("#services-header").length){
    $(window).scroll(function (e) { 
      e.preventDefault();
      let scroll = $(window).scrollTop();
      if(scroll > 10){
        $("#services-header").removeClass("services-header").addClass("show");
        $("#services-header .navbar-brand .logo-light").addClass("d-none");
        $("#services-header .navbar-brand .logo").removeClass("d-none");
      }
      else{
        $("#services-header").removeClass("show").addClass("services-header");
        $("#services-header .navbar-brand .logo-light").removeClass("d-none");
        $("#services-header .navbar-brand .logo").addClass("d-none");
      }
      
    });
  }
  // services header-scroll end


  // services carousel start
  if ($("#services-solution .services-items").length) {
    $('.owl-carousel').owlCarousel({
      items: 2,
      loop: false,
      nav: false,
      dots:true,
      margin: 7,
      autoplay: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 3
          }
      }
  });
  }
  // services carousel end

  // services-single header-scroll start
  if($("#services-single-header").length){
    $(window).scroll(function (e) { 
      e.preventDefault();
      let scroll = $(window).scrollTop();
      if(scroll > 10){
        $("#services-single-header").removeClass("services-single-header").addClass("show");
        $("#services-single-header .navbar-brand .logo-light").addClass("d-none");
        $("#services-single-header .navbar-brand .logo").removeClass("d-none");
        
      }
      else{
        $("#services-single-header").removeClass("show").addClass("services-single-header");
        $("#services-single-header .navbar-brand .logo-light").removeClass("d-none");
        $("#services-single-header .navbar-brand .logo").addClass("d-none");
      }
      
      
    });
  }
 // services-single header-scroll end

 // blog-standart header-scroll start
 if($("#blog-standart-header").length){
  $(window).scroll(function (e) { 
    e.preventDefault();
    let scroll = $(window).scrollTop();
    if(scroll > 10){
      $("#blog-standart-header").removeClass("blog-standart-header").addClass("show");
      $("#blog-standart-header .navbar-brand .logo-light").addClass("d-none");
      $("#blog-standart-header .navbar-brand .logo").removeClass("d-none");
      
    }
    else{
      $("#blog-standart-header").removeClass("show").addClass("blog-standart-header");
      $("#blog-standart-header .navbar-brand .logo-light").removeClass("d-none");
      $("#blog-standart-header .navbar-brand .logo").addClass("d-none");
    }
    
    
  });
}
// blog-standart header-scroll end

// blog-single header-scroll start
if($("#blog-single-header").length){
  $(window).scroll(function (e) { 
    e.preventDefault();
    let scroll = $(window).scrollTop();
    if(scroll > 10){
      $("#blog-single-header").removeClass("blog-single-header").addClass("show");
      $("#blog-single-header .navbar-brand .logo-light").addClass("d-none");
      $("#blog-single-header .navbar-brand .logo").removeClass("d-none");
      
    }
    else{
      $("#blog-single-header").removeClass("show").addClass("blog-single-header");
      $("#blog-single-header .navbar-brand .logo-light").removeClass("d-none");
      $("#blog-single-header .navbar-brand .logo").addClass("d-none");
    }
    
    
  });
}
// blog-single header-scroll end

// contact-us header-scroll start
if($("#contact-us-header").length){
  $(window).scroll(function (e) { 
    e.preventDefault();
    let scroll = $(window).scrollTop();
    if(scroll > 10){
      $("#contact-us-header").removeClass("contact-us-header").addClass("show");
      $("#contact-us-header .navbar-brand .logo-light").addClass("d-none");
      $("#contact-us-header .navbar-brand .logo").removeClass("d-none");
      
    }
    else{
      $("#contact-us-header").removeClass("show").addClass("contact-us-header");
      $("#contact-us-header .navbar-brand .logo-light").removeClass("d-none");
      $("#contact-us-header .navbar-brand .logo").addClass("d-none");
    }
    
    
  });
}
// contact-us header-scroll end



});

// services-single tab panel start
let headerCard = document.querySelectorAll("#services-single-data .card .card-header");

headerCard.forEach(elem =>{
  elem.addEventListener("click",function(e){
    e.preventDefault();
    console.log(headerCard[0]);
    
    
    let bodyCard = document.querySelectorAll("#services-single-data .card .card-body");
   
    for(let classValue of elem.nextElementSibling.firstElementChild.classList){
      if(classValue !== "show"){
        elem.nextElementSibling.firstElementChild.classList.toggle("show");
        
      }
   }
   if(elem.nextElementSibling.firstElementChild.classList.contains("show")){
    elem.lastElementChild.classList.replace("fa-eye","fa-eye-slash");
  }
  else{
    elem.lastElementChild.classList.replace("fa-eye-slash","fa-eye");
  }
          
    
    for(let cardCollaps of bodyCard){
      if(cardCollaps !== elem.nextElementSibling.firstElementChild){
        cardCollaps.classList.add("show");
      }
    }

   for(let elemHeader of headerCard){
    if(elemHeader !== elem){
      elemHeader.lastElementChild.classList.replace("fa-eye","fa-eye-slash");
    }
   }
  })
})
// services-single tab panel end


// / home about-us start
let tabLinks = document.querySelectorAll(".center-tabs .nav.nav-tabs .nav-item .nav-link");
let tabPanels = document.querySelectorAll(".tabs-content .tab-pane");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".nav-item .nav-link.active").classList.remove("active");
    document.querySelector(".tab-pane.show").classList.remove("show");

    let parentListItem = el;
    parentListItem.classList.add("active");
     
    let count = el.getAttribute("data-index");
    
    let panel = [...tabPanels].filter(el => el.getAttribute("data-index") == count);
    panel[0].classList.add("show");
    panel[0].classList.remove("d-none");
    
    for(let item of tabPanels){
      if(panel[0] !== item){
        item.classList.add("d-none");
      }
    }
    
    });
  }
  // home about-us finished

  // home testimonial start
  let tabContent = document.querySelectorAll(".slide .items .item");
  let tabBtns = document.querySelectorAll(".carousel-indicators li");
  for(let tabBtn of tabBtns){
    tabBtn.addEventListener("click",function(e){
      e.preventDefault();

      document.querySelector(".slide .items .item.active").classList.remove("active");
      document.querySelector(".carousel-indicators li.active").classList.remove("active");

      let item = tabBtn;
      item.classList.add("active");

      let index = tabBtn.getAttribute("data-id");
      let content = [...tabContent].filter(el => el.getAttribute("data-id") == index);
      content[0].classList.add("active");
      content[0].classList.remove("remove");
     
    })
  }
  setInterval(function(){
    let activ = document.querySelector(".slide .items .item.active");
    let activBtn = document.querySelector(".carousel-indicators li.active");
    if(activ.nextElementSibling !==null){
      document.querySelector(".slide .items .item.active").classList.remove("active");
      activ.nextElementSibling.classList.add("active");
    }
    else{
      document.querySelector(".slide .items .item:first-child").classList.add("active");
      document.querySelector(".slide .items .item:last-child").classList.remove("active");
    }
    if(activBtn.nextElementSibling !==null){
      document.querySelector(".carousel-indicators li.active").classList.remove("active");
      activBtn.nextElementSibling.classList.add("active");
    }
    else{
      document.querySelector(".carousel-indicators li:first-child").classList.add("active");
      document.querySelector(".carousel-indicators li:last-child").classList.remove("active");
    }
    
  },5000)
// home testimonial finished

  