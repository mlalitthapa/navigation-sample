import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function SecuritySettings() {
  return (
    <View style={styles.container}>
      <Text>Security Settings</Text>
      <Link href="/(tabs)/(settings)">Go to settings page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
