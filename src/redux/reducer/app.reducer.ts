import {createSlice} from '@reduxjs/toolkit';
import {AppStatus} from '../types/auth.type';
import {Redux} from '../types/redux.type';
import {Report} from '../types/main.type';

const initialState: AppStatus = {
  isReady: false,
};

const reducer = createSlice({
  name: Redux.app,
  initialState,
  reducers: {
    // create_type_report: (state: Report) => {
    //   state.room_id = state.room_id,
    //   state.typereport = state.typereport,
    //   state.description = state.description,
    //   state.url = state.url,
    // }
  },
});

export const AppActions = reducer.actions;
export const AppReducer = reducer.reducer;
