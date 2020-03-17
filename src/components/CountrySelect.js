import React, { useContext, useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";
import { GlobalContext } from "../context/globalState";
import { fetchCountryData } from "../context/country/countryActions";

const CountrySelect = () => {
  const { world, dispatch } = useContext(GlobalContext);
  const [selectCountry, setSelectCountry] = useState("BD");

  useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          fetchCountryData(dispatch, selectCountry);
        }
      } catch (e) {
        if (!isCancelled) {
          throw e;
        }
      }
    };
    runAsync();

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectCountry]);

  return (
    <>
      {world.countryList && (
        <ReactFlagsSelect
          className="block mt-20"
          searchable={true}
          defaultCountry={selectCountry}
          searchPlaceholder="Search for a country"
          onSelect={(code) => setSelectCountry(world.countryList[code])}
        />
      )}
    </>
  );
};

export default CountrySelect;
