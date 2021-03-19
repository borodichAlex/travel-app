import React, { useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ImgLanguages from '../../assets/Languages.png'

import s from './Localization.module.scss';
import { LangContext } from '../../contexts/lang-context';
import { ILangs } from '../../interfaces';

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

type ILang = {
  ru: string,
  en: string,
  be: string,
}

const Languages: ILangs[] = ['en', 'ru', 'be'];

const LocalizationLangs: { [index: string]: ILang } = {
  ru: {
    ru: 'Русский',
    en: 'Английский',
    be: 'Белорусский',
  },
  en: {
    ru: 'Russian',
    en: 'English',
    be: 'Belorussian',
  },
  be: {
    ru: 'Руская',
    en: 'Английская',
    be: 'Беларуская',
  },
}

const Localization: React.FC = () => {
  const { lang, setLanguage } = useContext(LangContext);

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
        <img src={ImgLanguages} width='30' alt="img lang" className={s.language} />
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >

        {
          Object.values(Languages).map((language, index) => {
            return <StyledMenuItem key={index} onClick={() => {setLanguage(language)}} >{LocalizationLangs[lang][language]}</StyledMenuItem>
          })
        }

      </StyledMenu>
    </div>
  );
}

export default Localization;