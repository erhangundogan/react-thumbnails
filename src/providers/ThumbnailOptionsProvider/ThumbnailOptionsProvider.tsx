import React, { createContext, useCallback, useContext, useState } from 'react';

export const ThumbnailOptionsProviderContext = createContext({} as any);
export const useThumbnailOptions = () => useContext(ThumbnailOptionsProviderContext);

export interface ThumbnailOptionsProviderType {
  options: ThumbnailOptionsPropsType;
  setOptions: any;
  changeSize: any;
  changeShape: any;
  getDimensions: any;
  toggleAutoSize: any;
  toggleBorder: any;
  toggleShowUrl: any;
  toggleShadow: any;
}

export interface ThumbnailOptionsPropsType {
  autoSize?: boolean;
  border?: boolean;
  size?: 'small' | 'medium' | 'large';
  showUrl?: boolean;
  shadow?: boolean;
  shape?: 'circle' | 'star' | 'square' | 'default';
  iconSize?: 'small' | 'medium';
  iconAlignment?: 'left' | 'center' | 'right';
}

const ThumbnailOptionsProvider = ({ children, defaults = {} }: any) => {
  const [options, setOptions] = useState<ThumbnailOptionsPropsType>({
    size: 'small',
    shape: 'default',
    autoSize: false,
    border: false,
    showUrl: false,
    shadow: false,
    iconSize: 'small',
    iconAlignment: 'right',
    ...defaults
  });

  const changeShape = useCallback(() => {
    switch (options.shape) {
      case 'default': {
        return setOptions((current) => ({ ...current, shape: 'square' }));
      }
      case 'square': {
        return setOptions((current) => ({ ...current, shape: 'circle' }));
      }
      case 'circle': {
        return setOptions((current) => ({ ...current, shape: 'star' }));
      }
      case 'star': {
        return setOptions((current) => ({ ...current, shape: 'default' }));
      }
    }
  }, [options.shape]);

  const changeSize = useCallback(() => {
    switch (options.size) {
      case 'small': {
        return setOptions((current) => ({ ...current, size: 'medium' }));
      }
      case 'medium': {
        return setOptions((current) => ({ ...current, size: 'large' }));
      }
      case 'large': {
        return setOptions((current) => ({ ...current, size: 'small' }));
      }
    }
  }, [options.size]);

  const getDimensions = useCallback(() => {
    switch (options.size) {
      case 'small': {
        return { width: 100, height: 100 };
      }
      case 'medium': {
        return { width: 200, height: 200 };
      }
      case 'large': {
        return { width: 300, height: 300 };
      }
    }
  }, [options.size]);

  const toggleAutoSize = useCallback(() => {
    return setOptions((current) => ({ ...current, autoSize: !options.autoSize }));
  }, [options.autoSize]);

  const toggleBorder = useCallback(() => {
    return setOptions((current) => ({ ...current, border: !options.border }));
  }, [options.border]);

  const toggleShadow = useCallback(() => {
    return setOptions((current) => ({ ...current, shadow: !options.shadow }));
  }, [options.shadow]);

  const toggleShowUrl = useCallback(() => {
    return setOptions((current) => ({ ...current, showUrl: !options.showUrl }));
  }, [options.showUrl]);

  return (
    <ThumbnailOptionsProviderContext.Provider
      value={{
        options,
        setOptions,
        changeSize,
        changeShape,
        getDimensions,
        toggleAutoSize,
        toggleBorder,
        toggleShowUrl,
        toggleShadow
      }}
    >
      {children}
    </ThumbnailOptionsProviderContext.Provider>
  );
};

export default ThumbnailOptionsProvider;
