import { useEffect } from 'react'
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
const ItemListContainer = styled.section`
  display: flex;
  background: white;
  margin-top: 24px;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow-y: auto;
`
interface Props {
  keyword: string
}
interface Item {
  collection: string;
  datetime: string;
  display_sitename: string;
  doc_url: string;
  height: number;
  image_url: string;
  thumbnail_url: string;
  width: number;
}
const ItemList = (props: Props) => {
  const { data, isLoading, refetch } = useQuery<Item[]>(['itemList'], async () => {
    if (props.keyword) {
      try {
        const { data } = await axios.get(`http://dapi.kakao.com/v2/search/image?query=${props.keyword}`, {
          headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`
          }
        })
        return data.documents
      } catch (e) {

      }
    }
  })
  useEffect(() => {
    refetch()
  }, [props.keyword, refetch])

  console.log(data, isLoading)
  if (data === undefined && isLoading) {
    return null;
  }
  return (
    <ItemListContainer>
      {data?.slice(0, 10).map((item) => {
        return (<img
          alt={item.display_sitename}
          key={item.thumbnail_url}
          src={item.thumbnail_url}
          width={item.width}
          height={item.height}
        />)
      })}
    </ItemListContainer>
  )
}

export default ItemList