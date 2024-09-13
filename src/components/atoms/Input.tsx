import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputProps {
  placeholder?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: any;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  style,
  placeholder,
  onChangeText,
  secureTextEntry,
  value,
  ...rest
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      autoCapitalize="none"
      autoCorrect={false}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default Input;
