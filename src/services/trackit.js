import { useState } from 'react';
import axios from 'axios';

const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}
function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function createNewHabit(body, user_token) {
    const promise = axios.post(`${BASE_URL}/habits`, body, {Authorization: `Bearer ${user_token}`});
    return promise;
}
function deleteHabit(id, user_token) {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, {Authorization: `Bearer ${user_token}`});
    return promise;
}

function getHabitsList(user_token) {
    const promise = axios.get(`${BASE_URL}/habits`, {Authorization: `Bearer ${user_token}`});
    return promise;
}
function getTodayHabitsList(user_token) {
    const promise = axios.get(`${BASE_URL}/habits/today`, {Authorization: `Bearer ${user_token}`});
    return promise;
}

function checkHabitToday(id, user_token) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, {Authorization: `Bearer ${user_token}`});
    return promise;
}
function uncheckHabitToday(id, user_token) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {Authorization: `Bearer ${user_token}`});
    return promise;
}
function getHabitsHistory(user_token) {
    const promise = axios.get(`${BASE_URL}/habits/today`, {Authorization: `Bearer ${user_token}`});
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