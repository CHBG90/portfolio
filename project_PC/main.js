document.addEventListener('DOMContentLoaded', function () {

    //off_img hover scale JS
    const offImg = document.querySelectorAll('.off_img_oh img');

    offImg.forEach(function (img) {
        img.addEventListener('mouseenter', function () {
            img.style.transform = 'scale(1.2)';
        });

        img.addEventListener('mouseleave', function () {
            img.style.transform = 'scale(1.0)';
        });
    });

});


$(function () {

    //wing_bannter btn JQ
    $('.wing_list, .wing_searchBar').hide();

    $('.open_btn').click(function (){
        $('.wing_list, .wing_searchBar').fadeToggle();
    });

    //wing_banner list JQ
    $('.wing_size_hidden, .wing_color_hidden, .wing_search_hidden').hide();

    $('.wing_size').click(function () {
        $(this).next().slideToggle();
    });
    $('.wing_color').click(function () {
        $(this).next().slideToggle();
    });
    $('.wing_search').click(function () {
        $(this).next().slideToggle();
    });

    $('.wing_size_hidden button').click(function () {
        $('.wing_size_hidden button').removeClass('on_size');
        $(this).addClass('on_size');
    });

    $('.wing_color_hidden button').click(function () {
        $('.wing_color_hidden button').removeClass('on_color');
        $(this).addClass('on_color');
    });

    //detail_page scrollTo JQ
    $('.content p a').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 700);
    });

    $('.top_but').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 700)
    });

    //header_nav_bottom slide JQ
    $('.brand ul').css('display', 'none');

    $('.brand').mouseenter(function () {
        $('.brand ul').stop().slideDown(300);
    });

    $('.brand').mouseleave(function () {
        $('.brand ul').stop().slideUp(300);
    });

    $('.header_nav_bottom_oder ul').css('display', 'none');

    $('.header_nav_bottom_oder').mouseenter(function () {
        $(this).find('ul').stop().slideDown(300);
    });

    $('.header_nav_bottom_oder').mouseleave(function () {
        $(this).find('ul').stop().slideUp(300);
    });


});