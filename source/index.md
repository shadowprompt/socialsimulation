---
title: Home
comments: false
toc: false
layout: homepage
---
<div class="activity-gallery">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide init">
                <div class="inner">
                    <a href="/training/CSS/CSS2023/">
                        <figure><img src="/img/css/summer_school_2023.jpg"></figure>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="inner">
                    <a href="/events/">
                        <figure><img src="/img/isss/isss_2023.jpg"></figure>
                    </a>
                </div>
            </div>
            <div class="swiper-slide">
                <div class="inner">
                    <a href="//socialsimulation.net/training/CSS/CSS2019/">
                        <figure><img src="/img/css/summer_school_2019_1480x880.jpg"></figure>
                    </a>
                </div>
            </div>
        </div>
        <div class="swiper-button-prev"></div>
        <!--左箭头-->
        <div class="swiper-button-next"></div>
        <!--右箭头-->
    </div>
</div>

<script>
    var swiper = new Swiper('.swiper-container', {
        speed: 700,
        slidesPerView: 'auto',
        centeredSlides: true,
        autoplay:true,
        loop: true,
        on: {
            init: function() {
                this.slides.removeClass('init');
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    swiper.$el.parent('.activity-gallery')[0].onmouseover = function() {
        swiper.$el.addClass('mouse-hover');
    };
    swiper.$el.parent('.activity-gallery')[0].onmouseout = function() {
        swiper.$el.removeClass('mouse-hover');
    };
</script>
