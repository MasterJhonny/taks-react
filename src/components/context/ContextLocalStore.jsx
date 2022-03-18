import React from 'react'

const LocalStoreContext = React.createContext(null);

function LocalStoreContextProvider({ children, value }) {

    return (
        <LocalStoreContext.Provider value={value}>
            {children}
        </LocalStoreContext.Provider>
    );
}

export { LocalStoreContext, LocalStoreContextProvider };