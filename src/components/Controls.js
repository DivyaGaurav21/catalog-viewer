import React from 'react';
import { Box, IconButton } from '@material-ui/core';
import { PlayArrow, Pause, SkipNext, SkipPrevious } from '@material-ui/icons';

const Controls = ({ isPlaying, onPlayPauseClick, onPreviousClick, onNextClick }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <IconButton onClick={onPreviousClick}>
        <SkipPrevious fontSize="large" />
      </IconButton>
      <IconButton onClick={onPlayPauseClick}>
        {isPlaying ? <Pause fontSize="large" /> : <PlayArrow fontSize="large" />}
      </IconButton>
      <IconButton onClick={onNextClick}>
        <SkipNext fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Controls;

