import { useEffect, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import styled from "styled-components";

function ProjectCard() {
  const [project, setProject] = useState({});
  const [ale6ixPanel, setAle6ixPanel] = useState(false);
  const [starboxPanel, setStarboxPanel] = useState(false);

  const ale6ixPanelHandler = () => {
    setAle6ixPanel(!ale6ixPanel);
  };
  const starboxPanelHandler = () => {
    setStarboxPanel(!starboxPanel);
  };

  useEffect(() => {
    fetch("/data/projectData.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project);
      });
  }, []);
  return (
    <StyledProject>
      <div className="projectWrap">
        {project?.ale6ix?.map((projectList) => {
          return (
            <div key={projectList} className="cardWrap">
              <dl onClick={ale6ixPanelHandler}>
                <dt className="projectImg">
                  <img
                    src={projectList.src}
                    className="imgContent"
                    alt="projectImg"
                  />
                </dt>
                <dd
                  className="cardcontainer"
                  onClick={() => {
                    window.location.href = "https://youtu.be/X2f3YSx6h0Q";
                  }}
                >
                  <p className="cardTitle">{projectList.title}</p>
                  <p className="projectLink">
                    <AiFillPlayCircle /> 시연영상보기
                  </p>
                </dd>
              </dl>
            </div>
          );
        })}
      </div>

      {/* starbox */}
      <div className="projectWrap">
        {project?.starbox?.map((starboxList) => {
          return (
            <div key={starboxList} className="cardWrap">
              <dl onClick={starboxPanelHandler}>
                <dt className="projectImg">
                  <img
                    src={starboxList.src}
                    className="imgContent"
                    alt="projectImg"
                  />
                </dt>
                <dd
                  className="cardcontainer"
                  onClick={() => {
                    window.location.href =
                      "https://www.youtube.com/watch?v=WFLoaP3cGkg";
                  }}
                >
                  <p className="cardTitle">{starboxList.title}</p>
                  <p className="projectLink">
                    <AiFillPlayCircle /> 시연영상보기
                  </p>
                </dd>
              </dl>
            </div>
          );
        })}
      </div>
    </StyledProject>
  );
}
export default ProjectCard;

const StyledProject = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  /* position: relative; */
  overflow: scroll;
  .projectWrap {
    width: 100%;
    height: 500px;
    margin: 0 auto;
    margin-right: 40px;
    display: flex;
    .cardWrap {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: center;
      dl {
        dt {
          width: 100%;
          .imgContent {
            width: 550px;
            height: 360px;
          }
        }
        .cardcontainer {
          width: 100%;
          margin: 0;
          display: flex;
          justify-content: space-around;
          .cardTitle {
            font-size: 28px;
            font-weight: 400;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .projectLink {
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            &:hover {
              color: #333;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
`;
