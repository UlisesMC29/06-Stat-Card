import React from 'react'
import styled from 'styled-components'
import { Card } from './Components/Card'
import { Companie } from './Components/Companie'
import { Container } from './Components/Container'
import { QuanContainer } from './Components/QuanContainer'
import { Quantities } from './Components/Quantities'
import { Queries } from './Components/Queries'
import { Template } from './Components/Template'
import { Title } from './Components/Title'
import { Txtbody } from './Components/Txtbody'
import { Txtcontainer } from './Components/Txtcontainer'
import { Text } from './Components/Text'
import { Img } from './Components/Img'
import { ImgContainer } from './Components/ImgContainer'
import { Capa } from './Components/Capa'
import { CardContent } from './Components/CardContent'
import { Font } from './Components/Font'

function App() {
  return (
    <Container>
      <Card>
        <CardContent>
          <ImgContainer>
            <Capa />
            <Img />
          </ImgContainer>
          <Txtcontainer>
            <Title>Get <Font>insights</Font> that help your business grow.</Title>
            <Txtbody>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</Txtbody>
            <QuanContainer>
              <Companie>
                <Quantities>10K+</Quantities>
                <Text>companies</Text>
              </Companie>
              <Template>
                <Quantities>314</Quantities>
                <Text>templates</Text>
              </Template>
              <Queries>
                <Quantities>12M+</Quantities>
                <Text>queries</Text>
              </Queries>
            </QuanContainer>
          </Txtcontainer>
        </CardContent>
      </Card>
    </Container>
  )
}

export default App 
