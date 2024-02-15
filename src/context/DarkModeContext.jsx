import { createContext, useContext, useEffect, useState } from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();
export default function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(
		'isDarkMode',
		window.matchMedia('(prefers-color-scheme: dark)').matches,
	);
	const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark-mode');
			document.documentElement.classList.remove('light-mode');
		} else {
			document.documentElement.classList.remove('dark-mode');
			document.documentElement.classList.add('light-mode');
		}
	}, [isDarkMode]);
	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	const context = useContext(DarkModeContext);
	if (context == undefined)
		throw new Error('dark mode context was used outside of dark mode provider');
	return context;
}
