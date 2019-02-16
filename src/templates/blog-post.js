import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Cite from "../components/Cite";
import WidthConstrainer from "../components/WidthConstrainer";
import styled from "styled-components";
import { format } from "date-fns";

const Spacer = styled.div`
  margin-top: 3rem;
`;

export default ({ data }) => {
  console.log(data);
  const post = data.markdownRemark;
  return (
    <WidthConstrainer>
      <SEO
        title={post.frontmatter.title}
        article={true}
        pathname={post.fields.slug}
        description={
          post.frontmatter && post.frontmatter.description
            ? post.frontmatter.description
            : post.html
        }
      />
      <Spacer>
        <h1>{post.frontmatter.title}</h1>
        <Cite>
          <time datetime={post.frontmatter.date}>
            {post.frontmatter.date &&
              `Published ${format(post.frontmatter.date, "M/D/YY")}`}
          </time>
        </Cite>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Spacer>
    </WidthConstrainer>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        date
        description
      }
    }
  }
`;
