type IFnGetLocale = {
  (date: Date, timeZone: string, locale: string): string;
}

type Options = {
  [key: string]: 'numeric' | 'long' | 'short' | 'narrow' | '2-digit';
}

const optionsDate: Options = { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' };

const getLocaleDate: IFnGetLocale = (date, timeZone, locale) => {
  return date.toLocaleDateString(locale, {timeZone, ...optionsDate});
}

const optionsTime: Options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

const getLocaleTime: IFnGetLocale = (date, timeZone, locale) => {
  return date.toLocaleTimeString(locale, {timeZone, ...optionsTime});
}

export {getLocaleDate, getLocaleTime};