import React from "react";
import Link from "gatsby-link";
import {
  StyledButton,
  LineNumbers,
  Project,
  Skills,
  Social
} from "../components";

import TrackVisibility from "react-on-screen";

const pData = require("../../serve/data.json");

function findNode(images, key) {
  let l = "";
  images.forEach((el, index) => {
    let oName = images[index].node.sizes.originalName;
    if (oName === `${key}.jpg`) {
      l = images[index].node;
    }
  });

  return l;
}

const IndexPage = d => {
  const images = d.data.allImageSharp.edges;

  return (
    <div>
      <div className="wrapper">
        <div className="main-text-wrap">
          <div className="main-text">
            <LineNumbers />
            <div>
              <h2 style={{ marginBottom: "10px" }}>I AM A DEVELOPER</h2>
              <span
                className="keyline"
                style={{
                  margin: "15px 0px",
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#e8e8e8"
                }}
              />
            </div>
            <StyledButton
              href="https://goo.gl/forms/NUfwwXunABrTBW522"
              title="Available For Hire"
            >
              Available For Hire
            </StyledButton>
          </div>
          <p>
            Looking for help with a small script or have a project and don't
            know where to start? I can help.
          </p>
          <p>
            My goal is to get you where you want to go. Learning, planning,
            teaching, building - it's all a part of getting you what you need.
            My work is based on a simple concept - "First, solve the problem.
            Then, make things work".
          </p>
          <p>
            With over 15 years of development experience working with digital
            agencies and clients directly, I have a strong understanding of the
            entire project life-cycle. I bring vision, coherence, and experience
            every step of the way.
          </p>
          <h2 style={{ fontSize: "0.9em" }}>Core Skills</h2>
          <Skills />
        </div>
      </div>

      <div className="social-bkd">
        <div className="wrapper">
          <div className="main-text-wrap">
            <TrackVisibility>
              <Social />
            </TrackVisibility>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#f5f5f5", paddingTop: "50px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h2>Projects</h2>
            <span
              style={{
                display: "block",
                margin: "15px 0px",
                width: "100px",
                height: "2px",
                backgroundColor: "#e8e8e8",
                textAlign: "center",
                margin: "0 auto"
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center"
          }}
        >
          {pData.projects.map((project, index) => {
            let img = findNode(images, project.key);
            return <Project key={project.key} item={project} img={img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export const query = graphql`
  query GatsbyImageQuery {
    allImageSharp {
      edges {
        node {
          id
          sizes(maxWidth: 560) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalName
          }
        }
      }
    }
  }
`;

export default IndexPage;
