import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import ListProjects from "../components/ListProjects";
import PageSection from "../components/PageSection";
import Button from "../components/Button";
import WidthConstrainer from "../components/WidthConstrainer";
import { graphql, Link } from "gatsby";
import StarBg from "../star_bg.svg";

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Projects = styled.div`
  background: url(${StarBg}) repeat;
  background-size: 500px;
  background-attachment: fixed;
  padding: 2rem 0;
  color: #fff;
  text-shadow: 0 1px 1px #000;
  h1,
  h2,
  h3 {
    color: #fff;
  }
`;

export default ({ data }) => (
  <div>
    <SEO />
    <WidthConstrainer>
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
        <Title>
          <h2>Recent Projects</h2>
        </Title>
        <ListProjects
          projects={data.projects.edges}
          images={data.projectImages}
        />
        <Actions>
          <Button>
            <Link to="/projects">View all Projects</Link>
          </Button>
        </Actions>
      </PageSection>
    </WidthConstrainer>
    <Projects>
      <WidthConstrainer>
        <PageSection>
          <h2>{data.mixing.frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.mixing.html }} />
        </PageSection>
      </WidthConstrainer>
    </Projects>
  </div>
);

export const query = graphql`
  query SelectProjects {
    projects: allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        extension: { eq: "md" }
      }
      sort: { order: DESC, fields: name }
      limit: 2
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
    about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
      html
      frontmatter {
        title
      }
    }
    mixing: markdownRemark(fileAbsolutePath: { regex: "/mixing/" }) {
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
