//import { View, Text } from 'react-native'
import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

const App = () => {
    return (
      <View style={styles.container}>
        <Image source={require('./path/to/image.png')} style={styles.image} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Button 1 Pressed!')}>
            {/* Button 1 content */}
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Button 2 Pressed!')}>
            {/* Button 2 content */}
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
    
  
  nst styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1,
    },
    button: {
      width: 150,
      height: 50,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      marginBottom: 10,
    },
  });
  

export default Post