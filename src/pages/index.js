import React from "react";
import Layout from "../components/layout";
import ProjectGrid from "../components/ProjectGrid";
import PageSection from "../components/PageSection";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <PageSection>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: data.about.html }}
      />
    </PageSection>
    <PageSection>
      <h2>Projects</h2>
      <ProjectGrid projects={data.projects.edges} images={data.projectImages} />
    </PageSection>
  </Layout>
);

export const query = graphql`
  query AllProjectsMeta {
    projects: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
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
              role
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