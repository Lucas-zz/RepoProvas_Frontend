import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders(token) {
    return {
        header: {
            Authorization: `Bearer ${token}`
        }
    }
}

async function signUp(email, password, confirmPassword) {
    const promise = await axios.post(`${BASE_URL}/sign-up`, { email, password, confirmPassword });

    return promise;
}

async function signIn(email, password) {
    const promise = await axios.post(`${BASE_URL}/sign-in`, { email, password });

    return promise;
}

const api = {
    signUp,
    signIn
}

export default api;