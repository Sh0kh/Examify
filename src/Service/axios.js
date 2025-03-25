import axios from "axios";

// Экземпляр для первого API
const axiosAPI1 = axios.create({
    baseURL: 'https://backend.examify.uz/api',
});

// Экземпляр для второго API
const axiosAPI2 = axios.create({
    baseURL: 'https://maktab.ideal-study.uz/api',
});

export { axiosAPI1, axiosAPI2 };
