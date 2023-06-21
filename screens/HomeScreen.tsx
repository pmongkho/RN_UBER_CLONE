import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLEMAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../redux/slices/navSlice'
import NavFavorites from '../components/NavFavorites'

const HomeScreen = () => {
	const dispatch = useDispatch()
	return (
		<SafeAreaView tw='bg-white h-full'>
			<View tw='p-5'>
				<Image
					style={{ resizeMode: 'contain' }}
					tw='w-[100px] h-[100px]'
					source={{
						uri: 'https://links.papareact.com/gzs',
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder='Where From?'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					fetchDetails={true}
					enablePoweredByContainer={false}
					textInputProps={{
						// placeholderTextColor: '#32a852',
						returnKeyType: 'search',
					}}
					minLength={2}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details?.geometry.location,
								description: data.description,
							})
						)
						dispatch(setDestination(null))
					}}
					query={{
						key: GOOGLEMAPS_API_KEY,
						language: 'en',
					}}
					nearbyPlacesAPI='GooglePlacesSearch'
					debounce={400}
				/>
				<NavOptions />
				<NavFavorites/>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen
