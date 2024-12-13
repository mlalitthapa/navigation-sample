import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

export default function SecuritySettings() {
  const router = useRouter();

  const navigateWithPush = () => {
    router.push("/")
  }

  const navigateWithNavigate = () => {
    router.navigate("/")
  }

  return (
    <View style={styles.container}>
      <Text>Security Settings</Text>
      
      <Link href="/" style={{ marginTop: 20, color: "blue" }}>
        {"Go back (Using <Link />)"}
      </Link>

      <TouchableOpacity onPress={navigateWithPush} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>Go back (Using .push)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateWithNavigate} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>Go back (Using .navigate)</Text>
      </TouchableOpacity>
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
