import * as React from 'react';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  transitionDuration: 0
};
const imagesLoadedOptions = { background: '.my-bg-image-el' }

let images = [
  {
    "image": "backgroundGifs/0.gif",
    "number": 1
  },
  {
    "image": "backgroundGifs/1.gif",
    "number": 2
  },
  {
    "image": "backgroundGifs/2.gif",
    "number": 3
  },
  {
    "image": "backgroundGifs/3.gif",
    "number": 4
  },
  {
    "image": "backgroundGifs/4.gif",
    "number": 5
  },
  {
    "image": "backgroundGifs/5.gif",
    "number": 6
  },
  {
    "image": "backgroundGifs/8.gif",
    "number": 7
  },
  {
    "image": "backgroundGifs/9.gif",
    "number": 8
  },
  {
    "image": "backgroundGifs/10.gif",
    "number": 9
  },
  {
    "image": "backgroundGifs/11.gif",
    "number": 10
  },
  {
    "image": "backgroundGifs/12.gif",
    "number": 11
  },
  {
    "image": "backgroundGifs/13.gif",
    "number": 12
  },
  {
    "image": "backgroundGifs/14.gif",
    "number": 13
  },
  {
    "image": "backgroundGifs/15.gif",
    "number": 14
  },
  {
    "image": "backgroundGifs/16.gif",
    "number": 15
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