import styled from 'styled-components';

import DaySelector from './DaySelector';

export default function HabitListItem({habit}) {
    return (
        <HabitListItemContainer>
            <h2>{habit.name}</h2>
            <div>
                <DaySelector type='show' day={7} creationinput={habit} setCreationinput={()=>console.log('')}>D</DaySelector>
                <DaySelector type='show' day={1} creationinput={habit} setCreationinput={()=>console.log('')}>S</DaySelector>
                <DaySelector type='show' day={2} creationinput={habit} setCreationinput={()=>console.log('')}>T</DaySelector>
                <DaySelector type='show' day={3} creationinput={habit} setCreationinput={()=>console.log('')}>Q</DaySelector>
                <DaySelector type='show' day={4} creationinput={habit} setCreationinput={()=>console.log('')}>Q</DaySelector>
                <DaySelector type='show' day={5} creationinput={habit} setCreationinput={()=>console.log('')}>S</DaySelector>
                <DaySelector type='show' day={6} creationinput={habit} setCreationinput={()=>console.log('')}>S</DaySelector>
            </div>
        </HabitListItemContainer>
    );
}

const HabitListItemContainer = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 16px;
    margin-bottom: 10px;
    div {
        width: 234px;
        height: 30px;
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }
`;