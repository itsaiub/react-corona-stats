import React, { useReducer, createContext } from "react";
import useCombinedReducers from "use-combined-reducers";
import { countryReducer, initialCountryState } from "./country/reducers";
import { worldReducer, initialWorldState } from "./world/reducers";

export const GlobalContext = createContext(null);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useCombinedReducers({
    country: useReducer(countryReducer, initialCountryState),
    world: useReducer(worldReducer, initialWorldState)
  });

  const value = { country: state.country, world: state.world, dispatch };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
