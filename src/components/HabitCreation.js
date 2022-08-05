import { useState } from 'react';
import styled from 'styled-components';

import { createNewHabit } from './../services/trackit';

import DaySelector from './DaySelector';

export default function HabitCreation({userinfo, showcreation, setShowcreation}) {
    
    const [creationinput, setCreationinput] = useState({name:'', days:[]})

    console.log(creationinput);

    function handleForm(event) {
        event.preventDefault();
        if(creationinput.days.length>0) {
            createNewHabit(creationinput, userinfo.token).then((res)=>{
                console.log(res.data)
                setCreationinput({name:'', days:[]});
                setShowcreation(false);
            })
            .catch((res)=>console.log(res));
        } else {
            alert('Você deve selecionar um dia!');
        }
    }

    if (showcreation===true) {
        return (
            <CreationForm onSubmit={handleForm}>
                <input onChange={(event)=>setCreationinput({...creationinput, name: event.target.value})} value={creationinput.name} type='text' placeholder='nome do hábito' required />
                <div>
                    <DaySelector type='create' day={7} creationinput={creationinput} setCreationinput={setCreationinput}>D</DaySelector>
                    <DaySelector type='create' day={1} creationinput={creationinput} setCreationinput={setCreationinput}>S</DaySelector>
                    <DaySelector type='create' day={2} creationinput={creationinput} setCreationinput={setCreationinput}>T</DaySelector>
                    <DaySelector type='create' day={3} creationinput={creationinput} setCreationinput={setCreationinput}>Q</DaySelector>
                    <DaySelector type='create' day={4} creationinput={creationinput} setCreationinput={setCreationinput}>Q</DaySelector>
                    <DaySelector type='create' day={5} creationinput={creationinput} setCreationinput={setCreationinput}>S</DaySelector>
                    <DaySelector type='create' day={6} creationinput={creationinput} setCreationinput={setCreationinput}>S</DaySelector>
                </div>
                <button onClick={()=>setShowcreation(!showcreation)} type='cancel'>Cancelar</button>
                <button type='submit'>Salvar</button>
            </CreationForm>
        );
    } else {
        return '';  
    }   
}

const CreationForm = styled.form`
    width: 340px;
    height: 180px;
    margin-bottom: 30px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
    position: relative;
    input {
        width: 303px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        padding: 10px;
        color: #666666;
        :focus {outline: 3px solid #52B6FF}
        ::placeholder {color: #DBDBDB}
    }
    div {
        width: 234px;
        height: 30px;
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
    }
    > button {
        width: 84px;
        height: 35px;
        border: transparent;
        border-radius: 5px;
    }
    button:nth-of-type(2) {
        background-color: #52B6FF;
        color: #FFFFFF;
        position: absolute;
        bottom: 16px;
        right: 16px;
    }
    button:nth-of-type(1) {
        background-color: #FFFFFF;
        color: #52B6FF;
        position: absolute;
        bottom: 16px;
        right: 100px;
    }
`;