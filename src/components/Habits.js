import { useState, useEffect, useContext } from 'react';
import UserContext from './../contexts/UserContext';

import { getHabitsList, createNewHabit, deleteHabit } from './../services/trackit';

export default function Habits() {

    const { userinfo } = useContext(UserContext);

    const [habits, setHabits] = useState([]);

    console.log(userinfo.token);
    console.log(habits);


    //setHabits(res.data)

    useEffect(() => {
        getHabitsList(userinfo.token).then(((res)=>console.log(res)));
    },[userinfo])

    return (
        <>
            {userinfo.name}
        </>
    );
}