import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

import HabitsList from './HabitsList.js'
import HabitCreation from './HabitCreation';

export default function Habits() {

    const { userinfo } = useContext(UserContext);

    const [showcreation, setShowcreation] = useState(false);
    const [loadlist, setLoadlist] = useState(true);

    return (
        <HabitsContainer>
            <h1>Meus Hábitos</h1>
            <button onClick={()=>setShowcreation(!showcreation)}>+</button>
            <HabitCreation userinfo={userinfo} showcreation={showcreation} setShowcreation={setShowcreation} loadlist={loadlist} setLoadlist={setLoadlist} />
            <HabitsList userinfo={userinfo} loadlist={loadlist} setLoadlist={setLoadlist} />
        </HabitsContainer>
    );
}

const HabitsContainer = styled.main`
    margin-top: 70px;
    padding: 80px 17px 100px 17px;
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #F2F2F2;
    position: relative;
    h1 {
        width: 100%;
        height: 77px;
        display: flex;
        align-items: center;
        font-size: 23px;
        color: #126BA5;
        padding-top: 1px;
        position: fixed;
        top: 70px;
        background-color: #F2F2F2;
        z-index: 1;
    }
    > button {
        position: fixed;
        top: 92px;
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
        z-index: 2;
    }
    p {
        font-size: 18px;
        color: #666666;
    }
`;