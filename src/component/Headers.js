import styled from "styled-components";

const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

function Header() {
  return (
    <HeaderWrap>
      <div>Header</div>
    </HeaderWrap>
  );
}
export default Header;
