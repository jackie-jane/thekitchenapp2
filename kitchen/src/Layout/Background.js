import React from "react"
import { createGridArray, iterateArray } from '../Services/Services'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

class Background extends React.Component {
  state = {
    renderGridArray: [],
    upcomingGridArray: []
  }

  async componentDidMount() {
    let newGridArray = await createGridArray('db.json')
    this.interval = setInterval(() => { this.updateRender() }, 5000);
    this.setState({
      upcomingGridArray: newGridArray
    })
  }

  updateRender = () => {
    let response = iterateArray(this.state.upcomingGridArray, this.state.renderGridArray)
    this.setState({
      renderGridArray: response.finalArray,
      upcomingGridArray: response.upcomingArray
    })
  }

  render() {
    let renderOnPage = this.state.renderGridArray
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
      >
        <Masonry>
          {renderOnPage.map(element =>
            <img
              className='gridImg'
              src={element.image} />
          )}
        </Masonry>
      </ResponsiveMasonry>
    )
  }
}

export default Background