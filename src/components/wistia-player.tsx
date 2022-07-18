import React, { FC } from 'react';
import { IVideoProps } from '../types/video';
import { WebView } from 'react-native-webview';

export const WistiaPlayer: FC<IVideoProps> = ({ id, width, height }) => (
  <WebView
    source={{
      uri: `https://fast.wistia.com/embed/medias/${id}`,
    }}
    scrollEnabled={false}
    allowsFullscreenVideo
    style={{ width, height }}
  />
);
