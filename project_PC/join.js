document.addEventListener('DOMContentLoaded', function () {

    //id, pw length check
    const joinName = document.querySelector('.join_name');

    const joinId = document.querySelector('.join_id');
    const joinPw = document.querySelector('.join_pw');
    const joinPw2 = document.querySelector('.join_pw2');
    const joinEmail = document.querySelector('.join_email');

    const hdTxtId = document.querySelector('.hidden_txt_id');
    const hdTxtPW = document.querySelector('.hidden_txt_pw');
    const hdTxtPW2 = document.querySelector('.hidden_txt_pw2');
    const hdTxtEmail = document.querySelector('.hidden_txt_email');

    const passwordBtn = document.querySelector('.password_btn');

    let pwCheck = false;

    joinId.addEventListener('change', ()=>{
        if(joinId.value.length < 5 || joinId.value.length > 10) {
            hdTxtId.style.opacity = '1';
            joinId.value = '';
        } else {
            hdTxtId.style.opacity = '0';
        }
    });

    joinPw.addEventListener('change', ()=>{
        if(joinPw.value.length < 8 || joinPw.value.length > 15) {
            hdTxtPW.style.opacity = '1';
            joinPw.value = '';
        } else {
            hdTxtPW.style.opacity = '0';
        }
    });

    //id cusor event
    joinId.addEventListener('focus',()=>{
        hdTxtId.style.opacity = '0';
    });

    //pw check
    passwordBtn.addEventListener('click', ()=>{
        if(joinPw.value === joinPw2.value && joinPw.value && joinPw2.value) {
            alert('비밀번호가 확인 되었습니다.');
            joinEmail.focus();
            pwCheck = true;
        } else {
            hdTxtPW2.style.opacity = '1';
            joinPw2.value = '';
            pwCheck = false;
        }
    });

    //pw cusor event
    joinPw.addEventListener('focus',()=>{
        hdTxtPW.style.opacity = '0';
    });

    joinPw2.addEventListener('focus',()=>{
        hdTxtPW2.style.opacity = '0';
    });

    //email check
    let url = ['co.kr', '.com', '.net'];

    joinEmail.addEventListener('change', ()=> {

        let check1 = false;
        let check2 = false;

        if(joinEmail.value.indexOf('@')>0) check1 = true;

        for(let i=0; i<url.length; i++) {
            if(joinEmail.value.indexOf(url[i])>0) check2 =true;
        }
        if(check1 && check2){
            hdTxtEmail.style.opacity = '0';
        } else {
            hdTxtEmail.style.opacity = '1';
        }
    });

    joinEmail.addEventListener('focus',()=>{
        hdTxtEmail.style.opacity = '0';
    });

    //phoneNember cursor event
    const phoneN1 = document.querySelector('.phone_n1');
    const phoneN2 = document.querySelector('.phone_n2');
    const phoneN3 = document.querySelector('.phone_n3');

    phoneN1.addEventListener('input',()=>{
        if(phoneN1.value.length === 3) phoneN2.focus();
    });

    phoneN2.addEventListener('input',()=>{
        if(phoneN2.value.length === 4) phoneN3.focus();
    });

    //marketing_btn
    const marketingBtnTotal = document.querySelector('.marketing_btn_total');
    const marketingBtn1 = document.querySelector('.marketing_btn_1');
    const marketingBtn2 = document.querySelector('.marketing_btn_2');
    const marketingBtn3 = document.querySelector('.marketing_btn_3');

    marketingBtnTotal.addEventListener('change', ()=>{
        if(marketingBtnTotal.checked) {
            marketingBtn1.checked = true;
            marketingBtn2.checked = true;
            marketingBtn3.checked = true;
        } else {
            marketingBtn1.checked = false;
            marketingBtn2.checked = false;
            marketingBtn3.checked = false;
        }
    });

    marketingBtn1.addEventListener('change', totalBtn);
    marketingBtn2.addEventListener('change', totalBtn);
    marketingBtn3.addEventListener('change', totalBtn);

    function totalBtn() {
        if(marketingBtn1.checked && marketingBtn2.checked && marketingBtn3.checked) {
            marketingBtnTotal.checked = true;
        } else {
            marketingBtnTotal.checked = false;
        }
    }

    //daum address api
    const addBtn = document.querySelector('.add_btn');
    const address1 = document.querySelector('.address_1');
    const address2 = document.querySelector('.address_2');
    const address3 = document.querySelector('.address_3');

    addBtn.addEventListener('click', ()=> {
        new daum.Postcode({
            oncomplete: function(data) {
                address1.value = data.zonecode;
                address2.value = data.address;

            }
        }).open();
    });

    //join complete
    const complete = document.querySelector('.button2');



    complete.addEventListener('click', (e)=>{

        e.preventDefault();

        if(!pwCheck) {
            alert('비밀번호 확인을 먼저 진행하세요.');
            joinPw2.focus();
            return;
        }

        if(joinName.value && joinId.value && joinPw.value  &&
            joinPw2.value  && joinEmail.value  && phoneN1.value  &&
            phoneN2.value && phoneN3.value && address1.value && address2.value) {
                alert('회원가입이 완료 되었습니다. 로그인 페이지로 이동 합니다.');
                window.location.href = './login.html';
            } else {
                alert('모든 항목을 입력해주세요.');
            }
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