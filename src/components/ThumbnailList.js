import React from 'react';
import { Box } from '@material-ui/core';
import Thumbnail from './Thumbnail';

const ThumbnailList = ({ imageData, currentIndex, onThumbnailClick }) => {
  return (
    <Box display="flex" flexDirection="column">
      {imageData.map((image, index) => (
        <Thumbnail
          key={index}
          src={image.src}
          alt={image.alt}
          isSelected={index === currentIndex}
          onClick={() => onThumbnailClick(index)}
        />
      ))}
    </Box>
  );
};

export default ThumbnailList;


