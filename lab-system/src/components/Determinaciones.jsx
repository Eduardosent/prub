import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../assets/Muestras.css'

export const Determinaciones = () => {

    const [determinaciones,setDeterminaciones] = useState([]);
    const [results,setResults] = useState([])
    const [filter,setFilter] = useState('name');
    const [userLooking,setUserLooking] = useState('');
    const [looking,setLooking] = useState([])

    const getDeterminaciones = () =>{
        axios.get('http://10.168.241.60:8000/api/v1/determinaciones')
        .then((data)=>{console.log(data.data);
            setDeterminaciones(data.data)
            setResults(data.data)
        })
        .catch((err)=>{console.log(err)})
    }

    const hanldeFilter = (e) =>{
        setFilter(e.target.value.toLocaleLowerCase())
    }
    const handleText = (e)=>{
        setUserLooking(e.target.value)
    }
    const handleFind = () =>{
        if(filter==='name'){
            const resultsSearch = determinaciones.filter(d=>d.nombres.toLocaleLowerCase().includes(userLooking))
            console.log(resultsSearch)
            setResults(resultsSearch)
        }
        if(filter==='type'){
            const resultsSearch = determinaciones.filter(d=>d.tipoMuestraAnalisis.nombre.toLocaleLowerCase().includes(userLooking))
            console.log(resultsSearch)
            setResults(resultsSearch)
        }
    }

    useEffect(()=>{
        getDeterminaciones();
    },[])
    useEffect(()=>{
        handleFind()
    },[userLooking])

  return (
    <div className='samples'>
        <input type="text" onChange={handleText}/>
        <select name="" id="" onChange={hanldeFilter} value={filter}>
            <option value="name">Nombre</option>
            <option value="type">Tipo</option>
        </select>
        {
            results.map((det,key)=>(
                <div key={key}>
                    <h2>{det.nombres}</h2>
                    <h3>activo:{det.activo == true ? "si" : 'no'}</h3>
                    <p>{det.tipoMuestraAnalisis.nombre}</p>
                </div>
            ))
        }
    </div>
  )
}