import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import {useSelector} from 'react-redux'
import {selectOrigin} from '../redux/slices/navSlice'

const data = [
	{
		id: '123',
		title: 'Get a Ride',
		image: 'https://links.papareact.com/3pn',
		screen: 'MapScreen',
	},
	// {
	// 	id: '456',
	// 	title: 'Order Food',
	// 	image: 'https://links.papareact.com/28w',
	// 	screen: 'EatsScreen', // Not being built
	// },
]

const NavOptions = () => {
	const navigation: any = useNavigation()
	const origin = useSelector(selectOrigin)
	return (

		<FlatList
			keyExtractor={(item) => item.id}
			data={data}
			horizontal
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen )}
					tw='p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40'
					disabled={!origin}
				>
					<View tw={`${!origin && 'opacity-20'}`}>
						<Image
							style={{ resizeMode: 'contain' }}
							tw='w-[120px] h-[120px] object-none'
							source={{
								uri: item.image,
							}}
						/>
						<Text tw='mt-2 text-lg font-semibold'>{item.title}</Text>
						<View tw='p-2 bg-black rounded-full w-10 mt-4'>
							<Icon name='arrowright' color='white' type='antdesign' />
						</View>
					</View>
				</TouchableOpacity>
			)}
		/>
	)
}

export default NavOptions
