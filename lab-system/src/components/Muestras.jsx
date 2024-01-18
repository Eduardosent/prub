import React,{useEffect, useState} from 'react'
import axios from 'axios'
import '../assets/Muestras.css'

export const Muestras = () => {

    const [samples,setSamples] = useState([]);

    const getSamples = () =>{
        axios.get('http://10.168.241.60:8000/api/v1/tipo-muestra-analisis')
        .then((data)=>{console.log(data.data);
            setSamples(data.data)
        })
        .catch((err)=>{console.log(err)})
    }

    useEffect(()=>{
        getSamples();
    },[])
  return (
    <div className='samples'>
        {
            samples.map((sample,key)=>(
                <div className='sample' key={key}>
                    <h2>{sample.nombre}</h2>
                    <h3>{sample.codigo}</h3>
                </div>
            ))
        }
        <a href="">Crear</a>
    </div>
  )
}
