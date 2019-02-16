import React from "react";
import SEO from "../components/SEO";
import Layout from "../components/layout";
import ListProjects from "../components/ListProjects";
import PageSection from "../components/PageSection";
import WidthConstrainer from "../components/WidthConstrainer";
import { graphql } from "gatsby";

export default ({ data }) => (
  <div>
    <SEO title="Projects" />
    <WidthConstrainer>
      <PageSection>
        <h1>Projects</h1>
        <ListProjects
          projects={data.projects.edges}
          images={data.projectImages}
        />
      </PageSection>
    </WidthConstrainer>
  </div>
);

export const query = graphql`
  query AllProjects {
    projects: allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { eq: "md" }
      }
      sort: { order: DESC, fields: name }
    ) {
      edges {
        node {
          id
          relativeDirectory
          extension
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
