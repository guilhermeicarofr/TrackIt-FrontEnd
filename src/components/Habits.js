import { useState, useContext } from 'react';
import UserContext from './../contexts/UserContext';
import styled from 'styled-components';

import HabitsList from './HabitsList.js'
import HabitCreation from './HabitCreation';

export default function Habits() {

    const { userinfo } = useContext(UserContext);

    const [showcreation, setShowcreation] = useState(false);

    return (
        <HabitsContainer>
            <h1>Meus Hábitos</h1>
            <button onClick={()=>setShowcreation(!showcreation)}>+</button>
            <HabitCreation userinfo={userinfo} showcreation={showcreation} setShowcreation={setShowcreation} />
            <HabitsList showcreation={showcreation} userinfo={userinfo} />
        </HabitsContainer>
    );
}

const HabitsContainer = styled.main`
    margin-top: 70px;
    padding: 28px 17px 0px 17px;
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #F2F2F2;
    position: relative;
    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 22px;
    }
    > button {
        position: absolute;
        top: 22px;
        right: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 5px;
        width: 40px;
        height: 35px;
        border: 1px solid #52B6FF;
        border-radius: 5px;
        background-color: #52B6FF;
        font-size: 27px;
        color: #FFFFFF;
    }
    p {
        font-size: 18px;
        color: #666666;
    }
`;