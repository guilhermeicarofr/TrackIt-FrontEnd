import { signUp, signIn } from './../services/trackit';

export default function LogIn() {

    return (
        <>
            <button onClick={()=>signUp({ email: "guilhermeicarofr@gmail.com", name: "Guilherme Icaro", image: "http://pm1.narvii.com/7580/f5798ec3827975889f030fd8fa4b6e7784ca6d2br1-720-506v2_uhq.jpg", password: "GuiIcaro2014"})}>
                SIGN ME UP
            </button>
            <button onClick={()=>{ 
                signIn({email: "guilhermeicarofr@gmail.com", password: "GuiIcaro2014"}).then((res)=>console.log(res));
            }}>
                LOG IN
            </button>
        </>
    );
}