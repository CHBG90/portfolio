import { productList, qaList } from "./data.js";

document.addEventListener('DOMContentLoaded', function () {

    //product_page
    function renderProduct(list) {

        const product = document.querySelector('.product');
        product.innerHTML = '';

        for (let i = 0; i < list.length; i++) {

            const productBox = document.createElement('div');
            productBox.setAttribute('class', 'product_box');

            const productImgBox = document.createElement('div');
            productImgBox.setAttribute('class', 'product_img_box');
            productBox.appendChild(productImgBox);

            const imgLink = document.createElement('a');
            imgLink.href = './detail_page.html';
            productImgBox.appendChild(imgLink);

            const porductImg = document.createElement('img');
            porductImg.setAttribute('src', list[i].src);
            imgLink.appendChild(porductImg);

            const productNameBox = document.createElement('div');
            productNameBox.setAttribute('class', 'product_name_box');
            productBox.appendChild(productNameBox);

            const productName = document.createElement('p');
            productName.setAttribute('class', 'product_name');
            productName.textContent = list[i].name;
            productNameBox.appendChild(productName);

            const productNamePrice = document.createElement('p');
            productNamePrice.setAttribute('class', 'product_name_price');
            productNamePrice.textContent = parseInt(list[i].price).toLocaleString() + '원';
            productNameBox.appendChild(productNamePrice);

            const productSize = document.createElement('div');
            productSize.setAttribute('class', 'product_size');
            productBox.appendChild(productSize);

            const productSizeP = document.createElement('p');
            productSizeP.textContent = list[i].size;
            productSize.appendChild(productSizeP);

            const productBuyBox = document.createElement('div');
            productBuyBox.setAttribute('class', 'product_buy_box');
            productBox.appendChild(productBuyBox);

            const productIcon = document.createElement('div');
            productIcon.setAttribute('class', 'product_icon');
            productBuyBox.appendChild(productIcon);

            list[i].icon.forEach(e => {
                const iconDiv = document.createElement('div');
                const icon = document.createElement('i');
                icon.className = e;
                iconDiv.appendChild(icon);
                productIcon.appendChild(iconDiv);
            });

            const productBuyBut = document.createElement('div');
            productBuyBut.setAttribute('class', 'product_buy_but');
            productBuyBox.appendChild(productBuyBut);

            const productBuyP = document.createElement('p');
            productBuyP.textContent = '바로구매';
            productBuyBut.appendChild(productBuyP);

            product.appendChild(productBox);
        }
    }   

    renderProduct(productList);


    //price original, ascending, descending(Lodash)
    const ascendingBtn = document.querySelector('.ascending_btn');
    const descendingBtn = document.querySelector('.descending_btn');
    const originalBtn = document.querySelector('.original_btn');


    ascendingBtn.addEventListener('click', () => {
        const priceAs = _.sortBy(productList, e => parseInt(e.price));
        renderProduct(priceAs);
    });

    descendingBtn.addEventListener('click',()=>{
        const priceDe = _.sortBy(productList, e => parseInt(e.price)).reverse();
        renderProduct(priceDe);
    });

    originalBtn.addEventListener('click',()=> {
        renderProduct(productList);
    });

});


$(function () {

    //wing_bannter btn JQ
    $('.wing_list, .wing_searchBar').hide();

    $('.open_btn').click(function (){
        e.preventDefault();
        $('.wing_list, .wing_searchBar').fadeToggle();
    });

    //wing_banner list JQ
    $('.wing_size_hidden, .wing_color_hidden, .wing_search_hidden').hide();

    $('.wing_size').click(function () {
        e.preventDefault();
        $(this).next().slideToggle();
    });
    $('.wing_color').click(function () {
        e.preventDefault();
        $(this).next().slideToggle();
    });
    $('.wing_search').click(function () {
        e.preventDefault();
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