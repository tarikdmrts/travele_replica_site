window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("page").classList.add("show");
    }, 2000);
});

const prevBtn = $('.prev');
const nextBtn = $('.next');
const bannerTitle = $('.banner-title');

const images = ['slider-banner-1.jpg', 'slider-banner-2.jpg'];
const titles = ['TRAVELLING AROUND THE WORLD', 'EXPERIENCE THE NATURE\'S BEAUTY'];
let currentImageIndex = 0;

function changeSlide() {
    $(".banner-inner-wrap").removeClass('fade');
    bannerTitle.removeClass('fade');

    $(".banner-inner-wrap").css("background-image", "url('images/" + images[currentImageIndex] + "')");
    bannerTitle.text(titles[currentImageIndex]);

    setTimeout(() => {
        $(".banner-inner-wrap").addClass('fade');
        bannerTitle.addClass('fade');
    }, 10);
}

nextBtn.on('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeSlide();
});

prevBtn.on('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    changeSlide();
});

const navbar = $('.bottom-header');
const navbarOffset = navbar.position().top;
const mobileBar = $('.mobile-menu-container')
const mobileBarOffset= mobileBar.position().top

const headerLogo = $('.bottom-header img')
const toTopIcon = $('.to-top-icon')

$(window).scroll(()=> {
    const scrollPosition = $(window).scrollTop();
    
    if (mobileBar.css("display") === "block") {
        if (scrollPosition >= mobileBarOffset) {
            mobileBar.addClass('sticky');
            navbar.removeClass('sticky');
            headerLogo.attr("src","images/white-logo.png")
            toTopIcon.fadeIn();
        } else {
            mobileBar.removeClass('sticky');
            toTopIcon.fadeOut();
        }
    } else {
        if (scrollPosition >= navbarOffset) {
            navbar.addClass('sticky');
            mobileBar.removeClass('sticky');
            headerLogo.attr("src","images/black-logo.png")
            toTopIcon.fadeIn();
        } else {
            navbar.removeClass('sticky');
            headerLogo.attr("src","images/white-logo.png")
            toTopIcon.fadeOut();
        }
    }

});

toTopIcon.click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1200);
});



$(".input-date-picker").datepicker({
    dateFormat: "mm/dd/yy",
    changeMonth: true, 
    changeYear: true, 
});

const searchForm = $('.header-search-form')
const searchBtn = $('.header-search-icon')
const searchClose = $('.search-close')

searchBtn.on('click',(event)=>{
    event.preventDefault();
    searchForm.addClass('search-in')
})
searchClose.on('click',()=>{
    searchForm.removeClass('search-in')
})
searchForm.on('click', (event) => {
    if ($(event.target).is('.header-search-form')) {
        searchForm.removeClass('search-in')
    }
})

$(document).ready( () => {
    $("#video-container").on("click",()=> {
        const videoId = $(this).data("video-id");
        const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        $("#video-frame").attr("src", videoUrl);
        $("#video-modal").fadeIn();
    });

    $(".close").on("click", ()=>{
        $("#video-modal").fadeOut();
        $("#video-frame").attr("src", "");
    });

    $('.client-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: false,
        dots: false
    });
    
    $('.testimonial-slider').slick({
        dots: true,
        arrows: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true 
    });

    $('.slick-dots').appendTo('.dots-container');

    $('.menu-link-container').on('click',()=> {
        $('.slicknav_nav').toggleClass('slicknav_visible')
    })

    $('.slicknav_nav .menu-item-has-children').on('click', (e) => {
        e.stopPropagation();
      });

      $('.mobile-menu-container .slicknav_row .slicknav_item').on('click', function() {
        $(this).closest('li').children('ul').toggleClass('slicknav_visible');
    });

    $('.mobile-menu-container .slicknav_row .slicknav_item').on('click', function() {
        var $this = $(this);
        var $ul = $this.closest('li').children('ul');
    
        if ($ul.hasClass('slicknav_visible')) {
            $this.find('.slicknav_arrow i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $this.find('.slicknav_arrow i').removeClass('fa-minus').addClass('fa-plus');
        }
    });

});