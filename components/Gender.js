import React from 'react'
import { Text, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button';
import StyleSheet from '../Styles'

const Gender = ({ setGender }) => {

    const genders = [
        {label: "Male", value: "male"},
        {label: "Female", value: "female"},
    ]
    
  return (
    <View>
        <Text style={StyleSheet.gender}>Gender</Text>
            <RadioForm 
                buttonSize={10}
                radio_props={genders}
                initial={0}
                onPress={(value) => setGender(value)}
        />
    </View>
  )
}

export default Gender