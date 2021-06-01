import React, { useState } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, CheckBox, StatusBar, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {

    const [isSelected1, setSelection1] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);

    /*const initialize = () => {
        setSelection1(false);
        setSelection2(false);
        setSelection3(false);
        setSelection4(false);
      }*/
    
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

      <TouchableOpacity style={styles.submit} onPress = {Alert("Report Submitted")}>
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
    margin: 2,
    fontSize: 18,
    borderWidth: 2,
    width: 280,
    textAlign: 'center',
    fontWeight : 'bold',
    color: '#364f6b',
    borderRadius:20,
    backgroundColor : '#fff',
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
    marginBottom:50,
    marginVertical: 10,
  }
});
