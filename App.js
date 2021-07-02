import * as React from 'react';
import { View, Text,Button,StyleSheet,Image,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators  } from '@react-navigation/stack';
import { useIsFocused } from "@react-navigation/core";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color, Easing } from 'react-native-reanimated';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Settings({ navigation }) {
  const isFocused = useIsFocused();
  return (
    <ImageBackground style={{flex:1}} source={{uri:'https://wallpaperaccess.com/full/830757.jpg'}}>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: isFocused ? "green" : "black" }}>yo!!!</Text>
      <Button title="Heyaaa" onPress={() => navigation.navigate("Home")}/>
   


      
     
    </View>
    </ImageBackground>
    
  );
}

function Models({ navigation }) {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'teal' }}>
      <Text style={{ color: isFocused ? "blue" : "black" }}>HI!!</Text>
      <Button title="Have a good day" onPress={() => navigation.navigate("Profile")}/>
     
    </View>
  );
}

function Droid({ navigation }) {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#5DF60A' }}>
      <Text>Messages</Text>
      <Button title="IOS FAM" onPress={() => navigation.navigate("Settings")}/>
     
    </View>
  );
}
function Profile({ navigation }) {
  const isFocused = useIsFocused();
  return (

    <ImageBackground style={{flex:1}} source={{uri:'https://i.pinimg.com/736x/d4/66/d4/d466d46d735f2c79cb17c6abebc294e4.jpg'}}>
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Profile</Text>
<Button title="Go To Home Screen" onPress={() => navigation.navigate("Home")}/>

   


      
     
    </View>
    </ImageBackground>
  );
}

const Home = () => 
 (
    <Tab.Navigator screenOptions={({route}) => ({
      tabBarIcon:({color,size})=>{
         let iconname
         if(route.name =='Droid')
         {
           iconname='ios-home'
         }
         else if(route.name=='models'){
           iconname='logo-rss'

         }
         //return <Ionicons name={iconname} size={size} color={color}/>
      }
    })

    }>
    
      <Tab.Screen name="Droid" component={Droid} />
      <Tab.Screen name="Models" component={Models} />
    </Tab.Navigator>
  );
  

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        gestureEnabled:true, 
        gestureDirection:"horizontal",
        transitionSpec:{
          open:config,
          close:config,
        }

      }}
      headerMode="float">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

const closeConfig={
  animation:'timing', 
  config:{
    duration:500,
    easing:Easing.linear
  }

}
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});
export default App;
