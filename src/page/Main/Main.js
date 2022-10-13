import About from "./About";
import Slider from "./Slider";

import styled from "styled-components";

const StyledSlider = styled(Slider)``;

function Main() {
  return (
    <div>
      <StyledSlider />
      <About />
    </div>
  );
}
export default Main;
