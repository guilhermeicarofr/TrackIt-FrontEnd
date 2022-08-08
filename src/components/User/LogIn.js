import { useState, useContext } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';
import { signIn } from '../../services/trackit';

import UserForm from './UserForm'

export default function LogIn() {

    const { setUserinfo } = useContext(UserContext);
    const [loginform, setLoginform] = useState({email:'', password:''});
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        setWaiting(true);
        signIn(loginform).then((res) => {
            setUserinfo(res.data);
            navigate('/hoje');
        })
        .catch((error)=>{
            setWaiting(false);
            alert(`Falha no Login! ${error.response.data.message}`);
            setLoginform({email:'', password:''});
        });
    }

    if (!waiting) {
        return (
            <UserForm waiting={waiting}>
                <form onSubmit={handleForm}>
                    <input onChange={(event)=>setLoginform({...loginform, email: event.target.value})} value={loginform.email} placeholder='email' type='email' required/>
                    <input onChange={(event)=>setLoginform({...loginform, password: event.target.value})} value={loginform.password} placeholder='senha' type='password' required/>
                    <button>Entrar</button>
                </form>
                <h3 onClick={()=>navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</h3>
            </UserForm>
        );
    } else {
        return (
            <UserForm waiting={waiting}>
                <form onSubmit={(event)=>event.preventDefault()}>
                    <input value={loginform.email} placeholder='email' type='email' disabled required/>
                    <input value={loginform.password} placeholder='senha' type='password' disabled required/>
                    <button><ThreeDots
                        height = "20"
                        width = "50"
                        radius = "9"
                        color = '#FFFFFF'
                        ariaLabel = 'three-dots-loading'     
                        wrapperStyle
                        wrapperClass
                    /></button>
                </form>
                <h3>Não tem uma conta? Cadastre-se!</h3>
            </UserForm>
        );
    }
}