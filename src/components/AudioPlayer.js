import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Container = styled.div`
  background: #292159;
  width: 100%;
  padding: 0.3rem 0.4rem;
  border-top: 1px solid #da1064;
  color: #fff;
  text-shadow: 0 2px 0 #da1064;
  text-transform: uppercase;
  font-size: 75%;
  letter-spacing: 0.1rem;
  font-family: "Maven Pro";
  position: fixed;
  bottom: 0;
`;

export default ({ isPlaying, audioTitle }) => (
  <Container>
    <h1>{String(isPlaying)}</h1>
    <h1>{audioTitle}</h1>
  </Container>
);
