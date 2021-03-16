import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Languages from '../../assets/Languages.png'

import s from './Localization.module.scss';
import { ILangs } from '../../interfaces';

interface ILocal {
  handleChangeLang: (lang: ILangs) => void
}

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Localization: React.FC<ILocal> = ({handleChangeLang}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);

  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={s.btn}
      >
        <img src={Languages} width='30' alt="" className={s.language} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem 
          onClick={() => {
            handleChangeLang('be')
          }}
        >
          Belarusian
        </StyledMenuItem>
        <StyledMenuItem 
          onClick={() => {
            handleChangeLang('ru')
          }}
        >
          Russian
        </StyledMenuItem>
        <StyledMenuItem 
          onClick={() => {
            handleChangeLang('en')
          }}
        >
          English
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default Localization;