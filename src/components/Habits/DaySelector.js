import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function DaySelector({day, creationinput, setCreationinput, type}) {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        if(creationinput.days.includes(day)) {
            setSelected(true);
        }
    },[day, creationinput]);

    function ptbrWeekday(num) {
        switch(num) {
            case 1: return 'S';
            case 2: return 'T';
            case 3: return 'Q';
            case 4: return 'Q';
            case 5: return 'S';
            case 6: return 'S';
            case 7: return 'D';
            default: return '';
        }
    }

    function selectDay() {
        if(type==='create'){
            setSelected(!selected);
            if(creationinput.days.includes(day)) {
                setCreationinput({...creationinput, days:creationinput.days.filter((item) => (item!==day))});
            } else {
                setCreationinput({...creationinput, days:[...creationinput.days, day]});
            }
        }
    }

    return (
        <DayContainer onClick={selectDay} selected={selected}>
            {ptbrWeekday(day)}
        </DayContainer>
    );
}

const DayContainer = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${props=>props.selected ? 'color: #FFFFFF; background-color: #CFCFCF;' : 'color: #DBDBDB; background-color: #FFFFFF;'}
`;