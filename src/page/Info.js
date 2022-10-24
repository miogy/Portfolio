import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import styled from "styled-components";

function Info() {
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  const book = useRef();

  useEffect(() => {
    setTimeout(() => {
      setTotal(book.current.pageFlip().getPageCount());
    }, 1000);
  }, []);

  const updatePage = ({ data }) => setPage(data + 2);

  return (
    <StyledInfo style={{ padding: "5% 0" }}>
      <span
        className="next button"
        onClick={() => book.current.pageFlip().flipNext()}
      >
        <i className="fas fa-chevron-right"></i>
      </span>
      <HTMLFlipBook
        showCover={false}
        onFlip={updatePage}
        width={600}
        height={800}
        ref={book}
        useMouseEvents={true}
        flippingTime={500}
        maxShadowOpacity={0.6}
      >
        {pageData.map((data) => {
          return (
            <div className="page" key={data.id}>
              <img src={data.src} alt="page" />
            </div>
          );
        })}
      </HTMLFlipBook>
      <span
        onClick={() => book.current.pageFlip().flipPrev()}
        className="previous button"
      ></span>
      <span className="info-page">
        {page} - {total}
      </span>
    </StyledInfo>
  );
}
export default Info;

const pageData = [
  {
    id: 0,
    src: "https://velog.velcdn.com/images/miogy/post/cceec35d-6a48-4a5e-a9db-b80d67b2cf9d/image.png",
  },
  {
    id: 1,
    src: "https://velog.velcdn.com/images/miogy/post/2597a8ee-a341-45cc-9ab9-adbfb84df4ba/image.png",
  },
  {
    id: 2,
    src: "https://velog.velcdn.com/images/miogy/post/f0bbf7b3-7a2a-44a8-8108-02725cb75a9b/image.png",
  },
  {
    id: 3,
    src: "https://velog.velcdn.com/images/miogy/post/1544e0eb-6ad2-4352-b481-455b2f390b72/image.png",
  },
  {
    id: 4,
    src: "https://velog.velcdn.com/images/miogy/post/dd86a17b-952f-4b17-9994-a0b1f416dc0f/image.png",
  },
  {
    id: 5,
    src: "https://velog.velcdn.com/images/miogy/post/e9a6b42d-b8dc-40e8-a1ce-d0e7302ab2c7/image.png",
  },
  {
    id: 6,
    src: "https://velog.velcdn.com/images/miogy/post/8ad8b54e-5a9d-43f9-96a0-eb50343cab8c/image.png",
  },
  {
    id: 7,
    src: "https://velog.velcdn.com/images/miogy/post/46ae0fd6-1878-4bc0-ae8d-84a3baa4df2e/image.png",
  },
  {
    id: 8,
    src: "https://velog.velcdn.com/images/miogy/post/6b8e5161-8791-4743-8414-65766112346a/image.png",
  },
  {
    id: 9,
    src: "https://velog.velcdn.com/images/miogy/post/6ae32fb2-7b6e-4b74-957f-f588768e761f/image.png",
  },
];

const StyledInfo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  text-align: center;
  .page {
    max-width: 100%;
    max-height: 100%;
    margin: 0 auto;
    background-color: white;
    border: 1px solid lightgray;
    img {
      width: 92%;
      padding-top: 0;
    }
  }
  .button {
    position: absolute;
    z-index: 1000;
    cursor: pointer;
  }
  .previous {
    left: 1%;
  }
  .next {
    right: 1%;
  }
  .info-page {
    position: absolute;
    bottom: 40px;
  }
`;
