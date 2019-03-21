////  Changes header background when scrolled past top of site ////

$(window).on("scroll", function () {
if ($(this).scrollTop() > 1) {
     $("#header").addClass("header");
}
else {
     $("#header").removeClass("header");
    }
});

////  Show/Hide side navigation on hamburger click ////

$('#hamburger').on("click", function () {  
    $("#siteMenu").toggleClass("main_nav drop");
});

////  Hide side navigation if still displayed when window is resized up past 768px ////

$(window).resize(function(){
	if(window.innerWidth > 768) {
    $("#siteMenu").removeClass("drop");
    $("#siteMenu").addClass("main_nav");
  }
});

