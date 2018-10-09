import React from "react";
import Navigation from "./Navigation";
import LogoType from "./LogoType";
import { StaticQuery, Link, graphql } from "gatsby";

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
      <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
        <header>
          <LogoType
            style={{ maxWidth: "400px", margin: "0 auto", display: "block" }}
          />
        </header>
        {children}
      </div>
    )}
  />
);
