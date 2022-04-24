import { Avatar, Box, Button, Container, CssBaseline, Divider, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import GitHubIcon from '@mui/icons-material/GitHub';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import logo from "../../assets/logo.svg"

export default function SignUp() {

    const { setUser } = useAuth();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleInputChange(event) {
        formData[event.target.name] = event.target.value;
        setFormData({ ...formData });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            setLoading(true);

            await api.signUp(formData.email, formData.password, formData.confirmPassword);

            navigate("/sign-in");

        } catch (error) {
            alert("Erro. Tente novamente");
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
            >
                <Box sx={{
                    marginTop: 0,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Typography component="h1" variant="h5">
                        Cadastro
                    </Typography>
                </Box>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            color="primary"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 0, mb: 0 }}
                        >
                            <GitHubIcon sx={{ mr: 2 }} />
                            <Typography sx={{ mt: 0.5, mb: 0.5 }} component="h1" variant="button">
                                Entrar com o GitHub
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item sx={{ mt: 4, mb: 4 }}>
                        <Divider>ou</Divider>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    color: "secondary"
                                }}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Senha"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    color: "secondary"
                                }}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="confirmPassword"
                                label="Confirmar sua senha"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                InputLabelProps={{
                                    color: "secondary"
                                }}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} alignContent="center" justifyContent="space-between">
                        <Grid item >
                            <Typography
                                component="p"
                                variant="overline"
                                sx={{ mt: 2, mb: 0 }}
                                color="secondary"
                                onClick={() => { navigate("/sign-in") }}
                            >
                                Já possuo cadastro
                            </Typography>
                        </Grid>
                        <Grid item >
                            {loading
                                ?
                                <LoadingButton
                                    loading
                                    sx={{ mt: 2, mb: 1 }}
                                    loadingPosition="start"
                                    startIcon={<SaveIcon />}
                                    variant="contained"
                                >
                                    Cadastrar
                                </LoadingButton>
                                :
                                <Button
                                    color="secondary"
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 2, mb: 1 }}
                                    disabled={loading}
                                >
                                    <Typography>
                                        Cadastrar
                                    </Typography>
                                </Button>

                                // <LoadingButton
                                //     loading
                                //     sx={{ mt: 2, mb: 1 }}
                                // />
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}