import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { Button } from 'react-native-elements';
import { ImageBackground } from 'react-native';
import { add } from 'react-native-reanimated';
import axios from 'axios';

export default function App() {
  const [phone, setphone] = React.useState("");
  const [email, setemail] = React.useState("");
  const [address, setaddress] = React.useState("");
  

  React.useEffect(() => {
    handleLogIn();
  }, []);
  
  const handleLogIn = async () => {
    
        await axios.get("http://192.168.0.22:3000/getContact/60b69a241b104129505a89ad", {
        })
        .then((response) => {
            setemail(response.data.Email)
            setaddress(response.data.Address)
            setphone(response.data.Phone)
            //Alert.alert(response)
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
            //Alert.alert("Unsuccessful")
        })
}


  return (
    <SafeAreaProvider>
    



    <View style={styles.container}>
      

      <Text style = {{color : 'white' , fontSize : 40, fontStyle: 'normal', width : 400, borderWidth: 2, borderRadius: 50, marginVertical: 10, fontWeight : 'bold', backgroundColor: '#f4511e', textAlign : 'center'}}>CONTACT US</Text>
      <Text style = {{color : 'black' , fontSize : 35, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center'}}>Reach out to us !</Text>
      <View style={styles.lineStyle2 }/>
      <Text style = {{color : 'black' , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center'}}>EMAIL : {email}</Text>
      <Text style = {{color : 'black' , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center'}}>PHONE : {phone}</Text>
      <Text style = {{color : 'black' , fontSize : 22, fontStyle: 'normal', width : 355, marginVertical: 5, textAlign : 'center'}}>ADDRESS : {address}</Text>
      <Text style = {{color : 'black' , fontSize : 35, fontStyle: 'normal', width : 355, marginVertical: 15, textAlign : 'center'}}>CONTACT MAP</Text>
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
  borderBottomWidth: 2, 
  alignSelf:'center',
  marginVertical: 5,
  width: "100%"
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
    borderRadius: 60,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  input: {
    height: 30,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
  input1: {
    height: 100,
    margin: 12,
    width: 300,
    borderWidth: 1,
  },
});
