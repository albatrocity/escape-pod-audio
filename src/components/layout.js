import React from "react";
import Navigation from "./Navigation";
import LogoType from "./LogoType";
import Helmet from "react-helmet";
import styled from "styled-components";
import { StaticQuery, Link, graphql } from "gatsby";

const Container = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
`;

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
          <Helmet
            defaultTitle={`Escape Pod Audio`}
            titleTemplate={`%s | GatsbyJS`}
          >
            <meta name="og:type" content="website" />
            <meta name="og:site_name" content="Escape Pod Audio" />
            <html lang="en" />
          </Helmet>
          <header>
            <LogoType
              style={{ maxWidth: "400px", margin: "0 auto", display: "block" }}
            />
          </header>
          {children}
        </div>
      </Container>
    )}
  />
);
