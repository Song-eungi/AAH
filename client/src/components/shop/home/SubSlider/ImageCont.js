import React from 'react';
import './Imagecont.css';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

function ImageCont() {
  return <ImageSlider slides={SliderData} />;
}

export default ImageCont;