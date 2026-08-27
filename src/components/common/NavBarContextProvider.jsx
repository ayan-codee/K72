import React, { createContext, useState } from 'react';

// 1. Named export (Curly braces ke sath import karne ke liye)
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