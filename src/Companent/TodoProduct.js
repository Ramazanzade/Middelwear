import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {AddProductToApi}from '../Store/TodoSlice'

const TodoProduct = () => {
const [product, setproduct] =useState()


const dispatch =useDispatch()

const Add =()=>{
    dispatch(AddProductToApi(product))
}



  return (
    <View>
 <TextInput
        style={styles.input}
        onChangeText={setproduct}
        value={product}
      />  
      

      <TouchableOpacity 
      style={styles.button}
      onPress={Add}
      >
        <Text style={{color:'gray'}}>Add</Text>
      </TouchableOpacity>
     </View>        
  )
}

export default TodoProduct

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:'100%'
      },
      button:{
        borderColor:'gray',
        borderWidth:1,
        padding:10,
        margin:10,
        width:'50%',
        borderRadius:5,
        alignItems:'center',
        marginLeft:118
      }
});