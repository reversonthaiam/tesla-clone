import React from 'react'
import ButtonPrimary from '../Layout/ButtonPrimary'
import ButtonSecondary from '../Layout/ButtonSecondary'

import { CarActions, CarImage, CarInfo, CarModel, Container } from './styles'

function Car({ imgSrc, model, testDrive }) {
  return (
    <Container>
      <CarImage>
        <img src={imgSrc} alt={model} />
      </CarImage>
      <CarModel>{model}</CarModel>

      <CarActions>
        <ButtonPrimary name="order"></ButtonPrimary>
        {testDrive && <ButtonSecondary name="test drive" />}
      </CarActions>
      <CarInfo>
        <span>Request a Call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </CarInfo>
    </Container>
  )
}

export default Car
