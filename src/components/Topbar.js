import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/images/top-logo.png';

export default function TopBar() {

    const { userinfo } = useContext(UserContext);

    let location = useLocation().pathname;

    if(location==='/' || location==='/cadastro') {
        return '';
    } else {
        return (
            <TopBarContainer>
                <img src={logo} alt='' />
                <img src={userinfo.image} alt='' />
            </TopBarContainer>
        );
    }
}

const TopBarContainer = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0px;
    background-color: #126BA5;
    padding: 0px 18px;
    border: 1px solid #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img:nth-of-type(1) {
        width: 97px;
        height: 35px;
    }
    img:nth-of-type(2) {
        width: 52px;
        height: 52px;
        border-radius: 26px;
        border: 2px solid #52B6FF;
    }

`;