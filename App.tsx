import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {Provider} from 'react-redux';
import {store} from './src/store';
import ProductListPage from './src/screen/ProductListPage';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="ProductList" component={ProductListPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
