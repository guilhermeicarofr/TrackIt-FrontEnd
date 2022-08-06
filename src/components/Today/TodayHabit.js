import styled from 'styled-components';

import { checkHabitToday, uncheckHabitToday } from '../../services/trackit';

export default function TodayHabit({habit, userinfo, loadlist, setLoadlist}) {

    function checkHabit() {
        if(habit.done===true) {
            uncheckHabitToday(habit.id,userinfo.token).then(()=>setLoadlist(!loadlist));
        } else {
            checkHabitToday(habit.id,userinfo.token).then(()=>setLoadlist(!loadlist));
        }
    }

    return (
        <TodayHabitContainer habit={habit}>
            <h2>{habit.name}</h2>
            <p>Sequência atual: <strong>{habit.currentSequence} dias</strong></p>
            <p>Seu recorde: <strong>{habit.highestSequence} dias</strong></p>
            <button onClick={checkHabit}><ion-icon name='checkmark-sharp'></ion-icon></button>
        </TodayHabitContainer>
    );
}

const TodayHabitContainer = styled.div`
    width: 340px;
    min-height: 94px;
    height: auto;
    background-color: #FFFFFF;
    margin: 0px auto;
    margin-bottom: 10px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    padding: 15px 95px 15px 15px;
    color: #666666;
    text-align: justify;
    word-break: break-all;
    position: relative;
    h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
    }
    button {
        width: 70px;
        height: 70px;
        position: absolute;
        top: calc((100%/2) - 35px );
        right: 13px;
        background-color: #EBEBEB;
        border: 1px solid #EBEBEB;
        border-radius: 5px;
        ion-icon {
            width: 100%;
            height: 100%;
            color: #FFFFFF;
        }
    }
    ${props=>{
        let changes = '';
        if(props.habit.done) {
            changes += 'button { background-color: #8FC549; } p:nth-of-type(1) strong { color: #8FC549; }';
        }
        if(props.habit.done && (props.habit.currentSequence===props.habit.highestSequence)) {
            changes += 'p:nth-of-type(2) strong { color: #8FC549; }';
        }
        return (changes);
    }}
`;