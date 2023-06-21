import { View, Text } from 'react-native'
import React, { useEffect, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../redux/slices/navSlice'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLEMAPS_API_KEY } from '@env'
import {useDispatch} from 'react-redux'

const Map = () => {
	const origin: any = useSelector(selectOrigin)
	const destination: any = useSelector(selectDestination)
	const mapRef: any = useRef(null)
	const dispatch = useDispatch()

	useEffect(() => {
		if (!origin || !destination) return
		mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
			edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
		})
	}, [origin, destination])

	useEffect(() => {
		if (!origin || !destination) return
		const getTravelTime = async () => {
			const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLEMAPS_API_KEY}`
		
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
			})
		
		}

		getTravelTime()
	}, [origin, destination, GOOGLEMAPS_API_KEY])

	return (
		<MapView
			ref={mapRef}
			tw='flex-1'
			mapType='mutedStandard'
			initialRegion={{
				latitude: origin?.location.lat,
				longitude: origin?.location.lng,
				latitudeDelta: 0.005,
				longitudeDelta: 0.005,
			}}
		>
			{origin && destination && (
				<MapViewDirections
					origin={origin.description}
					destination={destination.description}
					apikey={GOOGLEMAPS_API_KEY}
					strokeColor='black'
					strokeWidth={3}
				/>
			)}

			{origin?.location && (
				<Marker
					coordinate={{
						latitude: origin.location.lat,
						longitude: origin.location.lng,
					}}
					title='origin'
					description={origin.description}
					identifier='origin'
				/>
			)}

			{destination?.location && (
				<Marker
					coordinate={{
						latitude: destination.location.lat,
						longitude: destination.location.lng,
					}}
					title='destination'
					description={destination.description}
					identifier='destination'
				/>
			)}
		</MapView>
	)
}

export default Map
