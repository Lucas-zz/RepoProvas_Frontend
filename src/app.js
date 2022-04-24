import { GlobalStyle } from "./style";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import { AuthProvider } from "./contexts/authContext";
import SignUp from "./pages/SignUp";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style";
import Header from "./components/Header";
import Main from "./pages/Main";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <Header />
                        <Routes>
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route path="/sign-up" element={<SignUp />} />
                            <Route path="/mainpage" element={<Main />} />
                        </Routes>
                    </ThemeProvider>
                </AuthProvider>
            </Router>
        </>
    );
}