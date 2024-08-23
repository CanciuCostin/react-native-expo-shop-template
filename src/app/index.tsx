import { StyleSheet, View, Image } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { router, SplashScreen } from 'expo-router';
import {
  DUMMY_PRODUCTS,
  DUMMY_CATEGORIES,
  DUMMY_CATEGORY_TAGS,
} from '@data/DummyDataArrays';
import { FontAwesome } from '@expo/vector-icons';
import {
  setProductsAsync,
  setCategoriesAsync,
  setTagsAsync,
} from '@state/productsDataSlice';
import { AppDispatch } from '@state/store';
import { useFonts } from 'expo-font';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';
// import { loadOrders, loadPersonalizationData } from '@service/OrderService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '90%',
    alignItems: 'center',
    alignContent: 'space-between',
  },
  lottieImage: {
    width: '40%',
    height: '40%',
    top: '40%',
  },
  appIcon: {
    width: '100%',
  },
});

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function SplashAnimation() {
  const [fontsLoaded, fontsError] = useFonts({
    RobotoRegular: require('@assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('@assets/fonts/Roboto-Bold.ttf'),
    ...FontAwesome.font,
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const lottieAnimationRef = useRef<LottieView>(null);
  const { colors } = useTheme();

  useEffect(() => {
    // Perform some sort of async data or asset fetching
    setTimeout(() => {
      Promise.all([
        dispatch(setProductsAsync(DUMMY_PRODUCTS)),
        dispatch(setCategoriesAsync(DUMMY_CATEGORIES)),
        dispatch(setTagsAsync(DUMMY_CATEGORY_TAGS)),
        //loadOrders().then((orders) => dispatch(setOrdersAsync(orders))),
        //loadPersonalizationData().then((personalizationData) =>
        //  dispatch(setPersonalizationDataAsync(personalizationData)),
        //),
      ]).then(() => {
        setDataLoaded(true);
      });
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded && dataLoaded) {
      SplashScreen.hideAsync()
        .then(() => lottieAnimationRef.current?.play())
        .then(() => {
          setTimeout(() => router.navigate('(tabs)'), 5000);
        });
    }
  }, [fontsLoaded, dataLoaded]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.splashScreenBackground },
      ]}
    >
      <LottieView
        resizeMode="contain"
        ref={lottieAnimationRef}
        style={styles.lottieImage}
        source={require('@assets/animations/splash.json')}
      />
      <Image
        resizeMode="contain"
        source={require('@assets/images/splash.png')}
        style={styles.appIcon}
      />
    </View>
  );
}
