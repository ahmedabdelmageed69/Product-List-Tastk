import React, {useCallback, useMemo, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct} from '../store/productsSlice';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import ProductList from '../components/organisms/ProductList';
import {RootState} from '../store';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = useCallback(() => {
    if (productName && productPrice) {
      dispatch(
        addProduct({
          id: Date.now(),
          name: productName,
          price: parseFloat(productPrice),
        }),
      );
    }

    setProductName('');
    setProductPrice('');
  }, [productName, productPrice, dispatch]);

  const totalPrice = useMemo(() => {
    return products.reduce((sum, product) => sum + product.price, 0);
  }, [products]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input
          value={productName}
          onChangeText={setProductName}
          placeholder="Product Name"
        />

        <Input
          value={productPrice}
          onChangeText={setProductPrice}
          placeholder="Product Price"
        />

        <Button
          title="Add Product"
          onPress={handleAddProduct}
          style={styles.addButton}
          disabled={!!productName && !!productPrice}
        />

        <View style={styles.total}>
          <Text>Total Products: {products.length}</Text>
          <Text>Total Price: ${totalPrice?.toFixed(2)}</Text>
        </View>
        <ProductList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  total: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 50,
  },
  addButton: {
    backgroundColor: '#ff8889',
  },
});

export default ProductListPage;
