import s from "./Header.module.scss";
import Logo from "../../assets/Logo.png";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { Paper, InputBase, IconButton, Button, ButtonGroup, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Localization from '../Localization/Localization';
import { Route, useHistory } from 'react-router';
import { useState } from 'react';

interface IHeader {
  handleSearch: (value: string) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      marginRight: 'auto',
      marginLeft: 0,
      padding: 0,
    },
  }),
);

const Header: React.FC<IHeader> = ({ handleSearch }) => {
  const classes = useStyles();
  const authorized = Boolean(document.cookie.split('=')[1]);
  const history = useHistory();

  async function handlerClick() {
    fetch('https://rs-travel-app1.herokuapp.com/users/unlogin', {
        credentials: 'include'
    })

    history.push('/login');
}

  const [value, setValue] = useState("");

  return (
    <header>
      <Paper component="form" className={`${classes.root} ${s.root}`}
        onSubmit={(e) => {
          handleSearch(value);
          e.preventDefault();
        }}>
        <Link className={classes.iconButton} underline='none' component={RouterLink} to='/'>
          <IconButton  aria-label="menu">
            <img src={Logo} width='20' alt="logo"/>
          </IconButton>
        </Link>

        <Route exact path='/'>
          <InputBase
            className={classes.input}
            placeholder="Search country"
            inputProps={{ "aria-label": "search country" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            onClick={(e) => {
              e.preventDefault();
              handleSearch(value);
            }}
          >
            <SearchIcon />
          </IconButton>
        </Route>

        <ButtonGroup color="primary" aria-label="outlined primary button group" style={{marginLeft: '10px', marginRight: '10px'}}>
            {authorized
            ? <Button onClick={handlerClick}>Log out</Button>
            : <Button><RouterLink to="/login">Log in</RouterLink></Button>
        }
        </ButtonGroup>

        <div className={s.language}>
          <Localization />
        </div>

      </Paper>
    </header>
  );
};

export default Header;
