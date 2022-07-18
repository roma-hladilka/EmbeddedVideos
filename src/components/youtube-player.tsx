import React, { FC, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { IVideoProps } from '../types/video';

export const YouTubePlayer: FC<IVideoProps> = ({ id, width, height }) => {
  const [fullscreenStatus, setState] = useState(false);

  const onFullScreenChange = (fullscreenStatus: boolean) => {
    setState(fullscreenStatus);
  };
  return (
    <YoutubePlayer
      height={height}
      width={fullscreenStatus ? 0 : width}
      videoId={id}
      allowWebViewZoom={false}
      initialPlayerParams={{ showClosedCaptions: false }}
      onFullScreenChange={onFullScreenChange}
    />
  );
};
