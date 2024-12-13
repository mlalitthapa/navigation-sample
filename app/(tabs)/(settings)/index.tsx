import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

export default function Tab() {
  const router = useRouter();

  const navigateWithPush = () => {
    router.push("/security")
  }

  const navigateWithNavigate = () => {
    router.navigate("/security")
  }

  return (
    <View style={styles.container}>
      <Text>Tab Settings</Text>
      
      <Link href="/security" style={{ marginTop: 20, color: "blue" }}>
        {"Security settings (Using <Link />)"}
      </Link>

      <TouchableOpacity onPress={navigateWithPush} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>Security settings (Using .push)</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={navigateWithNavigate} style={{ marginTop: 20 }}>
        <Text style={{ color: 'blue' }}>Security settings (Using .navigate)</Text>
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
