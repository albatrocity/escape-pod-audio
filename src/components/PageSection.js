import React from "react";
import styled from "styled-components";

const Spacer = styled.div`
  padding: 0 0 1rem 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid red;
`;

export default ({ children }) => <Spacer>{children}</Spacer>;
