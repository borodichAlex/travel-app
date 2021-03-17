import React, {useRef} from 'react';
import { FormGroup, Grid, TextField, Button, Container, FormControlLabel, Checkbox, FormLabel, Input } from '@material-ui/core';
import { Link } from 'react-router-dom';


function handleSubmit(e: any) {
    e.preventDefault();

    console.log(e.currentTarget);
    const result: any = fetch('http://localhost:3000/users/create', {
        method: 'POST',
        body: new FormData(e.currentTarget)
    });

    result.then(async (data: any) => {
        console.log(await data.json());
    });
}

const Registration = (props: any) => {
    const form = useRef(null);

    return (
        <Container maxWidth="xs" style={{marginTop: "20px"}}>
            <form noValidate ref={form} onSubmit={(e) => handleSubmit(e)}>
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