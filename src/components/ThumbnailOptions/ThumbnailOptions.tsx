import React from 'react';
import { AutoSize, Border, Shadow, Shape, ShowUrl, Size } from '../ThumbnailOptionButton';
import { useThumbnailOptions } from '../../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';
import './ThumbnailOptions.css';

const ThumbnailOptions = () => {
  const {
    options,
    changeSize,
    changeShape,
    toggleAutoSize,
    toggleBorder,
    toggleShadow,
    toggleShowUrl
  } = useThumbnailOptions();

  return (
    <div className={`thumbnail-options-container ${options.iconAlignment}`}>
      <div className={`thumbnail-options-title ${options.iconSize}`}>Options:</div>
      <Size changeSize={changeSize} selected={options.size} iconSize={options.iconSize} />
      <Shape changeShape={changeShape} selected={options.shape} iconSize={options.iconSize} />
      <AutoSize toggleAutoSize={toggleAutoSize} selected={options.autoSize} iconSize={options.iconSize} />
      <Border toggleBorder={toggleBorder} selected={options.border} iconSize={options.iconSize} />
      <Shadow toggleShadow={toggleShadow} selected={options.shadow} iconSize={options.iconSize} />
      <ShowUrl toggleShowUrl={toggleShowUrl} selected={options.showUrl} iconSize={options.iconSize} />
    </div>
  );
};

export default ThumbnailOptions;
