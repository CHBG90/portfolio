import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from './cultureData'

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
const Cbox = styled.div`
  margin: 10px auto;
`
const LinkBox = styled(Link)`
  text-decoration: none;
  color: black;
`
const Img = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 20px;
`
const Txt_tit = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 0 10px;
`
const Txt_date = styled.p`
  margin: 0 10px;
  fontSize: 14px;
`
const Txt_addr = styled.p`
  margin: 0 10px;
  color: #ccc;
  fontSize: 14px;
`
export default function Culture() {

  const [details] = useState(data);

  return (
    <div>
      <ItemBox>
      {
      details.map((detail,index)=>{
        return (
          <Cbox>
            <LinkBox to={`/cultureDetail/${index}`}>
            <Img src={detail.image}></Img>
            <Txt_tit>{detail.title}</Txt_tit>
            <Txt_date>{detail.date}</Txt_date>
            <Txt_addr>{detail.area}</Txt_addr>
            </LinkBox>
          </Cbox>
        )
      })
      }
      </ItemBox>

    </div>
  )
}
