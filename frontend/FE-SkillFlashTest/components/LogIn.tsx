import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";

export default function LogIn() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function getUserByUsername() {
    const body = { username, password };
    try {
      //get user info from api
      //no error? navigate to home page + user ID
    } catch {}
  }
  return (
    <SafeAreaView style={styles.logInContainer}>
      <Text style={styles.title}>Log in page</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="password"
        textContentType="password"
      />
      <Pressable onPress={getUserByUsername}>
        <Text style={styles.button}>Log in</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logInContainer: {
    flex: 1,
    paddingTop: 58,
  },
  title: {
    fontSize: 50,
    color: "black",
    marginTop: 200,
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },
  button: {
    alignSelf: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
});
