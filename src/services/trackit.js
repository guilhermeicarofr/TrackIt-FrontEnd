import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';
let USER_TOKEN = '';

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}
function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function createNewHabit(body) {
    const promise = axios.post(`${BASE_URL}/habits`, body, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}
function deleteHabit(id) {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}

function getHabitsList() {
    const promise = axios.get(`${BASE_URL}/habits`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}
function getTodayHabitsList() {
    const promise = axios.get(`${BASE_URL}/habits/today`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}

function checkHabitToday(id) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}
function uncheckHabitToday(id) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}
function getHabitsHistory() {
    const promise = axios.get(`${BASE_URL}/habits/today`, {Authorization: `Bearer ${USER_TOKEN}`});
    return promise;
}

export {
    signUp,
    signIn,
    createNewHabit,
    deleteHabit,
    getHabitsList,
    getTodayHabitsList,
    checkHabitToday,
    uncheckHabitToday,
    getHabitsHistory
};