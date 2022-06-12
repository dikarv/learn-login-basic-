import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import GlobalType from '../Redux/GlobalType';




const MenuList = () => {

    //sesion storeage seperti state dai dapat menyimpan d=toekn dengan cara setItem dan getItem untuk mendapatkan nya thats amazing
    // const token = sessionStorage.getItem('token')
    const name = useSelector((state) => state.name)
    const token = useSelector((state) => state.token)
    const loading = useSelector((state) => state.loading)

    const dispatch = useDispatch();

    const [list, setList] = useState([])

    useEffect(() => {
        getMenu()

    }, [])

    const getMenu = async () => {
        try {
            dispatch({ type: GlobalType.LOADING_TRUE })
            const response = await axios.get('http://localhost:3000/api/menus')
            console.log(response);
            setList(response.data.data)
            dispatch({ type: GlobalType.LOADING_FALSE })

            console.log("INI LIst", list);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
        <div>
            <h2>Welcome Home {token}</h2>
            <h3>Hallo {name}</h3>
            <button>Add Menu</button>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Nama</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {
                    loading ? <tr>
                        <td>Loading...</td>
                    </tr> :
                    
                    
                        list.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <button>Update</button>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    
                
                }
                </tbody>
            </table>
        </div>
        </>
    );
}

export default MenuList