import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StopwatchScreen from '../screens/stopwatchScreen'
import TimerScreen from '../screens/timerScreen'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { SafeAreaView } from 'react-native-safe-area-context'

const Tab = createMaterialTopTabNavigator();

const myTabs = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen
                    name="Timer"
                    component={TimerScreen} />
                <Tab.Screen
                    name="Stopwatch"
                    component={StopwatchScreen} />

            </Tab.Navigator>
            
        </SafeAreaView>
    )

}

export default myTabs

const styles = StyleSheet.create({})