import { useState, useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UserContext from '../../contexts/UserContext';
import { getTodayHabitsList } from '../../services/trackit';

export default function BottomBar() {

    const navigate = useNavigate();
    let location = useLocation().pathname;

    const { userinfo, loadlist } = useContext(UserContext);
    const [todaylist, setTodaylist] = useState([]);

    useEffect(()=>{
        getTodayHabitsList(userinfo.token).then((res)=>setTodaylist(res.data));
    },[userinfo, loadlist])

    let progress = Math.round(100*((todaylist.filter((habit)=>habit.done).length) / todaylist.length));

    if(location==='/' || location==='/cadastro') {
        return '';
    } else {
        return (
            <BottomBarContainer>
                <h3 onClick={()=>navigate('/habitos')}>Hábitos</h3>
                <h2 onClick={()=>navigate('/hoje')}><CircularProgressbar value={progress} text={`Hoje`} styles={buildStyles({
                        textColor: '#FFFFFF',
                        backgroundColor: '#52B6FF',
                        trailColor: '#52B6FF',
                        pathColor: `${(progress===100) ? '#8FC549' : `rgba(255, 255, 255, ${(progress+20)/100})`}`
                    })}
                /></h2>
                <h3 onClick={()=>navigate('/historico')}>Histórico</h3>
            </BottomBarContainer>
        );
    }   
}

const BottomBarContainer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    z-index: 1;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    padding: 0px 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #52B6FF;
        border-radius: 45px;
        font-size: 18px;
        background-color: #52B6FF;
        position: fixed;
        bottom: 10px;
        left: calc((100vw / 2) - 45px);
        padding: 5px;
    }
    h3 {
        font-size: 18px;
        color: #52B6FF;
    }
`;