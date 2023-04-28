import React from 'react';
import { Box, Typography } from '@material-ui/core';

const ImageDetails = ({ details }) => {
  return (
    <Box ml={2}>
      <Typography variant="body2" color="textSecondary">
        {details}
      </Typography>
    </Box>
  );
};

export default ImageDetails;


