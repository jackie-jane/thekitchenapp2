import React from "react"
import { randomClass } from '../Services/onClickMethods'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

class Background extends React.Component {
  state = {
    renderGridArray: [],
    upcomingGridArray: [],
    i: 1,
    j: 0
  }

  async componentDidMount() {
    let newGridArray = Array.from({ length: 500 },
      () => Math.floor(Math.random() * 3))
    console.log(newGridArray)
    let finalGridArray = []
    newGridArray.forEach(el => {
      let newClass = randomClass()
      let image = {
        'image': `backgroundGifs/${el}.gif`,
        'class': newClass
      }
      finalGridArray.push(image)
    })
    this.interval = setInterval(() => { this.updateRender(this.state.i, this.state.j) }, 5000);
    this.setState({
      upcomingGridArray: finalGridArray
    })
  }

  updateRender = (numOne, numTwo) => {
    let i = numOne
    let j = numTwo
    let numberOfImages = i + j
    let upcoming = this.state.upcomingGridArray
    let final = this.state.renderGridArray
    let newJ = ''
    let newI = ''
    let arrLength = upcoming.length
    if (arrLength > 0) {
      let updateFinal = upcoming.slice(arrLength - numberOfImages)
      console.log(updateFinal)
      final = final.concat(updateFinal)
      newJ = i
      newI = numberOfImages
    }
    upcoming.splice(arrLength, numberOfImages)
    this.setState({
      renderGridArray: final,
      upcomingGridArray: upcoming,
      i: newI,
      j: newJ
    })
  }

  render() {
    let renderOnPage = this.state.renderGridArray
    return (
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          50: 1,
          250: 2,
          450: 3,
          750: 4,
          900: 5,
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