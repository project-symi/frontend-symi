import React from 'react';

const AdminContext = React.createContext({});

export const AdminProvider = AdminContext.Provider;
export const AdminConsumer = AdminContext.Consumer;

export default AdminContext;

