import { LogoutOutlined } from "@mui/icons-material";
import { Avatar, Container, Divider, Grid } from "@mui/material";
import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";

export default function Header() {
    const { user, logOut } = useAuth();

    return (
        <>
            <Container maxWidth={false} sx={{
                padding: 2,
                top: 0,
                left: 0,
                right: 0,
            }}>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    {user
                        ?
                        <>
                            <Grid item xs={12} sm={6} align="left">
                                <img src={logo} alt="logo repoprovas" />
                            </Grid>
                            <Grid item xs={12} sm={6} align="right">
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <LogoutOutlined onClick={() => logOut()} />
                                </Avatar>
                            </Grid>
                        </>
                        :
                        <Grid container sx={{ paddingTop: 10 }} justifyContent="center" alignContent="center" >
                            <img src={logo} alt="logo repoprovas" />
                        </Grid>
                    }
                </Grid>

            </Container>
            {
                user &&
                <Divider />
            }
        </>
    )
}