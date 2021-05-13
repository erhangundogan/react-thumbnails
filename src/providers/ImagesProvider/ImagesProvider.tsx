import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { fetchImages, verifyUrls } from 'image-helpers';
import { ImageProviderPropsType, ImagesProviderContextType } from './ImageProvider.types';
import { useError } from '../ErrorProvider/ErrorProvider';
import './ImageProvider.css';

export const ImagesProviderContext = createContext<ImagesProviderContextType>({} as any);
export const useImages = () => useContext(ImagesProviderContext);

const ImagesProvider = ({ children, urls: defaultUrls = [], options = {} }: ImageProviderPropsType) => {
  const [images, setImages] = useState<any[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const { setError } = useError();

  const addUrl = useCallback(
    (url: string) => {
      if (options.maxImagesCount && urls.length === options.maxImagesCount) {
        console.log('addUrl, max images count reached');
        return;
      }
      setUrls((items = []) => [...items, url]);
    },
    [options.maxImagesCount, urls.length]
  );

  useEffect(() => {
    if (urls.length === 0) {
      if (images.length > 0) {
        setImages([]);
      }
      return;
    }

    if (options.maxImagesCount && images.length === options.maxImagesCount) {
      console.log('useEffect, max images count reached');
      return;
    }

    const verifyAndFetch = async (newImageUrls) => {
      const verifiedImageUrls = await verifyUrls(newImageUrls, options.verifyUrlsOptions);
      if (Array.isArray(verifiedImageUrls) && verifiedImageUrls.length > 0) {
        return await fetchImages(
          verifiedImageUrls,
          options.fetchImagesOptions,
          options.fetchImagesCorsOptions
        );
      }
    };

    const existingUrls = images.map(({ url }) => url);
    const newUrls = urls.filter((url) => !existingUrls.includes(url));
    if (newUrls.length === 0) {
      return;
    }
    verifyAndFetch(newUrls)
      .then((newImages) => {
        if (newImages) {
          setImages((currentImages) => [...currentImages, ...newImages]);
        }
      })
      .catch((err) => {
        setError && setError(err.message);
      });
  }, [urls]);

  useEffect(() => {
    if (defaultUrls.length > 0) {
      if (options.maxImagesCount) {
        setUrls(defaultUrls.slice(0, options.maxImagesCount));
      } else {
        setUrls(defaultUrls);
      }
    }
  }, [defaultUrls]);

  return (
    <ImagesProviderContext.Provider value={{ images, addUrl, urls, options }}>
      {children}
    </ImagesProviderContext.Provider>
  );
};

export default ImagesProvider;
