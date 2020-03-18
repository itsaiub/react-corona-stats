import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { ReactComponent as CoronaLogoSvg } from "./assets/corona-logo.svg";

import CountrySelect from "./CountrySelect";

import { fetchWorldData } from "../context/world/worldActions";

import State from "./State";

const Hero = () => {
  React.useEffect(() => {
    let isCancelled = false;
    const runAsync = async () => {
      try {
        if (!isCancelled) {
          fetchWorldData(dispatch);
        }
      } catch (e) {
        if (!isCancelled) {
          console.log("afsdf");
          throw e;
        }
      }
    };
    runAsync();

    return () => {
      isCancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { world, country, dispatch } = useContext(GlobalContext);

  return (
    <section className="flex justify-center items-center flex-col">
      <Header />
      <State
        title="Global Case"
        data={world.data}
        loading={world.loading}
        error={world.error}
      />
      <CountrySelect />
      <State
        title="Local Case"
        data={country.data}
        loading={country.loading}
        error={country.error}
      />
    </section>
  );
};

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col px-2 text-center">
      <CoronaLogoSvg
        fill="blue"
        x="100px"
        y="100px"
        width="150px"
        height="150px"
        className="coronaLogo"
      />
      <h1 className="text-2xl md:text-3xl font-semibold font-serif">
        Covid-19 Outbreak
      </h1>
      <p className="mt-1 text-sm md:text-lg">
        Data source from&nbsp;
        <a
          className="text-blue-600"
          href="https://github.com/mathdroid/covid-19-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Muhammad Mustadi's&nbsp;
        </a>
        API
      </p>
    </div>
  );
};

export default Hero;
