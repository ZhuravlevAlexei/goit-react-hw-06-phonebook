import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

const nameAndNumberSlice = createSlice({
  name: 'nameAndNumber',
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      // console.log('stttn', state);
      return {
        name: action.payload,
        number: state.number,
      };
    },
    updateNumber(state, action) {
      // state.number = action.payload;
      return {
        name: state.name,
        number: action.payload,
      };
    },
  },
});

export const selectName = state => state.nameAndNumber.name;
export const selectNumber = state => state.nameAndNumber.number;

export const { updateName, updateNumber } = nameAndNumberSlice.actions;

export default nameAndNumberSlice.reducer;
