import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import styled from 'styled-components';

export default function TodayList() {

    const { userinfo } = useContext(UserContext);



    return (
        <TodayListContainer>
            <h1>
                Segunda, 17/05
                <p>67% dos hábitos concluídos</p>
            </h1>
            oap
            asdas
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
    h1 {
        width: 100%;
        height: 77px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 23px;
        color: #126BA5;
        padding-top: 1px;
        position: fixed;
        top: 70px;
        background-color: #F2F2F2;
        z-index: 1;
        p {
            font-size: 18px;
            color: green;
        }
    }
`;