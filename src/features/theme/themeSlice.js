import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    list: [],
    isFetching: true,
  },
  reducers: {
    updateList(state, action) {
      return {
        ...state,
        list: action.payload,
      }
    },
    setAsFetched(state) {
      return {
        ...state,
        isFetching: false,
      }
    },
  }
})

export const { updateList, setAsFetched } = themeSlice.actions

export default themeSlice.reducer
