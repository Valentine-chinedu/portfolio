import React, { useState } from 'react';

const GlobalStateContext = React.createContext({});

export const GlobalStateProvider = ({ children }) => {
	const [openSideBar, setOpenSideBar] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<GlobalStateContext.Provider
			value={{
				openSideBar,
				setOpenSideBar,
				isLoaded,
				setIsLoaded,
			}}
		>
			{children}
		</GlobalStateContext.Provider>
	);
};

export default GlobalStateContext;
