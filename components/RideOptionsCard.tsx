import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../redux/slices/navSlice'
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item'

const RideOptionsCard = () => {
	const navigation = useNavigation()
	const [selected, setSelected]: any = useState(null)
	const travelTimeInformation: any = useSelector(selectTravelTimeInformation)
	// If we have SURGE pricing, this goes up
	const SURGE_CHARGE_RATE = 1.5

	const data = [
		{
			id: 'Uber-X-123',
			title: 'UberX',
			multiplier: 1,
			image: 'https://links.papareact.com/3pn',
		},
		{
			id: 'Uber-XL-456',
			title: 'Uber XL',
			multiplier: 1.2,
			image: 'https://links.papareact.com/5w8',
		},
		{
			id: 'Uber-LUX-789',
			title: 'Uber LUX',
			multiplier: 1.75,
			image: 'https://links.papareact.com/7pf',
		},
	]

	return (
		<SafeAreaView tw=' bg-white flex-grow'>
			<View>
				<TouchableOpacity
					onPress={() => navigation.goBack}
					tw='absolute top-3 left-5 p-3 rounded-full'
				>
					<Icon name='chevron-left' type='fontawesome' />
				</TouchableOpacity>
				<Text tw='text-center py-5 text-xl'>
					Select a Ride - {travelTimeInformation?.distance?.text}
				</Text>
			</View>

			<FlatList
				data={data}
				keyExtractor={(item) => item.id}
				renderItem={({ item: { id, title, multiplier, image }, item }) => (
					<TouchableOpacity
						onPress={() => setSelected(item)}
						tw={` ${
							id === selected?.id && 'bg-gray-200'
						} flex-row justify-between items-center px-10`}
					>
						<Image
							tw='w-[100] h-[100]'
							style={{ resizeMode: 'contain' }}
							source={{
								uri: image,
							}}
						/>
						<View tw=' -ml-6'>
							<Text tw=' text-xl font-semibold'>{title}</Text>
							<Text>{travelTimeInformation?.duration?.text} Travel Time</Text>
						</View>
						<Text tw='text-xl'>
							{new Intl.NumberFormat('en-us', {
								style: 'currency',
								currency: 'USD',
							}).format(
								(travelTimeInformation?.duration?.value *
									SURGE_CHARGE_RATE *
									multiplier) /
									100
							)}
						</Text>
					</TouchableOpacity>
				)}
			/>
			<View tw=' mt-auto border-t border-gray-300'>
				<TouchableOpacity
					disabled={!selected}
					tw={` bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
				>
					<Text tw=' text-center text-white text-xl'>
						Choose {selected?.title}
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default RideOptionsCard
