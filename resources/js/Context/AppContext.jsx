import React, { createContext, useContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
	const [state, setState] = useState({});

	const getNavMenu = () => {
		return state?.navMenu || {};
	}

	const setNavMenu = (newNavMenu) => {
		setState(oldState => {
			return {
				...oldState,
				navMenu: newNavMenu
			}
		});
	}

	return (
		<AppContext.Provider value={{
			navMenu: getNavMenu(),
			setNavMenu
		}}>
			{children}
		</AppContext.Provider>
	);
};

// Custom hook for consuming the context
export const useAppContext = () => {
	return useContext(AppContext);
};
