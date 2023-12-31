import React from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography
} from "@mui/material";
import user from "../../models/user";
import {withRouter} from "react-router-dom";

function Login({history, location}) {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        const loginCredentials = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        function authenticatedCallback() {
            let {from} = location.state || {from: {pathname: '/'}}
            history.replace(from)
        }

        window.axios.post('/api/auth/login', loginCredentials).then((response) => {
            user.authenticated(response.data, authenticatedCallback)
            history.push('/app/dashboard')
        })
    }

    return (
        <Container maxWidth={"xs"}>
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component={"h1"} variant={"h5"}>
                    Login
                </Typography>
                <Box component={"form"} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant={"outlined"}
                        type={"submit"}
                        sx={{mt: 3, mb: 2}}
                    >
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default withRouter(Login)