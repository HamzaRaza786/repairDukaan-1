import Contact from './Contact';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import car from './assets/car.jpeg';
//import bike from './assets/bike.jpeg';
//import display from './assets/display.png';
import axios from 'axios';
import Report from './Report';
import { ScrollView } from 'react-native';
const dateFormat = require('dateformat');
//import { FcOvertime } from "react-icons/fc";
//import { FcCalendar } from "react-icons/fc";
//import { FaLocationArrow } from "react-icons/fa";
//import { FaCommentDollar } from "react-icons/fa";

//const router = require('express').Router();



export default function App({ navigation }) {

  /*router.route('/getBooking/:id').get((req, res) => {
    Bookings.findById(req.params.id)
      .then(Bookings => res.json(Bookings))
      .catch(err => res.status(400).json('Error: ' + err));
  });*/

  const [ID, setID] = React.useState("");
  const [Type, setType] = React.useState("");
  const [Lati, setLati] = React.useState("");
  const [Longi, setLongi] = React.useState("");
  const [Lati2, setLati2] = React.useState("");
  const [Longi2, setLongi2] = React.useState("");
  const [date, setDate] = React.useState("");
  const [Fare, setFare] = React.useState("");
  const [date2, setDate2] = React.useState("");
  const [Fare2, setFare2] = React.useState("");
  const [Status, setStatus] = React.useState("");
  const [Email, setEmail] = React.useState("");

  const [ID2, setID2] = React.useState("");
  const [Type2, setType2] = React.useState("");
  const [Location2, setLocation2] = React.useState("");
  const [Status2, setStatus2] = React.useState("");
  const [Email2, setEmail2] = React.useState("");

  const [Current, setCurrent] = React.useState(false);
  const [Past, setPast] = React.useState(false);
  const[Street1, setStreet1] =React.useState("");
  const[Street2, setStreet2] =React.useState("");

  const KEY = "WlOfHKQSbaBfAafAodbzvfccj8QYGLtK";
  const [repair_id, setRepair] = React.useState("");

  const [ButtonS, setButtonS] = React.useState(true);




  React.useEffect(() => {
    handleLogIn();
    if (repair_id != ""){
      var handle = setInterval(handleArrived, 5000);
    }
  });

  const handleArrived = async() =>{
    // console.log("hello")
      await axios.post('https://enigmatic-mesa-42065.herokuapp.com/user/status',{repair_id}).then((res) =>{
          setStatus(res.data.status)
          if (res.data.status == "Completed" || res.data.status == "Cancelled"){
            setCurrent(false)
          }
          
      }).catch((err) => {
          console.log(err);
      })
    }

  const getaddress = async (lat,lng) =>{
    var addressComponent
      await axios.get( 
       "http://www.mapquestapi.com/geocoding/v1/reverse?key="+KEY+"&location="+lat+","+lng+"&includeRoadMetadata=true&includeNearestIntersection=true",
        {
          headers: {
            "Content-type": "application/json"
          }
        }
      ).then(
        (response) => {
          console.log("Hello")
          //console.log(response.data)
          //console.log(response.data.results[0].locations[0].street);
          
          setStreet1(response.data.results[0].locations[0].street)
          setStreet2(response.data.results[0].locations[0].street)
        }
      )
     }
  
  const handleLogIn = async () => {
    
        await axios.get("https://enigmatic-mesa-42065.herokuapp.com/repair/get/6071ed0819292b46cccb5090", {
        })
        .then((response) => {

          var data = response.data;

          for (var i = 0; i < data.length; i++){
            if (data[i].status == "Completed" || data[i].status == "Cancelled"){

              setLati2(data[i].location.latitude)
              setLongi2(data[i].location.longitude)
              setDate2(dateFormat(data[i].date, "ddd mmm dd yyyy" ))
              setFare2(data[i].amount)
              setStatus2(data[i].status)


              //console.log(Lati, Longi)

              getaddress(data[i].location.latitude, data[i].location.longitude);

              setPast(true)

            }

            else {

              
                setLati(data[i].location.latitude)
                setLongi(data[i].location.longitude)
                setDate(dateFormat(data[i].date, "ddd mmm dd yyyy" ))
                setFare(data[i].amount)
                setStatus(data[i].status)
                setRepair(data[i]._id)


                //console.log(Lati, Longi)

                getaddress(data[i].location.latitude, data[i].location.longitude);

                setCurrent(true)
                setButtonS(false)
              

            
            }
           
          }

          
             
              
        
                
            

            
            //Alert.alert(response)
            console.log(response);
        })
        .catch((error) => {
            console.log(error)
            //Alert.alert("Unsuccessful")
        })
}
  

console.log(Current)
console.log(Past)

  return (
     <SafeAreaProvider>
       <ScrollView>
     <View style={styles.container}>
     <Text style = {{ textAlign : 'center', fontSize : 27, color :'#364f6b', fontWeight: 'bold', marginVertical: 20 }}>BOOK A CAR OR BIKE MECHANIC</Text>
     <View style = {{flexDirection : 'row'}}><Image
    
        source={{ uri: "https://i.ibb.co/dkL4G53/bike.jpg"}}
        style = {{width : 110, height : 110, marginHorizontal : 15}}
      />
     <Image
    
    source={{ uri: "https://i.ibb.co/6PWQLw8/car.jpg"}}
    style = {{width : 110, height : 110}}
  />
      </View>
     {ButtonS == true ? <TouchableOpacity onPress={() => {navigation.navigate('Contact')}}   style={styles.button}>
         <Text style={styles.buttonText}>BOOK NOW</Text>
       </TouchableOpacity> : null}
       {Current == true ? <View style = {{flexDirection : 'row'}}><TouchableOpacity onPress={() => {navigation.navigate('Contact')}}><Text style = {{color : '#364f6b' , width: 300, fontWeight : 'bold', fontSize : 25, borderWidth: 3, borderColor: '#3cb371', borderRadius: 15, backgroundColor : '#fff', marginVertical: 20, textAlign : 'left'}}>  Current Request {"\n"}  {date} {'\n'}  {Street1} {'\n'} {Status} {'\n'}  EXPECTED PKR {Fare}</Text></TouchableOpacity></View> : <Image source={{uri : "https://i.ibb.co/hsqMvdn/display.png"}} style={{ width: 300, height: 200}} />}
       {Past == true ? <View style = {{flexDirection : 'row'}}><Text style = {{color : '#364f6b' , width: 300, fontWeight : 'bold', fontSize : 25, borderWidth: 3, borderColor: '#98fb98', borderRadius: 15, backgroundColor : '#fff',  marginVertical: 0, textAlign : 'left'}}>  Past Request{"\n"}  {date2}{'\n'}  {Street2}{'\n'}  {Status2} {'\n'} PKR {Fare2}</Text></View> :  <Image source={{uri : "https://i.ibb.co/hsqMvdn/display.png"}} style={{ width: 300, height: 200}} />}    
          
       

       <StatusBar style="auto" />
       
      
     </View>
     </ScrollView>
     </SafeAreaProvider>  
  

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#f4511e",
    padding: 12,
    borderRadius: 60,
    marginVertical: 20,
  },
  buttonText: {
    fontSize : 20,
    color: '#fff',
    fontWeight: 'bold'
  }, 
 
});
