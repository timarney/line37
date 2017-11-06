import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Line37 from "../components/Line37";

import "./index.css";

const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "#474747",
            textDecoration: "none"
          }}
        >
          <Line37 />
        </Link>
      </h1>
    </div>
  </div>
);

const Footer = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
    <div style={{ marginBottom: "50px" }}>© 2017 line37 Digital Inc.</div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="line37"
      meta={[
        {
          name: "description",
          content:
            "Freelance web developer who has a passion for solving problems and making things work"
        },
        {
          name: "keywords",
          content: "_37,line37,developer,HTML,CSS,React,PHP,MySQL,WordPress"
        }
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
