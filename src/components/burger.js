import React, { useState, useContext } from "react";
import { slide as Menu } from "react-burger-menu";
import { GiHamburgerMenu } from "react-icons/gi";

// make a new context
const MyContext = React.createContext();

// create the provider
export const MyProvider = (props) => {
  const [menuOpenState, setMenuOpenState] = useState(false);

  return (
    <MyContext.Provider
      value={{
        isMenuOpen: menuOpenState,
        toggleMenu: () => setMenuOpenState(!menuOpenState),
        stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen),
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

// create a button that calls a context function to set a new open state when clicked
export const Button = () => {
  const ctx = useContext(MyContext);
  return (
    <GiHamburgerMenu className="burgermenu-icon" onClick={ctx.toggleMenu}>
      Toggle menu
    </GiHamburgerMenu>
  );
};

// create a navigation component that wraps the burger menu
export const Navigation = () => {
  const ctx = useContext(MyContext);

  return (
    <Menu
      customBurgerIcon={false}
      isOpen={ctx.isMenuOpen}
      onStateChange={(state) => ctx.stateChangeHandler(state)}
    />
  );
};
