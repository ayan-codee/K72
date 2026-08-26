import React, { createContext, useState } from 'react'

const NavBarContext = () => {
    const NavbarContext = createContext(child)
    const [setNav, setsetNav] = useState(false);
  return (
    <NavbarContext.Provider value={[setNav, setsetNav]}>
        {child}
    </NavbarContext.Provider>
  )
}

export default NavBarContext