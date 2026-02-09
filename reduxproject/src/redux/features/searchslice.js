import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setquery(state, action) {
      state.query = action.payload;
    },
    setactivetab(state, action) {
      state.activeTab = action.payload;
    },
    setresults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },
    setloading(state, action) {
      state.loading = true;
      state.error = null;
    },
    seterror(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setquery,
  setactivetab,
  seterror,
  setloading,
  setresults,
  clearResults,
} = searchSlice.actions;

export default searchSlice.reducer;
