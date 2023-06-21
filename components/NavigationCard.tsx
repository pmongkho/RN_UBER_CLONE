import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLEMAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination } from '../redux/slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavorites from './NavFavorites'
import { Icon } from '@rneui/themed'

const NavigationCard = () => {
	const dispatch = useDispatch()
	const navigation: any = useNavigation()
	return (
		<SafeAreaView tw='bg-white flex-1'>
			<Text tw='text-center py-5 text-xl'>Good Morning, Leslie</Text>
			<View tw='border-t border-gray-200 flex-shrink'>
				<View>
					<GooglePlacesAutocomplete
						placeholder='Where to?'
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						fetchDetails={true}
						minLength={2}
						textInputProps={{
							// placeholderTextColor: '#32a852',
							returnKeyType: 'search',
						}}
						query={{
							key: GOOGLEMAPS_API_KEY,
							language: 'en',
						}}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details?.geometry.location,
									description: data.description,
								})
							)
							navigation.navigate('RideOptionsCard')
						}}
						styles={toInputBoxStyles}
					/>
				</View>

				<NavFavorites />
				<View tw='flex-row bg-white justify-evenly py-2 mt-auto border-gray-100'>
					<TouchableOpacity
						onPress={() => navigation.navigate('RideOptionsCard')}
						tw='flex justify-between flex-row bg-black w-24 px-4 py-3 rounded-full'
					>
						<Icon name='car' type='font-awesome' color='white' size={16} />

						<Text tw='text-white text-center'>Rides</Text>
					</TouchableOpacity>
					<TouchableOpacity tw='flex flex-row justify-between w-24 px-4 py-3 rounded-full'>
						<Icon
							name='fast-food-outline'
							type='ionicon'
							color='black'
							size={16}
						/>
						<Text tw='text-center'>Eats</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default NavigationCard

const toInputBoxStyles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: '#DDDDDF',
		borderRadius: 0,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
})
