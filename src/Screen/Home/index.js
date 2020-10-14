import React from "react"
import {View, Text} from "react-native"
import Icon from "react-native-vector-icons/Feather"

class App extends React.Component{
  render(){
    return(
      <View>
        <Text>Hallo</Text>
        <Icon name="aperture" size={300} />
      </View>
    )
  }
}
export default App