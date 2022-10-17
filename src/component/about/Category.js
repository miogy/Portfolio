import { useState } from "react";
import styled from "styled-components";
import TechStack from "./TechStack";
import Workexperience from "./Workexperience";
import DesignSkill from "./DesignSkill";
import Project from "./Project";
import ToyProject from "./ToyProject";

function Category() {
  const [tab, setTab] = useState(0);

  return (
    <Title>
      <ul>
        <li
          className={`${tab === 0 ? "active" : ""}`}
          onClick={() => setTab(0)}
        >
          Tech Stack,
        </li>
        <li
          className={`${tab === 1 ? "active" : ""}`}
          onClick={() => setTab(1)}
        >
          Workexperience,
        </li>
        <li
          className={`${tab === 2 ? "active" : ""}`}
          onClick={() => setTab(2)}
        >
          Design Skill,
        </li>
        <li
          className={`${tab === 3 ? "active" : ""}`}
          onClick={() => setTab(3)}
        >
          Project,
        </li>
        <li
          className={`${tab === 4 ? "active" : ""}`}
          onClick={() => setTab(4)}
        >
          Toy Project,
        </li>
      </ul>
      <div>{stackContent[tab]}</div>
    </Title>
  );
}
export default Category;

const stackContent = {
  0: <TechStack />,
  1: <Workexperience />,
  2: <DesignSkill />,
  3: <Project />,
  4: <ToyProject />,
};

const Title = styled.div`
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0;
    li {
      padding-right: 20px;
      text-decoration: none;
      list-style: none;
      font-size: 42px;
      line-height: 57px;
    }
    .active {
      border-bottom: 3px solid #000;
    }
  }
`;
