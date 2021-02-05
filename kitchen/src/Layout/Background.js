import React from "react"
import { createGridArray, iterateArray } from '../Services/Services'
import { randomClass } from '../Services/onClickMethods'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

class Background extends React.Component {
  state = {
    renderGridArray: [],
    upcomingGridArray: []
  }

  async componentDidMount() {
    let newGridArray = await createGridArray('db.json')
    let finalGridArray = []
    newGridArray.forEach(el => {
      let newClass = randomClass(8)
      let image = {
        'image': el.image,
        'class': newClass
      }
      finalGridArray.push(image)
    })
    this.interval = setInterval(() => { this.updateRender() }, 5000);
    this.setState({
      upcomingGridArray: finalGridArray
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
        columnsCountBreakPoints={{
          50: 1,
          100: 2,
          150: 3,
          200: 4,
          250: 5,
          300: 6,
          350: 7,
          400: 8,
          450: 9,
          500: 10,
          550: 11,
          600: 12,
          650: 13,
          700: 14,
          750: 15,
          800: 16,
          850: 17,
          900: 18,
        }}
      >
        <Masonry>
          {renderOnPage.map(element =>
            <img
              src={element.image}
              className={element.class}
              alt=''
            />
          )}
        </Masonry>
      </ResponsiveMasonry>
    )
  }
}

export default Background