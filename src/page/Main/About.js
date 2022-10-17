import styled from "styled-components";
import Category from "../../component/about/Category";

const AboutWrap = styled.div`
  position: absolute;
  top: 890px;
  left: 0;
  width: 100%;
  height: 820px;
  padding-top: 36px;
  background-color: #fff;
  .about-container {
    width: 58%;
    margin: 0 auto;
    text-align: start;
    h3 {
      font: 36px/47px "나눔고딕", sans-serif;
      letter-spacing: -0.12em;
      color: #555;
    }
  }
`;

function About() {
  return (
    <AboutWrap>
      <div className="about-container">
        <h3>About</h3>
        <Category />
      </div>
    </AboutWrap>
  );
}
export default About;
