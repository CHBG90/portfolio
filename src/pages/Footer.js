import React from 'react'

import footerCss from './footer.module.css';

export default function Footer() {
  return (
    <div>
      <hr className={footerCss.hr}></hr>
      <div className={footerCss.wrap}>
        <div className={footerCss.footer_top}>
          <p>개인정보처리방침</p>
          <p>ㅣ</p>
          <p>위치기반 서비스 이용약관</p>
          <p>ㅣ</p>
          <p>개인위치정보 처리방침</p>
          <p>ㅣ</p>
          <p>저작권정책</p>
          <p>ㅣ</p>
          <p>고객서비스현장</p>
          <p>ㅣ</p>
          <p>전자우편무단수집거부</p>
          <p>ㅣ</p>
          <p>찾아오시는 길</p>
        </div>

        <div className={footerCss.footer_bottom}>
          <p>울산 중앙동 서계로 10</p>
          <p>TEL:037-734-3000</p>
          <p>사업자등록번호:212-83-57878</p>
          <p>통신판매업신고:제2027-울산중앙-0478호</p>
          <img src={process.env.PUBLIC_URL + '/festival/logo/under_logo01.png'} alt="1" />
          <img src={process.env.PUBLIC_URL + '/festival/logo/under_logo02.png'} alt="2" />
          <img src={process.env.PUBLIC_URL + '/festival/logo/under_logo03.png'} alt="3" />
          <img src={process.env.PUBLIC_URL + '/festival/logo/under_logo04.png'} alt="4" />          
        </div>
      </div>
    </div>
  )
}
