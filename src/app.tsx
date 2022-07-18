import React, { FC, useCallback } from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { WistiaPlayer } from './components/wistia-player';
import { YouTubePlayer } from './components/youtube-player';
import { SIDE_PADDING, VIDEO_LIST } from './constants/etc';
import { IVideoData, TVideoType } from './types/video';

export const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { width } = useWindowDimensions();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const renderItem: ListRenderItem<IVideoData> = useCallback(
    ({ item }) => {
      const { type } = item;
      const widthWithPaddings = width - SIDE_PADDING * 2;
      const props = {
        id: item.id,
        width: widthWithPaddings,
        height: widthWithPaddings * (9 / 16),
      };

      const component: Record<TVideoType, FC> = {
        youtube: () => <YouTubePlayer {...props} />,
        wistia: () => <WistiaPlayer {...props} />,
      };

      return component[type]({});
    },
    [width],
  );

  const Separator = () => <View style={styles.separator} />;

  return (
    <View style={[styles.wrapper, backgroundStyle]}>
      <SafeAreaView style={styles.wrapper}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <FlatList
          data={VIDEO_LIST}
          renderItem={renderItem}
          style={styles.listContainer}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: SIDE_PADDING,
  },
  separator: {
    height: 10,
  },
});
