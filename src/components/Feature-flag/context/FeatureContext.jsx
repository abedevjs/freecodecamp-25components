import { createContext, useContext, useEffect, useState } from "react";
import FeatureFlagDataServiceCall from "../featureData";

const FeatureContext = createContext();

function FeatureContextProvider({ children }) {
  const [loading, setIsLoading] = useState(false);
  const [enableFlags, setEnableFlags] = useState({});

  async function fetchFeatureFlags() {
    try {
      setIsLoading(true);
      const response = await FeatureFlagDataServiceCall();
      setEnableFlags(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureContext.Provider value={{ loading, enableFlags }}>
      {children}
    </FeatureContext.Provider>
  );
}

function FeatureContextHook() {
  const context = useContext(FeatureContext);
  if (context === undefined)
    throw new Error("Using Feature Context outside the provider");

  return context;
}

export { FeatureContextProvider, FeatureContextHook };
