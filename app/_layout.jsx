import {Tabs} from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { useFonts, Montserrat_400Regular} from '@expo-google-fonts/montserrat';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {

  const [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,

  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;

  }



    return (
        <Tabs
        screenOptions={{
            headerShown: false,
           tabBarActiveTintColor: "rgb(120, 199, 223)",
           tabBarInactiveTintColor: "rgb(40, 114, 143)",
            tabBarStyle: {
                
                backgroundColor:"rgb(33, 33, 150)", 
                
            }
        }}
        >
            <Tabs.Screen name="index" 
            options={{title: "Início ", headerShown: false,
                tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color}/>
            }}
            />
             <Tabs.Screen name="pageone" 
            options={{title: "Obrigatório ", headerShown: false,
                tabBarIcon: ({color}) => <AntDesign name="exclamation-circle" size={24} color={color}/>
            }}
            />
            <Tabs.Screen name="pagetwo" 
            options={{title: "Livre ", headerShown: false,
                tabBarIcon: ({color}) => <AntDesign name="unlock" size={24} color={color}/>
            }}
            />
            <Tabs.Screen name="pagethree" 
            options={{title: "Sobre ", headerShown: false,
                tabBarIcon: ({color}) => <SimpleLineIcons name="user" size={24} color={color}/>
            }}
            />
            
        </Tabs>
    )
}