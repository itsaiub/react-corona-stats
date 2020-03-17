import Axios from "axios";
import APIUrls from "../../config/APIUrls";
import * as Types from "../actionTypes";

export const fetchCountryData = async (dispatch, code = "BD") => {
  try {
    dispatch({
      type: Types.FETCHING_COUNTRY_DATA
    });
    const { data } = await Axios.get(`${APIUrls}/countries/${code}`);

    console.log(data);

    dispatch({
      type: Types.FETCHED_COUNTRY_DATA,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: Types.FETCHING_COUNTRY_DATA_ERROR,
      payload: error.response ? error.response.data.error : null
    });
  }
};
