import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
} from "react-native";

export default function LogIn() {
  const [keyword, setKeyword] = React.useState("");

  async function postToAI() {
    const body = { username, password };
    try {
      //get user info from api
      //no error? navigate to home page + user ID
    } catch {}
  }
  return (
    <SafeAreaView style={styles.homeContainer}>
      <Text style={styles.label}>Type a keyword</Text>
      <TextInput
        style={styles.input}
        onChangeText={setKeyword}
        value={keyword}
        placeholder="keyword"
      />
      <Pressable onPress={postToAI} style={styles.button}>
        <Text style={styles.button}>Send</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginTop: 100,
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
