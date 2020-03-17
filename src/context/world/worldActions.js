import Axios from "axios";
import APIUrls from "../../config/APIUrls";
import * as Types from "../actionTypes";

export const fetchWorldData = async (dispatch) => {
  try {
    dispatch({
      type: Types.FETCHING_WORLD_DATA
    });
    const [res1, res2] = await Promise.all([
      Axios.get(APIUrls),
      Axios.get(`${APIUrls}/countries`)
    ]);

    const { data } = res1;
    const { data: countryList } = res2;
    dispatch({
      type: Types.FETCHED_WORLD_DATA,
      payload: { data, countryList: countryList.iso3 }
    });
  } catch (error) {
    dispatch({
      type: Types.FETCHING_ERROR,
      payload: error.response ? error.response.data.error : null
    });
  }
};
