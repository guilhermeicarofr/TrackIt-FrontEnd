import styled from 'styled-components';

export default function History() {
    return (
        <HistoryContainer>
            <h1>Histórico</h1>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoryContainer>
    );
}

const HistoryContainer = styled.main`
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
        align-items: center;
        font-size: 23px;
        color: #126BA5;
        padding-top: 1px;
        position: fixed;
        top: 70px;
        background-color: #F2F2F2;
        z-index: 1;
    }
    p {
        font-size: 18px;
        color: #666666;
    }
`;