import React from "react"
import {iterateArray, randomInt } from '../Services/Services'
import { randomClass } from '../Services/onClickMethods'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

class Background extends React.Component {
  state = {
    renderGridArray: [],
    upcomingGridArray: []
  }

  async componentDidMount() {
    let newGridArray = []
    let finalGridArray = []
    let i = 0
    while (i < 100) {
      let randInt = randomInt(100)
      newGridArray.push(randInt)
      i++
    }
    newGridArray.forEach(el => {
      let newClass = randomClass(8)
      let imgRef = ''
      if (el <= 33) {
        imgRef = 'backgroundGifs/0.gif'
      } else if (el > 33 && el <= 66) {
        imgRef = 'backgroundGifs/1.gif'
      } else {
        imgRef = 'backgroundGifs/2.gif'
      }
      let image = {
        'image': imgRef,
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