import axios from "axios";
import "../setup"

const BASE_URL = "http://localhost:5000";

function createHeaders(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

async function signUp(email, password, confirmPassword) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, { email, password, confirmPassword });

    return promise;
}

async function signIn(email, password) {
    const promise = await axios.post(`${BASE_URL}/sign-in`, { email, password });

    return promise;
}

async function signOut(token) {
    const auth = createHeaders(token);

    await axios.delete(`${BASE_URL}/sign-out`, auth);
}

const api = {
    signUp,
    signIn,
    signOut
}

export default api;