import React, { Component } from "react";
import Img from "gatsby-image";

class Project extends Component {
  state = {};

  createMarkup(html) {
    return { __html: html };
  }

  render() {
    const { item, data, img } = this.props;
    return (
      <section className="project">
        <figure className="project-wrap">
          <a title={item.name} target="_blank" href={item.url} rel="noopener">
            <Img
              style={{ display: `inherit` }}
              className="project-img project-shadow"
              sizes={img.sizes}
            />
          </a>

          <figcaption className="project-details">
            <div>
              <strong>Project: </strong>

              {item.name}

              <span className="project-tech">({item.tech})</span>
              <div>
                <strong>Agency: </strong>
                <span dangerouslySetInnerHTML={this.createMarkup(item.notes)} />
              </div>
            </div>
          </figcaption>
        </figure>
      </section>
    );
  }
}

export default Project;
