
import Images from './React-Grid-Gallery/Images'
import Body from './Layout/Body'
import Footer from './Layout/Footer'
import AutoScroll from './AutoScroll/AutoScroll'
function App() {
  return (
    <>
      <Body>
        <Images></Images>
      </Body>
      <Footer>
        <AutoScroll></AutoScroll>
      </Footer>
    </>
  )
}

export default App;
