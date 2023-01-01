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
  justify-content: center;
  align-items: center;
  > .masonry-grid {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -30px;
    width: auto;
    > div {
      padding: 0 2px;
      background-clip: padding-box;
      > div {
        overflow: hidden;
        > img {
          transition: scale .5s;
          &:hover {
            scale: 1.1
          }
        }
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

  console.log(data)


  return (
    <ItemListContainer>
      {data === undefined
        ? <span>검색을 해주세요.</span>
        : data.length === 0
          ? <span>검색 결과가 없습니다.</span>
          : <Masonry
            breakpointCols={7}
            className="masonry-grid">
            {data?.map((item) => {
              const onErrorSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png';
              return (<div key={item.image_url}>
                <img
                  alt={item.display_sitename}
                  key={item.thumbnail_url}
                  src={item.image_url}
                  onError={(e) => e.currentTarget.src = onErrorSrc}
                  width='100%' />
              </div>)
            })}
          </Masonry>
      }
    </ItemListContainer >
  )
}

export default ItemList