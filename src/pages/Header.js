import Slider from "react-slick";
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSlider = styled.div`
  img {
    width: 1250px;
    margin: 0 auto;
  }
  .slick-dots {
    bottom: -30px;
  }
`
const Logo_flex = styled.div`
    display: flex;
    justify-content: space-between;
    width:1250px;
    margin: 5px  auto;
`
const Logo_p = styled.p`
    margin: 0;
    padding-top: 15px;
    display: flex;
    gap: 30px;
`
const Logo_Img = styled.img`
  width: 200px;
`
export default function Header() {

  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  }

  return (
    <div>
      <Logo_flex>
        <Link to='/'><Logo_Img src={process.env.PUBLIC_URL + '/festival/logo/logo.png'} alt="0" /></Link>
        <Logo_p><p>회원가입</p><p>로그인</p><p>장바구니</p></Logo_p>
      </Logo_flex>
      <div>
        <StyledSlider>
          <Slider {...settings}>
            <div><img src={process.env.PUBLIC_URL + '/festival/main_banner/banner03.jpg'} alt="1" /></div>
            <div><img src={process.env.PUBLIC_URL + '/festival/main_banner/banner02.jpg'} alt="2" /></div>
            <div><img src={process.env.PUBLIC_URL + '/festival/main_banner/banner01.jpg'} alt="3" /></div>
          </Slider>
        </StyledSlider>
      </div>
    </div>
  )
}
