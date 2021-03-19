import s from "./Header.module.scss";
import Logo from "../../assets/Logo.png";

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import { Paper, InputBase, IconButton, Button, ButtonGroup, Link } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Localization from '../Localization/Localization';
import { Route, useHistory} from 'react-router';
import { BASE_URL } from '../../services/constants';
import {useState} from 'react'

interface IHeader {
  handleSearch: (value: string) => void;
  refresher: number;
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
  const authorized = Boolean(localStorage.getItem('authorized'));
  const history = useHistory();

  const [count, setForceUpdate] = useState(0);

  async function handlerClick() {
    await fetch(`${BASE_URL}/users/unlogin`, {
        credentials: 'include'
    })
    history.push('/login');
    localStorage.setItem('authorized', "false");
    forceUpdate();
  }

    function forceUpdate() {
        setForceUpdate(count + 1);
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
          <button></button>
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

        <div className={s.language}>
          <Localization />
        </div>  

        <ButtonGroup aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        className={s.btn}>
            {authorized
            ? <Button onClick={handlerClick}>Log out</Button>
            : <Button><RouterLink to="/login">Log in</RouterLink></Button>
        }
        </ButtonGroup>

        

      </Paper>
    </header>
  );
};

export default Header;
