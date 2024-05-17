import React from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";

export default function LogIn({ navigation }): React.JSX.Element {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(username);
  async function checkUserExists() {
    const body = { username, password, email: "ana@example.com" };
    return axios
      .post("http://192.168.0.168:9090/signup", body)
      .then(({ data }) => {
        console.log(data, "passed");
        navigation.navigate("HomePage");
      })
      .catch((err) => {
        console.log(err);
      });
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
      <Pressable onPress={checkUserExists}>
        <Text style={styles.button}>Log in</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logInContainer: {
    flex: 1,
    paddingTop: 58,
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    color: "black",
    marginTop: 100,
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
