import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from './../contexts/UserContext';
import { signIn } from './../services/trackit';

import UserForm from './UserForm'

export default function LogIn() {

    const [loginform, setLoginform] = useState({email:'', password:''});
    const { userinfo, setUserinfo } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        signIn(loginform).then((res) => {
            setUserinfo(res.data);
            navigate('/habitos');
        })
        .catch((error)=>alert(`Falha no Login! ${error.response.data.message}`));
    }

    return (
        <UserForm>
            <form onSubmit={handleForm}>
                <input onChange={(event)=>setLoginform({...loginform, email: event.target.value})} value={loginform.email} placeholder='email' type='email' required/>
                <input onChange={(event)=>setLoginform({...loginform, password: event.target.value})} value={loginform.password} placeholder='senha' type='password' required/>
                <button>Entrar</button>
            </form>
            <h3 onClick={()=>navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</h3>
        </UserForm>
    );
}