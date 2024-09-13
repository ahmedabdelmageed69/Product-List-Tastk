import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface CustomTextProps {
  children: string;
  style?: any;
}

const CustomText: React.FC<CustomTextProps> = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomText;
