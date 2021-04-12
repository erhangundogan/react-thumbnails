import React from 'react';
import ReactDOM from 'react-dom';
import ImagesProvider from '../providers/ImagesProvider/ImagesProvider';
import URLEditor from '../components/URLEditor/URLEditor';
import Thumbnails from '../components/Thumbnails/Thumbnails';
import ThumbnailOptionsProvider from '../providers/ThumbnailOptionsProvider/ThumbnailOptionsProvider';

const Example = () => {
  return (
    <div className="react-image">
      <ImagesProvider urls={[]}>
        <URLEditor />
        <ThumbnailOptionsProvider
          showOptions={new Set(['autoSize', 'size', 'shape', 'shadow', 'border', 'showUrl'])}
          defaults={{ autoSize: true, size: 'large' }}
        >
          <Thumbnails />
        </ThumbnailOptionsProvider>
      </ImagesProvider>
    </div>
  );
};

ReactDOM.render(<Example />, document.getElementById('root'));
