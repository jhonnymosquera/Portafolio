import { Context } from './Context';

function ContextProvider({ children }) {
	return <Context.Provider value={{  }}>{children}</Context.Provider>;
}

export default ContextProvider;
