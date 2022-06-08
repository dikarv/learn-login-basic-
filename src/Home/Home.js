const Home = () => {

    //sesion storeage seperti state dai dapat menyimpan d=toekn dengan cara setItem dan getItem untuk mendapatkan nya thats amazing
    const token = sessionStorage.getItem('token')
    return ( 
        <>
        <h2>Welcome Home {token}</h2>
        </>
     );
}

export default Home