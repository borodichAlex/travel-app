import React from 'react';
import { getLocaleDate } from '../InfoDate/utils/getLocaleString';
import { IInfoDateProps } from './types';
import { Clock } from './components/Clock';
import { ILangs } from '../../interfaces';

type ILocales = {
  [key in ILangs]: string;
};

const locales: ILocales = {
  'en': 'en-US',
  'be': 'be-BE',
  'ru': 'ru-RU',
}

const InfoDate: React.FC<IInfoDateProps> = (props) => {
  const { timezone, lang } = props;

  const locale = locales[lang];

  const date = getLocaleDate(new Date(), timezone, locale);

  if (date) {
    return <h3>{date} <Clock {...{timezone, locale}} /></h3>
  }

  return <span>Calc date...</span>

}

export default InfoDate;
