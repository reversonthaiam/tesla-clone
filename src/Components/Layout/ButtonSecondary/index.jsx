import React from 'react'

import { Button } from './styles'

function ButtonSecondary({ type, name, onClick }) {
  return (
    <Button onClick={onClick} type={type}>
      {name}
    </Button>
  )
}

export default ButtonSecondary
