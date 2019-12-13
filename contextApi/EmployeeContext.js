import React from 'react';

const EmployeeContext = React.createContext({});

export const EmployeeProvider = EmployeeContext.Provider;
export const EmployeeConsumer = EmployeeContext.Consumer;

export default EmployeeContext;

