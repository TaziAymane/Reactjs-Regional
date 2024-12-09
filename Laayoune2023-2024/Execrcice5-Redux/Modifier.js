import { useNavigate, useParams } from "react-router-dom";
import { update_Medcine } from "./action";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function Modifier(){
    const {id} = useParams()
    const data = useSelector(data=>data.medecins.find((m)=>{
        return m.id === parseInt(id) ;
    }))
    const lastid = useSelector(data=>data.medecins.length + 1)
    const [nom,setnom] = useState(data.nom);
    const [prenom,setprenom] = useState(data.prenom);
    const [spécialité,setspécialité] = useState(data.spécialité);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    function Mofify(e){
        e.preventDefault()
        const m ={
            nom:nom,
            prenom:prenom,
            spécialité:spécialité
        };
        dispatch(update_Medcine(m));
        navigate('/ListMedcins')
    }
    return (
        <form onSubmit={Mofify} className="container">
            <h1>Ajouter Medecins :</h1>
            <label className="form-label">id</label>
            <input type='text' className="form-control" value={lastid} readOnly />
            <label className="form-label">Nom:</label>
            <input type="text" className="form-control" value={nom} onChange={(e)=>{setnom(e.target.value)}} />
            <label className="form-label">Prenom:</label>
            <input type="text"  className="form-control" value={prenom} onChange={(e)=>{setprenom(e.target.value)}} />
            <label className="form-label">spécialité:</label>
            <input type="text"  className="form-control" value={spécialité} onChange={(e)=>{setspécialité(e.target.value)}} />
            <button className="btn btn-primary">Ajouter</button>
        </form>
    )
}