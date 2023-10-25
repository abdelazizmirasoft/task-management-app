import React from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography
} from "@mui/material";
import {withRouter} from "react-router-dom";

function Register({history}) {
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);

        const registerCredentials = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            confirm_password: formData.get('confirm_password')
        }

        window.axios.post('/api/auth/register', registerCredentials).then((response) => {
            history.push('/app/login')
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
                    Register
                </Typography>
                <Box component={"form"} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="name"
                        label="Full name"
                        type="text"
                        id="name"
                    />
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
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm password"
                        type="password"
                        id="confirm_password"
                        autoComplete="current-password"
                    />
                    <Button
                        fullWidth
                        variant={"outlined"}
                        type={"submit"}
                        sx={{mt: 3, mb: 2}}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default withRouter(Register)