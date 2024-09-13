import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Button from '../atoms/Button';
import CustomText from '../atoms/Text';

interface ProductCardProps {
  name: string;
  price: number;
  onDelete: () => void;
}

const ProductCard = ({name, price, onDelete}: ProductCardProps) => {
  return (
    <View style={styles.card}>
      <CustomText style={styles.name}>{name}</CustomText>
      <CustomText style={styles.price}>${price.toFixed(2)}</CustomText>
      <Button
        onPress={onDelete}
        style={styles.iconBtn}
        icon={
          <Image
            source={require('./../../assets/icons/delete.png')}
            style={{tintColor: '#f00', width: 20, height: 25}}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#555',
  },
  iconBtn: {
    width: 45,
    height: 45,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#ccc',
    right: 8,
    top: 10,
    backgroundColor: '#fff',
  },
});

export default ProductCard;
