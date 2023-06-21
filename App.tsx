import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreen'
import MapScreen from './screens/MapScreen'
import { store } from './redux/store'

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<KeyboardAvoidingView
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						tw='flex-1'
						keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
					>
						<Stack.Navigator screenOptions={{ headerShown: false }}>
							<Stack.Screen name='HomeScreen' component={HomeScreen} />
							<Stack.Screen name='MapScreen' component={MapScreen} />
						</Stack.Navigator>
					</KeyboardAvoidingView>
				</SafeAreaProvider>
			</NavigationContainer>
		</Provider>
	)
}
