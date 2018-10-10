import React, { Fragment } from "react";
import { Link } from "gatsby";
import ScaledImage from "./ScaledImage";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-basis: 200px;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
`;
const Title = styled.div`
  h3 {
    margin-bottom: 0;
    margin-top: 0.8rem;
  }
`;
const Art = styled.div`
  width: 200px;
  flex-shrink: 0;
`;
const Details = styled.div`
  flex-grow: 1;
  padding: 0 1rem 0 1rem;
`;

export default ({ data, image }) => (
  <Fragment>
    {data && (
      <Container>
        <Art>
          <ScaledImage
            borderColor="#fff"
            src={image.resize.src}
            size={image.resize.width}
          />
          {data.frontmatter.audioUrl && (
            <div style={{ padding: "0.6rem 0" }}>
              <Button block>Play "{data.frontmatter.audioTitle}"</Button>
            </div>
          )}
        </Art>
        <Details>
          <Title>
            <h3>{data.frontmatter.title}</h3>
            <p>{data.frontmatter.client}</p>
          </Title>
          <div dangerouslySetInnerHTML={{ __html: data.html }} />
          <a href={data.frontmatter.url} target="_blank">
            More info
          </a>
        </Details>
      </Container>
    )}
  </Fragment>
);
