$(document).ready(function () {

    // header-area
    $(window).scroll(function(){
        let sct = $(window).scrollTop();

        if(sct >= 300){
            //로고 사이즈 변경
            $('.header-logo').addClass('active');
            $('.header-area').addClass('active');
            $('.header-area .icon, .menu').addClass('active');
            $('.header-logo svg').addClass('active');

            $('#hamburger').addClass('on');
            $('.top-btn').fadeIn();
        }else{
            $('.header-logo').removeClass('active');
            $('.header-area').removeClass('active');
            $('.header-area .icon, .menu').removeClass('active');
            $('.header-logo svg').removeClass('active');

            $('#hamburger').removeClass('on');
            $('.top-btn').fadeOut();
        }
    });

    // hamburger
    $('#hamburger').click(function () {
        $('.header-area .main-menu').toggleClass('active');
        $('#hamburger').toggleClass('active');
    })
    

    // top-btn
    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },500);
    });

    // sub-menu
    $('.main-menu li').mouseenter(function(){
        let result = $(this).attr('data-tab');
        
        $('.sub-menu').removeClass('active');

        $(`#${result}`).addClass('active');


        // 서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

        //헤더 색상변경
        $('.header-area,.header-logo,.header-logo svg').addClass('active');
    });

    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        $('.header-area,.header-logo,.header-logo svg').removeClass('active');
    });

    // banner 스와이퍼
    var swiper = new Swiper(".bannerSwiper", {
        effect: "fade",
        // slidesPerView: 1,
        loop: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
        },
    });

    // sec-0 plus-btn 토글
    $('.hair1 .plus-btn').click(function(){
        $('.hair1 .plus-box').fadeToggle();
        $(this).toggleClass('active');
    });
    $('.sec-0 .hair2 .plus-btn').click(function(){
        $('.sec-0 .img-box .hair2 .plus-box').fadeToggle();
        $(this).toggleClass('active');
    });

    // sec-1 스와이퍼
    var swiper = new Swiper(".secSwiper", {
        // slidesPerView: 6,
        // spaceBetween: 0,
        loop : true,
        speed: 1000,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1600: {
              slidesPerView: 5,
              spaceBetween: 12,
              slidesPerGroup: 1,    
            },
            1200:{
              slidesPerView: 4,
              spaceBetween: 8,
              slidesPerGroup: 1,                    
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 8,
                slidesPerGroup: 1,    
            },      
            760: {
                slidesPerView: 2,
                spaceBetween: 8,
                slidesPerGroup: 1,    
            },   
            500: {
                slidesPerView: 2,
                spaceBetween: 8,
                slidesPerGroup: 1,    
            },  
            
        }

    });
    
    // sec-2 AOS 실행
    AOS.init();

    // sec-3 스크롤 영역
    // 스크롤할때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화
    $(window).scroll(function () {
        const h = $(window).scrollTop();
        console.log(h);

        // 스크롤값이 1000px일때 왼쪽 이미지 고정, 오른쪽 스크롤 활성화
        const sec3 = $('.sec-3').offset().top;
        const sec4 = $('.sec-4').offset().top;
        const wh = $(window).height();

        const sct = $(window).scrollTop();
        if (sct >= sec3 && sct < sec4) {
            $('.sec-3 .left-con .main-img').addClass('on');
        } else {
            $('.sec-3 .left-con .main-img').removeClass('on');
        }
    });



});