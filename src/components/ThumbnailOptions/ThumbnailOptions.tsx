import React from 'react';
import { AutoSize, Border, Shadow, Shape, ShowUrl, Size } from '../ThumbnailOptionButton';
import { useThumbnailOptions } from '../../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';
import './ThumbnailOptions.css';

const ThumbnailOptions = ({ showOptions }) => {
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
      {showOptions.has('size') ? (
        <Size changeSize={changeSize} selected={options.size} iconSize={options.iconSize} />
      ) : null}
      {showOptions.has('shape') ? (
        <Shape changeShape={changeShape} selected={options.shape} iconSize={options.iconSize} />
      ) : null}
      {showOptions.has('autoSize') ? (
        <AutoSize toggleAutoSize={toggleAutoSize} selected={options.autoSize} iconSize={options.iconSize} />
      ) : null}
      {showOptions.has('border') ? (
        <Border toggleBorder={toggleBorder} selected={options.border} iconSize={options.iconSize} />
      ) : null}
      {showOptions.has('shadow') ? (
        <Shadow toggleShadow={toggleShadow} selected={options.shadow} iconSize={options.iconSize} />
      ) : null}
      {showOptions.has('showUrl') ? (
        <ShowUrl toggleShowUrl={toggleShowUrl} selected={options.showUrl} iconSize={options.iconSize} />
      ) : null}
    </div>
  );
};

export default ThumbnailOptions;
