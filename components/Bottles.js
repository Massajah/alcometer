import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { View, Text } from 'react-native';
import StyleSheet from '../Styles'

const Bottles = ({ bottles, setBottles}) => {
  return (
    <View>
        <Text style={StyleSheet.title2}>Bottles</Text>
        <Picker
            selectedValue={bottles}
            onValueChange={(itemValue, itemIndex) =>
            setBottles(itemValue)
        }>
        <Picker.Item label="1 bottle" value="1" />
        <Picker.Item label="2 bottles" value="2" />
        <Picker.Item label="3 bottles" value="3" />
        <Picker.Item label="4 bottles" value="4" />
        <Picker.Item label="5 bottles" value="5" />
        <Picker.Item label="6 bottles" value="6" />
        <Picker.Item label="7 bottles" value="7" />
        <Picker.Item label="8 bottles" value="8" />
        <Picker.Item label="9 bottles" value="9" />
        <Picker.Item label="10 bottles" value="10" />
      </Picker>
    </View>
  )
}

export default Bottles