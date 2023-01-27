import { StyleSheet, Text, View ,FlatList } from 'react-native'
import React from 'react'
import { useDispatch ,useSelector } from 'react-redux';

const ProductList = () => {


    const dispatch=useDispatch();
    const todos = useSelector((state)=> state.todo);
    
    // const tododelet =(id)=>{
    // dispatch(
    //     deletetodo({
    //         id:id
    //     })
    // )
    // }

    const renderItem = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
  return (
    
   <View style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
      />
    </View>    
  )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: View.currentHeight || 0,
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})