$(document).ready(function () {
  // header nav-bar start
  $(".navbar-nav .nav-item .nav-link").mouseenter(function () {
    $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
  });
  $(".navbar-nav .nav-item .nav-link").mouseleave(function () {
    $(this).children().removeClass("fa-angle-up").addClass("fa-angle-down");
  });
  $(".navbar-nav .nav-item.active .nav-link").mouseenter(function () {
    $(".navbar-nav .nav-item .home-menu").removeClass("d-none");
  });
  $(".navbar-nav .nav-item.active").mouseleave(function () {
    $(".navbar-nav .nav-item .home-menu").addClass("d-none");
  });
  $(".navbar-nav .nav-item.company .nav-link").mouseenter(function () {
    $(".navbar-nav .nav-item .company-menu").removeClass("d-none");
  });
  $(".navbar-nav .nav-item.company").mouseleave(function () {
    $(".navbar-nav .nav-item .company-menu").addClass("d-none");
  });
  $(".navbar-nav .nav-item.service .nav-link").mouseenter(function () {
    $(".navbar-nav .nav-item .service-menu").removeClass("d-none");
  });
  $(".navbar-nav .nav-item.service").mouseleave(function () {
    $(".navbar-nav .nav-item .service-menu").addClass("d-none");
  });
  $(".navbar-nav .nav-item.case .nav-link").mouseenter(function () {
    $(".navbar-nav .nav-item .case-menu").removeClass("d-none");
  });
  $(".navbar-nav .nav-item.case").mouseleave(function () {
    $(".navbar-nav .nav-item .case-menu").addClass("d-none");
  });
  $(".navbar-nav .nav-item.blog .nav-link").mouseenter(function () {
    $(".navbar-nav .nav-item .blog-menu").removeClass("d-none");
  });
  $(".navbar-nav .nav-item.blog").mouseleave(function () {
    $(".navbar-nav .nav-item .blog-menu").addClass("d-none");
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
      margin: 320,
      nav: false,
      center: false,
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 0,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 1,
        },
      },
    });
  }
  // home slider finished
  
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


});


let headerCard = document.querySelectorAll("#services-single-data .card .card-header");

headerCard.forEach(elem =>{
  elem.addEventListener("click",function(e){
    e.preventDefault();
    let bodyCard = document.querySelectorAll("#services-single-data .card .card-body");
    let icon = document.querySelectorAll("#services-single-data .card .card-header i")
    for(let classValue of elem.nextElementSibling.firstElementChild.classList){
      if(classValue !== "show"){
        elem.nextElementSibling.firstElementChild.classList.toggle("show");
        
      }
   }
   for(let ikon of icon){
    if(ikon.classList.contains("fa-eye")){
      ikon.classList.replace("fa-eye","fa-eye-slash");
    }
    else{
      ikon.classList.replace("fa-eye-slash","fa-eye");
    }
     
   }
           //  for(let ikon of elem.lastChild)
           // for(let ikon of icon){
           //   if(ikon.classList.contains("fa-eye")){
           //     ikon.classList.remove("fa-eye");
           //     ikon.classList.add("fa-eye-slash");
           //   }
           //   else{
           //     ikon.classList.remove("fa-eye-slash");
           //     ikon.classList.add("fa-eye");
           //   }
    
    
            // }
    
    for(let cardCollaps of bodyCard){
      if(cardCollaps !== elem.nextElementSibling.firstElementChild){
        cardCollaps.classList.add("show");
        
        
      }
    }
  })
})

// headerCard.addEventListener("click",function(e){
//   e.preventDefault();
//   let bodyCard = document.querySelectorAll("#services-single-data .card .card-body");
//   console.log(bodyCard);
  
// })


// home about-us start
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

  