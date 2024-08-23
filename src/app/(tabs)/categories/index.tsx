import { StyleSheet, View } from 'react-native';

import TagsList from '@/components/TagsList';
import CategoriesList from '@components/CategoriesList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '3%',
  },
});

export default function CategoriesListScreen() {
  return (
    <View style={styles.container}>
      <TagsList />
      <CategoriesList />
    </View>
  );
}
