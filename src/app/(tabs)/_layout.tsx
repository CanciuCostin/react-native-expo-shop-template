import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, Platform } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome size={hp('3.5%')} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <Tabs
      initialRouteName="categories"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: true, //useClientOnlyValue(false, true),
        headerShadowVisible: true,
        headerStatusBarHeight: hp('5%'),

        tabBarStyle: {
          height: Platform.OS === 'ios' ? hp('9%') : hp('6%'),
        },
        tabBarLabelStyle: { fontSize: hp('1.6%') },
        tabBarIconStyle: {
          height: hp('5%'),
          width: hp('5%'),
        },
        headerTitleStyle: { fontSize: hp('2.5%') },
        headerTitleAlign: 'left',
      }}
    >
      <Tabs.Screen
        redirect
        // Name of the route to hide.
        name="index"
        options={{
          // This tab will no longer show up in the tab bar.
          href: null,
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: t('categoriesHeader'),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/videoPlayerModal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="question-circle"
                    size={hp('3%')}
                    color={colors.primary}
                    style={{
                      marginRight: wp('5%'),
                      opacity: pressed ? 0.5 : 1,
                    }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: t('ordersHeader'),
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-cart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: t('settingsHeader'),
          tabBarIcon: ({ color }) => <TabBarIcon name="wrench" color={color} />,
        }}
      />
    </Tabs>
  );
}
