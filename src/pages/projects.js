import React from "react";
import Layout from "../components/layout";
import ProjectGrid from "../components/ProjectGrid";
import { graphql } from "gatsby";

export default ({ data }) => (
  <Layout>
    <ProjectGrid projects={data.projects.edges} />
  </Layout>
);

export const query = graphql`
  query AllProjects {
    projects: allMarkdownRemark {
      edges {
        node {
          id
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
`;
