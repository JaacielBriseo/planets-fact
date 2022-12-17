import { createSlice } from '@reduxjs/toolkit';
import planetsData from '../../data/data.json';
import { InitialStateProps } from '../../interfaces';

const initialState: InitialStateProps = {
	planets: planetsData,
	isMobileMenuOpen: false,
	content: {
		isOverviewActive: true,
		isStructureActive: false,
		isSurfaceActive: false,
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
					state.content.isOverviewActive = true;
					state.content.isStructureActive = false;
					state.content.isSurfaceActive = false;
					break;
				case 'Structure':
					state.content.isOverviewActive = false;
					state.content.isStructureActive = true;
					state.content.isSurfaceActive = false;
					break;
				case 'Surface':
					state.content.isOverviewActive = false;
					state.content.isStructureActive = false;
					state.content.isSurfaceActive = true;
					break;
				default:
					break;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { toggleMobileMenu, setContent } = planetsSlice.actions;
