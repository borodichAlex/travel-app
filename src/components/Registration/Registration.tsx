import React from 'react';
import {Grid, TextField, Button, Container} from '@material-ui/core';
import { Link } from 'react-router-dom';
import {useHistory} from 'react-router'
import { BASE_URL } from '../../services/constants';



const Registration = (props: any) => {
    let history = useHistory();

    async function handleSubmit(e: any) {
        e.preventDefault();

        const result: any = await fetch(`${BASE_URL}/users/create`, {
            method: 'POST',
            credentials: 'include',
            body: new FormData(e.currentTarget)
        });

        if(result.ok) {
            history.push('/');
            localStorage.setItem('authorized', "true");
            props.forceHeaderRefresh();
        }
    }

    return (
        <Container maxWidth="xs" style={{marginTop: "20px"}}>
            <form noValidate onSubmit={(e) => handleSubmit(e)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
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
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="Name"
                            name="name"
                            autoComplete="lname"
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
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            component="label">
                            Upload File
                            <input
                                type="file"
                                name="photoUrl"
                                hidden
                            />
                        </Button>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{marginTop: '20px'}}
                >
                    Sign Up
                </Button>
                <Grid container justify="flex-end" style={{marginTop: "10px"}}>
                    <Grid item>
                    <Link to="/login">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Registration;