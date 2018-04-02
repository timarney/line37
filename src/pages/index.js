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
              <h2 style={{ marginBottom: "10px" }}>ABOUT</h2>
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
            Not sure where to start on a project (big or small)? We are here to help.
          </p>
          <p>
            We strive to create flexible, intuitive, accessible websites and apps for our clients
            that stand the test of time. Whether a project is big or small, needs a programmer or designer (or both);
            our team of experts are here to make your ideas come to fruition.
          </p>
          <p>
            Working with our clients over the past 15 years, we've had the privilege
            of creating functional, beautiful digital solutions. Throughout an entire
            project lifecycle, we take the care and time to ensure our work aligns with our clients best interests.
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
