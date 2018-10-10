import React from "react";
import styled from "styled-components";

const Spacer = styled.div`
  padding: 0 0 1rem 0;
  margin-bottom: 1rem;
`;

export default ({ children }) => <Spacer>{children}</Spacer>;
