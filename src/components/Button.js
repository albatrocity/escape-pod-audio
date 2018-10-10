import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Button = styled.span`
  display: ${p => (p.block ? "block" : "inline-block")};
  text-align: center;
  background: #ff006b;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  line-height: 1rem;
  border-bottom: 1px solid #f479ac;
  border-top: 1px solid #bf0452;
  cursor: pointer;
  color: #fff;
  text-shadow: 0 2px 0 #da1064;
  text-transform: uppercase;
  font-size: 75%;
  letter-spacing: 0.1rem;
  font-family: "Maven Pro";
`;

export default ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);
