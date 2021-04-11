import React from 'react';
import { useImages } from '../../providers/ImagesProvider/ImagesProvider';
import './Thumbnails.css';
import ThumbnailOptions from '../ThumbnailOptions/ThumbnailOptions';
import { useThumbnailOptions } from '../../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';

const Thumbnails = ({ options: defaultOptions, onRenderThumbnail }: any) => {
  const { options, getDimensions } = useThumbnailOptions();
  const thumbnailOptions = { ...options, ...defaultOptions };
  const { autoSize, border, size, shape, showUrl, shadow } = thumbnailOptions;
  const { width, height } = getDimensions(size);
  const sizeStyles = autoSize ? {} : { width, height };
  const { images } = useImages();

  const defaultRender = (image: any, index: number) => (
    <>
      <div className={`thumbnail-container ${shadow ? 'shadow' : ''}`} style={sizeStyles}>
        <img
          className={`thumbnail-image ${shape} ${border ? 'border' : ''}`}
          src={image?.dataUrl || image?.url}
          alt=""
          onError={(event) => console.log((event.target as HTMLImageElement).src)}
        />
      </div>
      {showUrl && image?.url ? (
        <div className="thumbnail-caption" style={autoSize ? { maxWidth: '100%' } : { width }}>
          <a className="thumbnail-caption-link" href={image.url}>{image.url}</a>
        </div>
      ) : null}
    </>
  );

  return (
    <div className="thumbnails-container">
      <ThumbnailOptions />
      <div className="thumbnail-images">
        {images?.map((image, index) => (
          <div key={index}>
            {onRenderThumbnail ? onRenderThumbnail(image, index) : defaultRender(image, index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thumbnails;