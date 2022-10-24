import styled from "styled-components";

function STARBOX({ project, setPrjModal }) {
  return (
    <div>
      <div>
        starbox
        {/* {console.log(project)} */}
      </div>
    </div>
  );
}

function ALE6IX({ project }) {
  return (
    <div>
      <h4>{project.contentTitle}</h4>
      {project?.data?.map((list) => {
        return (
          <div key={list}>
            <dl>
              <dt>
                <h5>{list.firstTitle}</h5>
                <p>
                  {list.team}
                  <span>{list.date}</span>
                  <span>{list.member}</span>
                </p>
              </dt>
              <dd>{list.firstAbout}</dd>
            </dl>
            <dl>
              <dt>
                <h5>{list.secondTitle}</h5>
                <p>{list.secondAbout}</p>
              </dt>
              <dd>
                <h5>{list.skill}</h5>
                <p>{list.lang} </p>
                <p>{list.library} </p>
                <p>{list.CommunityTools} </p>
                <p>{list.VersionControlTool} </p>
              </dd>
            </dl>
            <dl>
              <dt>
                <h5>{list.thirdTitle}</h5>
                <p>{list.thirdAbout.all}</p>
                <p>{list.thirdAbout.team}</p>
              </dt>
              <dd>
                {list.thirdAbout.roleContent.map((item) => {
                  return (
                    <div>
                      <h6>{item.role}</h6>
                      <p>{item.work}</p>
                      <video src={item.url}></video>
                      <p>{item.text}</p>
                    </div>
                  );
                })}
              </dd>
            </dl>
          </div>
        );
      })}
    </div>
  );
}

function ProjectData({ projectTab, setPrjModal, project }) {
  return (
    <ProjectDataWrap>
      <div>
        {/* {console.log(project[0])} */}
        {projectTab === 0 ? (
          <ALE6IX project={project[0]} />
        ) : projectTab === 1 ? (
          <STARBOX project={project[1]} />
        ) : null}
      </div>
      <button onClick={() => setPrjModal(false)}>닫기</button>
    </ProjectDataWrap>
  );
}
export default ProjectData;

const ProjectDataWrap = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 90%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  /* box-shadow: 10px 5px 5px lightgray; */
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
    2px 0 0 5px rgb(255, 255, 255, 0.8), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`;
