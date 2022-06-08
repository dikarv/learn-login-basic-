import { useSelector } from 'react-redux';




const Home = () => {

    //sesion storeage seperti state dai dapat menyimpan d=toekn dengan cara setItem dan getItem untuk mendapatkan nya thats amazing
    // const token = sessionStorage.getItem('token')
    const name = useSelector((state) => state.name)
    const token = useSelector((state) => state.token)
    return ( 
        <>
        <h2>Welcome Home {token}</h2>
        <h3>Hallo {name}</h3>
        </>
     );
}

export default Home