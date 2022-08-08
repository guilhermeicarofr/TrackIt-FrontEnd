import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';

import { signUp } from '../../services/trackit';

import UserForm from './UserForm'

export default function SignIn() {

    const [signupform, setSignupform] = useState({email:'', password:'', name: '', image: ''});
    const [waiting, setWaiting] = useState(false);
    const navigate = useNavigate();

    function handleForm(event) {
        event.preventDefault();
        setWaiting(true);
        signUp(signupform).then(()=>(navigate('/')))
        .catch((error)=>{
            setWaiting(false);
            alert(`Falha no Login! ${error.response.data.message}`);
            setSignupform({email:'', password:'', name: '', image: ''});
        });
    }

    if (!waiting) {
        return (
            <UserForm waiting={waiting}>
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
    } else {
        return (
            <UserForm waiting={waiting}>
                <form onSubmit={handleForm}>
                    <input value={signupform.email} placeholder='email' type='email' disabled required/>
                    <input value={signupform.password} placeholder='senha' type='password' disabled required/>
                    <input value={signupform.name} placeholder='nome' type='text' disabled required/>
                    <input value={signupform.image} placeholder='foto' type='url' disabled required/>
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
                <h3>Já tem uma conta? Faça login!</h3>
            </UserForm>
        );
    }
}