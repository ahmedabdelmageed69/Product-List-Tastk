import React from 'react';
import {FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductCard from '../molecules/ProductCard';
import {deleteProduct} from '../../store/productsSlice';

interface Product {
  id: number;
  name: string;
  price: number;
  onDelete?: () => void;
}

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <View>
      <FlatList
        data={products}
        renderItem={({item}: {item: Product}) => (
          <ProductCard
            name={item.name}
            price={item.price}
            onDelete={() => dispatch(deleteProduct(item.id))}
          />
        )}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<View style={{height: 620}} />}
      />
    </View>
  );
};

export default ProductList;
