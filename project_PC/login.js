document.addEventListener('DOMContentLoaded', function () {

    //login id,pw check

    let id = 'testid';
    let pw = 'testpw';
    
    let failCount = 0;


    const userId = document.getElementById('user_id');
    const userPw = document.getElementById('user_pw');
    const loginBtn = document.querySelector('.login_btn');
    const hiddenTxt1 = document.querySelector('.hidden_txt_1');
    const hiddenTxt2 = document.querySelector('.hidden_txt_2');

    loginBtn.addEventListener('click',(e)=>{

        e.preventDefault();

        if(userId.value === id) {
            if(userPw.value === pw) {
                alert('로그인이 되었습니다.');
                window.location.href = './index.html';
            } else {
                failCount++;
                hiddenTxt1.style.display = 'block';
                if(failCount >= 5) {
                    hiddenTxt2.style.display = 'block';
                    loginBtn.disabled = true;                  
                }
            }
        } else {
            failCount++;
            hiddenTxt1.style.display = 'block';
            if(failCount >= 5) {
                hiddenTxt1.style.display = 'none';
                hiddenTxt2.style.display = 'block';
                loginBtn.disabled = true;

            }
        }
    });
    //login cusor event
    userId.addEventListener('focus',()=>{
        hiddenTxt1.style.display = 'none';
    });

    userPw.addEventListener('focus',()=>{
        hiddenTxt1.style.display = 'none';
    });

    //login visible icon
    const visibleIcon = document.querySelector('.visible_icon');

    visibleIcon.addEventListener('click',()=>{
        if(userPw.type === 'password'){
            userPw.type = 'text';
            visibleIcon.classList.add('visible_icon_show');
        } else {
            userPw.type = 'password';
            visibleIcon.classList.remove('visible_icon_show');
        }
    });

    //modal show
    let name = '홍길동';
    let email = 'test@naver.com';

    const idSearch = document.querySelector('.id_search');
    const pwSearch = document.querySelector('.pw_search');
    const modalId = document.querySelector('.modal_id');
    const modalPw = document.querySelector('.modal_pw');
    const xBtnId = document.querySelector('.x_btn_id');
    const xBtnPw = document.querySelector('.x_btn_pw');

    const modalBtnId = document.querySelector('.modal_btn_id');
    const modalBtnPw = document.querySelector('.modal_btn_pw');
    const txtEmail = document.querySelector('.txt_email');
    const txtName = document.querySelector('.txt_name');
    const txtId = document.querySelector('.txt_id');
    const txtEmail2 = document.querySelector('.txt_email_2');

    const modalSmalltxtName = document.querySelector('.modal_smallTxt_name');
    const modalSmalltxtEmail = document.querySelector('.modal_smallTxt_email');
    const modalSmalltxtId = document.querySelector('.modal_smallTxt_id');
    const modalSmalltxtEmail2 = document.querySelector('.modal_smallTxt_email_2');

    idSearch.addEventListener('click',()=>{
        modalId.style.display = 'block';
    });

    pwSearch.addEventListener('click',()=>{
        modalPw.style.display = 'block';

        modalSmalltxtId.style.opacity = '0';
        modalSmalltxtEmail2.style.opacity = '0';
        txtId.value = '';
        txtEmail2.value = '';
    });

    xBtnId.addEventListener('click',()=>{
        modalId.style.display = 'none';

        modalSmalltxtName.style.opacity = '0';
        modalSmalltxtEmail.style.opacity = '0';
        txtName.value = '';
        txtEmail.value = '';
    });

    xBtnPw.addEventListener('click',()=>{
        modalPw.style.display = 'none';
    });

    //modal id, pw check
    modalBtnId.addEventListener('click',(e)=>{

        e.preventDefault();

        if(name === txtName.value && email === txtEmail.value) {
            alert(`아이디는 ${id} 입니다.`);
            modalId.style.display = 'none';
        } else if (name !== txtName.value) {
            modalSmalltxtName.style.opacity = '1';
        } else if (email !== txtEmail.value) {
            modalSmalltxtEmail.style.opacity = '1';
        } else {
            alert('이름과 이메일을 확인하세요.')
        }
    });

    modalBtnPw.addEventListener('click',(e)=>{

        e.preventDefault();

        if(id === txtId.value && email === txtEmail2.value) {
            alert(`비밀번호는 ${pw} 입니다.`);
            modalPw.style.display = 'none';
        } else if (id !== txtId.value) {
            modalSmalltxtId.style.opacity = '1';
        } else if (email !== txtEmail2.value) {
            modalSmalltxtEmail2.style.opacity = '1';
        } else {
            alert('아이디와 이메일을 확인하세요.')
        }
    });

    //modal cusor event
    txtName.addEventListener('focus',()=>{
        modalSmalltxtName.style.opacity = '0';
    });

    txtEmail.addEventListener('focus',()=>{
        modalSmalltxtEmail.style.opacity = '0';
    });

    txtId.addEventListener('focus',()=>{
        modalSmalltxtId.style.opacity = '0';
    });

    txtEmail2.addEventListener('focus',()=>{
        modalSmalltxtEmail2.style.opacity = '0';
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