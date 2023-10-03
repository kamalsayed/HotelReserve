

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';

import BottomTabNav from './src/navigations/BottomTabNav'


import { Provider } from 'react-redux';
import store from './src/redux/store';





function App(): JSX.Element {
  

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  

  return (
    <Provider store={store}>
    <NavigationContainer >
        
        <SafeAreaView  style={backgroundStyle}>
          <StatusBar
           barStyle={isDarkMode ? 'light-content' : 'dark-content'}
             backgroundColor={backgroundStyle.backgroundColor}
           />
         </SafeAreaView>
         <View>


         </View>
         <>

         <BottomTabNav />
         </>
         
    </NavigationContainer>

    </Provider>

  );
}

const styles = StyleSheet.create({

});

export default App;
