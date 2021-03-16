import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import s from './Page404.module.scss'

const Page404 = () => {
    const history = useHistory();

    return (
        <div className={s.root}>
            <h1>404</h1>

            <span>page not found...</span>

            <Button onClick={() => history.push('/')}>
                Back to Main Page
            </Button>
        </div>
    )
}

export default Page404;
