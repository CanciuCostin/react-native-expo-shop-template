import { Pressable, View } from 'react-native';
import { Link, router } from 'expo-router';
import VideoPlayer from '@components/VideoPlayer';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
    flex: 1,
  },
});

export default function Modal() {
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();

  return (
    <View style={styles.modal}>
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Link href="../">Dismiss</Link>}
      {/* Native modals have dark backgrounds on iOS. Set the status bar to light content and add a fallback for other platforms with auto. */}
      {/* <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} /> */}
      <Pressable
        style={[
          StyleSheet.absoluteFill,
          { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        ]}
        onPress={router.back}
      />
      <VideoPlayer />
    </View>
  );
}
