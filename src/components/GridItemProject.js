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
        <ScaledImage
          borderColor="#fff"
          src={image.resize.src}
          size={image.resize.width}
        />
        <p>
          <strong>{data.frontmatter.title}</strong>
          <br />
          <small>{data.frontmatter.role}</small>
        </p>
      </Container>
    )}
  </Fragment>
);
