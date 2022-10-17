import styled from "styled-components";
import { MdOutlineLaptopMac } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import ProjectCard from "./ProjectCard";

function TechStack() {
  return (
    <ContentWrap>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          OS
        </dt>
        <dd className="techstackText">macOS</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          UI
        </dt>
        <dd className="techstackText">
          Html5, Css
          <span className="textSmall"> 디자인 작업 및 수정 가능 </span>
        </dd>
        <dd className="techstackText"> Javascript, Jquery </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Framework
        </dt>
        <dd className="techstackText">
          React js<span className="textSmall"> Project 작업 경험 </span>
        </dd>
        <dd className="techstackText">
          Vue js<span className="textSmall"> Toy Project 작업경험 </span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Packages
        </dt>
        <dd className="techstackText">Sass , styled-components</dd>
        <dd className="techstackText">React-icons, React-router-dom, </dd>
        <dd className="techstackText">
          swiper
          <span className="textSmall">프로젝트시 필요한 라이브러리 사용</span>
        </dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <MdOutlineLaptopMac className="titleIcon" />
          Tools
        </dt>
        <dd className="techstackText">
          Community: Trello, Notion, Slack, Zep, Zoom
        </dd>
        <dd className="techstackText">Version Control Tool: Git</dd>
      </dl>
    </ContentWrap>
  );
}

function Workexperience() {
  return (
    <ContentWrap>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2011.06~2022.03
        </dt>
        <dd className="techstackText">국내 브랜드 원단 R & D 디자인 및 영업</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2018
        </dt>
        <dd>독일 전시 및 아트웍 디자인</dd>
      </dl>
      <dl className="contentsContainer">
        <dt className="contentTitle">
          <GiClothes className="titleIcon" />
          2016~2022.03
        </dt>
        <dd className="techstackText"> 디자인 및 생산 총괄</dd>
      </dl>
    </ContentWrap>
  );
}

function DesignSkill() {
  return <ContentWrap>Design</ContentWrap>;
}

function Project() {
  return (
    <ContentWrap>
      <StyledProjectCard />
    </ContentWrap>
  );
}

function ToyProject() {
  return <ContentWrap>ToyProject</ContentWrap>;
}
const stackContent = {
  0: <TechStack />,
  1: <Workexperience />,
  2: <DesignSkill />,
  3: <Project />,
  4: <ToyProject />,
};
export default stackContent;

const ContentWrap = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  .contentsContainer {
    width: 50%;
    height: 120px;
    text-align: center;
    .contentTitle {
      padding: 0 20px 0 20px;
      text-align: start;
      font-size: 28px;
      margin-bottom: 6px;
      .titleIcon {
        padding-right: 6px;
      }
    }
    .techstackText {
      width: 300px;
      display: inline-block;
      text-align: start;
      padding: 10px 0 0 100px;
      margin: 0;
      margin-bottom: 6px;
      color: #444;
      .textSmall {
        font-size: 14px;
        margin-left: 6px;
        padding-right: 8px;
        padding-left: 3px;
        color: #888;
        border: 1px solid #999;
      }
    }
  }
`;
const StyledProjectCard = styled(ProjectCard)`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
