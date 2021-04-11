import React from 'react';
import ReactDOM from 'react-dom';
import ImagesProvider from '../providers/ImagesProvider/ImagesProvider';
import URLEditor from '../components/URLEditor/URLEditor';
import Thumbnails from '../components/Thumbnails/Thumbnails';
import ThumbnailOptionsProvider from '../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';

const Example = () => {
  return (
    <div className="react-image">
      <ImagesProvider
        urls={[
          'https://cdn.myanimelist.net/images/characters/13/353668.jpg',
          'https://cdn.myanimelist.net/images/characters/3/353670.jpg',
          'https://cdn.myanimelist.net/images/characters/16/349528.webp'
        ]}
      >
        <URLEditor />
        <ThumbnailOptionsProvider>
          <Thumbnails />
        </ThumbnailOptionsProvider>
      </ImagesProvider>
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
