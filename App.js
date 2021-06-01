import Contact from './Contact';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import car from './assets/car.jpeg';
import bike from './assets/bike.jpeg';
import Home from './Home';
import Rates from './Rates';
import HowToUse from './HowToUse';
import WaitScreen from './WaitScreen';
import Report from './Report';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function ContactStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 30
          },
        }}
      />
    </Stack.Navigator>
  );
}



function HowToUseStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="How To Use"
        component={HowToUse}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 30
          },
        }}
      />
    </Stack.Navigator>
  );
}



function RatesStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Rates"
        component={Rates}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 30
          },
        }}
      />
    </Stack.Navigator>
  );
}



function ReportStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Report"
        component={Report}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 30
          },
        }}
      />
    </Stack.Navigator>
  );
}





function WaitStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Contact">
      <Stack.Screen
        name="Wait"
        component={WaitScreen}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign : 'center', //Set Header text style
            fontSize: 30
          },
        }}
      />
    </Stack.Navigator>
  );
}






function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#f4511e', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
          textAlign : 'center', //Set Header text style
          fontSize: 30
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'REPAIR DUKAAN', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}





export default function App() {


  

  return (
     <SafeAreaProvider>
        <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: 'Home' }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Rates"
          options={{ drawerLabel: 'Rates' }}
          component={RatesStack}
        />
        <Drawer.Screen
          name="Report"
          options={{ drawerLabel: 'Report' }}
          component={ReportStack}
        />
        <Drawer.Screen
          name="HowToUse"
          options={{ drawerLabel: 'Help' }}
          component={HowToUseStack}
        />
        <Drawer.Screen
          name="Contact"
          options={{ drawerLabel: 'Contact' }}
          component={ContactStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
    
  
       
      
    
     </SafeAreaProvider>  
  

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 60,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'normal',
  }, 
});
