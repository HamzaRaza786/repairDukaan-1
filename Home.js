import Contact from './Contact';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import car from './assets/car.jpeg';
import bike from './assets/bike.jpeg';
import axios from 'axios';
//const router = require('express').Router();



export default function App() {

  /*router.route('/getBooking/:id').get((req, res) => {
    Bookings.findById(req.params.id)
      .then(Bookings => res.json(Bookings))
      .catch(err => res.status(400).json('Error: ' + err));
  });*/

  const [ID, setID] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Location, setLocation] = React.useState("");
  const [date, setDate] = React.useState("");
  const [Fare, setFare] = React.useState("");
  const [Status, setStatus] = React.useState("");
  const [Email, setEmail] = React.useState("");


  React.useEffect(() => {
    handleLogIn();
  }, []);
  
  const handleLogIn = async () => {
    
        await axios.get("http://192.168.1.106:3000/getBooking/60a17d873e010a267c04adc5", {
        })
        .then((response) => {
            setID(response.data.ID)
            setType(response.data.Type)
            setLocation(response.data.Location)
            setDate(response.data.date)
            setFare(response.data.Fare)
            setStatus(response.data.Status)
            setEmail(response.data.Email)
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
     <Text style = {{color : 'red' , fontSize : 18, textAlign : 'center', marginVertical: 20 }}>BOOK A CAR OR BIKE MECHANIC</Text>
     <View style = {{flexDirection : 'row'}}><Image source={car} style={{ width: 150, height: 120}} /><Image source={bike} style={{ width: 150, height: 120}} /></View>
     <TouchableOpacity onPress={() => {Contact}} style={styles.button}>
         <Text style={styles.buttonText}>BOOK NOW</Text>
       </TouchableOpacity>
        <View style = {{flexDirection : 'row'}}><Text style = {{color : 'black' , width: 300, fontSize : 22, borderWidth: 2, borderColor: 'black', borderRadius: 15, backgroundColor : '#00ff00', marginVertical: 20, textAlign : 'left'}}><MaterialCommunityIcons name="clock-check-outline" color= 'black' size= '10' /> Current Request {"\n"}<MaterialCommunityIcons name="calendar" color= 'black' size= '10' /> {date} {'\n'}<MaterialCommunityIcons name="map-marker" color= 'black' size= '10' /> {Location}{'\n'}<MaterialCommunityIcons name="cash-register" color= 'black' size= '10' /> PKR {Fare}</Text></View>
          <View style = {{flexDirection : 'row'}}><Text style = {{color : 'black' , width: 300, fontSize : 22, borderWidth: 2, borderColor: 'black', borderRadius: 15, backgroundColor : '#98fb98',  marginVertical: 0, textAlign : 'left'}}><MaterialCommunityIcons name="clock-check-outline" color= 'black' size= '10' /> Past Requests{"\n"}<MaterialCommunityIcons name="calendar" color= 'black' size= '10' /> Monday 9 : 15 pm{'\n'}<MaterialCommunityIcons name="map-marker" color= 'black' size= '10' /> University Road{'\n'}<MaterialCommunityIcons name="cash-register" color= 'black' size= '10' /> PKR 93</Text></View>      
          
       <StatusBar style="auto" />
       
      
     </View>
     </SafeAreaProvider>  
  

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 60,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
});
