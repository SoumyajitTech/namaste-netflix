import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'userSlice',
	initialState: null,
	reducers: {
		addUserDetails: (state, action) => {
			return action.payload;
		},
		removeUserDetails: () => {
			return null;
		},
	},
});

export const { addUserDetails, removeUserDetails } = userSlice.actions;
export default userSlice.reducer;
