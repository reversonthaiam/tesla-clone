import React from 'react';

import { ContainerMenuItem } from './styles';

function MenuItem({ title }) {
  return (
    <ContainerMenuItem>
      <h4>{title}</h4>
    </ContainerMenuItem>
  )
}

export default MenuItem;
