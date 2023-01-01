import { useEffect } from 'react'
import styled from 'styled-components';
import { useQuery } from 'react-query';
import axios from 'axios';
import Masonry from 'react-masonry-css'

const ItemListContainer = styled.section`
  display: flex;
  background: white;
  margin-top: 24px;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  > .masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
    > div {
      padding: 0 2px;
      background-clip: padding-box;
      > div{
        background: grey;
        margin-bottom: 30px;
       }
    }
  }
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

  if (data === undefined && isLoading) {
    return null;
  }

  return (
    <ItemListContainer>
      <Masonry
        breakpointCols={7}
        className="masonry-grid"
        columnClassName="my-masonry-grid_column">
        {data?.slice(0, 30).map((item) => {
          return (<img
            alt={item.display_sitename}
            key={item.thumbnail_url}
            src={item.image_url}
            width='100%' />)
        })}
      </Masonry>
    </ItemListContainer >
  )
}

export default ItemList