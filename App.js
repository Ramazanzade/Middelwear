import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/Companent/ProductList';
import TodoProduct from './src/Companent/TodoProduct';
import store from './src/Store/CombineStore';
import {Provider} from 'react-redux'

export default function App() {
  const RootApp =()=>{
    return <View><TodoProduct/> <ProductList/></View>
  }
  return (
    <Provider store={store} >
    <RootApp/>
    
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
