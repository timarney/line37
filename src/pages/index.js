import React from "react";
import Link from "gatsby-link";
import StyledButton from "../components/Button";
import LineNumbers from "../components/LineNumbers";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Social from "../components/Social";

const pData = require("../../serve/data.json");

function findNode(images, key) {
  let l = "";
  images.forEach((el, index) => {
    let oName = images[index].node.resolutions.originalName;
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
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        <div
          style={{
            paddingLeft: "30px",
            paddingBottom: "1px",
            width: "80%",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              position: "relative"
            }}
          >
            <LineNumbers />
            <div>
              <h2 style={{ marginBottom: "10px" }}>I AM A DEVELOPER</h2>
              <span
                style={{
                  display: "block",
                  margin: "15px 0px",
                  width: "60px",
                  height: "2px",
                  backgroundColor: "#e8e8e8"
                }}
              />
            </div>
            <StyledButton
              href="https://goo.gl/forms/NUfwwXunABrTBW522"
              target="_blank"
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
          <Social />
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
  query GatsbyImageSampleQuery {
    allImageSharp {
      edges {
        node {
          id
          resolutions(width: 1200, quality: 70) {
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
          sizes {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
          }
        }
      }
    }
  }
`;

/*
{
  
  allImageSharp {
    edges {
      node {
        id
        resolutions(width: 10, height: 10) {
          originalName
          aspectRatio
          width
          height
          src
          srcSet
          srcWebp
          srcSetWebp
          originalName
        }
      }
    }
  }
}

*/

/*
export const query = graphql`
  query GatsbyImageSampleQuery {
    file(relativePath: { eq: "bie.jpg" }) {
      childImageSharp {
        # Specify the image processing steps right in the query
        # Makes it trivial to update as your page's design changes.
        resolutions(width: 125, height: 125) {
          ...GatsbyImageSharpResolutions
        }
      }
    }
  }
`;
*/

export default IndexPage;
