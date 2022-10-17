import styled from "styled-components";

const FooterWrap = styled.div`
  position: absolute;
  top: 1800px;
  left: 0;
  width: 100%;
  height: 128px;
  background-color: #efefef;
`;

function Footer() {
  return (
    <FooterWrap>
      <div>footer</div>
    </FooterWrap>
  );
}
export default Footer;
