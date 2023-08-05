import React from 'react';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import IconTranslate from 'shared/assets/icon/language.svg';
import cls from './LanguageSwitcher.module.scss';

type LanguageSwitcherProps = {
	className?: string;
};

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({className}) => {
	const {i18n} = useTranslation();

	const toggleLanguages = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(r => r);
	};

	return (
		<Button
			type='button'
			aria-label='lunguages'
			theme={ThemeButton.CLEAR}
			onClick={toggleLanguages}
		>
			<IconTranslate width={40} height={40}/>
		</Button>
	);
};
