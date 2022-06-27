import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './styles'

const StyleButton = (props) => {

    const { type, content, onPress } = props;

    const bgColor = type === 'primary' ? 'black':'white'
    const textColor = type === 'primary' ? 'white':'black'
    
    return (
        <View style={styles.container}>
        <Pressable style={[styles.button, {backgroundColor:bgColor}]} 
        onPress={() => {
            console.warn('Hey there')
        }} 
        >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>
        </Pressable>
        </View>
    )
}

export default StyleButton