import React, { useRef } from 'react';
import { useImages } from '../../providers/ImagesProvider/ImagesProvider';
import './URLEditor.css';

const URLEditor = () => {
  const formRef = useRef();
  const { addUrl, urls, options } = useImages();

  const onSubmit = (event) => {
    event.preventDefault();

    if (event.target.url?.value) {
      addUrl(event.target.url.value);
      (formRef.current as any).reset();
    }
  };

  return (
    <div className="url-editor-container">
      <div className="url-editor">
        <ul className="url-editor-items">
          {urls?.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
        <form className="url-editor-form" onSubmit={onSubmit} ref={formRef}>
          <div className="url-editor-form-row">
            <input
              className="url-editor-form-input"
              autoFocus={true}
              type="text"
              name="url"
              placeholder="Image URL"
              required
            />
            <input className="url-editor-form-submit" type="submit" value="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default URLEditor;
