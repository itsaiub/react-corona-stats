import * as Types from "../actionTypes";

export const initialWorldState = {
  data: {},
  loading: false,
  countryList: {},
  error: null
};

export const worldReducer = (state, action) => {
  switch (action.type) {
    case Types.FETCHING_WORLD_DATA:
      return { ...state, loading: true };
    case Types.FETCHED_WORLD_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
        countryList: action.payload.countryList
      };
    case Types.FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        countryList: {},
        error: action.payload
      };
    default:
      return state;
  }
};
