import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";
import Counter from '../components/Counter';
import Profile from '../components/Profile';

export default function Index() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0)
  const [text, setText] = useState('')
  const [name, setName] = useState('')

  const handleIncrement = () => {
    setCount(count+1);
  };

  const handleDecrement = () => {
    setCount(count-1);
  };

  const handlePass = () => {
    setAge(count)
    setName(text)
  }

  const handleText = (input) => {
    setText(input)
  }

  return (
    <View style={styles.container}>
      <Text>
        Enter your name here:
      </Text>
      <TextInput
        style={styles.textField}
        placeholder="Your Name"
        onChangeText={handleText}
        value={text}
      />

      <Counter
        value={count}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
        handlePass={handlePass}
      />

      <Profile
        name={text}
        age={age}
      />

      
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textField: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8
  }
});
