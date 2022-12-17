import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { planetsSlice } from '../planets';

export const store = configureStore({
	reducer: {
		planets: planetsSlice.reducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
