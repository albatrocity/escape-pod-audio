import React from "react";
import Layout from "../components/layout";
import ListProjects from "../components/ListProjects";
import PageSection from "../components/PageSection";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <PageSection>
      <div
        style={{
          maxWidth: "420px",
          textAlign: "center",
          margin: "1.5rem auto",
          color: "#292159"
        }}
        dangerouslySetInnerHTML={{ __html: data.about.html }}
      />
    </PageSection>
    <PageSection>
      <h2>Recent Projects</h2>
      <ListProjects
        projects={data.projects.edges}
        images={data.projectImages}
      />
    </PageSection>
  </Layout>
);

export const query = graphql`
  query AllProjectsMeta {
    projects: allFile(
      filter: { sourceInstanceName: { eq: "projects" } }
      sort: { order: DESC, fields: name }
    ) {
      edges {
        node {
          id
          relativeDirectory
          markdown: childMarkdownRemark {
            html
            frontmatter {
              title
              date(formatString: "MMMM DD, YYYY")
              client
              audioTitle
              audioUrl
              url
            }
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/pages/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
        }
      }
    }
    about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      html
      frontmatter {
        title
      }
    }
    projectImages: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          relativeDirectory
          image: childImageSharp {
            id
            resize(quality: 95) {
              src
              width
              height
              aspectRatio
            }
          }
        }
      }
    }
  }
`;
