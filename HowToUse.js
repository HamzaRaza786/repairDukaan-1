import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';


export default function App() {
  const [fname, onChangeFname] = React.useState("");
  const [email,onChangeEmail] = React.useState("");
  const [lname,onChangeLname] = React.useState("");
  const [pass,onChangePass] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaProvider>
  



    <View style={styles.container}>
      

      <Text style = {{color : 'white' , fontSize : 40, fontStyle: 'normal', width : 400, borderWidth: 2, borderRadius: 50, marginVertical: 10,  fontWeight : 'bold', backgroundColor: '#f4511e', textAlign : 'center'}}>How to Use?</Text>
      <Text style = {{color : 'black' , fontSize : 20, fontStyle: 'normal', fontWeight:"bold", color:"#364f6b", width : 355, borderWidth: 2, borderRadius: 50, marginVertical: 15, textAlign : 'center'}}>Navigate to Home Page after successful login</Text>
      <Text style = {{color : 'black' , fontSize : 20, fontStyle: 'normal', fontWeight:"bold", color:"#364f6b", width : 355, borderWidth: 2, borderRadius: 50, marginVertical: 15, textAlign : 'center'}}>Select request service to book an appropriate service</Text>
      <Text style = {{color : 'black' , fontSize : 20, fontStyle: 'normal', fontWeight:"bold", color:"#364f6b", width : 355, borderWidth: 2, borderRadius: 50, marginVertical: 15, textAlign : 'center'}}>Enable Location Service to enable our tracker</Text>
      <Text style = {{color : 'black' , fontSize : 20, fontStyle: 'normal', fontWeight:"bold", color:"#364f6b", width : 355, borderWidth: 2, borderRadius: 50, marginVertical: 15, textAlign : 'center'}}>Select the appropriate options of your choice and just click BOOK!</Text>
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  lineStyle:{
    borderBottomColor: "blue", 
    borderBottomWidth: 7, 
    alignSelf:'stretch',
    marginVertical: 10,
    width: "100%"
},
lineStyle2:{
  borderBottomColor: "black", 
  borderBottomWidth: 7, 
  alignSelf:'center',
  marginVertical: 15,
  width: "50%"
},
  container: {
    alignSelf: "stretch",
    display: 'flex',
    height: '100%',
    flex: 1,
    position: 'relative',
    backgroundColor: '#f6f6f',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
