import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const navSlice = createSlice({
	name: 'nav',
	initialState: {
		origin: null,
		destination: null,
		travelTimeInformation: null,
	},
	reducers: {
		setOrigin: (state, action) => {
			state.origin = action.payload
		},

		setDestination: (state, action) => {
			state.destination = action.payload
		},
		setTravelTimeInformation: (state, action) => {
			state.travelTimeInformation = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInformation } =
	navSlice.actions

// Selectors
export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation

export default navSlice.reducer
