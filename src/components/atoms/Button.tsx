import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface ButtonProps {
  title?: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      disabled={disabled}>
      {title && <Text style={[styles.text, textStyle]}>{title}</Text>}
      {icon && icon}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff5237',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
