import React from "react";

import { Text, TouchableOpacity } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "./screens/HomeScreen";
import TaskFormScreen from "./screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "ห้องสมุด",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: "#fff" },
          })}
        />
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={() => ({
            title: "Create a Task",
            headerStyle: { backgroundColor: "#222f3e" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
