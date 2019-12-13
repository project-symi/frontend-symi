import React from "react";

const CeoContext = React.createContext({});

export const CeoProvider = CeoContext.Provider;
export const CeoConsumer = CeoContext.Consumer;

export default CeoContext;

