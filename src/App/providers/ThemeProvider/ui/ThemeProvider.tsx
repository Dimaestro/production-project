import React, {useMemo, useState} from 'react';
import {LOACAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../theme/ThemeContext';

const defaultTheme = localStorage.getItem(LOACAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type InterfaceProps = {
	children: React.ReactNode;
};
const ThemeProvider: React.FC<InterfaceProps> = ({children}) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(() => (
		{
			theme,
			setTheme,
		}
	), [theme]);

	return (
		<div>
			<ThemeContext.Provider value={defaultProps}>
				{children}
			</ThemeContext.Provider>
		</div>
	);
};

export default ThemeProvider;
