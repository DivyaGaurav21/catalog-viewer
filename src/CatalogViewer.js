import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@material-ui/core';
import ImageDetails from './components/ImageDetails';
import ThumbnailList from './components/ThumbnailList';
import Controls from './components/Controls';

const CatalogViewer = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Use useEffect to set up an interval for the slideshow when it is active
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, imageData]);

  // Handler for clicking on a thumbnail image
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
    setIsPlaying(false);
  };

  // Handler for clicking on the play/pause button
  const handlePlayPauseClick = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  // Handler for clicking on the previous button
  const handlePreviousClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imageData.length - 1 : prevIndex - 1));
    setIsPlaying(false);
  };

  // Handler for clicking on the next button
  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
    setIsPlaying(false);
  };

  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img src={imageData[currentIndex].src} alt={imageData[currentIndex].alt} />
            <ImageDetails details={imageData[currentIndex].details} />
          </Box>
          <Controls
            isPlaying={isPlaying}
            onPlayPauseClick={handlePlayPauseClick}
            onPreviousClick={handlePreviousClick}
            onNextClick={handleNextClick}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ThumbnailList imageData={imageData} currentIndex={currentIndex} onThumbnailClick={handleThumbnailClick} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CatalogViewer;
