import * as Types from "../actionTypes";

export const initialCountryState = {
  data: {},
  loading: false,
  error: null
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case Types.FETCHING_COUNTRY_DATA:
      return { ...state, loading: true };
    case Types.FETCHED_COUNTRY_DATA:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload
      };
    case Types.FETCHING_COUNTRY_DATA_ERROR:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload
      };
    default:
      return state;
  }
};
