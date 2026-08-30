import React, { createContext, useState } from 'react';

export const NavBarContext = createContext(null);

const NavBarContextProvider = ({ children }) => {
    const [nav, setNav] = useState(false);

    return (
        <NavBarContext.Provider value={[nav, setNav]}>
            {children}
        </NavBarContext.Provider>
    );
};

export default NavBarContextProvider;