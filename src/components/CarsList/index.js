import { FlatList, Text, View, Dimensions } from 'react-native'
import React from 'react'
import cars from './cars'
import CarItem from '../CarItem'
import styles from './styles'

const carList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        snapToAlignment={'start'}
        showsVerticalScrollingIndicator={false}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
    
      />
    </View>
  )
}

export default carList

