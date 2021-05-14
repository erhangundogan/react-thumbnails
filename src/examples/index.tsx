import React from 'react';
import ReactDOM from 'react-dom';
import ImagesProvider from '../providers/ImagesProvider/ImagesProvider';
import URLEditor from '../components/URLEditor/URLEditor';
import Thumbnails from '../components/Thumbnails/Thumbnails';
import ThumbnailOptionsProvider from '../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';

const Example = () => {
  return (
    <div className="react-thumbnails">
      <ImagesProvider
        options={{ maxImagesCount: 9 }}
        urls={[
          'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=634&q=80',
          'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?w=800&q=80',
          'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=658&q=80'
        ]}
      >
        <URLEditor />
        <ThumbnailOptionsProvider
          showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
          defaults={{ size: 'medium', shape: 'circle', shadow: true, border: true }}
        >
          <Thumbnails />
        </ThumbnailOptionsProvider>
      </ImagesProvider>
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
