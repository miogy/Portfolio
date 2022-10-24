import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrap>
      <dl className="footerContainer">
        <dt>Develop</dt>
        <dd>
          <span>Git</span> <span>Velog</span>
        </dd>
      </dl>
      <dl className="footerContainer">
        <dt>SNS</dt>
        <dd>
          <span>instagram</span>
          <span>blog</span>
        </dd>
      </dl>
      <dl className="footerContainer">
        <dt></dt>
        <dd
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <Link to="/info">이력서 한눈에 보기</Link>
        </dd>
      </dl>
    </FooterWrap>
  );
}
export default Footer;
const FooterWrap = styled.div`
  position: absolute;
  top: 1800px;
  left: 0;
  width: 100%;
  height: 128px;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .footerContainer {
    font-size: 1.2em;
    margin: 0 5% 0 5%;
    dt {
      margin-bottom: 6px;
    }
    dd {
      font-size: 0.8em;
      margin: 0;
      color: #666;
    }
  }
`;
