import React, {useRef} from 'react';
import {Grid, TextField, Button, Container} from '@material-ui/core';
import { Link } from 'react-router-dom';


//https://rs-travel-app1.herokuapp.com/

// headers: {
//     'access-control-expose-headers': 'Set-Cookie'
// },

function handleSubmit(e: any) {
    e.preventDefault();

    console.log(e.currentTarget);
    const result: any = fetch('http://localhost:3000/users/login', {
        method: 'POST',
        credentials: 'include',
        body: new FormData(e.currentTarget)
    });

    result.then(async (data: any) => {
        console.log(await data.json());
    });
}

const Login = (props: any) => {
    return (
        <Container maxWidth="xs" style={{marginTop: "20px"}}>
            <form noValidate onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="login"
                            variant="outlined"
                            required
                            fullWidth
                            label="Login"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '20px'}}
                >
                    Sign In
                </Button>
                <Grid container justify="flex-end" style={{marginTop: "10px"}}>
                    <Grid item>
                    <Link to="/registration">
                        Don't have account yet? Register.
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login;