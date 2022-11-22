import { StatusBar } from "expo-status-bar";
import Login from './screens/login';
import { 
  SafeAreaView,
  Button, 
  StyleSheet, 
  Text, 
  View 
} from "react-native";

export default function App(this: Props) {
  return (
    <SafeAreaView style={styles.root}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
