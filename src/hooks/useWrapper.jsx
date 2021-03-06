import React, { createContext, useContext, useState } from "react";

const WrapperContext = createContext({
  values: {},
  setValues: v => v
});

const useWrapper = () => {
  const context = useContext(WrapperContext);
  if (context === undefined) {
    throw new Error("useWrapper must be used within a WrapperProvider");
  }

  return context;
};

const WrapperProvider = ({ ...props }) => {
  const [values, setValues] = useState({
      color: "#48B5FE",
      url: "mi_dominio.plankton.com/proyectos/plan_de_ventas",
      name: "Dofleini"
  });

  return (
    <WrapperContext.Provider
      value={{
        values,
        setValues
      }}
      {...props}
    />
  );
};

export { useWrapper, WrapperProvider };
