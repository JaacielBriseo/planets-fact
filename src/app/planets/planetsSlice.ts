import { createSlice } from '@reduxjs/toolkit';
import planetsData from '../../data/data.json';
import { InitialStateProps } from '../../interfaces';

const initialState: InitialStateProps = {
	planets: planetsData,
	isMobileMenuOpen: false,
};
export const planetsSlice = createSlice({
	name: 'planets',
	initialState: initialState,
	reducers: {
		toggleMobileMenu : (state:InitialStateProps) => {
			state.isMobileMenuOpen = !state.isMobileMenuOpen
		}
	},
});

// Action creators are generated for each case reducer function
export const {toggleMobileMenu} = planetsSlice.actions;
