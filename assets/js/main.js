$(document).ready(function () {
    $(".navbar-nav .nav-item .nav-link").mouseenter(function(){
        $(this).children().removeClass("fa-angle-down").addClass("fa-angle-up");
        
    })
    $(".navbar-nav .nav-item .nav-link").mouseleave(function(){
        $(this).children().removeClass("fa-angle-up").addClass("fa-angle-down");
        
    })
    $(".navbar-nav .nav-item.active .nav-link").mouseenter(function(){
        $(".navbar-nav .nav-item .home-menu").removeClass("d-none");
    })
    $(".navbar-nav .nav-item.active").mouseleave(function(){
        $(".navbar-nav .nav-item .home-menu").addClass("d-none");
    })
    $(".navbar-nav .nav-item.company .nav-link").mouseenter(function(){
        $(".navbar-nav .nav-item .company-menu").removeClass("d-none");
    })
    $(".navbar-nav .nav-item.company").mouseleave(function(){
        $(".navbar-nav .nav-item .company-menu").addClass("d-none");
    })
    $(".navbar-nav .nav-item.service .nav-link").mouseenter(function(){
        $(".navbar-nav .nav-item .service-menu").removeClass("d-none");
    })
    $(".navbar-nav .nav-item.service").mouseleave(function(){
        $(".navbar-nav .nav-item .service-menu").addClass("d-none");
    })
    $(".navbar-nav .nav-item.case .nav-link").mouseenter(function(){
        $(".navbar-nav .nav-item .case-menu").removeClass("d-none");
    })
    $(".navbar-nav .nav-item.case").mouseleave(function(){
        $(".navbar-nav .nav-item .case-menu").addClass("d-none");
    })
    $(".navbar-nav .nav-item.blog .nav-link").mouseenter(function(){
        $(".navbar-nav .nav-item .blog-menu").removeClass("d-none");
    })
    $(".navbar-nav .nav-item.blog").mouseleave(function(){
        $(".navbar-nav .nav-item .blog-menu").addClass("d-none");
    })
    $(".navbar-nav .nav-item.search .nav-link").children().click(function(){
        $(".navbar-nav .nav-item.search form").toggleClass("d-none");
        
    })
    $(".navbar-nav .nav-item.bars .nav-link").children().click(function(){
        $(".navbar-nav .nav-item.bars .side.on").removeClass("d-none");
        
    })
    $(".navbar-nav .nav-item.bars .side.on").children().click(function(){
        $(".navbar-nav .nav-item.bars .side.on").addClass("d-none");
        
    })
});
