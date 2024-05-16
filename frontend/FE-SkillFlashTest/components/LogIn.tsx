import React from "react";
import axios from "axios";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";

export default function LogIn({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  console.log(username);
  async function checkUserExists() {
    const body = { username, password };
    try {
      const response = await axios.post("localhost:9090/signup", body);
      console.log(response);
      //get user info from api
      //no error? navigate to home page + user ID
      if (response) {
        navigation.navigate("HomePage");
      } else {
        console.log("username does not exist");
      }
    } catch {
      console.log("error");
    }
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
