import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface PatientsState {
  value: Array<string>;
}

const initialState: PatientsState = {
  value: []
}

export const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
      setPatients: (state, action: PayloadAction<Array<string>>) => {
        state.value = action.payload;
      },
    },
});

export const { setPatients } = patientsSlice.actions;

export const fetchUserIDs = (): AppThunk => async dispatch => {
  const response: Response = await fetch('http://localhost:8000/inventory/users');
  const results = await response.json();
  const userIDs = results.data;
  dispatch(setPatients(userIDs));
}

export const selectPatients = (state: RootState) => state.patients.value;

export default patientsSlice.reducer;
