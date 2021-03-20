const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});


$(document).ready(function(){

    let $btn = $('.projetos-area .button-group button');

    $btn.click(function(e){
        $('.projetos-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.projetos-area .grid').isotope({
            filter: selector
        });
        return false;
    });

    $('.projetos-area .button-group #btn1').trigger('click');

    $('.projetos-area .grid .test-popup-link').magnificPopup({
        type:'image',
        gallery: {enabled: true}
    });


    $(document).on('click', '#navbarNav ul li', function(){
        $(this).addClass('active').siblings().removeClass('active');
    })




    // OWL CARROSEL

    $('.site-main .depoimentos-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,

        responsive:{
            0:{
                items: 1
            },
            544:{
                items: 2
            }
        }

    })


    // statico nav bar 

    let nav_offset_top = $('.header-area').height()+30;

    function navbarFixed(){
        if($('.header-area').length) {
            $(window).scroll(function(){
                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top) {
                    $('.header-area .main-menu').addClass('navbar_fixed');
                }else {
                    $('.header-area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }


    navbarFixed();

})