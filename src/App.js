import React from 'react'
import CatalogViewer from './CatalogViewer'

const imageData = [
  {
    src: 'https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 1',
    details: 'Details about image 1',
  },
  {
    src: 'https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 2',
    details: 'Details about image 2',
  },
  {
    src: 'https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'Details about image 3',
  },
  {
    src: 'https://images.pexels.com/photos/1382732/pexels-photo-1382732.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 1',
    details: 'Details about image 1',
  },
  {
    src: 'https://images.pexels.com/photos/206557/pexels-photo-206557.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Image 2',
    details: 'Details about image 2',
  },
  {
    src: 'https://images.pexels.com/photos/1024981/pexels-photo-1024981.jpeg?auto=compress&cs=tinysrgb&w=800',
    details: 'Details about image 3',
  },
];



const App = () => {
  return (
    <div>
      <p>DG</p>
      <CatalogViewer imageData={imageData}/>
    </div>
    
  )
}

export default App