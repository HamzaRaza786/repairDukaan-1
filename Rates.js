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
      

      <Text style = {{color : 'white' , fontSize : 35, fontStyle: 'normal', width : 400, borderWidth: 2, borderRadius: 50, marginVertical: 10, fontWeight : 'bold', backgroundColor: '#f4511e', textAlign : 'center'}}>Booking Rates</Text>
      <Text style = {{color : 'black' , fontSize : 30, fontStyle: 'normal', width : 300, borderWidth: 2, fontWeight : 'bold', borderRadius: 50, marginVertical: 10, textAlign : 'center'}}>Car<Text>          200/.</Text></Text>
      <Text style = {{color : 'black' , fontSize : 30, fontStyle: 'normal', width : 300, borderWidth: 2, fontWeight : 'bold', borderRadius: 50, marginVertical: 10, textAlign : 'center'}}>Bike<Text>         100/.</Text></Text>
      <Text style = {{color : 'black' , fontSize : 30, fontStyle: 'normal', width : 300, borderWidth: 2, fontWeight : 'bold', borderRadius: 50, marginVertical: 10, textAlign : 'center'}}>Normal<Text>     100/.</Text></Text>
      <Text style = {{color : 'black' , fontSize : 30, fontStyle: 'normal', width : 300, borderWidth: 2, fontWeight : 'bold', borderRadius: 50, marginVertical: 10, textAlign : 'center'}}>Urgent<Text>       400/.</Text></Text>
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
    backgroundColor: '#fff',
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
