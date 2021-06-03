import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, CheckBox, StatusBar, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import axios from 'axios';


export default function App() {

    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

    var title1 = "Mechanic's demanour was inappropriate";
    var title2 = "Mechanic charged extra for the service";
    var title3 = "Mechanic arrived late with no plausible reason";
    var title4 = "Mechanic was ill-skilled for the task at hand";

    
    

      const Toggle_checkbox=()=>{


        if (isSelected1 == true){
          setSelection1(!isSelected1);
      }
      else {
        title1 = "";
      }
      if (isSelected2 == true){
        setSelection2(!isSelected2);
    }
    else {
      title2 = "";
    }
    if (isSelected3 == true){
      setSelection3(!isSelected3);
    }
    else {
      title3 = "";
    }
    if (isSelected4 == true){
      setSelection4(!isSelected4);
    }
    else {
      title4 = "";
    }


       
      handleLogIn();

      Alert.alert(
        "REPORT",
        "Your problem has been reported",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  
       
           
          }



          React.useEffect(() => {
            handleLogIn();
          }, []);
      
          const handleLogIn = async () => {
            try {
              const body = { title1, title2, title3, title4};
               await fetch( 
                "http://192.168.8.100:3000/report/register",
                {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json"
                  },
                  body: JSON.stringify(body)
                }
              ).then((response) => response.json())
              .then((responseJson) => {
              if (responseJson.status === 'success') {
                console.log("Registration successful");
                setRegSucc(true);
              }
              else {
                return(
                  Alert.alert(responseJson)
                )
              }
            })}
             catch (err) {
              console.error(err.message);
            }
          };
      
      



    
  return (
   
     
      
    <SafeAreaProvider>





    <View style={styles.container}>
      
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white" translucent = {true}/>

      <Text style = {{color : 'white' , fontSize : 30, fontStyle: 'normal', fontWeight: 'bold', borderColor: '#f4511e', width : 400, borderWidth: 2, borderRadius: 50, marginVertical: 10, backgroundColor: '#f4511e', textAlign : 'center'}}>REPORT</Text>
      
      <Text style={styles.header}>TICK ONE OR MORE OPTION BELOW</Text>
      
      

      <View style={styles.checkboxContainer}>
        <CheckBox
           value={isSelected1}
           onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Mechanic's demanour was inappropriate</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
          
        />
        <Text style={styles.label}>Mechanic charged extra for the service</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected3}
          onValueChange={setSelection3}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Mechanic arrived late with no plausible reason</Text>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected4}
          onValueChange={setSelection4}
          style={styles.checkbox}
          
        />
        
        <Text style={styles.label}>Mechanic was ill-skilled for the task at hand</Text>
      </View>

      <TouchableOpacity style={styles.submit} onPress = {() => Toggle_checkbox()}>
            <Text style={{color:"white", fontWeight: 'bold', fontSize : 20, }}>SUBMIT</Text>
        </TouchableOpacity>
      
  


    
      
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
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 50,
    marginVertical: 0,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  }, 
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
    fontSize: 18,
    borderWidth: 2,
    width: 280,
    textAlign: 'center',
    fontWeight : 'bold',
    color: '#364f6b',
    borderRadius:20,
    backgroundColor : '#fff',
    borderColor : '#fff',
    padding:5,
    marginBottom:5,
    flexDirection:"row",
  },
  submit:{
    width:"8%",
    backgroundColor: '#f4511e',
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:20
  },
  header:{
    fontSize:30,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:30,
    marginVertical: 10,
  }
});
