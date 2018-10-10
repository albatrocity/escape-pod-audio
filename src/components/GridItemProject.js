import React, { Fragment } from "react";
import ScaledImage from "./ScaledImage";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
`;

export default ({ data, image }) => (
  <Fragment>
    {data && (
      <Container>
        <a
          href={data.frontmatter.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ScaledImage
            borderColor="#fff"
            src={image.resize.src}
            size={image.resize.width}
          />
        </a>
        <p>
          <strong>
            {data.frontmatter.client} - {data.frontmatter.title}
          </strong>
          <br />
          <small>{data.frontmatter.role}</small>
        </p>
      </Container>
    )}
  </Fragment>
);
