import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

import { getTodayHabitsList } from '../../services/trackit';

import TodayHabit from './TodayHabit';

export default function TodayList() {

    const { userinfo, loadtodaylist, setLoadtodaylist } = useContext(UserContext);
    const [todaylist, setTodaylist] = useState([]);
    
    useEffect(()=>{
        getTodayHabitsList(userinfo.token).then((res)=>setTodaylist(res.data));
    },[userinfo, loadtodaylist])

    let progress = Math.round(100*((todaylist.filter((habit)=>habit.done).length) / todaylist.length));

    return (
        <TodayListContainer progress={progress}>
            <h1>
                Segunda, 17/05
                {(progress>0) ? (<p>{progress}% dos hábitos concluídos</p>) : <p>Nenhum hábito concluído ainda</p>}
            </h1>
            {todaylist.map((habit, index)=><TodayHabit habit={habit} userinfo={userinfo} loadlist={loadtodaylist} setLoadlist={setLoadtodaylist} key={index}/>)}
        </TodayListContainer>
    );
}

const TodayListContainer = styled.main`
    margin-top: 70px;
    padding: 80px 17px 100px 17px;
    width: 100%;
    min-height: calc(100vh - 70px);
    background-color: #F2F2F2;
    position: relative;
    display: flex;
    flex-direction: column;
    > h1 {
        width: 100%;
        height: 77px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 23px;
        color: #126BA5;
        padding-top: 25px;
        position: fixed;
        top: 70px;
        background-color: #F2F2F2;
        z-index: 1;
        > p {
            margin-top: 3px;
            font-size: 18px;
            ${props=>props.progress>0 ? 'color: green;' : 'color: #BABABA;'}
        }
    }
`;