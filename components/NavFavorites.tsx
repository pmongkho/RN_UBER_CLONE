import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'

const data = [
	{
		id: '66c4e7fa-0be7-11ee-be56-0242ac120002',
		icon: 'home',
		location: 'Home',
		destination: 'Liberal, Kansas, USA',
	},
	{
		id: '6ca217ec-0be7-11ee-be56-0242ac120002 ',
		icon: 'briefcase',
		location: 'Work',
		destination: 'Houston, Texas, USA',
	},
]

const NavFavorites = () => {
	return (
		<FlatList
			data={data}
			automaticallyAdjustContentInsets={false}
			keyExtractor={(item) => item.id}
			ItemSeparatorComponent={() => <View tw='bg-gray-200 h-[0.5]' />}
			renderItem={({ item: { location, destination, icon } }) => (
				<TouchableOpacity tw='flex-row items-center p-5'>
					<View tw='mr-4 rounded-full bg-gray-300 p-3'>
						<Icon name={icon} type='ionicon' color='white' size={18} />
					</View>
					<View>
						<Text tw='font-semibold text-lg'>{location}</Text>
						<Text tw='text-gray-500'>{destination}</Text>
					</View>
				</TouchableOpacity>
			)}
		/>
	)
}

export default NavFavorites
