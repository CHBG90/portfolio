import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItem, addCount, minusCount } from './store';
import cartCss from './cart.module.css';

export default function Cart() {

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.count;
  }, 0);

  return (
    <Container>
      <Row className={cartCss.row}>
        <Col className={cartCss.col}></Col>
        <Col className={cartCss.col}>축제이름</Col>
        <Col className={cartCss.col}>티켓수량</Col>
        <Col className={cartCss.col}>가격</Col>
        <Col className={cartCss.col}></Col>
        <Col className={cartCss.col}>합계</Col>
      </Row>
      <hr></hr>
      {
        cartItems.length === 0 ? (<p className={cartCss.p}>티켓을 추가해 주세요!</p>) : (
          cartItems.map(item => (
            <>
              <Row>
                <Col className={cartCss.col_2}><img className={cartCss.img} src={item.image}></img></Col>
                <Col className={cartCss.col_2}>{item.title}</Col>
                <Col className={cartCss.col_2}>{item.count}</Col>
                <Col className={cartCss.col_2}>{item.price.toLocaleString() + '원'}</Col>
                <Col className={cartCss.col_2}>
                  <button className={cartCss.but} onClick={() => dispatch(addCount({ id: item.id }))}>+</button>
                  <button className={cartCss.but} onClick={() => dispatch(minusCount({ id: item.id }))}>-</button>
                  <button className={cartCss.but} onClick={() => dispatch(deleteItem({ id: item.id }))}>삭제</button>
                </Col>
                <Col className={cartCss.col_2}>{(item.price * item.count).toLocaleString()}원</Col>
              </Row>
              <hr className={cartCss.hr}></hr>
            </>
          ))
        )
      }
      {cartItems.length > 0 && (
        <div className={cartCss.total}>총 금액 : {totalPrice.toLocaleString()}원</div>
      )}
    </Container>
  )
}
