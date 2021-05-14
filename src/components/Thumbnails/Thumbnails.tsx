import React from 'react';
import { useImages } from '../../providers/ImagesProvider/ImagesProvider';
import ThumbnailOptions from '../ThumbnailOptions/ThumbnailOptions';
import { useThumbnailOptions } from '../../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';
import './Thumbnails.css';

const Thumbnails = ({ options: defaultOptions, onRenderThumbnail }: any) => {
  const { options, getDimensions, showOptions } = useThumbnailOptions();
  const thumbnailOptions = { ...options, ...defaultOptions };
  const { autoSize, border, size, shape, showUrl, shadow } = thumbnailOptions;
  const { width, height } = getDimensions();
  const sizeStyles = autoSize ? {} : { width, height };
  const { images } = useImages();

  const defaultRender = (image: any, index: number) => {
    return (
      <>
        <div className={`thumbnail-container ${shadow ? 'shadow' : ''}`} style={sizeStyles}>
          <img
            className={`thumbnail-image ${shape} ${border ? 'border' : ''}`}
            src={image?.dataUrl || image?.url}
            alt=""
            onError={(event) =>
              console.error('Cannot render thumbnail of', (event.target as HTMLImageElement).src)
            }
          />
        </div>
        {showUrl && image?.url ? (
          <div className="thumbnail-caption" style={autoSize ? { maxWidth: '100%' } : { width }}>
            <a className="thumbnail-caption-link" href={image.url}>
              {image.url}
            </a>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div className="thumbnails-container">
      {showOptions.size > 0 ? <ThumbnailOptions showOptions={showOptions} /> : null}
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
