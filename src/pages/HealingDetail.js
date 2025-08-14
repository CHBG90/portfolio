import { useParams, Link } from 'react-router-dom';
import healing from './healingData'
import styled from 'styled-components';

export default function HealingDetail() {

  const { id } = useParams();
  const heal = healing[id];

  const Wrap = styled.div`
    text-align: center;
  `
  const Link_1 = styled(Link)`
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
  const Div_col = styled.div`
    color: #ccc;
    font-weight: bold;
  `
  const Span = styled.span`
    color: #ccc;
    font-weight: bold;
  `
  const Div_top = styled.div`
    margin: 50px auto;
    display: flex;
    gap: 5px;
  `  
  return (
    <div style={{ width: '1250px', margin: '50px auto' }}>
      <Div_top>
        <Link_1 to='/'>홈</Link_1>
        <Span> ＞ </Span>
        <Div_col to='/'>오늘의 여행 소식</Div_col>
      </Div_top>
      <Wrap>
        <Boder>
          <h1>{heal.title1}</h1>
          <h3>{heal.title2}</h3>
        </Boder>
        <img src={heal.image}></img>
      </Wrap>
    </div>
  )
}