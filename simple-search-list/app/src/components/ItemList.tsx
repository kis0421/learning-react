import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
const ItemListContainer = styled.section`
  display: flex;
  background: white;
  margin-top: 24px;
  width: 100%;
  height: 100%;
`
interface Props {
  keyword: string
}
const ItemList = (props: Props) => {
  useQuery(['itemList'], () => {
    if (props.keyword) {
      axios.get(`http://dapi.kakao.com/v2/search/image?query=${props.keyword}`, {
        headers: {
          Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`
        }
      }).then(({ data }) => {
        console.log(data)
      })
    }
  })
  return (
    <ItemListContainer>

    </ItemListContainer>
  )
}

export default ItemList