import React from 'react'

import { Button } from './styles'

function ButtonPrimary({ type, name, onClick }) {
  return (
    <Button onClick={onClick} type={type}>
      {name}
    </Button>
  )
}

export default ButtonPrimary
