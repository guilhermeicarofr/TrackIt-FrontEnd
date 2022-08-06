import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomBar() {

    const navigate = useNavigate();
    let location = useLocation().pathname;

    if(location==='/' || location==='/cadastro') {
        return '';
    } else {
        return (
            <BottomBarContainer>
                <h3 onClick={()=>navigate('/habitos')}>Hábitos</h3>
                <h2 onClick={()=>navigate('/hoje')}>Hoje</h2> {/* <ProgressBaaar> */}
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
        color: #FFFFFF;
        background-color: #52B6FF;
        position: fixed;
        bottom: 10px;
        left: calc((100vw / 2) - 45px);
    }
    h3 {
        font-size: 18px;
        color: #52B6FF;
    }
`;