import { createSlice } from '@reduxjs/toolkit';
import planetsData from '../../data/data.json';
import { InitialStateProps } from '../../interfaces';

const initialState: InitialStateProps = {
	planets: planetsData,
	isMobileMenuOpen: false,
	content: {
		isOverview: true,
		isStructure: false,
		isSurface: false,
	},
};
export const planetsSlice = createSlice({
	name: 'planets',
	initialState: initialState,
	reducers: {
		toggleMobileMenu: (state: InitialStateProps) => {
			state.isMobileMenuOpen = !state.isMobileMenuOpen;
		},
		setContent: (state: InitialStateProps, { payload }: { payload: string }) => {
			switch (payload) {
				case 'Overview':
					state.content.isOverview = true;
					state.content.isStructure = false;
					state.content.isSurface = false;
					break;
				case 'Structure':
					state.content.isOverview = false;
					state.content.isStructure = true;
					state.content.isSurface = false;
					break;
				case 'Surface':
					state.content.isOverview = false;
					state.content.isStructure = false;
					state.content.isSurface = true;
					break;
				default:
					break;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleMobileMenu, setContent } = planetsSlice.actions;
