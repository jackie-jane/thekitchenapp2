import React from 'react';
import PropTypes from 'prop-types';

// This comes from a tutorial by John O. Paul found here 'https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99'
const BackgroundImages = (props) => {
  const gifs = props.gifs.map(( url, class) => {
    return <img src={url} className={class} />
  }
}),

MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20,
};