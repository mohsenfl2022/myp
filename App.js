import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
 
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
 
 import Main from './res/Screens/Main';
import MyReducers from './res/Store/Reducers/MyReducers';

const rootReducer = combineReducers({
    RData: MyReducers,
     
});

const store = createStore(rootReducer);


const Stack = createStackNavigator();

function App() { 
    return (
        
        <SafeAreaProvider style={{ backgroundColor: 'transparent' }}   >

            
            <Provider store={store}>
            <NavigationContainer>                 
                <Stack.Navigator >
                    <Stack.Screen name= "Main" component={Main} options={{ headerShown: false }} />  
                   
            </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            </SafeAreaProvider>
        
    );
}

export default App;