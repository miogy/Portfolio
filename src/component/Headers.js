import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 100;
  div {
    width: 100%;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font: 60px/90px "Joan", serif;
      color: #fff;
      letter-spacing: -0.16em;
    }
    ul {
      display: none;
    }
  }
`;
const StyledAiOutlineMenu = styled(AiOutlineMenu)`
  font-size: 32px;
  color: #fff;
  box-shadow: blueviolet;
`;

function Header() {
  return (
    <HeaderWrap>
      <div>
        <h1>MIOGY</h1>
        <StyledAiOutlineMenu />
        <ul>
          <li>About</li>
          <li>Front end</li>
          <li>Artwork</li>
          <li>Other Hobby & Skill</li>
        </ul>
      </div>
    </HeaderWrap>
  );
}
export default Header;
