import { createContext, FC, useState } from 'react';
import { ILangs } from '../interfaces';

interface ContextProps {
  lang: ILangs;
  setLanguage: (lang: ILangs) => void;
}

const getInitialLang = () => {
  const defaultLang = 'en';
  const localStorageLang = localStorage.getItem('lang') as ILangs | null;
  const initialLang: ILangs = localStorageLang ? localStorageLang : defaultLang;

  localStorage.setItem('lang', initialLang);
  return initialLang;
}

export const LangContext = createContext({} as ContextProps);

const LangState: FC = ({ children }) => {
  const [lang, setLang] = useState<ILangs>(getInitialLang());

  const setLanguage = (name: ILangs) => {
    localStorage.setItem('lang', name);
    setLang(name);
  }

  return (
    <LangContext.Provider value={{ lang, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangState;