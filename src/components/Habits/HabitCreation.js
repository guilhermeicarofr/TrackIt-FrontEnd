import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

import { createNewHabit } from '../../services/trackit';

import DaySelector from './DaySelector';

export default function HabitCreation({userinfo, showcreation, setShowcreation, loadlist, setLoadlist}) {
    
    const [creationinput, setCreationinput] = useState({name:'', days:[]})
    const [waiting, setWaiting] = useState(false);

    function handleForm(event) {
        event.preventDefault();
        setWaiting(true);
        if(creationinput.days.length>0) {
            createNewHabit(creationinput, userinfo.token).then(()=>{
                setCreationinput({name:'', days:[]});
                setLoadlist(!loadlist);
                setWaiting(false);
                setShowcreation(false);
            })
            .catch((error)=>{
                alert(error.data);
                setWaiting(false);
            });
        } else {
            alert('Você deve selecionar um dia!');
            setWaiting(false);
        }
    }

    if (showcreation===true) {
        if(!waiting) {
            return (
                <CreationForm onSubmit={handleForm} waiting={waiting}>
                    <input onChange={(event)=>setCreationinput({...creationinput, name: event.target.value})} value={creationinput.name} type='text' placeholder='nome do hábito' required />
                    <div>
                        {[7,1,2,3,4,5,6].map((day, index) => <DaySelector type='create' day={day} creationinput={creationinput} setCreationinput={setCreationinput} key={index} />)}
                    </div>
                    <button onClick={()=>setShowcreation(!showcreation)} type='cancel'>Cancelar</button>
                    <button type='submit'>Salvar</button>
                </CreationForm>
            );
        } else {
            return (
                <CreationForm onSubmit={(event)=>event.preventDefault()} waiting={waiting}>
                    <input value={creationinput.name} type='text' placeholder='nome do hábito' disabled required />
                    <div>
                        {[7,1,2,3,4,5,6].map((day, index) => <DaySelector type='show' day={day} creationinput={creationinput} setCreationinput={setCreationinput} key={index} />)}
                    </div>
                    <button type='cancel'>Cancelar</button>
                    <button><ThreeDots
                        height = "11"
                        width = "43"
                        radius = "9"
                        color = '#FFFFFF'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                    /></button>
                </CreationForm>
            );
        }
    } else {
        return '';  
    }   
}

const CreationForm = styled.form`
    > * {
        ${props=>props.waiting ? 'opacity: 70%;' : 'opacity: 100%;'}
    }
    width: 340px;
    height: 180px;
    margin: 0px auto;
    margin-bottom: 30px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 16px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
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
    > div {
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
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button:nth-of-type(1) {
        background-color: #FFFFFF;
        color: #52B6FF;
        position: absolute;
        bottom: 16px;
        right: 100px;
    }
`;