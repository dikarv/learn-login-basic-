
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GlobalType from '../Redux/GlobalType';
import Home from '../Home/Home';
import axios from 'axios';


const Login = () => {
    //redux use hook before u use that tools you must install react redux in terminal with cli is npm instal --save react-redux thank you ^_^



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const token = useSelector((state) => state.token)

    //dia adalah connec tversi react redux gan

    const page = useSelector((state) => state.page)
    const dispatch = useDispatch(); 

    let name = '';
    let token = '';
   

    

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => [
        setPassword(event.target.value)
    ]

    const handleLogin = async (e) => {
        e.preventDefault();

        if (email === "admin@example.com" && password === "12345678") {
            try {
                const response = await axios.post('http://localhost:3000/api/auth/login', {email, password})
                console.log(response);
                token = response.data.token
                name = response.data.data.name

                
            } catch (error) {
                console.log(error);
            }
            sessionStorage.setItem('token', token);
            alert(`Hallo kacang kamu berhasil login ${token}`)
            dispatch({type : GlobalType.LOGIN_TRUE, kacang : name, kacang_token : token})
        }else{
            alert('Jangan hack akun orang lain cok')
        }
    }
    
    return(
        <>
       {
           page ? <Home/> :
           <div>
           <form onSubmit={handleLogin}>
               <h2>Login</h2>
               <label> 
                   Email
                   <input onChange={handleEmail}/>
               </label>
               <label> 
                   Password
                   <input onChange={handlePassword} />
               </label>
               <button type='submit'>LOgIn</button>
           </form>
       </div>
       }
        </>
    )
}

export default Login