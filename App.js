import { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput } from 'react-native';
import StyleSheet from './Styles'
import Bottles from './components/Bottles';
import Time from './components/Time';
import Gender from './components/Gender';

export default function App() {

  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState("male")
  const [alcohol, setAlcohol] = useState(0)

  const calculate = () => {
    let result = 0
    let burning = weight / 10

    if (weight == 0) {
      Alert.alert("Enter weight")
    }

    if (gender === "male") {
      result = ((bottles * 0.33) * 8 * 4.5 - (burning * time)) / (weight * 0.7)
    }else{
      result = ((bottles * 0.33) * 8 * 4.5 - (burning * time)) / (weight * 0.6)
    }

    if (result < 0) {
      result = 0
    }

    setAlcohol(result)
  }
 
  return (
    <ScrollView style={StyleSheet.container}>
      <Text style={StyleSheet.title}>Alcometer</Text>
      <Text style={StyleSheet.title2}>Weight</Text>
      <TextInput 
        style={StyleSheet.weight} 
        placeholder='Enter weight...' 
        value={weight} 
        onChangeText={text => setWeight(text)} 
        keyboardType="number-pad" />

      <Bottles bottles={bottles} setBottles={setBottles} />

      <Time time={time} setTime={setTime} />

      <Gender setGender={setGender} />

      {alcohol < 0.5 ?
      <Text style={StyleSheet.result}>{alcohol.toFixed(2)}</Text> : 
      alcohol > 1 ?
      <Text style={[StyleSheet.result, {color: "#EF4444"}]}>{alcohol.toFixed(2)}</Text> :
      <Text style={[StyleSheet.result, {color: "#EAB308"}]}>{alcohol.toFixed(2)}</Text>
      }
      <Button title="Calculate" onPress={calculate} />
    </ScrollView>
  );
}

  