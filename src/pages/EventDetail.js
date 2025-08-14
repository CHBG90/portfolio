import { useParams, Link } from 'react-router-dom';
import event from './eventData'

import styled from 'styled-components';

export default function HealingDetail() {

  const { id } = useParams();
  const eve = event[id];

  const Wrap = styled.div`
    text-align: center;
  `
  const Link_top = styled(Link)`
    text-decoration: none;
    color: #ccc;
    font-weight: bold;
  `
  const Boder = styled.div`
    border: 1px solid black;
    margin: 50px 0;
    height: 150px;
    padding: 30px;
  `
  const LayOut = styled.div`
    width: 1250px;
    margin: 50px auto;
  `
  const Div_top = styled.div`
    margin: 50px auto;
    display: flex;
    gap: 5px;
  `
  const Span = styled.span`
    color: #ccc;
    font-weight: bold;
  `
  const Div_col = styled.div`
    color: #ccc;
    font-weight: bold;
  `
  return (
    <LayOut>
      <Div_top>
        <Link_top to='/'>홈</Link_top>
        <Span> ＞ </Span>
        <Div_col>EVENT</Div_col>
      </Div_top>
      <Wrap>
        <Boder>
          <p><h1>{eve.title1}</h1></p>
          <p><h3>{eve.title2}</h3></p>
        </Boder>
        <img src={eve.sub_img}></img>
      </Wrap>
    </LayOut>
  )
}
