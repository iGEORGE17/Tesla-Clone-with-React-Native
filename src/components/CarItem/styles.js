import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    productContainer: {
        width:'100%',
        height: Dimensions.get('window').height
      },
      titles: {
        marginTop:'20%',
        width:'100%',
        alignItems:'center'
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
        color:'black'
      },
      subtitle: {
        fontSize: 16,
        color: '#5c5e62'
      },
      subtitleCTA: {
        textDecorationLine: 'underline'
      },     
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonContainer: {
        width:'100%',
        position:'absolute',
        bottom:50
      }    
})

export default styles