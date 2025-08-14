import { useParams, Link } from 'react-router-dom';
import data from './cultureData';
import { addItem } from './store';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { useDispatch } from 'react-redux';

const Wrap = styled.div`
    width: 900px;
    margin: 0 auto;
  `
const Flex = styled.div`
    display: flex;
    gap: 20px;
  `
const P_1 = styled.p`
    width: 100px;
    height: 40px;
    line-height: 40px;
    background-color: hotpink;
    color: white;
    text-align: center;
    border-radius: 15px;
  `
const Button_1 = styled.button`
    width: 100px;
    height: 40px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 15px;
    border: none;
  `
const Link_top = styled(Link)`
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
  `
const Icon = styled(FontAwesomeIcon)`
    font-size: 24px;
    margin: 20px 10px 0;
  `
const Span = styled.span`
    color: #ccc;
    font-weight: bold;
  `
const Div_top = styled.div`
    margin: 50px auto;
  `
const Img = styled.img`
    width: 285px;
    height: 250px;
  `
const Icon_margin = styled.div`
    margin-bottom: 40px;
  `
const Txt_p = styled.p`
    margin-top: 15px;
    line-height: 1.5;
`

export default function CultureDetail() {

  const { id } = useParams();
  const detail = data[id];
  const dispatch = useDispatch();

  return (
    <Wrap>
      <Div_top>
        <Link_top to='/'>홈</Link_top>
        <Span> ＞ </Span>
        <Link_top to='/cult'>문화관광축제</Link_top>
      </Div_top>
      <h5>{detail.subTitle}</h5>
      <h2>{detail.title}</h2>
      <Flex>
        <P_1>축제 진행 중</P_1>
        <Button_1 onClick={() => {dispatch(addItem({ image: detail.image, id: detail.id, title: detail.title, price: detail.price, count: 1 })); alert('장바구니에 추가되었습니다.');}}>티켓구매</Button_1>
      </Flex>
      <Flex>
        <Img src={detail.subImg1}></Img>
        <Img src={detail.subImg2}></Img>
        <Img src={detail.subImg3}></Img>
      </Flex>
      <Txt_p>{detail.desc}</Txt_p>
      <hr></hr>
      <div>
        <div><Icon icon={faCalendar} />{detail.date}</div>
        <div><Icon icon={faLocationDot} />{detail.addr}</div>
        <div><Icon icon={faCoins} />{detail.price.toLocaleString() + '원'}</div>
        <div><Icon icon={faPhone} />{detail.tel}</div>
        <Icon_margin><Icon icon={faSquareInstagram} />{detail.sns}</Icon_margin>
      </div>
    </Wrap>
  )
}