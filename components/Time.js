import React from 'react'
import { Picker } from '@react-native-picker/picker';
import { Text, View } from 'react-native';
import StyleSheet from '../Styles'

const Time = ({ time, setTime }) => {
  return (
    <View>
        <Text style={StyleSheet.title2}>Time</Text>
        <Picker
            selectedValue={time}
            onValueChange={(itemValue, itemIndex) =>
            setTime(itemValue)
        }>
        <Picker.Item label="1 hour" value="1" />
        <Picker.Item label="2 hours" value="2" />
        <Picker.Item label="3 hours" value="3" />
        <Picker.Item label="4 hours" value="4" />
        <Picker.Item label="5 hours" value="5" />
        <Picker.Item label="6 hours" value="6" />
        <Picker.Item label="7 hours" value="7" />
        <Picker.Item label="8 hours" value="8" />
        <Picker.Item label="9 hours" value="9" />
        <Picker.Item label="10 hours" value="10" />
      </Picker>
    </View>
  )
}

export default Time