import React from "react";
import styled from "styled-components";

const ConstrainWidth = styled.div`
  margin: 2rem auto 2rem;
  max-width: 650px;
  padding: 0 1rem;
`;

export default ({ children }) => <ConstrainWidth>{children}</ConstrainWidth>;
