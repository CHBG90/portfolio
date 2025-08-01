//visual_banner(slick)
$(document).ready(function () {
  $('.visual_banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: 1,
    
    dots: true,
  });
});

//week_item(slick)
$(document).ready(function () {
  $('.week').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    centerMode: true,
  });
});

//off_banner(slick)
$(document).ready(function () {
  $('.off_banner').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    arrows: false,
    autoplay: 1,

    dots: true,
  });
});


document.addEventListener('DOMContentLoaded', function () {

  //bottom_banner
  const open = document.getElementById('open_btn');
  const close = document.getElementById('close_btn');
  const hd = document.querySelectorAll('.hd_sh');

  open.addEventListener('click', openBtn);
  close.addEventListener('click', closeBtn);

  //gnbBox_toggle
  const gnb_toggle = document.getElementById('gnb_toggle');
  const gnb = document.querySelector('.gnb_box');

  gnb_toggle.addEventListener('click', toggleGnb);

  //cate_x_btn
  const cateXBtn = document.querySelector('.cate_x_btn');

  //hd_cate 1~5
  const hdCate1 = document.querySelector('.hd_cate1');
  const hdCate2 = document.querySelector('.hd_cate2');
  const hdCate3 = document.querySelector('.hd_cate3');
  const hdCate4 = document.querySelector('.hd_cate4');
  const hdCate5 = document.querySelector('.hd_cate5');

  const cateBtn1 = document.querySelector('.cate_btn1');
  const cateBtn2 = document.querySelector('.cate_btn2');
  const cateBtn3 = document.querySelector('.cate_btn3');
  const cateBtn4 = document.querySelector('.cate_btn4');
  const cateBtn5 = document.querySelector('.cate_btn5');


  //bottom_banner  
  function openBtn() {
    hd.forEach(function (el) {
      el.classList.add('show');
    });
    open.style.display = 'none';
    close.style.display = 'block';
  };

  function closeBtn() {
    hd.forEach(function (el) {
      el.classList.remove('show');
    });
    open.style.display = 'block';
    close.style.display = 'none';
  }


  //gnbBox_toggle
  function toggleGnb() {
    gnb.classList.toggle('on');
  }

  //cate_x_btn
  cateXBtn.addEventListener('click',()=>{
      gnb.classList.remove('on');
  });

  //hd_cate 1~5
  cateBtn1.addEventListener('click',()=>{
      hdCate1.classList.toggle('on2');
  });
  cateBtn2.addEventListener('click',()=>{
      hdCate2.classList.toggle('on2');
  });
  cateBtn3.addEventListener('click',()=>{
      hdCate3.classList.toggle('on2');
  });
  cateBtn4.addEventListener('click',()=>{
      hdCate4.classList.toggle('on2');
  });
  cateBtn5.addEventListener('click',()=>{
      hdCate5.classList.toggle('on2');
  });

});