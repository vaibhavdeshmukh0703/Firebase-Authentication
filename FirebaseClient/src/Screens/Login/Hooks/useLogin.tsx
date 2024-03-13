import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../Firebase/firebaseConfig'
import { useState } from 'react';

type Iprops={
    email:string,
    password:string
}
const useLogin=()=>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('')

    async function makeLogin(credential : Iprops){
        try {
            setLoading((prev)=>!prev)
            const {email, password} = credential;
                        await setPersistence(auth,browserLocalPersistence) 
        const SignIn =  await signInWithEmailAndPassword(auth,email,password);
        const user = SignIn.user;
       
        const {token, expirationTime,} =  await user.getIdTokenResult(true);
        
        localStorage.setItem('token',token);
        localStorage.setItem('expirationTime',expirationTime);
        localStorage.setItem('isAuhenticate',true.toString());
        setLoggedIn(true);
        setLoading((prev)=>!prev)
       
        return false;
        } catch (error) {
            if(error instanceof Error){
                setLoading(false);
                setError(error.message);
            }
        }
    }
    return { makeLogin,isLoggedIn,loading,error}
}
export default useLogin;