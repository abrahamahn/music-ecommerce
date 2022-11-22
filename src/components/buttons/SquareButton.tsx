import React, { Component, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface Props {
  buttonText: string,
  backgroundColor: string,
  onPress: () => void,
  color: string,
};
export default function SquareButton({buttonText, backgroundColor}: Props) {
  const [pressed, setPressed] = useState(false);
  const onPress = () => {
    setPressed(!pressed);
  };

  if (pressed===false) {
    buttonText = "touch me";
    backgroundColor = '#ffffff';
  } else { 
    buttonText = "you touched me";
    backgroundColor = '#161616';
  };

  return (
    <TouchableOpacity 
      style={{
        ...styles.button,
        backgroundColor: {backgroundColor}}}
      onPress={onPress}
    >
      <View style={{flex:1}}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>    
  );
}

const styles: void = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 8, 
    paddingVertical: 14,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    justifyContent: 'center',
  },
})