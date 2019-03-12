// if(window.matchMedia("(min-width: 766px)").matches){
//
//   $('#navBar').removeClass('fixed-bottom')
//   $('#navBar').addClass('fixed-top')
//
// }


$(window).on("scroll", function () {
if ($(this).scrollTop() > 1) {
        $("#header").addClass("header");
}
else {
        $("#header").removeClass("header");
    }
});
