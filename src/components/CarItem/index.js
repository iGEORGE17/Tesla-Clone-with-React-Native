import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyleButton from '../Buttons'

const CarItem = (props) => {
  const {name, tagline, taglineCTA, image } = props.car
  return (
    <View style={styles.productContainer}>
        <ImageBackground source={image}   style={styles.image}/>
        
        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>{tagline}{' '}
            <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
        </View>

        <View style={styles.buttonContainer}>
          <StyleButton type="primary" content={"custom order"} 
          onPress={() => {
            console.warn("Custom order was pressed")
          }}
          />

        <StyleButton type="secondary" content={"existing inventory"} 
          onPress={() => {
            console.warn("Custom order was pressed")
          }}
          />        

        </View>

    </View>
  )
}

export default CarItem