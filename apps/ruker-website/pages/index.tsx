import React from "react";
import styled from 'styled-components';
import { Layout } from '@ruker-shared/shared-ui-layout';
import { Box } from "native-base";

const StyledPage = styled.div`
  .page {
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <Box>Hello world</Box>;
    </StyledPage>
  );
}

export default Index;
