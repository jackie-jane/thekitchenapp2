import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

let images = [
  {
    "image": "gifs/1.gif",
    "number": 1
  },
  {
    "image": "gifs/2.gif",
    "number": 2
  },
  {
    "image": "gifs/3.gif",
    "number": 3
  },
  {
    "image": "gifs/4.gif",
    "number": 4
  },
  {
    "image": "gifs/5.gif",
    "number": 5
  },
  {
    "image": "gifs/6.gif",
    "number": 6
  },
  {
    "image": "gifs/7.gif",
    "number": 7
  },
  {
    "image": "gifs/8.gif",
    "number": 8
  },
  {
    "image": "gifs/9.gif",
    "number": 9
  },
  {
    "image": "gifs/10.gif",
    "number": 10
  },
  {
    "image": "gifs/11.gif",
    "number": 11
  },
  {
    "image": "gifs/12.gif",
    "number": 12
  },
  {
    "image": "gifs/13.gif",
    "number": 13
  },
  {
    "image": "gifs/14.gif",
    "number": 14
  },
  {
    "image": "gifs/15.gif",
    "number": 15
  },
  {
    "image": "gifs/16.gif",
    "number": 16
  },
  {
    "image": "gifs/17.gif",
    "number": 17
  },
  {
    "image": "gifs/18.gif",
    "number": 18
  },
  {
    "image": "gifs/19.gif",
    "number": 19
  },
  {
    "image": "gifs/20.gif",
    "number": 20
  },
  {
    "image": "gifs/21.gif",
    "number": 21
  },
  {
    "image": "gifs/22.gif",
    "number": 22
  },
  {
    "image": "gifs/23.gif",
    "number": 23
  },
  {
    "image": "gifs/24.gif",
    "number": 24
  },
  {
    "image": "gifs/25.gif",
    "number": 25
  },
  {
    "image": "gifs/26.gif",
    "number": 26
  },
  {
    "image": "gifs/27.gif",
    "number": 27
  },
  {
    "image": "gifs/28.gif",
    "number": 28
  },
  {
    "image": "gifs/29.gif",
    "number": 29
  },
  {
    "image": "gifs/30.gif",
    "number": 30
  },
  {
    "image":  "backgroundGifs/0.gif",
    "number": 31
  },
  {
    "image": "backgroundGifs/1.gif",
    "number": 32
  },
  {
    "image": "backgroundGifs/2.gif",
    "number": 33
  },
  {
    "image": "backgroundGifs/3.gif",
    "number": 33
  },
  {
    "image": "backgroundGifs/4.gif",
    "number": 34
  },
  {
    "image": "backgroundGifs/5.gif",
    "number": 35
  },
  {
    "image": "backgroundGifs/6.gif",
    "number": 36
  },
  {
    "image": "backgroundGifs/7.gif",
    "number": 37
  },
  {
    "image": "backgroundGifs/8.gif",
    "number": 38
  },
  {
    "image": "backgroundGifs/9.gif",
    "number": 39
  },
  {
    "image": "backgroundGifs/10.gif",
    "number": 40
  },
  {
    "image": "backgroundGifs/11.gif",
    "number": 41
  },
  {
    "image": "backgroundGifs/12.gif",
    "number": 42
  },
  {
    "image": "backgroundGifs/13.gif",
    "number": 43
  },
  {
    "image": "backgroundGifs/14.gif",
    "number": 44
  }
]

class Gallery extends React.Component {
  render() {
    const childElements = images.map(function (element) {
      return (
        <li className="image-element-class">
          <img src={element.image} />
        </li>
      );
    });
    return (
      <Masonry
        className={'my-gallery-class'} // default ''
        elementType={'ul'} // default 'div'
        options={masonryOptions} // default {}
        disableImagesLoaded={false} // default false
        updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
        imagesLoadedOptions={imagesLoadedOptions} // default {}
      >
        {childElements}
      </Masonry>
    );
  }
}
export default Gallery;