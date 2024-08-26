import {Theme} from '@react-navigation/native'
import Colors from '@constants/Colors'

interface ExtendedTheme extends Theme {
  // Reference the Theme type's colors field and make our field an intersection
  // Learn more:
  //   https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
  //   https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
  colors: Theme['colors'] & {
    accent: string;
    buttonText: string;
    secondaryText: string;
    oddItems: string;
    shadowColor: string;
    linkColor:  string;
    splashScreenBackground: string;
  }
}

declare module '@react-navigation/native' {
    export function useTheme(): ExtendedTheme
  }

export const CyanDeepPurpleLightTheme: ExtendedTheme = {
    dark: false,
    colors: {
      primary: Colors.purple,
      background: Colors.grayLight,
      card: Colors.white,
      text: Colors.grayDarkest,
      border: Colors.gray,
      notification: Colors.red,
      accent: Colors.purpleAccent,
      buttonText: Colors.white,
      secondaryText: Colors.grayDarkest,
      oddItems: Colors.grayLightest,
      shadowColor: Colors.black,
      linkColor: Colors.blue,
      splashScreenBackground: Colors.purple,
    },
  };

export const CyanDeepPurpleDarkTheme: ExtendedTheme = {
  dark: false,
  colors: {
    primary: Colors.purple,
    background: Colors.darkbackground,
    card: Colors.darkSurface,
    text: Colors.white,
    border: Colors.grayDark,
    notification: Colors.red,
    accent: Colors.purpleAccent,
    buttonText: Colors.white,
    secondaryText: Colors.grayLightest,
    oddItems: Colors.grayDarkest,
    shadowColor: Colors.white,
    linkColor: Colors.blue,
    splashScreenBackground: Colors.purpleDark
  },
};