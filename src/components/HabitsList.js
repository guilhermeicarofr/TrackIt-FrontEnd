import { useState, useEffect } from 'react';

import { getHabitsList, deleteHabit } from './../services/trackit';

import HabitListItem from './HabitListItem.js';

export default function HabitsList({userinfo, showcreation}) {
 
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        getHabitsList(userinfo.token).then(((res) => {
            setHabits(res.data)
            console.log(res);
        }));
    },[userinfo, showcreation])

    if(habits.length>0) {
        return (
            <>
                {habits.map((habit, index) => <HabitListItem key={index} habit={habit} />)}
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