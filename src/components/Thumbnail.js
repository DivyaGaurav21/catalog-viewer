import React from 'react';
import { Box } from '@material-ui/core';

const Thumbnail = ({ src, alt, isSelected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      m={1}
      style={{
        border: isSelected ? '2px solid #008CBA' : '2px solid #ddd',
        borderRadius: '5px',
        cursor: 'pointer',
        height: '80px',
        width: '80px',
        overflow: 'hidden',
      }}
    >
      <img src={src} alt={alt} style={{ width: '100%' }} />
    </Box>
  );
};

export default Thumbnail;

