import { StyleSheet, View } from 'react-native';

import TagsList from '@/components/TagsList';
import CategoriesList from '@components/CategoriesList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
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
