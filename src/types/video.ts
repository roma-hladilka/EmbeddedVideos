export interface IVideoProps {
  id: string;
  width: number;
  height: number;
}

export type TVideoType = 'youtube' | 'wistia';

export interface IVideoData {
  id: string;
  type: TVideoType;
}
