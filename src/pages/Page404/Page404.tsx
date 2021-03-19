import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import s from './Page404.module.scss'

const Page404 = () => {
    const history = useHistory();
    const [text, setText] = useState('page not found...')
    const [buttonText, setButtonText] = useState('Back to Main Page');


    useEffect(() => {
        switch(localStorage.getItem('lang')) {
            case "be": {
                setText('Старонка не знойдзена ...');
                setButtonText('Вярнуцца на галоўную старонку')
                break;
            }

            case "ru": {
                setText('Страница не найдена...');
                setButtonText('Вернуться на главную страницу');
                break;
            }

            default: {
                setText('page not found...');
                setButtonText('Back to Main Page');
                break;
            }
        }

    }, [])

    return (
        <div className={s.root}>
            <h1>404</h1>

            <span>{text}</span>

            <Button onClick={() => history.push('/')}>
                {buttonText}
            </Button>
        </div>
    )
}

export default Page404;
