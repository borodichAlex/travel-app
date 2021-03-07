import React, { useState, useEffect } from "react";
import {getLocaleTime} from '../utils/getLocaleString';

type IClockProps = {
  timezone: string;
  locale: string;
}

const Clock: React.FC<IClockProps> = ({timezone, locale}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <span>{getLocaleTime(time, timezone, locale)}</span>
}

export { Clock };