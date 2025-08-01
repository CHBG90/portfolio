import { productList, qaList } from "./data.js";

document.addEventListener('DOMContentLoaded', function () {

    //Q&A add
    const contentTable2 = document.querySelector('.content_table_2');

    const titleInput = document.querySelector('.title_input');
    const nameInput = document.querySelector('.name_input');
    const qaInput = document.querySelector('.qa_input');

    const qaModal = document.querySelector('.qa_modal');
    const openModal = document.querySelector('.content_qa');
    const qaBtn = document.querySelector('.qa_btn');
    const modalXBtn = document.querySelector('.modal_x_btn');

    openModal.addEventListener('click', ()=>{
        qaModal.style.display = 'block';
    });
    
    qaBtn.addEventListener('click', () => {

        if(titleInput.value === '' || nameInput.value === '' || qaInput.value === ''){
            alert('내용을 다 입력해주세요.');
        } else {
            const tr = document.createElement('div');

            const td1 = document.createElement('p');
            tr.appendChild(td1);

            const td2 = document.createElement('p');
            td2.classList.add('qa_title');
            
            const index = qaList.length;
            td2.setAttribute('data-index', index);

            tr.appendChild(td2);

            const td3 = document.createElement('p');
            tr.appendChild(td3);
            const td4 = document.createElement('p');
            tr.appendChild(td4);
            // const td5 = document.createElement('td');
            // tr.appendChild(td5);

            td1.textContent = '미답변';
            td2.textContent = titleInput.value;
            td3.textContent = nameInput.value;

            const date = new Date();
            const formattedDate = date.toLocaleDateString();

            td4.textContent = formattedDate;
            // td5.textContent = qaInput.value;

            contentTable2.appendChild(tr);

            //db array add
            qaList.push({
                title: titleInput.value,
                id: nameInput.value,
                content: qaInput.value,
            });

            qaModal.style.display = 'none';

            titleInput.value = '';
            nameInput.value = '';
            qaInput.value = '';
        }
    });

    modalXBtn.addEventListener('click', ()=> {
        qaModal.style.display = 'none';
    });


    //Q&A list show
    const qaListModal = document.querySelector('.qaList_modal');
    const titleInputList = document.querySelector('.title_input_list');
    const nameInputList = document.querySelector('.name_input_list');
    const qaInputList = document.querySelector('.qa_input_list');
    const qaBtnList = document.querySelector('.qa_btn_list');
    
    contentTable2.addEventListener('click', (e)=>{

        const target = e.target.closest('[data-index');
        if(target === null) return;

        qaListModal.style.display = 'block';

        const idx = parseInt(target.getAttribute('data-index'));
        const list = qaList[idx];

        titleInputList.value = list.title;
        nameInputList.value = list.id;
        qaInputList.value = list.content;

    });

    qaBtnList.addEventListener('click', ()=>{
        qaListModal.style.display = 'none';
    });

});

$(function () {

    //wing_bannter btn JQ
    $('.wing_list, .wing_searchBar').hide();

    $('.open_btn').click(function () {
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

    //detail_page scrollTo JQ
    $('.content p a').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 700);
    });

    $('.top_but').click(function (e) {
        e.preventDefault();
        $(window).scrollTo(this.hash || 0, 700)
    });

});