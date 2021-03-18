import { useState, Fragment, useEffect } from 'react';
import {
  List,
  ListItem,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment
} from '@material-ui/core';

const apiKey = '698b3c27b9d5392f461c';

function getConvertedCurrency(from: string, to: string) {
  const query = from + '_' + to;

  const url = 'https://free.currconv.com/api/v7/convert?q=' + query + '&compact=ultra&apiKey=' + apiKey;

  return fetch(url)
  .then((data) => data.json())
}

const CurrencyConverter = (props: {currency: {name: string, code: string}}) => {
  const {currency: {name, code}} = props;

  const [amount, setAmount] = useState(10);
  const [defaultCurrencies, setDefaultCurrencies] = useState<{[key: string]: number, 'BYN': number, 'RUB': number, 'USD': number}>(
    {
      'BYN': 1,
      'RUB': 1,
      'USD': 1,
    });

  const handleChange = (e: any) => {
    const amountStr = e.target.value;
    if (amountStr.length < 7 && !isNaN(amountStr)) {
      setAmount(Number(amountStr));
    }
  }

  useEffect(() => {
    Promise.all([getConvertedCurrency(code, 'BYN'), getConvertedCurrency(code, 'RUB'), getConvertedCurrency(code, 'USD')])
    .then((currencies) => {
      setDefaultCurrencies((state) => {

        const res = {...state};

        for (let cur of currencies) {
          const key = Object.keys(cur)[0];
          const curName = key.slice(4);
          res[curName] = cur[key];
        }

        return res;
      })
    })
  }, [code])

  return (
    <div style={{display: 'inline-flex', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'}}>

      <div style={{padding: '10px'}}>
        <Typography component="h2" variant="h4">{name}</Typography>
        <div style={{display: 'flex', alignItems: 'baseline', justifyContent: 'space-around'}}>
          <Typography component="h3" variant="h5" style={{marginTop: '15px'}}>{code}: </Typography>
          <FormControl fullWidth variant="outlined" style={{margin: '20px'}}>
            <InputLabel htmlFor="amount">Amount</InputLabel>
            <OutlinedInput
              id="amount"
              value={amount}
              onChange={(e) => handleChange(e)}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              labelWidth={60}
              style={{width: '150px'}}
            />
          </FormControl>
        </div>
      </div>

      <List style={{minWidth: '160px'}}>
        {
          Object.entries(defaultCurrencies).map((cur, index, arr) => {
            const separator = (index < arr.length - 1) && <Divider />;
            return (
              <Fragment key={index}>
                <ListItem>
                  <Typography>{cur[0]}: {Math.round(amount * cur[1] * 100) / 100}</Typography>
                </ListItem>
                {separator}
              </Fragment>
            )
          })
        }
      </List>

    </div>
  );
}

export default CurrencyConverter;