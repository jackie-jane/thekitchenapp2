
import React from 'react'
import Images from './React-Grid-Gallery/Images'
import Body from './Layout/Body'
import Footer from './Layout/Footer'
import Background from './Layout/Background'
import BackgroundImageBuilder from './Layout/BackgroundImageBuilder'

function App() {
  return (
    <>
      <Body>
        <Background></Background>
        <Images></Images>
      </Body>
      <Footer></Footer>
    </>
  )
}

export default App;
