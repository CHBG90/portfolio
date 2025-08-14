import { useState } from 'react'
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import styled from 'styled-components';
import healing from './healingData';
import event from './eventData'

const Wrap = styled.div`
  width: 1250px;
  margin: 50px auto;
`
const Gnb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
`
const TitleP = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 20px 0;
`
const TitleP_2 = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 50px 0 20px 0;
`
const Pstyle = styled.p`
  margin: 5px 0 0 0;
  text-align: center;
  color: balck;
  width: 220px;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;  
`
const HealLink = styled(Link)`
  text-decoration: none;
  color: black;
`
const Heal_Img = styled.img`
  width: 220px; 
  height: 300px;
`
const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;

  &.active {
    border-bottom: 2px solid red;
  }
`
export default function Home() {

  const [healings] = useState(healing);

  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div>

      <Wrap>
        <Gnb>
          <StyledLink to='/'>홈</StyledLink>
          <StyledLink to='cult'>문화관광축제</StyledLink>
          <StyledLink to='cart'>티켓구매</StyledLink>
        </Gnb>
        <Outlet></Outlet>
        {isHome && (
          <>

            <TitleP>오늘의 여행 소식</TitleP>

            <Flex>
              {
                healings.map((heal, index) => {
                  return (
                    <div>
                      <HealLink to={`/healingDetail/${index}`}>
                        <Heal_Img src={heal.image}></Heal_Img>
                        <Pstyle>{heal.title1}</Pstyle>
                      </HealLink>
                    </div>
                  )
                })
              }
            </Flex>

            <TitleP_2>EVENT</TitleP_2>

            <Flex>
              {
                event.map((eve, index) => {
                  return (
                    <HealLink to={`/eventDetail/${index}`}>
                      <img src={eve.image}></img>
                      <Pstyle>{eve.title1}</Pstyle>
                      <Pstyle>{eve.title2}</Pstyle>
                    </HealLink>
                  )
                })
              }
            </Flex>
          </>
        )}
      </Wrap>
    </div>
  )
}