import { PropsWithChildren } from 'react';

export interface ImagesProviderContextType {
  images: any[];
  setImages: any;
  setUrls: any;
  addUrl: (url: string) => void;
  urls: string[];
}

export interface VerifyUrlsOptionsType {
  maxFileSize?: number;
  ignoreRequestErrors?: boolean;
  testUrls?: boolean;
  requiredOrigin?: string | undefined;
}

export interface FetchImagesOptionsType {
  tryCors?: boolean;
  failEarly?: boolean;
}

export interface FetchImagesCorsOptionsType {
  generateHash?: boolean;
  fetchOptions?: RequestInit;
}

export interface ImageProviderOptionsType {
  verifyUrlsOptions?: VerifyUrlsOptionsType;
  fetchImagesOptions?: FetchImagesOptionsType;
  fetchImagesCorsOptions?: FetchImagesCorsOptionsType;
}

export interface ImageProviderPropsType extends PropsWithChildren<any> {
  urls?: string[];
  options?: ImageProviderOptionsType;
}
