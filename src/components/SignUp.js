import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { signUp } from '../services/trackit';

import UserForm from './UserForm'

export default function SignIn() {

    const [signupform, setSignupform] = useState({email:'', password:'', name: '', image: ''});

    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        signUp(signupform).then(()=>(navigate('/')))
        .catch((error)=>alert(`Falha no Login! ${error.response.data.message}`));
    }

    return (
        <UserForm>
            <form onSubmit={handleForm}>
                <input onChange={(event)=>setSignupform({...signupform, email: event.target.value})} value={signupform.email} placeholder='email' type='email' required/>
                <input onChange={(event)=>setSignupform({...signupform, password: event.target.value})} value={signupform.password} placeholder='senha' type='password' required/>
                <input onChange={(event)=>setSignupform({...signupform, name: event.target.value})} value={signupform.name} placeholder='nome' type='text' required/>
                <input onChange={(event)=>setSignupform({...signupform, image: event.target.value})} value={signupform.image} placeholder='foto' type='url' required/>
                <button>Cadastrar</button>
            </form>
            <h3 onClick={()=>navigate('/')}>Já tem uma conta? Faça login!</h3>
        </UserForm>
    );
}