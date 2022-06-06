import { useState } from "react";
import Home from "../Home/Home";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [page, setPage] = useState(false)


    const handleLogin = () => {
        if (email === 'admin@example.com' && password === 'kacang') {
             alert('Anda Sukses Login , Selamata datang ', email)
             setPage(true)
        }else{
            alert('password / email anda salah')
        }

    }
    
    

    const handleEmail = (event) => {
        return(
        console.log("Handle email on", email),
        setEmail(event.target.value)
        )
    }

    const handlePassword = (event) => {
        return(
        console.log("Handle Password on", password),
        setPassword(event.target.value)
        )
    }




    return ( 
        <>
        {
            page ? <Home/> :
             <form onSubmit={handleLogin}>
            <label>
                Email
                <input type={'email'} onChange={handleEmail}/>
            </label>
            <label>
                Password
                <input type={'password'} onChange={handlePassword}/>
            </label>
            <button type='submit'>Login</button>

        </form>
        }
        </>
     );
}

export default Login