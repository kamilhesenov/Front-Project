$(document).ready(function () {
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
  if ($(".slider").length) {
    $(".slider").owlCarousel({
      loop: true,
      margin: 5,
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
});

let tabLinks = document.querySelectorAll(".center-tabs .nav.nav-tabs .nav-item .nav-link");
let tabPanels = document.querySelectorAll(".tabs-content .tab-pane");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".nav-item .nav-link.active").classList.remove("active");
    document.querySelector(".tab-pane.show").classList.remove("show");

    let parentListItem = el;
    parentListItem.classList.add("active");
     
    console.log(parentListItem.parentElement.parentElement);
    let count = el.getAttribute("data-index");
    
    let panel = [...tabPanels].filter(el => el.getAttribute("data-index") == count);
    panel[0].classList.add("show");
    panel[0].classList.remove("d-none");
    console.log(panel);
    for(let item of tabPanels){
      if(panel[0] !== item){
        item.classList.add("d-none");
      }
    }
    
    });
  }




