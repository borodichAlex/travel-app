
import s from './Header.module.scss'
import Logo from '../../assets/Logo.png';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Localization from '../Localization/Localization';
import { Route } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Paper component="form" className={`${classes.root} ${s.root}`}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <img src={Logo} width='20' alt="logo"/>
        </IconButton>
        <Route exact path='/'>
          <InputBase
            className={classes.input}
            placeholder="Search country"
            inputProps={{ 'aria-label': 'search country' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Route>

        <Divider className={classes.divider} orientation="vertical" />
        <div className={s.language}>
          <Localization />
        </div>
      </Paper>
    </header>
  );
}

export default Header;