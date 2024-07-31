import { ResizeMode, Video } from 'expo-av';
import { useRef } from 'react';
import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  videoPlayer: {
    width: '85%',
    height: '35%',
    backgroundColor: 'black',
    borderRadius: 10,
  },
});

export default function VideoPlayer() {
  const video = useRef(null);

  return (
    <Video
      ref={video}
      source={{
        uri: process.env.EXPO_PUBLIC_VIDEO_PREVIEW_URL || '',
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode={ResizeMode.CONTAIN}
      shouldPlay
      isLooping
      style={style.videoPlayer}
      useNativeControls
    />
  );
}
