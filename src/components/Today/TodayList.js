import { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';
import { getTodayHabitsList } from '../../services/trackit';

import TodayHabit from './TodayHabit';

export default function TodayList() {

    const dayjs = require('dayjs');
    const utc = require('dayjs/plugin/utc')
    dayjs.extend(utc);
    function ptbrWeekday(num) {
        switch(num) {
            case 1: return 'Segunda';
            case 2: return 'Terça';
            case 3: return 'Quarta';
            case 4: return 'Quinta';
            case 5: return 'Sexta';
            case 6: return 'Sábado';
            case 7: return 'Domingo';
            default: return '';
        }
    }

    const { userinfo, loadlist, setLoadlist } = useContext(UserContext);
    const [todaylist, setTodaylist] = useState([]);

    useEffect(()=>{
        getTodayHabitsList(userinfo.token).then((res)=>setTodaylist(res.data));
    },[userinfo, loadlist])

    let progress = Math.round(100*((todaylist.filter((habit)=>habit.done).length) / todaylist.length));

    return (
        <TodayListContainer progress={progress}>
            <h1>
                {ptbrWeekday(dayjs().day())}, {(dayjs().date()).length>1 ? dayjs().date() : `0${dayjs().date()}`}/{(dayjs().month()).length>1 ? dayjs().month() : `0${dayjs().month()}`}
                {(progress>0) ? (<p>{progress}% dos hábitos concluídos</p>) : <p>Nenhum hábito concluído ainda</p>}
            </h1>
            {todaylist.map((habit, index)=><TodayHabit habit={habit} userinfo={userinfo} loadlist={loadlist} setLoadlist={setLoadlist} key={index}/>)}
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