import React from 'react';

import { BlockActions, BlockInfo, BlockInfoText, Button, Container } from './styles';

function HeaderBlock() {
  return (
    <Container>
      <BlockInfo>
        <BlockInfoText>
          <h1>Model 3</h1>
          <h4>Order online for <span>Touchless Delivery</span></h4>
        </BlockInfoText>
        <BlockActions>
          <Button primary>custom order</Button>
          <Button secondary>existing inventory</Button>
        </BlockActions>
      </BlockInfo>
    </Container>
  )
}

export default HeaderBlock
