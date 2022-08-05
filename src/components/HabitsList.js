import { useState, useEffect } from 'react';

import { getHabitsList } from './../services/trackit';

import HabitListItem from './HabitListItem.js';

export default function HabitsList({userinfo, loadlist, setLoadlist}) {
 
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        getHabitsList(userinfo.token).then(((res) => {
            setHabits(res.data);
        }));
    },[userinfo, loadlist])

    if(habits.length>0) {
        return (
            <>
                {habits.map((habit, index) => <HabitListItem key={index} habit={habit} userinfo={userinfo} loadlist={loadlist} setLoadlist={setLoadlist} />)}
            </>
        );
    } else {
        return (
            <p>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </p>
        );
    }
}