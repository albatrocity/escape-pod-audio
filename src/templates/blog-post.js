import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import WidthConstrainer from "../components/WidthConstrainer";
import styled from "styled-components";

const Spacer = styled.div`
  margin-top: 3rem;
`;

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <WidthConstrainer>
      <Spacer>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Spacer>
    </WidthConstrainer>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
