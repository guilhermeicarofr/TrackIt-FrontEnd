import styled from 'styled-components';

import { deleteHabit } from '../../services/trackit';

import DaySelector from './DaySelector';

export default function HabitListItem({habit, userinfo, loadlist, setLoadlist}) {

    function removeItem() {
        if(window.confirm('Excluir esse hábito?') === true) {
            deleteHabit(habit.id,userinfo.token).then(()=>setLoadlist(!loadlist));
        }
    }

    return (
        <HabitListItemContainer>
            <h2>{habit.name}</h2>
            <div>
                {[7,1,2,3,4,5,6].map((day, index) => <DaySelector type='show' day={day} creationinput={habit} setCreationinput={''} key={index} />)}
            </div>
            <ion-icon onClick={removeItem} name='trash-outline'></ion-icon>
        </HabitListItemContainer>
    );
}

const HabitListItemContainer = styled.div`
    width: 340px;
    min-height: 91px;
    height: auto;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 16px;
    padding-right: 30px;
    margin: 0px auto;
    margin-bottom: 10px;
    font-size: 20px;
    color: #666666;
    text-align: justify;
    word-break: keep-all;
    position: relative;
    text-align: justify;
    word-break: break-all;
    div {
        width: 234px;
        height: 30px;
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }
    ion-icon {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;