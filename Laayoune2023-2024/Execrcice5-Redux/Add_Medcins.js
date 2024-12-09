import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_Medcine } from "./action";
import { useNavigate } from "react-router-dom";
export default function Add_Medcins(){
   
    const dispatch = useDispatch();
    const navigate = useNavigate('')
    const lastid = useSelector(data=>data.medecins.length + 1)
    const [nom,setnom] = useState('');
    const [prenom,setprenom] = useState('');
    const [spécialité,setspécialité] = useState('');
    function Add(e){
        e.preventDefault()
        const m = {
            id:parseInt(lastid),
            nom:nom,
            prenom:prenom,
            spécialité:spécialité
        };
        dispatch(add_Medcine(m));
        navigate('/ListMedcins')
    }
    return (
        <form onSubmit={Add} className="container">
            <h1>Ajouter Medecins :</h1>
            <label className="form-label">id</label>
            <input type='text' className="form-control" value={lastid} />
            <label className="form-label">Nom:</label>
            <input type="text" className="form-control" onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Prenom:</label>
            <input type="text"  className="form-control" onChange={(e)=>{setprenom(e.target.value)}} />
            <label className="form-label">spécialité:</label>
            <input type="text"  className="form-control" onChange={(e)=>{setspécialité(e.target.value)}} />
            <button className="btn btn-primary">Ajouter</button>
        </form>
    )
}