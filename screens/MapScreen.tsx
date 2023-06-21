import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import NavigationCard from '../components/NavigationCard'
import RideOptionsCard from '../components/RideOptionsCard'
import {Icon} from '@rneui/themed'
import {useNavigation} from '@react-navigation/native'
    const Stack = createNativeStackNavigator()

const MapScreen = () => {
const navigation: any = useNavigation()
	return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')} tw=' bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-xl'>
                <Icon
                name='menu'
                />
            </TouchableOpacity>
			<View tw='h-1/2'>
				<Map />
			</View>
            <View tw='h-1/2'>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigationCard}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name='RideOptionsCard'
                        component={RideOptionsCard}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </View>
		</View>
	)
}

export default MapScreen
