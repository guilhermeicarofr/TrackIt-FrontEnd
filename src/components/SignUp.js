import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../services/trackit';

import UserForm from './UserForm'
import logo from './../assets/images/logo.png';

export default function SignIn() {

    const [signupform, setSignupform] = useState({email:'', password:'', name: '', image: ''});

    const navigate = useNavigate();

    console.log(signupform);

    function handleForm(event) {
        event.preventDefault();
        signUp(signupform).then((res)=>console.log(res.data));
        signUp(signupform).catch(()=>alert('Falha no cadastro!'));
    }

    return (
        <UserForm>
            <img src={logo} alt='' />
            <form onSubmit={handleForm}>
                <input onChange={(event)=>setSignupform({...signupform, email: event.target.value})} value={signupform.email} placeholder='email' type='email'/>
                <input onChange={(event)=>setSignupform({...signupform, password: event.target.value})} value={signupform.password} placeholder='senha' type='password'/>
                <input onChange={(event)=>setSignupform({...signupform, name: event.target.value})} value={signupform.name} placeholder='nome' type='text'/>
                <input onChange={(event)=>setSignupform({...signupform, image: event.target.value})} value={signupform.image} placeholder='foto' type='url'/>
                <button>Cadastrar</button>
            </form>
            <h3 onClick={()=>navigate('/')}>Já tem uma conta? Faça login!</h3>
        </UserForm>
    );
}