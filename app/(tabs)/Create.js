import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../../styles/common.style'
import { COLORS } from '../../constants'

const Create = () => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
    <View style={{marginTop:90}}/>
      <View style={styles.container}>
      <Text style={styles.welcomeMessage}>Host a Party!</Text>
      <Text style={styles.userName}>here</Text>
    </View>
      
    </SafeAreaView>
  )
}

const input = ()=>{
  const [text, setText] = useState('');
  return(
    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40}}
      placeholder="Give your event wonderful title"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
  </View>
);
};

export default Create