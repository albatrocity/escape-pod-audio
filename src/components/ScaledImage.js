import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: ${p => p.originalSize * (p.scale || 0.5)}px;
  max-height: ${p => p.originalSize * (p.scale || 0.5)}px;
`;

export default ({ src, size, scale, borderColor }) => (
  <Container originalSize={size} scale={scale}>
    <img
      style={{
        display: "block",
        marginBottom: 0,
        border: `4px solid ${borderColor}`,
        boxShadow: "0 0 0.15rem rgba(0, 0, 0, 0.3)",
        borderRadius: "0.2rem"
      }}
      src={src}
    />
  </Container>
);
