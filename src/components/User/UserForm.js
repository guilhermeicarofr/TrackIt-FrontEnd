import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export default function UserForm ({children, waiting}) {
    return (
        <UserFormContainer waiting={waiting}>
            <img src={logo} alt='' />
            {children}
        </UserFormContainer>
    );
}

const UserFormContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        margin-top: 68px;
        width: 180px;
        height: 178px;
    }
    form {
        margin-top: 33px;
        input {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 303px;
            height: 45px;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            padding: 11px;
            font-size: 20px;
            ${props => props.waiting ? 'background-color: #F2F2F2;' : 'background-color: #FFFFFF;'}
            color: #B3B3B3;
            margin-bottom: 6px;
            :focus {outline: 3px solid #52B6FF}
            ::placeholder {color: #DBDBDB}
        }
        button {
            width: 303px;
            height: 45px;
            background-color: #52B6FF;
            ${props => props.waiting ? 'opacity: 70%;' : 'opacity: 100%;'}
            border: 1px solid #52B6FF;
            border-radius: 5px;
            font-size: 21px;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    h3 {
        margin-top: 25px;
        font-size: 18px;
        color: #52B6FF;
        text-decoration: underline;
    }
`;