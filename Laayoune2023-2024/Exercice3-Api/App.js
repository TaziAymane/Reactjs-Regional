import {BrowserRouter , Routes , Route} from 'react-router-dom';
import axios from 'axios';
import { useState , useEffect } from 'react';
import Afficher from './Afficher'

export default function App(){
    const [medecins,setMedecins] = useState([]);

    useEffect(()=>{
        axios.get('https://localhost:3500/medcicns')
        .then(respons=>setMedecins(respons.data))
    })

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Afficher medecins={medecins} />}/>
        </Routes>
        </BrowserRouter>
    )
}